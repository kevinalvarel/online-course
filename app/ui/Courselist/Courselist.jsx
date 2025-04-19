// components/CourseList.jsx
import Image from "next/image";
import kelas1 from "./assets/course1.png";
import kelas2 from "./assets/course2.png";
import kelas3 from "./assets/course3.png";

const courses = [
  {
    title: "Belajar HTML & CSS dari Nol",
    image: kelas1,
    desc: "Kelas dasar untuk kamu yang mau mulai jadi Front-End Dev.",
  },
  {
    title: "React JS Dasar",
    image: kelas2,
    desc: "Belajar membuat komponen dan state management pakai React.",
  },
  {
    title: "Tailwind CSS Mastery",
    image: kelas3,
    desc: "Buat UI cantik dan responsive tanpa ribet nulis CSS manual.",
  },
];

export default function CourseList() {
  return (
    <section className="py-16 px-6 bg-white" id="courses">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Kelas Tersedia</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shadow-md p-4 transition hover:scale-[1.02]"
            >
              <Image
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
