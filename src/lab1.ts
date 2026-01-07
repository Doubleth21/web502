function hinhchunhat(chieudai: number, chieurong: number){
    const chuvi = 2 *(chieudai + chieurong);
    const dientich = chieudai * chieurong;

    return{
        chuvi,
        dientich
    };
}

const ketqua = hinhchunhat(10,5);
console.log("chuvi:",ketqua.chuvi);
console.log("dientich:",ketqua.dientich);

function tinhtong(...numbers: number[]): number{
    let tong = 0;
    for(let n of numbers){
        tong +=n;
    }
    return tong;
}

console.log(tinhtong(1,2,3));
console.log(tinhtong(5,10,15,20));
console.log(tinhtong());

function demkytu(chuoi: string, kytu:string):number{
    let dem = 0;

    for(let c of chuoi){
        if( c === kytu){
            dem++;
        }
    }
    return dem;
}

console.log(demkytu("typescript","t"));

function lasonguyento(n:number): boolean{
    if(n < 2) return false;

    for(let i = 2; i <=Math.sqrt(n); i++){
        if(n % i ===0){
            return false;
        }
    }
    return true;
}

console.log(lasonguyento(2));
console.log(lasonguyento(9));
console.log(lasonguyento(17));

