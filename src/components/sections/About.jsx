import {
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { Animation } from "../Animation";

export const About = () => {

    const programmingSkills = ["Vite + React", "VSCode", "TailwindCSS"]
    const Other = ["Gym", "Makan", "Rank Immortal"]

    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20">

            <Animation>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-justify">
                        Saya adalah mahasiswa baru <strong>Universitas Indonesia</strong>,  <strong>Fakultas Ilmu Komputer</strong>,  Jurusan <strong>Sistem Informasi</strong> Angkatan 2025 melalui jalur SNBT-UTBK 2025 <br />
                    </p>
                    <p className="text-gray-300 mb-6 text-justify">
                        Saya adalah orang yang selalu <strong>penasaran</strong> tentang sesuatu, selalu ingin tahu <strong>"bagaimana"</strong> sesuatu itu bisa terjadi dan tentunya
                        hal ini yang membuat saya tertarik dengan dunia IT. <strong>Rasa ingin tahu</strong> inilah yang membuat diri saya menjadi <strong>kreatif, berfikir kritis</strong>, dan selalu melihat
                        sebuah masalah dari <strong>berbagai sisi</strong>.
                    </p>
                    <p className="text-gray-300 mb-6 text-justify">
                        Salah dua dari hobi saya, yaitu <strong>gym</strong> dan <strong>main games</strong> mengajarkan saya bagaimana cara <strong>konsisten</strong> dalam menjalani sesuatu, 
                        bagaimana <strong>solusi atau cara</strong> agar suatu target dapat tercapai, dan selalu punya <strong>"goals"</strong> yang harus dipenuhi dalam periode waktu tertentu
                    </p>
                    <p className="text-gray-300 mb-6 text-justify">
                       Selain itu, lingkar pertemanan dan hubungan yang saya jalani selama hidup di Lombok menyumbang kontribusinya
                       dengan membentuk <strong>skill komunikasi, cara bergaul,</strong> dan menjadi orang yang <strong>berkomitmen</strong> terhadap segala hal yang dihadapi. 
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> </h3>
                            <div className="flex flex-wrap gap-2">
                                {programmingSkills.map((tech,key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> </h3>
                            <div className="flex flex-wrap gap-2">
                                {Other.map((tech,key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li> Alumni SMA Negeri 1 Mataram </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏋️ Hobbies </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li> Gym </li>
                                <li> Playing Games </li>
                                <li> Volleyball </li>
                                <li> Badminton </li>
                                <li> Coding --- right now... </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 📖 Personal Information </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li> Kota Mataram, Lombok, Nusa Tenggara Barat </li>
                                <li> 2 Juli 2007 </li>
                                <li> Islam </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 👀 Social Media </h3>
                            <ul className="list-inside text-gray-300 space-y-2">
                                <li className="flex items-center space-x-3">
                                    <FaInstagram className="text-pink-500" />
                                    <a href="https://instagram.com/vendynzha" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                       vendynzha
                                    </a> 
                                </li>

                                <li className="flex items-center space-x-3">
                                    <FaTiktok className="text-white" />
                                    <a href="https://www.tiktok.com/@venastrid?_t=ZS-8yVsWaOUPyM&_r=1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        venastrid
                                    </a>
                                 
                                </li>
                                <li className="flex items-center space-x-3">
                                    <SiLine className="text-green-500" />
                                    <a href="https://line.me/ti/p/-a8KD2LYc_" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        gogopowerranger07
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            </Animation>
        </section>
    )
}