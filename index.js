var subGejala = [{
    "_id": 1,
    "name": 'buang air besar'
}, {
    "_id": 2,
    name: 'berak encer'
}, {
    "_id": 3,
    name: 'berak berdarah'
}, {
    "_id": 4,
    "name": 'lesu dan tidak bergairah'
}, {
    "_id": 5,
    "name": 'tidak selera makan'
}, {
    "_id": 6,
    "name": 'merasa mual dan sering muntah'
}, {
    "_id": 7,
    "name": 'merasa sakit di bagian perut'
}, {
    "_id": 8,
    "name": 'tekanan darah rendah'
}, {
    "_id": 9,
    "name": 'pusing'
}, {
    "_id": 10,
    "name": 'pingsan'
}, {
    "_id": 11,                                                                                                                                                            
    "name": 'suhu badan tinggi'
}, {
    "_id": 12,
    "name": 'luka di bagian tertentu'
}, {
    "_id": 13,
    "name": 'tidak dapat menggerakkan anggota badan tertentu'
}, {
    "_id": 14,
    "name": 'memakan sesuatu'
}, {
    "_id": 15,
    "name": 'memakan daging'
}, {
    "_id": 16,
    "name": 'memakan jamur'
}, {
    "_id": 17,
    "name": 'memakan makanan kaleng'
}, {
    "_id": 18,
    "name": 'membeli susu'
}, {
    "_id": 19,
    "name": 'meminum susu'
}];

var gejala = [{
    _id: 20,
    name: 'mencret',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 1,
        persentase: 35
    }, {
        idSubGejala: 2,
        persentase: 35
    }, {
        idSubGejala: 4,
        persentase: 20
    }, {
        idSubGejala: 5,
        persentase: 10
    }]
}, {
    _id: 21,
    name: 'muntah',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 4,
        persentase: 25
    }, {
        idSubGejala: 5,
        persentase: 25
    }, {
        idSubGejala: 6,
        persentase: 50
    }]
},{
    _id: 22,
    name: 'sakit perut',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 4,
        persentase: 25
    }, {
        idSubGejala: 7,
        persentase: 75
    }]
},{
    _id: 23,
    name: 'darah rendah',
    //persenGejala: 0,
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 4,
        persentase: 40
    }, {
        idSubGejala: 8,
        persentase: 40
    }, {
        idSubGejala: 9,
        persentase: 20
    }]
},{
    _id: 24,
    name: 'koma',
    //persenGejala: 0,
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 8,
        persentase: 25
    }, {
        idSubGejala: 10,
        persentase: 75
    }]
},{
    _id: 25,
    name: 'demam',
    //persenGejala: 0,
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 4,
        persentase: 25
    }, {
        idSubGejala: 5,
        persentase: 25
    }, {
        idSubGejala: 9,
        persentase: 25
    }, {
        idSubGejala: 11,
        persentase: 25
    }]
},{
    _id: 26,
    name: 'septicaemia',
    //persenGejala: 0,
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 4,
        persentase: 25
    }, {
        idSubGejala: 8,
        persentase: 25
    }, {
        idSubGejala: 11,
        persentase: 20
    }, {
        idSubGejala: 12,
        persentase: 30
    }]
},{
    _id: 27,
    name: 'lumpuh',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 4,
        persentase: 25
    }, {
        idSubGejala: 13,
        persentase: 75
    }]
},{
    _id: 28,
    name: 'mencret berdarah',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 1,
        persentase: 20
    }, {
        idSubGejala: 2,
        persentase: 15
    }, {
        idSubGejala: 3,
        persentase: 40
    }, {
        idSubGejala: 4,
        persentase: 15
    }, {
        idSubGejala: 5,
        persentase: 10
    }]
},{
    _id: 29,
    name: 'makan daging',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 14,
        persentase: 30
    }, {
        idSubGejala: 15,
        persentase: 70
    }]
},{
    _id: 30,
    name: 'makan jamur',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 14,
        persentase: 30
    }, {
        idSubGejala: 15,
        persentase: 70
    }]
},{
    _id: 31,
    name: 'makan makanan kaleng',
    persentaseSubGejala: 0,
    subGejala: [{
        idSubGejala: 14,
        persentase: 50
    }, {
        idSubGejala: 17,
        persentase: 50
    }]
},{
    _id: 32,
    name: 'minum susu',
    persentaseSubGejala: 0, 
    subGejala: [{
        idSubGejala: 18,
        persentase: 50
    }, {
        idSubGejala: 19,
        persentase: 50
    }]
}];


