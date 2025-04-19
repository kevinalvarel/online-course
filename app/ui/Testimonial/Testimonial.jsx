// components/Testimonials.jsx
export default function Testimonials() {
  const testimonies = [
    {
      name: "Rizky Maulana",
      job: "Mahasiswa",
      message:
        "Belajarnya enak banget, materinya jelas, cocok buat pemula! Sekarang udah bisa bikin landing page sendiri.",
    },
    {
      name: "Nadya Amelia",
      job: "Fresh Graduate",
      message:
        "Mentornya responsif dan ramah. Setelah ikut kelas ini aku keterima magang front-end di startup lokal!",
    },
    {
      name: "Andika Prasetyo",
      job: "Freelancer",
      message:
        "Harga murah, kualitas premium. Worth it banget buat kamu yang mau serius jadi web dev.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Apa Kata Mereka?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonies.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition"
            >
              <p className="text-gray-600 italic mb-4">“{item.message}”</p>
              <h4 className="font-bold text-lg">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.job}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
