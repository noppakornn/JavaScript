function findAllPeakElements(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if ((i === 0 || nums[i] > nums[i - 1]) && (i === nums.length - 1 || nums[i] > nums[i + 1])) {
            result.push(i);
        }
    }

    return result;
}

// Example usage
const nums1 = [3, 2, 3, 1]; 
const nums2 = [1, 2, 1, 3, 5, 6, 4];
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7];

console.log(findAllPeakElements(nums1)); // Output: [0, 2]
console.log(findAllPeakElements(nums2)); // Output: [1, 5]
console.log(findAllPeakElements(nums3)); // Output: [1, 5, 7]