import { readFileSync, writeFileSync } from "fs";
import { argv0 } from "process";

let datanya = readFileSync("./data.json").toString();
datanya = JSON.parse(datanya);

Object.prototype.kasih_nol = function () {
  if (this.toString().length == 1) {
    return "0" + this.toString();
  } else {
    return this;
  }
};

let tanggalan = new Date();
let string_tanggal = `${tanggalan.getFullYear()}-${(
  +tanggalan.getMonth() + 1
).kasih_nol()}-${tanggalan.getDate().kasih_nol()} ${tanggalan
  .getHours()
  .kasih_nol()}:${tanggalan.getMinutes().kasih_nol()}:${tanggalan
  .getSeconds()
  .kasih_nol()}`;
// console.log(string_tanggal);

// console.log(process.argv[2]);
let data_baru = {
  tanggal: string_tanggal,
  coin: process.argv[2].toUpperCase(),
  stop_loss: `${process.argv[3]}%`,
  take_profit: `${process.argv[4]}%`,
};
let setelah_ditambahkan = datanya.push(data_baru);
// console.log(datanya);

writeFileSync("./data.json", JSON.stringify(datanya, null, 2));
