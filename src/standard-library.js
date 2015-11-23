'use strict';

var BasicCollection = function (){
    this.container = [];
    this.length = 0;
};

BasicCollection.prototype.empty = function () {
    this.container = [];
    this.length = 0;
};


var Collection = function () {
    this.first = null;
    this.last = null;
    Collection.prototype.pickFirst = function () {
        this.length--;
        this.first = this.container[1];
        return this.container.splice(0, 1)[0];
    };
    Collection.prototype.pickLast = function () {
        this.length--;
        this.last = this.container[-2];
        return this.container.splice(-1, 1)[0];
    };
    Collection.prototype.insertFirst = function (obj) {
        this.length++;
        this.container.splice(0, 0, obj);
        this.first = this.container[0];
    };
    Collection.prototype.insertLast = function (obj) {
        this.length++;
        this.container.splice(0, 0, obj);
        this.last = this.container[-1];
    }
    Collection.prototype.isEmpty = function () {
        return this.container.length === 0;
    }
};
Collection.prototype = Object.create(BasicCollection);

var Queue = function () {
    Queue.prototype.enqueue = function (item) {
        this.container.push(item);
        this.length++;
    };
    Queue.prototype.dequeue = function () {
        this.length--;
        return this.container.pop();
    };
};
Queue.prototype = Object.create(BasicCollection);

var FixedArray = function (size) {
    this.size = size;
    //FixedArray.prototype.length � ���������� ��������� � �������
    FixedArray.prototype.insertAt = function (index, item) {
        if (index > this.size || index < 0) {
            throw new RangeError('Index ' + index + ' out of range');
        }
        this.container[index] = item;
    };// � ���������� ������� � ������ �� ��������� �������
    FixedArray.prototype.getAt = function (index) {
        if (index > this.size || index < 0) {
            throw new RangeError('Index ' + index + ' out of range');
        }
        return this.container[index]
    };// � ���������� ������� �� ���������� �������.
};

FixedArray.prototype = Object.create(BasicCollection);

var Set = function () {
    Set.prototype.insert = function (item) {
        if (this.container.indexOf(item) === -1) {
            this.container.push(item);
            this.length++;
        }
    }; // - ��������� ������� � ���������
    Set.prototype.remove = function (item) {
        if (this.container.indexOf(item) !== -1) {
            this.container.splice(this.container.indexOf(item), 1);
            this.length--;
        }
    };// - ������� ������� �� ���������
    Set.prototype.has = function (item) {
        return this.container.indexOf(item) !== -1;
    };// - ���������, ������ �� ������� � ���������
    Set.prototype.intersect = function (set) {
        var result = new Set();
        for (var i = 0; i < set.length; i++) {
            if (!this.has(set.container[i])) {
                result.insert(set.container[i]);
            }
        }
        return result;
    };//� ���������� ��������� ��������� �������� � �������� ��������� � � ���������� ��������� (� ��� �����)
    Set.prototype.union = function (set) {
        var result = new Set();
        for (var i = 0; i < set.length; i++) {
            result.insert(set.container[i]);
        }
        for (i = 0; i < this.length; i++) {
            if (!result.has(this.container[i])) {
                result.insert(this.container[i]);
            }
        }
        return result;
    };// � ���������� ��������� ��������� �������� � �������� ��������� ��� � ���������� ��������� (� ����� �� ����)
};

Set.prototype = Object.create(BasicCollection);

var PriorityQueue = function () {

};

var Map = function () {

};

exports.Collection = Collection;
exports.Queue = Queue;
exports.FixedArray = FixedArray;
exports.Set = Set;
exports.PriorityQueue = PriorityQueue;
exports.Map = Map;
