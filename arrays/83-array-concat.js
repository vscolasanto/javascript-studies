const nums = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];
const nums3 = nums.concat(nums2, [9, 10, 11]);
const nums4 = [...nums, 'teste', ...nums2, 'bla', 'blabla', ...[9, 10, 11]];

console.log(nums3);
console.log(nums4);