var penyakit = [{
    _id: 33,
    name: 'staphylococcus aureus',
    //gejala: [20, 21, 22, 23, 29]
    treshold: 80,
    gejala: [{
        idPenyakit : 33,
        idGejala: 20,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 33,
        idGejala: 21,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 33,
        idGejala: 22,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 33,
        idGejala: 23,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 33,
        idGejala: 29,
        persenGejala: 20,
        newPersenGejala: 0
    }]
}, {
    _id: 34,
    name: 'jamur beracun',
    treshold: 80,
    //gejala: [20, 21, 22, 24, 30]
    gejala: [{
        idPenyakit : 34,
        idGejala: 20,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 34,
        idGejala: 21,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 34,
        idGejala: 22,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 34,
        idGejala: 24,
        persenGejala: 20,
        newPersenGejala: 0
    }, {
        idPenyakit : 34,
        idGejala: 30,
        persenGejala: 20,
        newPersenGejala: 0
    }]
}, {
    _id: 35,
    name: 'salmonellae',
    treshold: 80,
    //gejala: [20, 21, 22, 23, 25, 26, 29]
    gejala: [{
        idPenyakit : 35,
        idGejala: 20,
        persenGejala: 14.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 35,
        idGejala: 21,
        persenGejala: 14.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 35,
        idGejala: 22,
        persenGejala: 14.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 35,
        idGejala: 23,
        persenGejala: 14.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 35,
        idGejala: 25,
        persenGejala: 14.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 35,
        idGejala: 26,
        persenGejala: 14.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 35,
        idGejala: 29,
        persenGejala: 14.3,
        newPersenGejala: 0
    }]
}, {
    _id: 36,
    name: 'clostridium botulinum',
    treshold: 80,
    //gejala: [21, 27, 31]
    gejala: [{
        idPenyakit : 36,
        idGejala: 21,
        persenGejala: 33.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 36,
        idGejala: 27,
        persenGejala: 33.3,
        newPersenGejala: 0
    }, {
        idPenyakit : 36,
        idGejala: 31,
        persenGejala: 33.3,
        newPersenGejala: 0
    }]
}, {
    _id: 37,
    name: 'campylobacter',
    treshold: 80,
    //gejala: [28, 22, 25, 32]
    gejala: [{
        idPenyakit : 37,
        idGejala: 28,
        persenGejala: 25,
        newPersenGejala: 0
    }, {
        idPenyakit: 37,
        idGejala: 22,
        persenGejala: 25,
        newPersenGejala: 0
    }, {
        idPenyakit: 37,
        idGejala: 25,
        persenGejala: 25,
        newPersenGejala: 0
    }, {
        idPenyakit: 37,
        idGejala: 32,
        persenGejala: 25,
        newPersenGejala: 0
    }]
}];

Array.prototype.remByVal = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

var kemungkinanPenyakit = {
    penyakit: [],
    gejala: [],
    subGejala: []
};

