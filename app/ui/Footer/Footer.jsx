// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">El Kursus</h2>
          <p className="text-sm text-gray-300">
            Platform belajar front-end dari nol sampai jago. Belajar bareng
            mentor berpengalaman & komunitas solid.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Tentang
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:underline">
                Kursus
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media (Opsional) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Kami</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://instagram.com"
                className="hover:underline"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6281234567890"
                className="hover:underline"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:info@elkursus.com" className="hover:underline">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} El Kursus. All rights reserved.
      </div>
    </footer>
  );
}
