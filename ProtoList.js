function ProtoList() {
}

ProtoList.prototype.init = function () {
};
ProtoList.prototype.getSize = function () {
};
ProtoList.prototype.toString = function () {
};
ProtoList.prototype.push = function () {
};
ProtoList.prototype.pop = function () {
};
ProtoList.prototype.shift = function () {
};
ProtoList.prototype.unshift = function () {
};
ProtoList.prototype.slice = function () {
};
ProtoList.prototype.splice = function () {
};
ProtoList.prototype.sort = function () {
};
ProtoList.prototype.set = function () {
};
ProtoList.prototype.get = function () {
};
ProtoList.prototype.toArray = function () {
};

function AList() {
    this.array = [];
    this.length = 0;
}

AList.prototype = Object.create(ProtoList.prototype);
AList.prototype.constructor = AList;

AList.prototype.init = function (numbers) {
    if (!numbers || numbers.length < 1) {
        return 0;
    }

    for (let i = 0; i < numbers.length; i++) {
        this.push(numbers[i]);
    }

    return this.array;
};

AList.prototype.getSize = function () {

    return this.array.length;
};

AList.prototype.toString = function () {
    let result = '[';

    for (let i = 0; i < this.array.length; i++) {
        result += `${this.array[i]}`;

        if (i < this.array.length - 1) {
            result += ', ';
        }
    }

    return result += ']';
};

AList.prototype.push = function (value) {
    if (value === undefined || value === null) {
        return 0;
    }

    this.array[this.array.length] = value;

    return this.array.length;
};

AList.prototype.pop = function () {
    if (!this.array.length) {
        return;
    }

    let popElement = this.array[this.array.length - 1];
    this.array.length = this.array.length - 1;

    return popElement;
};

AList.prototype.shift = function () {
    let shiftElement = this.array[0];

    console.log('shiftElement', shiftElement);

    if (!this.array.length) {
        return;
    }

    for (let i = 0; i < this.array.length; i++) {
        this.array[i] = this.array[i + 1];
    }

    this.array.length = this.array.length - 1;

    return shiftElement;
};

AList.prototype.unshift = function (value) {
    if (value === undefined || value === null) {
        return 0;
    }

    for (let i = this.array.length - 1; i >= 0; i--) {
        this.array[i + 1] = this.array[i];
    }

    this.array[0] = value;

    return this.array.length;
};

AList.prototype.slice = function (start, end) {
    if (start === undefined) {
        return this.array;
    }

    let resultArray = [];

    if (!this.array.length) {
        return [];
    }

    if (start > this.array.length) {
        return [];
    }

    if (!end || end > this.array.length) {
        end = this.array.length;
    }

    for (let i = start; i < end; i++) {
        resultArray[resultArray.length] = this.array[i];
    }

    return resultArray;
};

AList.prototype.splice = function (start, count, element) {
    if (!this.array.length) {
        return [];
    }

    let resultArray = [];

    let length = start + count;
    if (length > this.array.length) {
        length = this.array.length;
    }

    for (let i = start; i < length; i++) {
        resultArray[resultArray.length] = this.array[i];
        this.array[i] = this.array[i + count];
    }

    this.array.length = this.array.length > count ? this.array.length - count : 0;

    if (element) {
        for (let i = this.array.length; i > start; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[start] = element;
    }

    return resultArray;
};

AList.prototype.sort = function (callback) {
    for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array.length - 1; j++) {
            let result = callback(this.array[j], this.array[j + 1]);
            let temp = 0;

            if (result > 0) {
                temp = this.array[j + 1];
                this.array[j + 1] = this.array[j];
                this.array[j] = temp;
            }
        }
    }
};

AList.prototype.set = function (index, element) {
    if (this.array === undefined) {
        return;
    }

    for (let i = 0; i < this.array.length; i++) {
        if (i === index) {
            this.array[i] = element;
        }
    }

    return this.array;
};

AList.prototype.get = function (index) {
    if (!this.array) {
        return;
    }

    if (index >= this.array.length) {
        return;
    }

    let findElement;

    for (let i = 0; i < this.array.length; i++) {
        if (i === index) {
            findElement = this.array[i];
        }
    }

    return findElement;
};

AList.prototype.sort = function (callback) {
    for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array.length - 1; j++) {
            let result = callback(this.array[j], this.array[j + 1]);
            let temp = 0;

            if (result > 0) {
                temp = this.array[j + 1];
                this.array[j + 1] = this.array[j];
                this.array[j] = temp;
            }
        }
    }

    return this.array;
};

AList.prototype.toArray = function (index) {

    return this.array;
};

function comparator(first, second) {
    return second - first;
}

function LList() {
    this.root = null;
    this.length = 0;
}

LList.prototype = Object.create(ProtoList.prototype);
LList.prototype.constructor = LList;

