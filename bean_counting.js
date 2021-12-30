function countBs (string, k) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == k) {
            count +=1; 
        }
    }
    return count;
}
console.log(countBs('bob', 'b'));