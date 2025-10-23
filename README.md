# Shoe Cleaning API

API sederhana untuk layanan **cuci sepatu**, dibangun menggunakan **Node.js**, **Express.js**, dan **Supabase** sebagai backend database.  
API ini menyediakan endpoint CRUD (Create, Read, Update, Delete) untuk mengelola daftar sepatu yang sedang dicuci.

---

## Deskripsi Umum

Sistem ini dibuat untuk membantu pengelolaan data sepatu di layanan cuci sepatu.  
Admin dapat menambah, memperbarui, menghapus, dan melihat status cuci sepatu pelanggan dengan mudah melalui endpoint API.

---

## Tujuan dan Fitur Utama

### Tujuan
Proyek ini dibuat untuk memenuhi tugas pembuatan REST API sederhana menggunakan Node.js dan Express.js dengan Supabase, dan deployment ke Vercel.
- Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.
- Menyediakan API untuk operasional cuci sepatu.
- Mempermudah integrasi dengan dashboard admin.
- Mengelola data sepatu pada database

### Fitur Utama
- **Menambah data sepatu** (`POST /api/shoes`)
- **Melihat daftar sepatu** (`GET /api/shoes`)
- **Memperbarui/mengubah status cuci sepatu** (`PUT /api/shoes/:id`)
- **Menghapus data sepatu** (`DELETE /api/shoes/:id`)
- **Filter berdasarkan status** (`GET /api/shoes?status=Selesai`)

---

## Struktur Data

Contoh struktur data sepatu yang disimpan:

```json
{
  "id": "1",
  "customerName": "Fufufafa",
  "shoeType": "Nike Air Force 1",
  "serviceType": "Cuci",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}

Keterangan:

id → Nomor unik sepatu
customerName → Nama pemilik sepatu
shoeType → Merek sepatu
serviceType → Pilihan service sepatu
status → Status proses
tanggalMasuk → Tanggal sepatu diterima untuk dicuci
tanggalSelesai → Tanggal sepatu selesai dicuci

---


## Contoh Request & Response Deskripsi Umum
1. GET Semua Data Sepatu (api/shoe-cleaning)

Request:

[
  {
    "customerName": "Fufufafa",
    "shoeType": "Nike Air Jordan",
    "serviceType": "Cuci",
    "status": "In Progress",
    "notes": "-"
  }
]

GET /api/shoes


Response:

[
  {
    "id": 1,
    "customer_name": "Budi Santoso",
    "shoe_type": "Sneakers",
    "status": "Proses",
    "created_at": "2025-10-21T10:00:00Z"
  }
]

2. POST Tambah Data Sepatu

Request:

POST /api/shoes
Content-Type: application/json

{
  "customer_name": "Andi Wijaya",
  "shoe_type": "Vans Old Skool",
  "status": "Proses"
}


Response:

{
  "message": "Data sepatu berhasil ditambahkan",
  "data": {
    "id": 2,
    "customer_name": "Andi Wijaya",
    "shoe_type": "Vans Old Skool",
    "status": "Proses"
  }
}

3. PUT Update Status Sepatu

Request:

PUT /api/shoes/2
Content-Type: application/json

{
  "status": "Selesai"
}


Response:

{
  "message": "Status sepatu berhasil diperbarui"
}

4. DELETE Hapus Data

Request:

DELETE /api/shoes/2


Response:

{
  "message": "Data sepatu berhasil dihapus"
}