LList.prototype.init = function (numbers) {
    if (!numbers || numbers.length === 0) {
        return this.root;
    }

    if (!this.root) {
        this.root = new Entry(numbers[0], null);
    }

    let current = this.root;
    let entry = 0;

    for (let i = 1; i < numbers.length; i++) {
        entry = new Entry(numbers[i], null);
        current.next = entry;
        current = current.next;
    }

    return this.root;
};

LList.prototype.getSize = function (numbers) {
    let counter = 0;

    if (!this.root) {
        return counter;
    }

    let current = this.root;

    while (current) {
        counter++;
        current = current.next;
    }

    return counter;
};

LList.prototype.toString = function (numbers) {
    if (!this.root) {
        return '';
    }

    let result = '[';
    let current = this.root;
    let i = 0;
    let length = this.getSize();

    while (current) {
        result += `${current.value}`;
        current = current.next;
        i++;

        if (i < length) {
            result += ', ';
        }
    }

    return result += ']';
};

LList.prototype.push = function (value) {
    let entry = new Entry(value);

    if (!this.root) {
        this.root = entry;

    } else {
        let tail = this.root;

        while (tail.next) {
            tail = tail.next;
        }

        tail.next = entry;
    }

    let length = this.getSize();

    return length;
};

LList.prototype.pop = function (value) {
    if (!this.root) {
        return;
    }

    if (!this.root.next) {
        let result = this.root.value;
        this.root = null;

        return result;
    }

    let previous = this.root;
    let tail = this.root.next;

    while (tail.next) {
        previous = tail;
        tail = tail.next;
    }
    previous.next = null;

    return tail.value;
};

LList.prototype.shift = function () {
    let shiftElement = this.root;

    if (!this.root) {
        return;
    }

    this.root = this.root.next;

    return shiftElement.value;
};

LList.prototype.unshift = function (value) {
    let entry = new Entry(value);
    entry.next = this.root;
    this.root = entry;
    let length = this.getSize();

    return length;
};

LList.prototype.slice = function (start, end) {
    let current = this.root;
    let index = 0;
    let result = [];

    if (start > this.getSize()) {
        return [];
    }

    while (current) {
        if (!end || end > this.getSize()) {
            end = this.getSize();
        }

        if (index >= start && index < end) {
            result[result.length] = current.value;
        }
        index++;

        if (index < end) {
            current = current.next;
        } else {
            break;
        }
    }

    return result;
};

LList.prototype.splice = function (index, count, element) {
    let removed = [];
    let current = this.root;
    let previous = null;
    let ind = 0;

    if (index > this.getSize()) {
        return [];
    }

    while (current) {
        if (index <= ind && ind < index + count) {
            removed[removed.length] = current.value;

            if (current == this.root) {
                current = current.next;
                this.root = current;
            } else {
                previous.next = current.next;
                current = current.next;
            }
        } else {
            previous = current;
            current = current.next;
        }
        ind++;
    }

    if (element) {
        let i = 0;
        let current = this.root;
        let previous = null;

        while (i <= index) {
            if (i === index) {
                let entry = new Entry(element, null);
                entry.next = current;

                if (current == this.root) {
                    this.root = entry;
                } else {
                    previous.next = entry;
                }
                break;
            }
            previous = current;
            current = current.next;
            i++;
        }
    }

    return removed;
};

LList.prototype.get = function (index) {
    if (index > this.getSize()) {
        return;
    }

    if (!this.root) {
        return null;
    }

    let counter = 0;
    let current = this.root;

    while (current) {
        if (counter === index) {
            return current.value;
        }
        counter++;
        current = current.next;
    }

};

LList.prototype.set = function (index, element) {
    let entry = new Entry(element, null);

    if (!this.root) {
        this.root = entry;

        return this.root;
    }

    if (index >= this.getSize()) {
        return;
    }

    let counter = 0;
    let current = this.root;

    while (current) {
        if (counter === index) {
            current.value = element;
        }
        counter++;
        current = current.next;
    }

    return this.root;
};

LList.prototype.sort = function (callback) {
    let current = this.root;
    for (let i = 0; i < this.getSize(); i++) {
        for (let j = 0; j < this.getSize() - 1; j++) {
            let result = callback(current.value, current.next.value);
            let temp = 0;

            if (result > 0) {
                temp = current.next.value;
                current.next.value = current.value;
                current.value = temp;
            }

            if (current.next) {
                current = current.next;
            } else {
                break;
            }
        }

        current = this.root;
    }

    return this.root;
};

LList.prototype.toArray = function () {
    let array = [];

    if (!this.root) {
        return [];
    }

    let current = this.root;

    while (current) {
        array[array.length] = current.value;
        current = current.next;
    }

    return array;
};


function Entry(value) {
    this.value = value;
    this.next = null;
}

function comparator(first, second) {
    return second - first;
}


function LList1() {
    this.root = null;
    this.tail = null;
    this.length = null;
};

LList1.prototype = Object.create(ProtoList.prototype);
LList1.prototype.constructor = LList1;

