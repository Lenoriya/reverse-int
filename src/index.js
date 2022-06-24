module.exports = function reverse (n) {
    let rev, s = '';
    rev = n.toString();

    for (let i = rev.length-1; i >= 0; i--) {
        s += rev[i];
    }
    return parseInt(s);
}
