var manusia = [
    {
        _id: 1,
        nama: "nuril",
        umur: 10,
        adik: [{
            _idAdik: 1,
            namaAdik: "aura",
            umur: 10
        }, {
            _idAdik: 2,
            namaAdik: "nomsy",
            umur: 20
        }]
    },
    {
        _id: 2,
        nama: "aji",
        umur: 20,
        adik: [{
            _idAdik: 1,
            namaAdik: "mamik",
            umur: 20
        }, {
            _idAdik: 2,
            namaAdik: "jaya",
            umur: 20
        }]
    }
];

var jumlah = 0;
manusia.forEach(function(mn){
    mn.adik.forEach(function(ad){
        if(ad._idAdik == 1){
            jumlah += ad.umur;
        }
    });
});
console.log(jumlah);


