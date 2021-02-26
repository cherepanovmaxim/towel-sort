module.exports = function towelSort(array) {
    if (array === undefined) return [];
    let newAr = [];

    for (let i = 0; i < array.length; i++) {
        i % 2 !== 0
            ? newAr.push([].concat(array[i].reverse()))
            : newAr.push([].concat(array[i]));
    }
    return newAr.flat();
};
