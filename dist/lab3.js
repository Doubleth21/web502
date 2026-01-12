var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//ham tinh diem trung binh
var tinhdiemtrungbinh = function (toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
};
console.log("DIEM TRUNG BINH", tinhdiemtrungbinh(5, 6, 7));
var lasochan = function (n) {
    return n % 2 === 0 ? "So chan" : "So le";
};
console.log("10 la ", lasochan(10));
console.log("5 la ", lasochan(5));
//ham tao thong tin nguoi dung
var taonguoidung = function (ten, tuoi, vaitro) {
    if (vaitro === void 0) { vaitro = "user"; }
    return "Ten: ".concat(ten, ", Tuoi: ").concat(tuoi, ", Vai tro: ").concat(vaitro);
};
console.log(taonguoidung("khanh toan", 20, "admin"));
console.log(taonguoidung("nguyen van a", 22));
var sulysanpham = function (sanphamgoc) {
    var sanphammoi = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sanphammoi[_i - 1] = arguments[_i];
    }
    return __spreadArray(__spreadArray([], sanphamgoc, true), sanphammoi, true);
};
var danhsachcu = [
    { ten: "Iphone", gia: 2000 },
    { ten: "Samsung", gia: 1500 },
];
var danhsachmoi = sulysanpham(danhsachcu, { ten: "Xiaomi", gia: 800 }, { ten: "Oppo", gia: 700 });
console.log("DANH SACH SAN PHAM MOI", danhsachmoi);
