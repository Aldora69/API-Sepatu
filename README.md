# 🧼 Shoe Cleaning API

API sederhana untuk layanan **cuci sepatu**, dibangun menggunakan **Node.js**, **Express.js**, dan **Supabase** sebagai backend database.  
API ini menyediakan endpoint **CRUD (Create, Read, Update, Delete)** untuk mengelola daftar sepatu yang sedang dicuci.

---

## 📖 Deskripsi Umum

Sistem ini dibuat untuk membantu pengelolaan data sepatu di layanan cuci sepatu.  
Admin dapat menambah, memperbarui, menghapus, dan melihat status cuci sepatu pelanggan dengan mudah melalui endpoint API.

---

## 🎯 Tujuan dan Fitur Utama

### Tujuan
Proyek ini dibuat untuk memenuhi tugas pembuatan REST API sederhana menggunakan **Node.js**, **Express.js**, dan **Supabase**, serta deployment ke **Vercel**.

- Mengimplementasikan konsep CRUD dalam REST API.  
- Menyediakan API untuk operasional cuci sepatu.  
- Mempermudah integrasi dengan dashboard admin.  
- Mengelola data sepatu pada database Supabase.

### Fitur Utama
- **Menambah data sepatu** → `POST /api/shoes`  
- **Melihat daftar sepatu** → `GET /api/shoes`  
- **Memperbarui/mengubah status sepatu** → `PUT /api/shoes/:id`  
- **Menghapus data sepatu** → `DELETE /api/shoes/:id`  
- **Filter berdasarkan status** → `GET /api/shoes?status=Selesai`

---

## 🧩 Struktur Data

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
```

### Keterangan:
- `id` → Nomor unik sepatu  
- `customerName` → Nama pemilik sepatu  
- `shoeType` → Jenis atau merek sepatu  
- `serviceType` → Jenis layanan cuci sepatu  
- `status` → Status proses cuci (`Sedang Dicuci` / `Selesai`)  
- `tanggalMasuk` → Tanggal sepatu diterima untuk dicuci  
- `tanggalSelesai` → Tanggal sepatu selesai dicuci  

---

## Contoh Request & Response

### GET Semua Data Sepatu
**Endpoint:**
```
GET /api/shoe-cleaning
```

**Contoh Response:**
```json
[
  {
    "id": 1,
    "customer_name": "Fufufafa",
    "shoe_type": "Nike Air Force 1",
    "status": "Proses",
    "created_at": "2025-10-21T10:00:00Z"
  }
]
```

---

### POST Tambah Data Sepatu
**Endpoint:**
```
POST /api/shoe-cleaning
```

**Request Body:**
```json
{
  "customer_name": "Fufufafa",
  "shoe_type": "Nike Air Force 1",
  "status": "Proses"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "customer_name": "Fufufafa",
    "shoe_type": "Nike Air Force 1",
    "service_type": "Cuci",
    "status": "Pending",
    "notes": "-",
    "created_at": "2025-10-23T00:00:00Z"
  }
}
```

---

### PUT Update Status Sepatu
**Endpoint:**
```
PUT /api/shoe-cleaning/id
```

**Contoh Command (cURL):**
```bash
curl -X PUT "http://localhost:3000/api/shoe-cleaning/2"   -H "Content-Type: application/json"   -d '{
    "status": "Selesai",
    "notes": "Sudah selesai dicuci"
  }'
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "Selesai",
    "notes": "Sudah selesai dicuci"
  }
}
```

---

### DELETE Hapus Data Sepatu
**Endpoint:**
```
DELETE /api/shoe-cleaning/id
```

**Contoh:**
```
DELETE http://localhost:3000/api/shoe-cleaning/2
```

**Response:**
```json
{
  "success": true,
  "message": "Item deleted successfully"
}
```

---

## Instalasi dan Menjalankan API

### 1. Clone Repository
```bash
git clone https://github.com/username/sepatu-api.git
cd sepatu-api
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Konfigurasi File `.env`
Buat file `.env` di root folder proyek dan isi dengan konfigurasi berikut:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
PORT=3000
```

### 4. Jalankan Server
```bash
npm run dev
```

Server akan berjalan di:
```
http://localhost:3000
```

---

## Teknologi yang Digunakan
- **Node.js** – JavaScript runtime environment  
- **Express.js** – Framework untuk membuat REST API  
- **Supabase** – Database PostgreSQL dan autentikasi bawaan  
- **Vercel** – Platform untuk deployment

---

## Deployment ke Vercel

### 1. Login ke Vercel
Masuk ke [Vercel](https://vercel.com) dan hubungkan dengan akun GitHub.

### 2. Deploy Proyek
- Pilih repository **API-Sepatu**.
- Tambahkan variabel environment dari file `.env` ke menu **Settings → Environment Variables**.
- Klik **Deploy**.

### URL Deployment:
**https://api-sepatu.vercel.app/**

---

## ⚙️ Alur Kerja API

1. Pengguna mengirimkan permintaan HTTP (`GET`, `POST`, `PUT`, `DELETE`) ke server.
2. Server memproses permintaan menggunakan **Express.js**.
3. Data disimpan dan diambil dari **Supabase**.
4. Server mengembalikan respons dalam format **JSON**.

---
