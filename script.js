function threeSum(arr, target) {
    // Sort the input array in ascending order.
    arr.sort((a, b) => a - b);
    
    let closestSum = Infinity; // Initialize the closest sum as positive infinity.

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            // Update the closestSum if the current sum is closer to the target.
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // If we find an exact match, return the target sum.
                return target;
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;