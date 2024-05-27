function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        // let mid = Math.floor((low + high) / 2);
        // Using bitwise shift for efficiency and to avoid overflow
        let mid = low + ((high - low) >> 1); 

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // Return -1 if target not found
}

// A nice fluent-like API to use the binary search function above
// Also serves as a nice encapsulation and abstraction that allows
// you to switch in a totally different Algo or a better binary
// search implemenmtation
// Example searchFor(9).within(arrayOfInts)
export const searchFor = (needle) => {
    return {
        within: (haystack) => binarySearch(haystack, needle)
    }
};