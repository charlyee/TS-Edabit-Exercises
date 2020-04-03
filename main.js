function sumOfCubes() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var returnsum = 0;
    for (var i = 0; i < nums.length; i++) {
        returnsum = Math.pow(nums[i], 2);
    }
    return returnsum;
}
console.log(sumOfCubes(3, 4, 5));
//# sourceMappingURL=main.js.map