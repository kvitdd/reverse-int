module.exports = function reverse(n) {
    if (n > 0) {
        var n = n.toString().split("");
        var reversed = Number(n.reverse().join(""));
    } else if (n < 0) {
        n = Math.abs(n);
        var n = n.toString().split("");
        var reversed = Number(n.reverse().join(""));
    }
    return reversed;
};