LList1.prototype.init = function (numbers) {
    if (!numbers || numbers.length === 0) {
        return this.root;
    }

    if (!this.root) {
        this.root = new Entry1(numbers[0], null);
    }

    let current = this.root;
    let node = 0;

    for (let i = 1; i < numbers.length; i++) {
        node = new Entry1(numbers[i], null);
        node.previous = current;
        current.next = node;
        current = current.next;
        this.tail = node;
    }

    return this.root;
};

LList1.prototype.getSize = function () {
    let counter = 0;

    if (!this.root) {
        return counter;
    }

    let current = this.root;

    while (current) {
        counter++;
        current = current.next;
    }

    return counter;
};

LList1.prototype.toString = function (numbers) {
    if (!this.root) {
        return '';
    }

    let length = this.getSize();
    let result = '[';
    let current = this.root;
    let i = 0;

    while (current) {
        result += `${current.value}`;
        current = current.next;
        i++;

        if (i < length) {
            result += ', ';
        }
    }

    return result += ']';
};

LList1.prototype.push = function (value) {
    if (value === undefined || value === null) {
        return 0;
    }

    let node = new Entry1(value);

    if (!this.root) {
        this.root = node;
        this.tail = node;
    } else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    let length = this.getSize();

    return length;
};

LList1.prototype.pop = function () {
    if (!this.root) {
        return;
    }

    if (!this.root.next) {
        let result = this.root.value;
        this.root = null;
        this.length--;

        return result;
    }

    let previous = this.root;
    let tail = this.root.next;

    while (tail.next) {
        previous = tail;
        tail = tail.next;
    }
    previous.next = null;
    this.length--;

    return tail.value;
};

LList1.prototype.shift = function () {
    if (!this.root) {
        return;
    }

    if (!this.root.next) {
        let result = this.root.value;
        this.root = null;
        this.length--;

        return result;
    }

    let shiftElement = this.root;
    this.root = this.root.next;
    this.root.previous = null;
    this.length--;

    return shiftElement.value;
};

LList1.prototype.unshift = function (value) {
    if (value === undefined || value === null) {
        return 0;
    }

    let node = new Entry1(value);

    if (!this.root) {
        this.root = node;
        this.tail = node;
    } else {
        this.root.previous = node;
        node.next = this.root;
        this.root = node;
    }
    let length = this.getSize();

    return length;
};

LList1.prototype.get = function (index) {
    if (index > this.getSize()) {
        return;
    }

    let counter = 0;
    let current = this.root;

    while (current) {
        if (counter === index) {
            return current.value;
        }
        counter++;
        current = current.next;
    }
};

LList1.prototype.set = function (index, element) {
    if (!index) {
        return this.root;
    }
    let entry = new Entry(element, null);

    if (!this.root) {
        this.root = entry;

        return this.root;
    }

    if (index > this.length) {
        return;
    }

    let counter = 0;
    let current = this.root;

    while (current) {
        if (counter === index) {
            current.value = element;
        }
        counter++;
        current = current.next;
    }

    return this.root;
};

LList1.prototype.toArray = function () {
    let array = [];

    if (!this.root) {
        return [];
    }

    let current = this.root;

    while (current) {
        array[array.length] = current.value;
        current = current.next;
    }

    return array;
};

LList1.prototype.slice = function (start, end) {
    let current = this.root;
    let index = 0;
    let result = [];

    if (start > this.getSize()) {
        return [];
    }

    while (current) {
        if (!end || end > this.getSize()) {
            end = this.getSize();
        }

        if (index >= start && index < end) {
            result[result.length] = current.value;
        }
        index++;

        if (index < end) {
            current = current.next;
        } else {
            break;
        }
    }

    return result;
};

LList1.prototype.splice = function (index, count, element) {
    let removed = [];
    let current = this.root;
    let previous = null;
    let ind = 0;

    if (index > this.getSize()) {
        return [];
    }

    while (current && current.next) {
        if (index <= ind && ind < index + count) {
            removed[removed.length] = current.value;

            if (current === this.root) {
                current = current.next;
                this.root = current;
            } else {
                previous.next = current.next;
                current.next.previous = previous;
                current = current.next;
            }
        } else {
            previous = current;
            current = current.next;
            current.previous = previous;
        }
        ind++;
    }

    if (element) {
        let i = 0;
        let current = this.root;
        let previous = null;

        while (i <= index) {
            if (i === index) {
                let entry = new Entry(element, null);
                entry.next = current;

                if (current == this.root) {
                    this.root = entry;
                } else {
                    previous.next = entry;
                }
                break;
            }
            previous = current;
            current = current.next;
            i++;
        }
    }

    return removed;
};


function Entry1(value, next, previous) {
    this.value = value;
    this.next = null;
    this.previous = null;
}


const myLList1 = new LList1();
console.log('init', myLList1.init([4, -5, 1, -18, 45, 22]));
console.log('array', myLList1.toArray());
console.log('splice', myLList1.splice(1, 2));
console.log('root', myLList1.root);






