function myEach(collection, callback) {
    let newCollection = Object.values(collection);
    newCollection.forEach(element => {
        callback(element);
    });
    return collection;
}
function myMap(collection, callback) {
    let newCollection = Object.values(collection);
    for (let i=0; i < newCollection.length; i++) {
        newCollection[i] = callback(newCollection[i]);
    }
    return newCollection;
}
function myReduce(collection, callback, acc = 0) {
    let newCollection = Object.values(collection);
    if (acc === 0) {
        acc = newCollection[0];
        for (let i = 1; i < newCollection.length; i++) {
            acc = callback(acc, newCollection[i]);
        }
    } else {
        for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i]);
        }
    }
    return acc;
}
function myFind(collection, predicate) {
    let newCollection = Object.values(collection);
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            return newCollection[i];
        }
    }
}
function myFilter(collection, predicate) {
    let newCollection = Object.values(collection);
    let newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            newArray.push(newCollection[i]);
        }
    }
    return newArray;
}
function mySize(collection) {
    let newCollection = Object.values(collection);
    let count=0;
    for (let i = 0; i < newCollection.length; i++) {
        count ++;
    }
    return count;
}
function myFirst(array, n = 1) {
    let firstValue;
    let firstValues=[];
    if (n === 1) {
        firstValue = array[0];
        return firstValue;
    } else {
        for (let i = 0; i < n; i++) {
            firstValues.push(array[i]);
        }
        return firstValues;
    }
}
function myLast(anArray, n = 0) {
    const theLength = anArray.length;
    let lastValue;
    let lastValues=[];
    if (n === 0) {
        lastValue = anArray[theLength-1];
        return lastValue;
    } else {
        for (let i = theLength - n; i < theLength; i++) {
            lastValues.push(anArray[i]);
        }
        return lastValues;
    }
}