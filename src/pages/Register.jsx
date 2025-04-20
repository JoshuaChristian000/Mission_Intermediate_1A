import React from 'react'
import NavbarStart from '../components/NavbarStart'
import Buttons from '../components/Buttons'

const Register = () => {
  return (
    <>
        <NavbarStart />
        <div className="hero bg-success/50 min-h-screen">
            <div className="card md:w-150 sm:w-96 xs:w-50 bg-base-100 card-xl shadow-sm">
                <div className="card-body">
                <h2 className="card-title flex justify-center text-center text-4xl">Pendaftaran Akun</h2>
                <p className="justify-center text-center text-sm text-gray-500">Yuk, daftarkan akunmu sekarang juga!</p>
                <label className="fieldset-label">Nama Lengkap<span className="text-red-500">*</span></label>
                <input type="text" className="input w-full" placeholder="Nama Lengkap" />
                <label className="fieldset-label">E-mail<span className="text-red-500">*</span></label>
                <input type="email" className="input w-full" placeholder="Email" />

                <label className="fieldset-label">No. Hp<span className="text-red-500">*</span></label>
                <div className="flex items-center gap-4">
                    <select className="select select-neutral w-50">
                        <option disabled selected>Kode No.</option>
                        <option>+62</option>
                        <option>+61</option>
                        <option>+80</option>
                    </select>
                    <input type="text" className="input border p-2 rounded w-full" placeholder="812345678" />
                </div>

                <label className="fieldset-label">Kata Sandi<span className="text-red-500">*</span></label>
                <input type="password" className="input w-full" placeholder="Password" />
                
                <label className="fieldset-label">Konfirmasi Kata Sandi<span className="text-red-500">*</span></label>
                <input type="password" className="input w-full" placeholder="Password" />

                <a href="" className="flex justify-end text-gray-500 text-xs">Lupa Password?</a>
                
                <Buttons className="btn-warning text-white">
                    Daftar
                </Buttons>
                <Buttons className="btn-success opacity-200">
                    Masuk
                </Buttons>
                <div className="justify-center flex card-actions text-center text-sm">
                    <p className="divider">atau</p>
                </div>
                {/* Google  */}
                <Buttons className="bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Daftar dengan Google
                </Buttons>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register