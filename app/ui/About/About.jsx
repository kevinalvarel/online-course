import Image from "next/image";
import aboutImg from "./assets/about.png";
import CountUp from "./components/CountUp";

const About = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src={aboutImg}
            alt="About us"
            width={500}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-gray-600 mb-6">
            Kami adalah platform belajar online yang fokus membantu kamu
            mengembangkan skill digital, mulai dari pemula sampai siap kerja.
          </p>
          <p className="text-gray-600 mb-6">
            Mentor berpengalaman, materi praktis, dan komunitas supportif siap
            bantu kamu tumbuh bareng.
          </p>
          <div className="flex gap-18 space-y-2 text-gray-700 list-disc pl-5">
            <div className="justify-items-center">
              <CountUp
                from={0}
                to={9610}
                separator=","
                direction="up"
                duration={1}
                className="text-4xl font-bold"
              />
              <p>Pelanggan</p>
            </div>
            <div className="justify-items-center">
              <CountUp
                from={0}
                to={530}
                separator=","
                direction="up"
                duration={1.3}
                className="text-4xl font-bold"
              />
              <p>Perusahaan</p>
            </div>
            <div className="justify-items-center">
              <CountUp
                from={0}
                to={132}
                separator=","
                direction="up"
                duration={1.5}
                className="text-4xl font-bold"
              />
              <p>Komunitas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
