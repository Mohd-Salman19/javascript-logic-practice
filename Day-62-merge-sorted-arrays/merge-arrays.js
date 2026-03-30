// Day 62: Merge Sorted Arrays

function merge(nums1, m, nums2, n) {

    let i = m - 1; // last element of nums1
    let j = n - 1; // last element of nums2
    let k = m + n - 1; // last position

    while (i >= 0 && j >= 0) {

        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // remaining elements of nums2
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];

console.log("Merged array:", merge(nums1, 3, nums2, 3));
