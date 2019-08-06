describe('AList tests', () => {
    describe('init, getSize tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it(`should set nothing if undefined is initialized`, () => {
            //Given
            let numbers = undefined;
            const expected = 0;

            //When
            myAList.init(numbers);

            //Then
            assert.deepEqual(myAList.getSize(), expected);
        });

        it(`should set nothing if null is initialized`, () => {
            //Given
            let numbers = null;
            const expected = 0;

            //When
            myAList.init(numbers);

            //Then
            assert.deepEqual(myAList.getSize(), expected);
        });

        it(`should set nothing if [] is initialized`, () => {
            //Given
            let numbers = [];
            const expected = 0;

            //When
            myAList.init(numbers);

            //Then
            assert.deepEqual(myAList.getSize(), expected);
        });

        it(`should set myAList if [2] is initialized`, () => {
            //Given
            let numbers = [2];
            const expected = 1;

            //When
            myAList.init(numbers);

            //Then
            assert.deepEqual(myAList.getSize(), expected);
        });

        it(`should set myAList if [-5, 15] is initialized`, () => {
            //Given
            let numbers = [-5, 15];
            const expected = 2;

            //When
            myAList.init(numbers);

            //Then
            assert.deepEqual(myAList.getSize(), expected);
        });

        it(`should set myAList if [35, 14, 18, 0, 3] is initialized`, () => {
            //Given
            let numbers = [35, 14, 18, 0, 3];
            const expected = 5;

            //When
            myAList.init(numbers);

            //Then
            assert.deepEqual(myAList.getSize(), expected);
        });
    });

    describe('toString should return array list as a string', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('should return "[]" if undefined is set', () => {
            //Given
            myAList.init(undefined);
            const expected = "[]";

            //When
            const actual = myAList.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[]" if null is set', () => {
            //Given
            myAList.init(null);
            const expected = "[]";

            //When
            const actual = myAList.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[]" if [] is set', () => {
            //Given
            myAList.init([]);
            const expected = "[]";

            //When
            const actual = myAList.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[2]" if [2] is set', () => {
            //Given
            myAList.init([2]);
            const expected = "[2]";

            //When
            const actual = myAList.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[5, 8]" if [5, 8] is set', () => {
            //Given
            myAList.init([5, 8]);
            const expected = "[5, 8]";

            //When
            const actual = myAList.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[5, 8, -7, 15, -2]" if [5, 8, -7, 15, -2] is set', () => {
            //Given
            myAList.init([5, 8, -7, 15, -2]);
            const expected = "[5, 8, -7, 15, -2]";

            //When
            const actual = myAList.toString();

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('push tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('should return 0 if undefined is pushed', () => {
            //Given
            const value = undefined;
            const expected = 0;

            //When
            const actual = myAList.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 0 if null is pushed', () => {
            //Given
            const value = null;
            const expected = 0;

            //When
            const actual = myAList.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if one element is pushed (2)', () => {
            //Given
            const value = 2;
            const expected = 1;

            //When
            const actual = myAList.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 2 if one element is pushed (-2) to [5]', () => {
            //Given
            myAList.init([5]);

            const value = -2;
            const expected = 2;

            //When
            const actual = myAList.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 3 if one element is pushed (15) to [5, 12]', () => {
            //Given
            myAList.init([5, 12]);

            const value = 15;
            const expected = 3;

            //When
            const actual = myAList.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 6 if one element is pushed (100) to [5, 12, -34, 45, -7]', () => {
            //Given
            myAList.init([5, 12, -34, 45, -7]);

            const value = 100;
            const expected = 6;

            //When
            const actual = myAList.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('pop tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('should return undefined if undefined is initialized', () => {
            //Given
            myAList.init();
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myAList.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return undefined if null is initialized', () => {
            //Given
            myAList.init(null);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myAList.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return undefined if [] is initialized', () => {
            //Given
            myAList.init([]);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myAList.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 0 if [0] is initialized', () => {
            //Given
            myAList.init([0]);
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = myAList.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 8 if [5, 8] is initialized', () => {
            //Given
            myAList.init([5, 8]);
            const expected = 8;
            const expectedSize = 1;

            //When
            const actual = myAList.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return -2 if [5, 8, -7, 15, -2] is initialized', () => {
            //Given
            myAList.init([5, 8, -7, 15, -2]);
            const expected = -2;
            const expectedSize = 4;

            //When
            const actual = myAList.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });
    });

    describe('shift tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('should return undefined if undefined is initialized', () => {
            //Given
            myAList.init();
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myAList.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return undefined if null is initialized', () => {
            //Given
            myAList.init(null);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myAList.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return undefined if [] is initialized', () => {
            //Given
            myAList.init([]);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myAList.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 4 if [4] is initialized', () => {
            //Given
            myAList.init([4]);
            const expected = 4;
            const expectedSize = 0;

            //When
            const actual = myAList.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 5 if [5, 8] is initialized', () => {
            //Given
            myAList.init([5, 8]);
            const expected = 5;
            const expectedSize = 1;

            //When
            const actual = myAList.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 5 if [5, 8, -7, 15, -2] is initialized', () => {
            //Given
            myAList.init([5, 8, -7, 15, -2]);
            const expected = 5;
            const expectedSize = 4;

            //When
            const actual = myAList.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });
    });

    describe('unshift tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('should return 0 if undefined is unshifted (init - undefined)', () => {
            //Given
            myAList.init();
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = myAList.unshift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 0 if null is unshifted (init - null)', () => {
            //Given
            myAList.init(null);
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = myAList.unshift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 1 if 0 is unshifted ([])', () => {
            //Given
            myAList.init([]);
            const expected = 1;
            const expectedSize = 1;

            //When
            const actual = myAList.unshift(7);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 3 if -10 is unshifted ([4, 3])', () => {
            //Given
            myAList.init([4, 3]);
            const expected = 3;
            const expectedSize = 3;

            //When
            const actual = myAList.unshift(-10);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return 6 if 28 is unshifted ([4, 3, -3, 17, 41])', () => {
            //Given
            myAList.init([4, 3, -3, 17, 41]);
            const expected = 6;
            const expectedSize = 6;

            //When
            const actual = myAList.unshift(28);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });
    });

    describe('slice tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('should return [] if start index is undefined from undefined', () => {
            //Given
            myAList.init();
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is 0 from undefined', () => {
            //Given
            myAList.init();
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is 0, end is 2 from undefined', () => {
            //Given
            myAList.init();
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is undefined from null', () => {
            //Given
            myAList.init(null);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is 0 from null', () => {
            //Given
            myAList.init(null);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is 0, end is 2 from null', () => {
            //Given
            myAList.init(null);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is undefined from []', () => {
            //Given
            myAList.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is 0 from []', () => {
            //Given
            myAList.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [] if start index is 0, end is 2 from []', () => {
            //Given
            myAList.init([]);
            const expected = [];
            const expectedSize = 0;

            //When
            const actual = myAList.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [5] if start index is undefined from [5]', () => {
            //Given
            myAList.init([5]);
            const expected = [5];
            const expectedSize = 1;

            //When
            const actual = myAList.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [5] if start index is undefined from [5]', () => {
            //Given
            myAList.init([5]);
            const expected = [5];
            const expectedSize = 1;

            //When
            const actual = myAList.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [45, -10] if start index is undefined from [45, -10]', () => {
            //Given
            myAList.init([45, -10]);
            const expected = [45, -10];
            const expectedSize = 2;

            //When
            const actual = myAList.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [45, -10] if start index is 0 from [45, -10]', () => {
            //Given
            myAList.init([45, -10]);
            const expected = [45, -10];
            const expectedSize = 2;

            //When
            const actual = myAList.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [45, -10] if start index is 0, end is 2 from [45, -10]', () => {
            //Given
            myAList.init([45, -10]);
            const expected = [45, -10];
            const expectedSize = 2;

            //When
            const actual = myAList.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [45, -10, 15] if start index is undefined from [45, -10, 15]', () => {
            //Given
            myAList.init([45, -10, 15]);
            const expected = [45, -10, 15];
            const expectedSize = 3;

            //When
            const actual = myAList.slice();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [45, -10, 15] if start index is 0 from [45, -10, 15]', () => {
            //Given
            myAList.init([45, -10, 15]);
            const expected = [45, -10, 15];
            const expectedSize = 3;

            //When
            const actual = myAList.slice(0);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [45, -10] if start index is 0, end is 2 from [45, -10, 15]', () => {
            //Given
            myAList.init([45, -10, 15]);
            const expected = [45, -10];
            const expectedSize = 3;

            //When
            const actual = myAList.slice(0, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [-10] if start index is 1, end is 2 from [45, -10, 15]', () => {
            //Given
            myAList.init([45, -10, 15]);
            const expected = [-10];
            const expectedSize = 3;

            //When
            const actual = myAList.slice(1, 2);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });

        it('should return [-10, 15] if start index is 1, end is 18 from [45, -10, 15]', () => {
            //Given
            myAList.init([45, -10, 15]);
            const expected = [-10, 15];
            const expectedSize = 3;

            //When
            const actual = myAList.slice(1, 19);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myAList.getSize(), expectedSize);
        });
    });

    describe('toArray tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('should return null if undefined is set', () => {
            //Given
            myAList.init(undefined);
            const expected = [];

            //When
            const actual = myAList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [] if null is set', () => {
            //Given
            myAList.init(null);
            const expected = [];

            //When
            const actual = myAList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [] if [] is set', () => {
            //Given
            myAList.init([]);
            const expected = [];

            //When
            const actual = myAList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [2] if [2] is set', () => {
            //Given
            myAList.init([2]);
            const expected = [2];

            //When
            const actual = myAList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [5, 8] if [5, 8] is set', () => {
            //Given
            myAList.init([5, 8]);
            const expected = [5, 8];

            //When
            const actual = myAList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [5, 8, -7, 15, -2] if [5, 8, -7, 15, -2] is set', () => {
            //Given
            myAList.init([5, 8, -7, 15, -2]);
            const expected = [5, 8, -7, 15, -2];

            //When
            const actual = myAList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('splice should return array with removed elements', () => {
        const myAList = new AList();
        const myExpectedAList = new AList();

        beforeEach(() => {
            myAList.array = [];
            myExpectedAList.array = [];
        });

        const testData = [
            {array: [], start: 0, count: 2, expected: [], expectedArray: []},
            {array: [2], start: 0, count: 3, expected: [2], expectedArray: []},
            {array: [5, 8], start: 0, count: 1, expected: [5], expectedArray: [8]},
            {array: [5, 8, -7, 15, -2], start: 2, count: 3, expected: [-7, 15, -2], expectedArray: [5, 8]},
            {
                array: [5, 8, -7, 15, undefined],
                start: 3,
                count: 0,
                element: 12,
                expected: [],
                expectedArray: [5, 8, -7, 12, 15, undefined]
            },
            {
                array: [5, 12, -7, 15, -2],
                start: 0,
                count: 3,
                element: -10,
                expected: [5, 12, -7],
                expectedArray: [-10, 15, -2]
            }
        ];

        testData.forEach((data) => {
            const {array, start, count, element, expected, expectedArray} = data;

            it(`should return ${expected} when array = [${array}], start = ${start}, count = ${count}`, () => {
                myAList.init(array);
                myExpectedAList.init(expectedArray);
                const actual = myAList.splice(start, count, element);

                assert.deepEqual(actual, expected);
                assert.deepEqual(myAList.array, myExpectedAList.array);
            });
        });
    });

    describe('set tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        const testData = [
            {array: [], index: 0, element: 5, expected: []},
            {array: [2], index: 0, element: 5, expected: [5]},
            {array: [5, 8], index: 1, element: 1, expected: [5, 1]},
            {array: [5, 8, -7, 15, -2], index: 3, element: 12, expected: [5, 8, -7, 12, -2]},
            {array: [5, 8, -7, 15, -20], index: 4, element: 5, expected: [5, 8, -7, 15, 5]},
            {array: [5, 0, -7, 15, -2], index: 1, element: -9, expected: [5, -9, -7, 15, -2]}
        ];

        testData.forEach((data) => {
            const {array, index, element, expected} = data;

            it(`should return ${expected} when array = [${array}], index = ${index}, element = ${element}`, () => {
                myAList.init(array);
                const actual = myAList.set(index, element);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('get tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        it('get() should return undefined from undefined', () => {
            //Given
            myAList.init();
            const expected = undefined;

            //When
            const actual = myAList.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from null', () => {
            //Given
            myAList.init(null);
            const expected = undefined;

            //When
            const actual = myAList.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from []]', () => {
            //Given
            myAList.init([]);
            const expected = undefined;

            //When
            const actual = myAList.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from []]', () => {
            //Given
            myAList.init([]);
            const expected = undefined;

            //When
            const actual = myAList.get(8);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 12 from [12]]', () => {
            //Given
            myAList.init([12]);
            const expected = 12;

            //When
            const actual = myAList.get(0);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0]]', () => {
            //Given
            myAList.init([12, 0]);
            const expected = 0;

            //When
            const actual = myAList.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0]]', () => {
            //Given
            myAList.init([12, 0]);
            const expected = 0;

            //When
            const actual = myAList.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0, 8]]', () => {
            //Given
            myAList.init([12, 0, 8]);
            const expected = 0;

            //When
            const actual = myAList.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from [12, 0, 8]]', () => {
            //Given
            myAList.init([12, 0, 8]);
            const expected = undefined;

            //When
            const actual = myAList.get(50);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('sort tests', () => {
        let myAList;

        beforeEach(() => {
            myAList = new AList();
        });

        function comparator(first, second) {
            return second - first;
        }

        function comparator1(first, second) {
            return first - second;
        }

        const testData = [
            {array: [], callback: comparator, expected: []},
            {array: [2], callback: comparator, expected: [2]},
            {array: [8, 5], callback: comparator, expected: [8, 5]},
            {array: [8, 5], callback: comparator1, expected: [5, 8]},
            {array: [5, 8, -7, 15, -2], callback: comparator, expected: [15, 8, 5, -2, -7]},
            {array: [5, 8, -7, 15, 25], callback: comparator1, expected: [-7, 5, 8, 15, 25]},
            {array: [5, 0, -7, 15, -2], callback: comparator, expected: [15, 5, 0, -2, -7]}
        ];

        testData.forEach((data) => {
            const {array, callback, expected} = data;

            it(`should return ${expected} when array = [${array}], callback = ${callback}`, () => {
                myAList.init(array);
                const actual = myAList.sort(callback);

                assert.deepEqual(actual, expected);
            });
        });
    });
});

