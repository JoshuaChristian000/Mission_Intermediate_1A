import React from 'react'

const Hero = () => {
    const styleHero = {
        backgroundImage: 'url("/assets/bg-hero1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
      

  return (
    <div>
       
    <div className="flex justify-center items-center px-5 py-10">
        <div 
            className="hero w-full max-w-7xl h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative"
            style={styleHero}>
            <div className="hero-overlay bg-black/60 rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center px-5 md:px-8">
                <div className="max-w-xl">
                    <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui 
                        Platform Video Interaktif!
                    </h1>
                    <p className="mb-5 text-sm md:text-base lg:text-lg">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
                        Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                    <button className="btn btn-success">Temukan Video Course untuk Dipelajari</button>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Hero