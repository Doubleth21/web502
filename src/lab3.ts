// //ham tinh diem trung binh 
// const tinhdiemtrungbinh = (toan: number, ly: number, hoa: number): number => {
//     return (toan + ly + hoa) / 3;
// };

// console.log("DIEM TRUNG BINH",tinhdiemtrungbinh(5,6,7));

// //dinh nghia kieu ham kiem tra so chan le
// type KiemTraChanLe = (n: number) => string;
// const lasochan: KiemTraChanLe = (n: number) => {
//     return n % 2 === 0 ? "So chan" : "So le";
// };

// console.log("10 la so chan",lasochan(10));
// console.log("5 la so chan",lasochan(5));

// //ham tao thong tin nguoi dung
// const taonguoidung = (ten: string, tuoi: number, vaitro: string = "user"): string => {
//     return `Ten: ${ten}, Tuoi: ${tuoi}, Vai tro: ${vaitro}`;
// };

// console.log(taonguoidung("khanh toan",20,"admin"));
// console.log(taonguoidung("nguyen van a",22));

// //ham su ly danh sach san pham
// type SanPham = {
//     ten: string;
//     gia: number;
// };

// const sulysanpham = (
//     sanphamgoc: SanPham[],
//     ...sanphammoi: SanPham[]
// ): SanPham[] => {
//     return [...sanphamgoc, ...sanphammoi];
// };
// const danhsachcu: SanPham[] = [
//     { ten: "Iphone", gia: 2000 },
//     { ten: "Samsung", gia: 1500 },
// ];

// const danhsachmoi = sulysanpham(danhsachcu, { ten: "Xiaomi", gia: 800 }, { ten: "Oppo", gia: 700 });
// console.log("DANH SACH SAN PHAM MOI", danhsachmoi);