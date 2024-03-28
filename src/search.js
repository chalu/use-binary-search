function binarySearch(arr, target) {
    let [low, high] = [0, arr.length - 1];
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

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

// Example usage:
// const [target, arr] = [9, [1, 3, 5, 7, 9, 11, 13, 15]];
// console.log(`${target} at ${binarySearch(arr, target)}`); // 9 at [4]

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