document.getElementById('submitPerhitungan').addEventListener("click", (e) => {
    let opsiSubGejala = [{
        checkBox: document.getElementById('option-1')
    },{
        checkBox: document.getElementById('option-2')
    },{
        checkBox: document.getElementById('option-3')
    },{
        checkBox: document.getElementById('option-4')
    },{
        checkBox: document.getElementById('option-5')
    },{
        checkBox: document.getElementById('option-6')
    },{
        checkBox: document.getElementById('option-7')
    },{
        checkBox: document.getElementById('option-8')
    },{
        checkBox: document.getElementById('option-9')
    },{
        checkBox: document.getElementById('option-10')
    },{
        checkBox: document.getElementById('option-11')
    },{
        checkBox: document.getElementById('option-12')
    },{
        checkBox: document.getElementById('option-13')
    },{
        checkBox: document.getElementById('option-14')
    },{
        checkBox: document.getElementById('option-15')
    },{
        checkBox: document.getElementById('option-16')
    },{
        checkBox: document.getElementById('option-17')
    },{
        checkBox: document.getElementById('option-18')
    },{
        checkBox: document.getElementById('option-19')
    }];
    
    opsiSubGejala.forEach(function(op) {
        if (op.checkBox.checked) {
            gejala.forEach(function(g) {
                g.subGejala.forEach(function(sg) {
                    if (sg.idSubGejala == op.checkBox.value) {
                        if (kemungkinanPenyakit.gejala.indexOf(g) === -1) {
                            kemungkinanPenyakit.gejala.push(g);
                        }
                    }
                });
            });
        }
    });

    opsiSubGejala.forEach(function(op) {
        if (op.checkBox.checked) {
            gejala.forEach(function(g) {
                g.subGejala.forEach(function(sg) {
                    if (sg.idSubGejala == op.checkBox.value) {
                        if (kemungkinanPenyakit.subGejala.indexOf({ idGejala: g._id, idSubGejala: sg.idSubGejala, persentase: sg.persentase }) === -1) {
                            kemungkinanPenyakit.subGejala.push({
                                idGejala: g._id,
                                idSubGejala: sg.idSubGejala,
                                persentase: sg.persentase
                            });
                        }
                    }
                });
            });
        }
    });

    kemungkinanPenyakit.gejala.forEach(function(kg) {
        kg.subGejala = [];
    });

    kemungkinanPenyakit.subGejala.forEach(function(ksg) {
        kemungkinanPenyakit.gejala.forEach(function(kg) {
            if (ksg.idGejala == kg._id) {
                if (kg.subGejala.indexOf(ksg) === -1) {
                    kg.subGejala.push({
                        idSubGejala: ksg.idSubGejala,
                        persentase: ksg.persentase
                    });
                }
            }
        });
    });

    kemungkinanPenyakit.gejala.forEach(function(g) {
        g.subGejala.forEach(function(sg) {
            g.persentaseSubGejala += sg.persentase;
        });
    });

    penyakit.forEach(function(p) {
        p.gejala.forEach(function(g) {
            kemungkinanPenyakit.gejala.forEach(function(kg) {
                if (g.idGejala === kg._id) {
                    if (kemungkinanPenyakit.penyakit.indexOf(p) === -1) {
                        kemungkinanPenyakit.penyakit.push(p);
                    }
                }
            });
        });
    });

    kemungkinanPenyakit.penyakit.forEach(function (kpp) {
        kpp.gejala.forEach(function(kppg) {
            kemungkinanPenyakit.gejala.forEach(function(kpg) {
                if (kppg.idGejala === kpg._id) {
                    kppg.newPersenGejala += kpg.persentaseSubGejala * kppg.persenGejala / 100;
                }         
            });
        });
    });

    kemungkinanPenyakit.penyakit.forEach(function (kpp) {
        let newPersenPenyakit = 0;
        kpp.gejala.forEach(function(kppg){
            newPersenPenyakit += kppg.newPersenGejala;
        });
        if(newPersenPenyakit > kpp.treshold) {
            document.getElementById("penyakit").innerHTML += "Anda terinfeksi penyakit" + " " + kpp.name;
        }
        document.getElementById("persentaseKemungkinanPenyakit").innerHTML += kpp.name + " = "+ newPersenPenyakit + "%"+ "<br>"; 
    });

    console.log(kemungkinanPenyakit.penyakit);
    console.log(kemungkinanPenyakit.gejala);
    console.log(kemungkinanPenyakit.subGejala);
});