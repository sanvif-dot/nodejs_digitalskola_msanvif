import { extractDiscount } from './functionDiskon.js';
    let hargaBarang = 150000
    let diskonBaju = "Diskon 70%"
    let diskonSepatu = "Off -25%"
    let diskonCelana = "Hemat 10.000"
    let converttoNumeric = extractDiscount(diskonBaju)
    console.log(converttoNumeric)
    
    console.log(extractDiscount(diskonBaju));
    //console.log(extractDiscount(diskonSepatu));
    //console.log(extractDiscount(diskonCelana));
    // Total harga barang kena diskon
    let totalBelanja = (hargaBarang * (converttoNumeric / 100))
    console.log(totalBelanja);
    let granTotal = totalBelanja + hargaBarang
    console.log("Jadi total belanjaan : Rp." + granTotal)   