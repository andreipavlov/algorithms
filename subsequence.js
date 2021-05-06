// Validate subsequence
// Wite a function that determines whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers
// that aren't necessarily adjacent in the array but
// that are in the same order as they appear in the
// array. 
// For instance, the numbers [1, 3, 4]form a subsequence of the array [1, 2, 3, 4] , and so do the numbers [2, 4] 
// Note that a single number in an array and the array itself are both valid subsequences of the array

function isValidSubsequence(array, sequence) {
	let seqIdx =0;
	for (const value of array){
		if (seqIdx === sequence.length) break;
		if (sequence[seqIdx] === value ) seqIdx++;
	}
	return seqIdx === sequence.length
}
console.log( isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],
 [5, 1, 22, 6, -1, 8, 10]))

// should return true or false
