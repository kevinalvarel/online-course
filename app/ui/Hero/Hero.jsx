import Image from "next/image";
import heroImg from "./assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Khursus Online gak perlu ribet
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Akses ratusan kelas online dari mentor berpengalaman. Belajar kapan
          aja, di mana aja!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition cursor-pointer">
            Daftar Sekarang
          </button>
          <button className="text-blue-600 font-medium hover:underline cursor-pointer">
            Lihat Kelas
          </button>
        </div>
      </div>

      <div className="w-full max-w-md">
        <Image
          src={heroImg}
          alt="Online Course"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
