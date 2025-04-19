// components/Contact.jsx
export default function Contact() {
  return (
    <section className="py-16 px-6 bg-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
        <p className="text-gray-700 mb-8">
          Punya pertanyaan? Mau daftar langsung? Kami siap bantu kamu kapan aja!
        </p>

        <a
          href="https://wa.me/6281234567890" // ganti sama nomormu
          target="_blank"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
          Chat via WhatsApp
        </a>

        <div className="mt-10 text-left">
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              className="w-full p-3 border rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
