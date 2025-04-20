import React from 'react'

const Newsletter = () => {
    const styleLetter = {
        backgroundImage: 'url("/assets/bg-newsletter1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
      


  return (
    <div>

        <div className="flex justify-center items-center px-5 py-10">
            <div 
                className="hero w-full max-w-7xl h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative"
                style={styleLetter}>
                <div className="hero-overlay bg-black/70 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center px-5 md:px-8">
                    <div className="max-w-xl">
                        <p className="mb-2 text-sm md:text-base lg:text-lg">
                            NEWSLETTER
                        </p>
                        <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
                            Mau Belajar Lebih Banyak?
                        </h1>
                        <p className="mb-5 text-sm md:text-base lg:text-lg">
                            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran 
                            spesial dari program-program terbaik hariesok.id
                        </p>
                        <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
                            <div className="join">
                            <input type="text" className="input join-item w-full text-black" placeholder="Masukkan Emailmu" />
                            <button className="btn btn-warning text-white join-item w-30">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Newsletter