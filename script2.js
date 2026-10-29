// 1. Ambil elemen dari HTML 

const form = document.querySelector('#formDaftar'); 

const nama = document.querySelector('#nama'); 

const email = document.querySelector('#email'); 

const daftar = document.querySelector('#daftar'); 

 

// 2. Menampilkan dan menghapus pesan error (pola Sesi 10) 

function tampilkanError(input, teks) { 

  input.classList.add('is-invalid'); 

  document.getElementById(input.id + '-error').textContent = teks; 

} 

 

function hapusError(input) { 

  input.classList.remove('is-invalid'); 

  document.getElementById(input.id + '-error').textContent = ''; 

} 

 

// 3. Aturan validasi 

function cekNama() { 

  const isi = nama.value.trim(); 

  if (isi === '') { 

    tampilkanError(nama, 'Nama wajib diisi.'); 

    return false; 

  } 

  if (isi.length < 3) { 

    tampilkanError(nama, 'Nama minimal 3 huruf.'); 

    return false; 

  } 

  hapusError(nama); 

  return true; 

} 

 

function cekEmail() { 

  const isi = email.value.trim(); 

  if (isi === '') { 

    tampilkanError(email, 'Email wajib diisi.'); 

    return false; 

  } 

  if (!isi.includes('@') || !isi.includes('.')) { 

    tampilkanError(email, 'Format email belum benar. Contoh: nama@domain.com'); 

    return false; 

  } 

  hapusError(email); 

  return true; 

} 

 

// 4. Cek saat field ditinggalkan (blur) 

nama.addEventListener('blur', cekNama); 

email.addEventListener('blur', cekEmail); 

 

// 5. Jalankan saat form dikirim 

form.addEventListener('submit', function (e) { 

  e.preventDefault();             // halaman tidak reload 

 

  // cek dulu, berhenti jika ada yang salah 

  const namaBenar = cekNama(); 

  const emailBenar = cekEmail(); 

  if (!namaBenar || !emailBenar) { 

    form.querySelector('.is-invalid').focus(); 

    return; 

  } 

 

  const isiNama = nama.value.trim();     // ambil isian nama 

  const isiEmail = email.value.trim();   // ambil isian email 

 

  // 6. Buat satu baris daftar baru 

  const item = document.createElement('li'); 

  item.className = 'list-group-item'; 

  item.textContent = isiNama + ' (' + isiEmail + ')'; 

 

  // 7. Masukkan ke dalam <ul id="daftar"> 

  daftar.append(item); 

 

  // 8. Kosongkan form untuk isian berikutnya 

  form.reset(); 

});