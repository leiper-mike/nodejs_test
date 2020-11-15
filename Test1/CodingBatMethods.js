function loneSum(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    var sum = a + b + c;
    if (a == b)
        if (a == c)
            return 0;
        else
            sum = c;
    if (a == c)
        if (a == b)
            return 0;
        else
            sum = b;
    if (b == c)
        if (b == a)
            return 0;
        else sum = a;
    return sum;
}

function blackJack(a, b) {
    a = Number(a);
    b = Number(b);
    if (a > 21)
        if (b > 21)
            return 0;
        else
            return b;
    if (b > 21)
        return a;
    if (a > b)
        return a;
    return b;
}
function noTeenSum(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    return fixTeen(a) + fixTeen(b) + fixTeen(c); 
}
function fixTeen(n) {
    if (n <= 19 && n >= 13 && n != 15 && n != 16)
        return 0;
    return n;
}
exports.loneSum = loneSum;
exports.blackJack = blackJack;
exports.noTeenSum = noTeenSum;