describe('LList tests', () => {
    describe('init should init linked list', () => {
        let myLList = new LList();

        beforeEach(() => {
            myLList = new LList();
        });

        const testData = [
            {numbers: [], expected: null},
            {numbers: [2], expected: {next: null, value: 2}},
            {numbers: [-5, 15], expected: {next: {next: null, value: 15}, value: -5}},
            {
                numbers: [35, 14, 18, 0, 3],
                expected: {
                    next: {next: {next: {next: {next: null, value: 3}, value: 0}, value: 18}, value: 14},
                    value: 35
                }
            },
            {numbers: [null], expected: {next: null, value: null}},
            {numbers: [undefined], expected: {next: null, value: undefined}}
        ];

        testData.forEach(data => {
            const {numbers, expected} = data;

            it(`should return ${expected} when numbers = [${numbers}]`, () => {
                const actual = myLList.init(numbers);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSize should get length of linked list', () => {
        let myLList = new LList();

        beforeEach(() => {
            myLList = new LList();
        });

        const testData = [
            {numbers: [], expected: 0},
            {numbers: [2], expected: 1},
            {numbers: [-5, 15], expected: 2},
            {numbers: [35, 14, 18, 0, 3], expected: 5},
            {numbers: [null], expected: 1},
            {numbers: [undefined], expected: 1}
        ];

        testData.forEach(data => {
            const {numbers, expected} = data;

            it(`should return ${expected} when numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                const actual = myLList.getSize(numbers);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('toString should return linked list as a string', () => {
        let myLList = new LList();

        beforeEach(() => {
            myLList = new LList();
        });

        const testData = [
            {numbers: [], expected: ''},
            {numbers: [2], expected: '[2]'},
            {numbers: [5, 8], expected: '[5, 8]'},
            {numbers: [5, 8, -7, 15, -2], expected: '[5, 8, -7, 15, -2]'},
            {numbers: [3, 15, undefined, -10, 8], expected: '[3, 15, undefined, -10, 8]'},
            {numbers: [null, 0, -8, 6, 24], expected: '[null, 0, -8, 6, 24]'}
        ];

        testData.forEach((data) => {
            const {numbers, expected} = data;

            it(`should return ${expected} when numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                const actual = myLList.toString();

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('push should return length of linked list', () => {
        let myLList;

        beforeEach(() => {
            myLList = new LList();
        });

        const testData = [
            {numbers: [], value: 5, expected: 1},
            {numbers: [2], value: 5, expected: 2},
            {numbers: [5, 8], value: 15, expected: 3},
            {numbers: [5, 8, -7, 15, -2], value: -6, expected: 6},
            {numbers: [undefined], value: 0, expected: 2},
            {numbers: [null], value: undefined, expected: 2}
        ];

        testData.forEach((data) => {
            const {numbers, value, expected} = data;

            it(`should return ${expected} when value = ${value}, numbers = [${numbers}]`, () => {
                myLList.init(numbers);

                const actual = myLList.push(value);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('pop should return value from tail and delete it', () => {
        let myLList = new LList();
        let myExpectedLList = new LList();

        beforeEach(() => {
            myLList = new LList();
            myExpectedLList = new LList();
        });

        const testData = [
            {numbers: [], expected: undefined, expectedArray: null},
            {numbers: [2], expected: 2, expectedArray: null},
            {numbers: [5, 8], expected: 8, expectedArray: [5]},
            {numbers: [5, 8, -7, 15, -2], expected: -2, expectedArray: [5, 8, -7, 15]},
            {numbers: [undefined], expected: undefined, expectedArray: null},
            {numbers: [null], expected: null, expectedArray: null}
        ];

        testData.forEach((data) => {
            const {numbers, expected, expectedArray} = data;

            it(`should return ${expected} when numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                myExpectedLList.init(expectedArray);
                const actual = myLList.pop();

                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList.root, myExpectedLList.root);
            });
        });
    });

    describe('shift should return value from head and delete it', () => {
        let myLList = new LList();
        let myExpectedLList = new LList();

        beforeEach(() => {
            myLList = new LList();
            myExpectedLList = new LList();
        });

        const testData = [
            {numbers: [], expected: undefined, expectedArray: null},
            {numbers: [2], expected: 2, expectedArray: null},
            {numbers: [5, 8], expected: 5, expectedArray: [8]},
            {numbers: [5, 8, -7, 15, -2], expected: 5, expectedArray: [8, -7, 15, -2]},
            {numbers: [undefined], expected: undefined, expectedArray: null},
            {numbers: [null], expected: null, expectedArray: null}
        ];

        testData.forEach((data) => {
            const {numbers, expected, expectedArray} = data;

            it(`should return ${expected} when numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                myExpectedLList.init(expectedArray);
                const actual = myLList.shift();

                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList.root, myExpectedLList.root);
            });
        });
    });

    describe('unshift should return length of linked list', () => {
        let myLList = new LList();

        beforeEach(() => {
            myLList = new LList();
        });

        const testData = [
            {numbers: [], value: 5, expected: 1},
            {numbers: [2], value: 5, expected: 2},
            {numbers: [5, 8], value: 15, expected: 3},
            {numbers: [5, 8, -7, 15, -2], value: -6, expected: 6},
            {numbers: [undefined], value: 0, expected: 2},
            {numbers: [null], value: undefined, expected: 2}
        ];

        testData.forEach((data) => {
            const {numbers, value, expected} = data;

            it(`should return ${expected} when value = ${value}, numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                const actual = myLList.unshift(value);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('slice should return array of removed elements', () => {
        let myLList = new LList();
        let myExpectedLList = new LList();

        beforeEach(() => {
            myLList = new LList();
            myExpectedLList = new LList();
        });

        const testData = [
            {numbers: [], start: 1, expected: [], expectedArray: []},
            {numbers: [2], start: 2, end: 1, expected: [], expectedArray: [2]},
            {numbers: [5, 8], start: 0, end: 1, expected: [5], expectedArray: [5, 8]},
            {numbers: [5, 8], start: 0, end: 3, expected: [5, 8], expectedArray: [5, 8]},
            {numbers: [5, 8, -7, 15, -2], start: 2, end: 4, expected: [-7, 15], expectedArray: [5, 8, -7, 15, -2]},
            {numbers: [undefined], start: 0, end: 1, expected: [undefined], expectedArray: [undefined]},
            {numbers: [null], start: 3, expected: [], expectedArray: [null]}
        ];

        testData.forEach((data) => {
            const {numbers, start, end, expected, expectedArray} = data;

            it(`should return ${expected} when start = ${start}, end = ${end}, numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                myExpectedLList.init(expectedArray);
                const actual = myLList.slice(start, end);

                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList.root, myExpectedLList.root);
            });
        });
    });

    describe('splice should return array with removed elements', () => {
        let myLList = new LList();
        let myExpectedLList = new LList();

        beforeEach(() => {
            myLList = new LList();
            myExpectedLList = new LList();
        });

        const testData = [
            {numbers: [], start: 0, count: 2, expected: [], expectedArray: null},
            {numbers: [2], start: 0, count: 1, expected: [2], expectedArray: null},
            {numbers: [5, 8], start: 1, count: 3, expected: [8], expectedArray: [5]},
            {numbers: [5, 8, -7, 15, -2], start: 2, count: 3, expected: [-7, 15, -2], expectedArray: [5, 8]},
            {
                numbers: [5, 8, -7, 15, undefined],
                start: 3,
                count: 0,
                element: 12,
                expected: [],
                expectedArray: [5, 8, -7, 12, 15, undefined]
            },
            {numbers: [5, null, -7, 15, -2], start: 4, count: 2, expected: [-2], expectedArray: [5, null, -7, 15]}
        ];

        testData.forEach((data) => {
            const {numbers, start, count, element, expected, expectedArray} = data;

            it(`should return ${expected} when start = ${start}, count = ${count}, numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                myExpectedLList.init(expectedArray);
                const actual = myLList.splice(start, count, element);

                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList.root, myExpectedLList.root);
            });
        });
    });

    describe('set should change existing value to new', () => {
        let myLList = new LList();

        beforeEach(() => {
            myLList = new LList();
        });

        const testData = [
            {numbers: [], index: 0, element: 5, expected: {next: null, value: 5}},
            {numbers: [2], index: 1, element: 3, expected: undefined},
            {numbers: [5, 8], index: 1, element: 3, expected: {next: {next: null, value: 3}, value: 5}},
            {
                numbers: [5, 8, -7, 15, -2],
                index: 3,
                element: -8,
                expected: {
                    next: {next: {next: {next: {next: null, value: -2}, value: -8}, value: -7}, value: 8},
                    value: 5
                }
            },
            {
                numbers: [undefined, 2, 15],
                index: 0,
                element: 45,
                expected: {next: {next: {next: null, value: 15}, value: 2}, value: 45}
            }
        ];

        testData.forEach((data) => {
            const {numbers, index, element, expected} = data;

            it(`should return ${expected} when index = ${index}, element = ${element}, numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                const actual = myLList.set(index, element);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('get should get element by index', () => {
        let myLList = new LList();

        beforeEach(() => {
            myLList = new LList();
        });

        const testData = [
            {numbers: [], index: 0, expected: null},
            {numbers: [2], index: 1, expected: undefined},
            {numbers: [5, 8], index: 1, expected: 8},
            {
                numbers: [5, 8, -7, 15, -2],
                index: 3,
                expected: 15
            },
            {
                numbers: [-5, 2, 15],
                index: 0,
                expected: -5
            }
        ];

        testData.forEach((data) => {
            const {numbers, index, expected} = data;

            it(`should return ${expected} when index = ${index}, numbers = [${numbers}]`, () => {
                myLList.init(numbers);
                const actual = myLList.get(index);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('toArray tests', () => {
        let myLList;

        beforeEach(() => {
            myLList = new LList();
        });

        it('should return null if undefined is set', () => {
            //Given
            myLList.init(undefined);
            const expected = [];

            //When
            const actual = myLList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [] if null is set', () => {
            //Given
            myLList.init(null);
            const expected = [];

            //When
            const actual = myLList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [] if [] is set', () => {
            //Given
            myLList.init([]);
            const expected = [];

            //When
            const actual = myLList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [2] if [2] is set', () => {
            //Given
            myLList.init([2]);
            const expected = [2];

            //When
            const actual = myLList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [5, 8] if [5, 8] is set', () => {
            //Given
            myLList.init([5, 8]);
            const expected = [5, 8];

            //When
            const actual = myLList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [5, 8, -7, 15, -2] if [5, 8, -7, 15, -2] is set', () => {
            //Given
            myLList.init([5, 8, -7, 15, -2]);
            const expected = [5, 8, -7, 15, -2];

            //When
            const actual = myLList.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('sort should sort existing linked list', () => {
        let myLList = new LList();

        beforeEach(() => {
            myLList = new LList();
        });

        function comparator(first, second) {
            return second - first;
        }

        const testData = [
            {numbers: [], callback: comparator, expected: null},
            {numbers: [2], callback: comparator, expected: {next: null, value: 2}},
            {numbers: [5, 8], callback: comparator, expected: {next: {next: null, value: 5}, value: 8}},
            {
                numbers: [5, 8, -7, 15, -2],
                callback: comparator,
                expected: {
                    next: {next: {next: {next: {next: null, value: -7}, value: -2}, value: 5}, value: 8},
                    value: 15
                }
            },
            {
                numbers: [undefined, 2, 15],
                callback: comparator,
                expected: {next: {next: {next: null, value: 2}, value: 15}, value: undefined}
            }
        ];

        testData.forEach((data) => {
            const {numbers, callback, expected} = data;

            it(`should return ${expected} when numbers = [${numbers}], callback = [${callback}]`, () => {
                myLList.init(numbers);
                const actual = myLList.sort(callback);
                console.log('actual', actual);
                assert.deepEqual(actual, expected);
            });
        });
    });
});


describe('LList1tests', () => {
    describe('init, getSize tests', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList1();
        });

        it(`should set nothing if undefined is initialized`, () => {
            //Given
            let numbers = undefined;
            const expected = 0;

            //When
            myLList1.init(numbers);

            //Then
            assert.deepEqual(myLList1.getSize(), expected);
        });

        it(`should set nothing if null is initialized`, () => {
            //Given
            let numbers = null;
            const expected = 0;

            //When
            myLList1.init(numbers);

            //Then
            assert.deepEqual(myLList1.getSize(), expected);
        });

        it(`should set nothing if [] is initialized`, () => {
            //Given
            let numbers = [];
            const expected = 0;

            //When
            myLList1.init(numbers);

            //Then
            assert.deepEqual(myLList1.getSize(), expected);
        });

        it(`should set myAList if [2] is initialized`, () => {
            //Given
            let numbers = [2];
            const expected = 1;

            //When
            myLList1.init(numbers);

            //Then
            assert.deepEqual(myLList1.getSize(), expected);
        });

        it(`should set myAList if [-5, 15] is initialized`, () => {
            //Given
            let numbers = [-5, 15];
            const expected = 2;

            //When
            myLList1.init(numbers);

            //Then
            assert.deepEqual(myLList1.getSize(), expected);
        });

        it(`should set myAList if [35, 14, 18, 0, 3] is initialized`, () => {
            //Given
            let numbers = [35, 14, 18, 0, 3];
            const expected = 5;

            //When
            myLList1.init(numbers);

            //Then
            assert.deepEqual(myLList1.getSize(), expected);
        });
    });

    describe('toString tests', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList1();
        });

        it('should return "[]" if undefined is set', () => {
            //Given
            myLList1.init(undefined);
            const expected = '';

            //When
            const actual = myLList1.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[]" if null is set', () => {
            //Given
            myLList1.init(null);
            const expected = "";

            //When
            const actual = myLList1.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[]" if [] is set', () => {
            //Given
            myLList1.init([]);
            const expected = "";

            //When
            const actual = myLList1.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[2]" if [2] is set', () => {
            //Given
            myLList1.init([2]);
            const expected = "[2]";

            //When
            const actual = myLList1.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[5, 8]" if [5, 8] is set', () => {
            //Given
            myLList1.init([5, 8]);
            const expected = "[5, 8]";

            //When
            const actual = myLList1.toString();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return "[5, 8, -7, 15, -2]" if [5, 8, -7, 15, -2] is set', () => {
            //Given
            myLList1.init([5, 8, -7, 15, -2]);
            const expected = "[5, 8, -7, 15, -2]";

            //When
            const actual = myLList1.toString();

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('push tests', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList1();
        });

        it('should return 0 if undefined is pushed', () => {
            //Given
            const value = undefined;
            const expected = 0;

            //When
            const actual = myLList1.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 0 if null is pushed', () => {
            //Given
            const value = null;
            const expected = 0;

            //When
            const actual = myLList1.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if one element is pushed (2)', () => {
            //Given
            const value = 2;
            const expected = 1;

            //When
            const actual = myLList1.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 3 if one element is pushed (15) to [5, 12]', () => {
            //Given
            myLList1.init([5, 12]);

            const value = 15;
            const expected = 3;

            //When
            const actual = myLList1.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 6 if one element is pushed (100) to [5, 12, -34, 45, -7]', () => {
            //Given
            myLList1.init([5, 12, -34, 45, -7]);

            const value = 100;
            const expected = 6;

            //When
            const actual = myLList1.push(value);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('pop tests', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList1();
        });

        it('should return undefined if undefined is initialized', () => {
            //Given
            myLList1.init();
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myLList1.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return undefined if null is initialized', () => {
            //Given
            myLList1.init(null);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myLList1.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return undefined if [] is initialized', () => {
            //Given
            myLList1.init([]);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myLList1.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 0 if [0] is initialized', () => {
            //Given
            myLList1.init([0]);
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = myLList1.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 8 if [5, 8] is initialized', () => {
            //Given
            myLList1.init([5, 8]);
            const expected = 8;
            const expectedSize = 1;

            //When
            const actual = myLList1.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return -2 if [5, 8, -7, 15, -2] is initialized', () => {
            //Given
            myLList1.init([5, 8, -7, 15, -2]);
            const expected = -2;
            const expectedSize = 4;

            //When
            const actual = myLList1.pop();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });
    });

    describe('shift tests', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList1();
        });

        it('should return undefined if undefined is initialized', () => {
            //Given
            myLList1.init();
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myLList1.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return undefined if null is initialized', () => {
            //Given
            myLList1.init(null);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myLList1.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return undefined if [] is initialized', () => {
            //Given
            myLList1.init([]);
            const expected = undefined;
            const expectedSize = 0;

            //When
            const actual = myLList1.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 4 if [4] is initialized', () => {
            //Given
            myLList1.init([4]);
            const expected = 4;
            const expectedSize = 0;

            //When
            const actual = myLList1.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 5 if [5, 8] is initialized', () => {
            //Given
            myLList1.init([5, 8]);
            const expected = 5;
            const expectedSize = 1;

            //When
            const actual = myLList1.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 5 if [5, 8, -7, 15, -2] is initialized', () => {
            //Given
            myLList1.init([5, 8, -7, 15, -2]);
            const expected = 5;
            const expectedSize = 4;

            //When
            const actual = myLList1.shift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });
    });

    describe('unshift tests', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList1();
        });

        it('should return 0 if undefined is unshifted (init - undefined)', () => {
            //Given
            myLList1.init();
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = myLList1.unshift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 0 if null is unshifted (init - null)', () => {
            //Given
            myLList1.init(null);
            const expected = 0;
            const expectedSize = 0;

            //When
            const actual = myLList1.unshift();

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 1 if 0 is unshifted ([])', () => {
            //Given
            myLList1.init([]);
            const expected = 1;
            const expectedSize = 1;

            //When
            const actual = myLList1.unshift(7);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 3 if -10 is unshifted ([4, 3])', () => {
            //Given
            myLList1.init([4, 3]);
            const expected = 3;
            const expectedSize = 3;

            //When
            const actual = myLList1.unshift(-10);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });

        it('should return 6 if 28 is unshifted ([4, 3, -3, 17, 41])', () => {
            //Given
            myLList1.init([4, 3, -3, 17, 41]);
            const expected = 6;
            const expectedSize = 6;

            //When
            const actual = myLList1.unshift(28);

            //Then
            assert.deepEqual(actual, expected);
            assert.deepEqual(myLList1.getSize(), expectedSize);
        });
    });

    describe('set should change existing value to new', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList();
        });

        it('set() should set nothing to undefined', () => {
            //Given
            myLList1.init();
            const expected = '[undefined]';

            //When
            myLList1.set();

            //Then
            assert.deepEqual(myLList1.toString(), expected);
        });

        it('set() should set nothing to []', () => {
            //Given
            myLList1.init([]);
            const expected = '[undefined]';

            //When
            myLList1.set(10);

            //Then
            assert.deepEqual(myLList1.toString(), expected);
        });

        it('set() should set 8 to []', () => {
            //Given
            myLList1.init([]);
            const expected = '[8]';

            //When
            myLList1.set(0, 8);

            //Then
            assert.deepEqual(myLList1.toString(), expected);
        });

        it('set() should set 8 to [1, 27]]', () => {
            //Given
            myLList1.init([1, 27]);
            const expected = '[1, 8]';

            //When
            myLList1.set(1, 8);

            //Then
            assert.deepEqual(myLList1.toString(), expected);
        });

        it('set() should set 8 to [1, 27, 0, -2, 9]]', () => {
            //Given
            myLList1.init([1, 27, 0, -2, 9]);
            const expected = '[1, 8, 0, -2, 9]';

            //When
            myLList1.set(1, 8);

            //Then
            assert.deepEqual(myLList1.toString(), expected);
        });

        it('set() should set 8 to [1, 27, 0, -2, 9]]', () => {
            //Given
            myLList1.init([1, 27, 0, -2, 9]);
            const expected = '[1, 27, 0, -2, 8]';

            //When
            myLList1.set(4, 8);

            //Then
            assert.deepEqual(myLList1.toString(), expected);
        });

        it('set() should set 8 to [1, 27, 0, -2, 9]]', () => {
            //Given
            myLList1.init([1, 27, 0, -2, 9]);
            const expected = '[1, 27, 0, -2, 8]';

            //When
            myLList1.set(4, 8);

            //Then
            assert.deepEqual(myLList1.toString(), expected);
        });
    });

    describe('get tests', () => {
        let myLList1;

        beforeEach(() => {
            myLList1 = new LList1();
        });

        it('get() should return undefined from undefined', () => {
            //Given
            myLList1.init();
            const expected = undefined;

            //When
            const actual = myLList1.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from null', () => {
            //Given
            myLList1.init(null);
            const expected = undefined;

            //When
            const actual = myLList1.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from []]', () => {
            //Given
            myLList1.init([]);
            const expected = undefined;

            //When
            const actual = myLList1.get();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from []]', () => {
            //Given
            myLList1.init([]);
            const expected = undefined;

            //When
            const actual = myLList1.get(8);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 12 from [12]]', () => {
            //Given
            myLList1.init([12]);
            const expected = 12;

            //When
            const actual = myLList1.get(0);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0]', () => {
            //Given
            myLList1.init([12, 0]);
            const expected = 0;

            //When
            const actual = myLList1.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0]]', () => {
            //Given
            myLList1.init([12, 0]);
            const expected = 0;

            //When
            const actual = myLList1.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return 0 from [12, 0, 8]]', () => {
            //Given
            myLList1.init([12, 0, 8]);
            const expected = 0;

            //When
            const actual = myLList1.get(1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('get() should return undefined from [12, 0, 8]]', () => {
            //Given
            myLList1.init([12, 0, 8]);
            const expected = undefined;

            //When
            const actual = myLList1.get(50);

            //Then
            assert.deepEqual(actual, expected);
        });

        describe('toArray tests', () => {
            let myLList1;

            beforeEach(() => {
                myLList1 = new LList1();
            });

            it('should return null if undefined is set', () => {
                //Given
                myLList1.init(undefined);
                const expected = [];

                //When
                const actual = myLList1.toArray();

                //Then
                assert.deepEqual(actual, expected);
            });

            it('should return [] if null is set', () => {
                //Given
                myLList1.init(null);
                const expected = [];

                //When
                const actual = myLList1.toArray();

                //Then
                assert.deepEqual(actual, expected);
            });

            it('should return [] if [] is set', () => {
                //Given
                myLList1.init([]);
                const expected = [];

                //When
                const actual = myLList1.toArray();

                //Then
                assert.deepEqual(actual, expected);
            });

            it('should return [2] if [2] is set', () => {
                //Given
                myLList1.init([2]);
                const expected = [2];

                //When
                const actual = myLList1.toArray();

                //Then
                assert.deepEqual(actual, expected);
            });

            it('should return [5, 8] if [5, 8] is set', () => {
                //Given
                myLList1.init([5, 8]);
                const expected = [5, 8];

                //When
                const actual = myLList1.toArray();

                //Then
                assert.deepEqual(actual, expected);
            });

            it('should return [5, 8, -7, 15, -2] if [5, 8, -7, 15, -2] is set', () => {
                //Given
                myLList1.init([5, 8, -7, 15, -2]);
                const expected = [5, 8, -7, 15, -2];

                //When
                const actual = myLList1.toArray();

                //Then
                assert.deepEqual(actual, expected);
            });
        });

        describe('slice tests', () => {
            let myLList1;

            beforeEach(() => {
                myLList1 = new LList1();
            });

            it('should return [] if start index is undefined from undefined', () => {
                //Given
                myLList1.init();
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice();

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is 0 from undefined', () => {
                //Given
                myLList1.init();
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice(0);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is 0, end is 2 from undefined', () => {
                //Given
                myLList1.init();
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice(0, 2);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is undefined from null', () => {
                //Given
                myLList1.init(null);
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice();

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is 0 from null', () => {
                //Given
                myLList1.init(null);
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice(0);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is 0, end is 2 from null', () => {
                //Given
                myLList1.init(null);
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice(0, 2);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is undefined from []', () => {
                //Given
                myLList1.init([]);
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice();

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is 0 from []', () => {
                //Given
                myLList1.init([]);
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice(0);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [] if start index is 0, end is 2 from []', () => {
                //Given
                myLList1.init([]);
                const expected = [];
                const expectedSize = 0;

                //When
                const actual = myLList1.slice(0, 2);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [5] if start index is undefined from [5]', () => {
                //Given
                myLList1.init([5]);
                const expected = [5];
                const expectedSize = 1;

                //When
                const actual = myLList1.slice(0);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [45, -10] if start index is 0 from [45, -10]', () => {
                //Given
                myLList1.init([45, -10]);
                const expected = [45, -10];
                const expectedSize = 2;

                //When
                const actual = myLList1.slice(0);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [45, -10] if start index is 0, end is 2 from [45, -10]', () => {
                //Given
                myLList1.init([45, -10]);
                const expected = [45, -10];
                const expectedSize = 2;

                //When
                const actual = myLList1.slice(0, 2);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [45, -10, 15] if start index is 0 from [45, -10, 15]', () => {
                //Given
                myLList1.init([45, -10, 15]);
                const expected = [45, -10, 15];
                const expectedSize = 3;

                //When
                const actual = myLList1.slice(0);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [45, -10] if start index is 0, end is 2 from [45, -10, 15]', () => {
                //Given
                myLList1.init([45, -10, 15]);
                const expected = [45, -10];
                const expectedSize = 3;

                //When
                const actual = myLList1.slice(0, 2);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [-10] if start index is 1, end is 2 from [45, -10, 15]', () => {
                //Given
                myLList1.init([45, -10, 15]);
                const expected = [-10];
                const expectedSize = 3;

                //When
                const actual = myLList1.slice(1, 2);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });

            it('should return [-10, 15] if start index is 1, end is 18 from [45, -10, 15]', () => {
                //Given
                myLList1.init([45, -10, 15]);
                const expected = [-10, 15];
                const expectedSize = 3;

                //When
                const actual = myLList1.slice(1, 19);

                //Then
                assert.deepEqual(actual, expected);
                assert.deepEqual(myLList1.getSize(), expectedSize);
            });
        });
    });
});

