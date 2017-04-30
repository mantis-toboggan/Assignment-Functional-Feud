// Test file for Functional Feud assignment

let fn = require('./fn');
import test from 'ava';

function timesTwo(nmbr) {
    return nmbr * 2;
}

function FiveOrLarger(nmbr) {
    if (nmbr >= 5) {
        return true;
    } else {
        return false;
    }
}

test('range', function (t) {
    t.deepEqual(fn.range(4, 8), [4, 5, 6, 7, 8]);
    t.deepEqual(fn.range('r', 8), null);
    t.deepEqual(fn.range(4, 'g'), null);
    t.deepEqual(fn.range(8, 4), null);
    t.deepEqual(fn.range(4, 4), [4]); // Not sure about this one, would rather it return null
});

test('_map', function (t) {
    t.deepEqual(fn._map([1, 2, 3], timesTwo), [2, 4, 6]);
    t.deepEqual(fn._map([1, 2, 3], function (nmbr) {
        return nmbr * 2;
    }), [2, 4, 6]);
    // COME BACK AND WRITE SOME MORE TEST CASES.
});

test('_filter', function (t) {
    t.deepEqual(fn._filter([5, 4, 7, 8, 2, 1], FiveOrLarger), [5, 7, 8]);
    t.deepEqual(fn._filter([1, 2, 3, 4, 5, 6, 7, 8], function even(x) {
        return x % 2 === 0;
    }), [2, 4, 6, 8]);
    // COME BACK AND WRITE SOME TEST CASES 
});

