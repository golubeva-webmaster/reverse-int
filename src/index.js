module.exports = function reverse (n) {
    let newNumber = String(n).replace('-','').split('').reverse().join('');
    return Number(newNumber);
}
