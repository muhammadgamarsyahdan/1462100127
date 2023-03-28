// Mengambil elemen HTML yang diperlukan
const namaMakanan = document.getElementById('namaMakanan');
const hargaMakanan = document.getElementById('hargaMakanan');
const namaMinuman = document.getElementById('namaMinuman');
const hargaMinuman = document.getElementById('hargaMinuman');
const jumlahMakanan = document.getElementById('jumlahMakanan');
const jumlahMinuman = document.getElementById('jumlahMinuman');
const totalHarga = document.getElementById('totalHarga');
const bayar = document.getElementById('bayar');
const kembalian = document.getElementById('kembalian');

// Harga makanan dan minuman
const hargaMakananList = {
  'lontongKikil': 12000,
  'lontongMie': 12000,
  'lontongLodeh': 12000,
  'lontongBalap': 14000,
  'rujakCingur': 16000
};

const hargaMinumanList = {
  'teh': 3000,
  'kopi': 2500,
  'nutrisari': 3000,
  'esCampur': 5000,
  'airMineral': 2000
};

// Menampilkan harga makanan saat dipilih
namaMakanan.addEventListener('change', function() {
  const harga = hargaMakananList[this.value];
  if (harga) {
    hargaMakanan.innerHTML = '<h5>Rp. ' + harga + '</h5>';
  } else {
    hargaMakanan.innerHTML = '<h5>Rp. 0</h5>';
  }
  hitungTotalHarga();
});

// Menampilkan harga minuman saat dipilih
namaMinuman.addEventListener('change', function() {
  const harga = hargaMinumanList[this.value];
  if (harga) {
    hargaMinuman.innerHTML = '<h5>Rp. ' + harga + '</h5>';
  } else {
    hargaMinuman.innerHTML = '<h5>Rp. 0</h5>';
  }
  hitungTotalHarga();
});

// Menghitung total harga
function hitungTotalHarga() {
  const hargaMakananValue = hargaMakanan.innerText.replace('Rp. ', '');
  const hargaMinumanValue = hargaMinuman.innerText.replace('Rp. ', '');
  const jumlahMakananValue = parseInt(jumlahMakanan.value);
  const jumlahMinumanValue = parseInt(jumlahMinuman.value);
  const total = (hargaMakananValue * jumlahMakananValue) + (hargaMinumanValue * jumlahMinumanValue);
  const ppn = (hargaMakananValue * jumlahMakananValue * 0.1) + (hargaMinumanValue * jumlahMinumanValue * 0.1 );
  totalHarga.innerHTML = '<span class="text-center" id="totalHarga">Total Harga : Rp. ' + total + '</span>';
  

  if(bayar.value != 0) {
    hitungKembalian(total);
  }
}



// Menghitung kembalian
function hitungKembalian(total) {
  const bayarValue = parseInt(bayar.value);
  const kembalianValue = bayarValue - total;
  kembalian.innerHTML = '<h5> Rp. ' + kembalianValue + '</h5>';
}

// Ketika tombol submit ditekan
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  hitungTotalHarga();
});