//hinh chu nhat
function hinhchunhat(chieudai, chieurong) {
    var chuvi = 2 * (chieudai + chieurong);
    var dientich = chieudai * chieurong;
    return {
        chuvi: chuvi,
        dientich: dientich
    };
}
var ketqua = hinhchunhat(10, 5);
console.log("chuvi:", ketqua.chuvi);
console.log("dientich:", ketqua.dientich);

//tinhtong
function tinhtong() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var tong = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var n = numbers_1[_a];
        tong += n;
    }
    return tong;
}
console.log("tong",tinhtong(1, 2, 3));
console.log("tong",tinhtong(5, 10, 15, 20));
console.log("tong",tinhtong());

//demkytu
function demkytu(chuoi, kytu) {
    var dem = 0;
    for (var _i = 0, chuoi_1 = chuoi; _i < chuoi_1.length; _i++) {
        var c = chuoi_1[_i];
        if (c === kytu) {
            dem++;
        }
    }
    return dem;
}
console.log("ky tu",demkytu("typescript", "t"));

//songuyento
function lasonguyento(n) {
    if (n < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("so nguyen to",lasonguyento(2));
console.log("so nguyen to",lasonguyento(9));
console.log("so nguyen to",lasonguyento(17));
