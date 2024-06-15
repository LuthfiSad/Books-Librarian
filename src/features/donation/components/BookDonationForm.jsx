// src/components/BookDonationForm.jsx
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "@/features/global/components/Form/input";
import defaultImage from "@/core/assets/no-image.jpg";
import { APP_CONFIG } from "@/core/configs/app";
import axios from "axios";
import { donateBook } from "@/core/services/books";

const BookDonationForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      description: "",
      year: "",
      publisher: "",
      genre: "",
      booksCount: "",
      pageCount: "",
      image: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Judul buku diperlukan")
        .max(50, "Judul buku maksimal 50 karakter"),
      author: Yup.string()
        .required("Nama penulis diperlukan")
        .max(50, "Nama penulis maksimal 50 karakter"),
      description: Yup.string(),
      year: Yup.number()
        .required("Tahun terbit diperlukan")
        .positive()
        .integer()
        .min(1000, "Tahun terbit tidak valid")
        .max(
          new Date().getFullYear(),
          `Tahun terbit tidak boleh lebih dari ${new Date().getFullYear()}`
        ),
      publisher: Yup.string()
        .required("Nama penerbit diperlukan")
        .max(50, "Nama penerbit maksimal 50 karakter"),
      genre: Yup.string()
        .required("Genre diperlukan")
        .max(50, "Genre maksimal 50 karakter"),
      booksCount: Yup.number()
        .required("Jumlah buku diperlukan")
        .positive("Jumlah buku harus lebih dari 0")
        .integer("Jumlah buku harus bilangan bulat"),
      pageCount: Yup.number()
        .required("Jumlah halaman diperlukan")
        .positive("Jumlah halaman harus lebih dari 0")
        .integer("Jumlah halaman harus bilangan bulat"),
      image: Yup.string()
        .required()
        .matches(
          /^(https?:\/\/[^\s]+(\.png|\.jpg|\.jpeg|\.gif)(\?[^#]*)?(#.*)?)$/,
          "Masukkan URL gambar yang valid"
        ),
    }),

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      if (!confirm("Are you sure you want to donate this book?")) {
        return;
      }

      try {
        await donateBook(values);
        alert("Terima kasih atas donasi buku Anda!");
        resetForm();
      } catch (error) {
        console.error("Error donating book:", error);
        alert("Donasi buku gagal. Silakan coba lagi nanti.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white shadow-lg border border-gray-300 outline-none rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Form Untuk Donasi Buku</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Judul Buku"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Judul Buku"
              error={formik.touched.title && formik.errors.title}
            />
            <InputField
              label="Nama Penulis"
              type="text"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Nama Penulis"
              error={formik.touched.author && formik.errors.author}
            />
          </div>
          <InputField
            as="textarea"
            rows="3"
            label="Deskripsi"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Masukkan Deskripsi Singkat Buku"
            error={formik.touched.description && formik.errors.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Nama Penerbit"
              type="text"
              name="publisher"
              value={formik.values.publisher}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Nama Penerbit"
              error={formik.touched.publisher && formik.errors.publisher}
            />
            <InputField
              min={1000}
              max={new Date().getFullYear()}
              label="Tahun Terbit"
              type="number"
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Tahun Terbit"
              error={formik.touched.year && formik.errors.year}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Genre"
              type="text"
              name="genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Genre Buku"
              error={formik.touched.genre && formik.errors.genre}
            />
            <InputField
              min={1}
              label="Jumlah Halaman"
              type="number"
              name="pageCount"
              value={formik.values.pageCount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Jumlah Halaman"
              error={formik.touched.pageCount && formik.errors.pageCount}
            />
          </div>
          <InputField
            min={1}
            label="Jumlah Buku"
            type="number"
            name="booksCount"
            value={formik.values.booksCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Masukkan Jumlah Buku"
            error={formik.touched.booksCount && formik.errors.booksCount}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mx-auto">
              <img
                src={formik.values.image || defaultImage}
                alt="Buku Yang Mau di Upload"
                className="max-w-[200px] max-h-[300px] mx-auto"
              />
            </div>
            <InputField
              label="URL Gambar"
              type="text"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan URL Gambar Buku"
              error={formik.touched.image && formik.errors.image}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm bg-default hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-default"
            >
              Submit
            </button>
            <button
              type="reset"
              className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm bg-slate-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-slate-500"
              onClick={() => {
                formik.resetForm();
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDonationForm;
