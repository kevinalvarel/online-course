// components/Pricelist.jsx
export default function Pricelist() {
  const prices = [
    {
      name: "Pelajar",
      price: "Rp 99.000",
      features: ["Akses 5 Kelas", "Support Grup Telegram", "Sertifikat"],
    },
    {
      name: "Pro",
      price: "Rp 199.000",
      features: [
        "Semua Fitur Basic",
        "Akses Semua Kelas",
        "Mentoring Mingguan",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: "Rp 299.000",
      features: ["Semua Fitur Pro", "1-on-1 Mentoring", "Konsultasi Karier"],
    },
  ];

  return (
    <section className="bg-white py-16 px-6" id="pricelist">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Pilih Paket Belajar</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {prices.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl p-6 shadow-md ${
                item.isPopular ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
              <p className="text-3xl font-bold mb-6">{item.price}</p>
              <ul className="space-y-2 mb-6 text-left">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✅ {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  item.isPopular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Daftar Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
