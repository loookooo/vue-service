function add(a, b) {
    let f = true;
    a = a.split('').map(i => {
        if (isNaN(Number(i))) {
            f = false;
            return 0;
        } else { return Number(i); }
    }).reverse();
    b = b.split('').map(i => {
        if (isNaN(Number(i))) {
            f = false;
            return 0;
        } else { return Number(i); }
    }).reverse();
    if (!f) { return NaN };
    let long = a.length > b.length ? a : b;
    let short = a.length > b.length ? b : a;
    let res = [];
    for (let i = 0; i < long.length; i++) {
        let s = short[i] != undefined ? long[i] + short[i] : long[i];
        let n = s < 10 ? 0 : Math.floor(s / 10);
        let m = s % 10;
        res[i] = m + (res[i] != undefined ? res[i] : 0);
        res[i + 1] = n + (res[i + 1] != undefined ? res[i + 1] : 0);
    }
    res.pop();
    return res.reverse().join('');
}
let res = add('1111', '111ajdakl1111');
console.log(res);