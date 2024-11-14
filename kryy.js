const nama = [
"Devyn Ramirez",
"Harmony Duncan",
"Clarissa Burgess",
"Reilly Blanchard",
"Zion Brooks",
"Jovanny Mays",
"Cindy Chase",
"Kristin Mcdaniel",
"Macey Sanford",
"Alfredo Faulkner"
]
const noIndukKaryawan = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const masaKerja = [
    10,
5,
8,
7,
4,
10,
9,
8,
7,
10
]
const gajiKaryawan = [
    "7.000.000",
    "4.000.000",
    "7.000.000",
    "7.000.000",
    "4.000.000",
    "7.000.000",
    "7.000.000",
    "7.000.000",
    "7.000.000",
    "7.000.000"
]

const daftarKaryawan = [ 
    {
      nama : "Devyn Ramirez",
      noIndukKaryawan : "1",
      masaKerja : "10",
      gajiKaryawan : " 7.000.000"
},
    
{
  nama : "Devyn Ramirez",
    noIndukKaryawan : "2",
    masaKerja : "5",
    gajiKaryawan : " 4.000.000"
},
{
    nama : "Clarissa Burgess",
    noIndukKaryawan : "3",
    masaKerja : "8",
    gajiKaryawan : " 7.000.000"
},
{
    nama : "Reilly Blanchard",
    noIndukKaryawan : "4",
    masaKerja : "7",
    gajiKaryawan : " 7.000.000"
},
{
    nama : "Zion Brooks",
    noIndukKaryawan : "5",
    masaKerja : "4",
    gajiKaryawan : " 4.000.000"
},
{
    nama : "Jovanny Mays",
    noIndukKaryawan : "6",
    masaKerja : "10",
    gajiKaryawan : " 7.000.000"
},
{
    nama : "Cindy Chase",
    noIndukKaryawan : "7",
    masaKerja : "9",
    gajiKaryawan : " 7.000.000"
},
{
    nama : "Kristin Mcdaniel",
    noIndukKaryawan : "8",
    masaKerja : "8",
    gajiKaryawan : " 7.000.000"
},
{
    nama : "Macey Sanford",
    noIndukKaryawan : "7", 
    masaKerja : "7",
    gajiKaryawan : " 7.000.000"
},
{
    nama : "Alfredo Faulkner",
    noIndukKaryawan : "10",
    masaKerja : "10",
    gajiKaryawan : " 7.000.000"
},
  
]
let mode = 'tambah'
const tampilkanKaryawan = () => {
    // mengakses dow
    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML =' <tr><th >No</th><th >Nama</th><th >No Induk</th><th >Masa Kerja</th><th >Gaji</th><th >Edit</th><th >Hapus</th></tr>'
    for (let idx in daftarKaryawan) {
        console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} no induk ${daftarKaryawan[idx].noIndukKaryawan} 
        masa kerja ${daftarKaryawan[idx].masaKerja} gaji karyawan ${daftarKaryawan[idx].gajiKaryawan}`)
    
        tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].noIndukKaryawan}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].gajiKaryawan}<td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td></td><td><button class= "btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`;
    }
    };

const tambahKaryawan = () => {
    const nama = document.getElementById ('textNama').value;
    const noIndukKaryawan = document.getElementById ('textnoIndukKaryawan').value;
    const masaKerja = document.getElementById ('textmasaKerja').value;
    const gajiKaryawan = document.getElementById('textgajiKaryawan').value;
    
    
    const karyawanBaru ={
             nama: nama,
             noIndukKaryawan: noIndukKaryawan,
             masaKerja : masaKerja,
             gajiKaryawan : gajiKaryawan,
     };

 
    //tambah
    
// jika tambah
if (mode == "tambah") {
    daftarKaryawan.push(karyawanBaru);
  } else {
    // jik edit
    daftarKaryawan[mode] = karyawanBaru;
  }

  document.getElementById("textNama").value = "";
  document.getElementById("textnoIndukKaryawan").value = "";
  document.getElementById("textmasaKerja").value = "";
  document.getElementById("textgajiKaryawan").value = "";
  mode = "tambah";

  tampilkanKaryawan();
};

const cariIndex = (nama) => {
    // tampilkan index jika nama karyawan === nama
    for (let i = 0; i<daftarKaryawan.length; i++) {
        if (daftarKaryawan[i].nama == nama){
        return i
         }
    }
}

const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target);
    if (indexDihapus !== -1) {
        daftarKaryawan.splice(indexDihapus, 1);
        tampilkanKaryawan();
    }
}
    const editKaryawan = (target) => {
     const indexEdit = cariIndex(target)
 
     console.log(target)
     console.log(indexEdit)
     console.log(daftarKaryawan[indexEdit])
 
     const karyawanEdit = daftarKaryawan[indexEdit]
 
     document.getElementById ('textNama').value = karyawanEdit.nama
     document.getElementById ('textnoIndukKaryawan').value = karyawanEdit.noIndukKaryawan
     document.getElementById ('textmasaKerja').value = karyawanEdit.masaKerja
     document.getElementById ('textgajiKaryawan').value = karyawanEdit.gajiKaryawan
             
     mode = indexEdit
 
    }
     const batalEdit = () => {
    
        document.getElementById ('textNama').value = ""
        document.getElementById ('textnoIndukKaryawan').value = ""
        document.getElementById ('textmasaKerja').value = ""
        document.getElementById ('textgaji').value = ""
        
        mode = 'tambah';
}

    
 