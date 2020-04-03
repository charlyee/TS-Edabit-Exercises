function sumOfCubes(...nums: number []) {
    var returnsum = 0;
	for (var i = 0; i < nums.length; i++){
		returnsum = Math.pow(nums[i],2);
	}
	return returnsum;
}
console.log ( sumOfCubes (3, 4, 5) ) ;