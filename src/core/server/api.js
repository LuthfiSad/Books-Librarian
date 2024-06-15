import express from 'express';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { formatInTimeZone } from 'date-fns-tz';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dapatkan __dirname dan booksFilePath
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const booksFilePath = join(__dirname, '../utils/books.json');


const getIndonesiaTime = () => {
  const timeZone = 'Asia/Jakarta';
  const date = new Date();
  return formatInTimeZone(date, timeZone, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'');
};

// Endpoint untuk mengupdate buku berdasarkan ID
app.put('/api/books/:id', async (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;

  try {
    // Baca data dari books.json
    let data = await fs.readFile(booksFilePath, 'utf8');
    let books = JSON.parse(data);

    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).send('Book not found');
    }

    // Perbarui buku yang sesuai dengan ID
    books[bookIndex] = updatedBook;

    // Tulis kembali ke books.json
    await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2), 'utf8');
    
    res.send(updatedBook);
  } catch (err) {
    console.error('Error updating book:', err);
    res.status(500).send('Error updating book');
  }
});

// Endpoint untuk menambahkan buku baru
app.post('/api/books/donate', async (req, res) => {
  const newBook = req.body;
  newBook.id = Date.now();
  newBook.borrowCount = 0;
  newBook.createdAt = getIndonesiaTime();

  try {
    // Baca data dari books.json
    let data = await fs.readFile(booksFilePath, 'utf8');
    let books = JSON.parse(data);

    // Tambahkan buku baru ke daftar
    books.push(newBook);

    // Tulis kembali ke books.json
    await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2), 'utf8');

    res.status(201).send(newBook);
  } catch (err) {
    console.error('Error adding book:', err);
    res.status(500).send('Error adding book');
  }
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Jalankan server di port 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
