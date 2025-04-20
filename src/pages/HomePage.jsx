import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const HomePage = () => {

const courses = [
        {id: 1, sources: '/assets/card1.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 2, sources: '/assets/card2.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 3, sources: '/assets/card3.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 4, sources: '/assets/card4.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 5, sources: '/assets/card5.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 6, sources: '/assets/card6.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 7, sources: '/assets/card7.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 8, sources: '/assets/card8.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
        {id: 9, sources: '/assets/card9.jpg', name: 'Big 4 Auditor Financial Analyst', desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...', instructor: 'Jenna Ortega', position: 'Senior Accountant at Gojek', price: 'Rp 300K', avatar: '/assets/Avatar.png'},
]

  return (
    <>
    <Navbar />
    <main className="bg-success/40">
    <Hero />

    <div className="container mx-auto px-4 py-6">
    {/* <!-- Title --> */}
    <h1 className="text-3xl font-bold text-gray-900 text-left pl-13">Koleksi Video Pembelajaran Unggulan</h1>
    <p className="text-left text-gray-600 pl-13">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

    {/* <!-- Categories --> */}
    <div className="flex flex-wrap justify-left space-x-4 mt-4 text-lg mb-5 pl-13">
        <a href="#" className="text-orange-500 font-semibold border-b-2 border-orange-500">Semua Kelas</a>
        <a href="#" className="text-gray-600 hover:text-orange-500">Pemasaran</a>
        <a href="#" className="text-gray-600 hover:text-orange-500">Desain</a>
        <a href="#" className="text-gray-600 hover:text-orange-500">Pengembangan Diri</a>
        <a href="#" className="text-gray-600 hover:text-orange-500">Bisnis</a>
    </div>

    {/* <!-- Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-20 gap-6 mt-6 place-items-center">
        {/* <!-- Card --> */}
        {
            courses.map((course)=>
                <Cards key={course.id} course={course}/>
            )
        }
      
        
    </div>
</div>


<Newsletter />


</main>

<Footer/>
    </>
  )
}

export default HomePage