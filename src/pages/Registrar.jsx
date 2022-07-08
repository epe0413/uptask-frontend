import { useState } from 'react'
import { Link } from 'react-router-dom'

const Registrar = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')

  return (
    <>
        <h1 className="text-sky-600 font-black text-4xl md:text-5xl capitalize text-center">Crea tu cuenta y Administra tus <span className="text-slate-700">proyectos</span></h1>

        <form className="my-10 mx-5 bg-white shadow rounded-lg p-5">
            <div className="my-5">
                <label
                    className="uppercase text-gray-700 block text-xl font-bold"
                    htmlFor="nombre"
                >
                Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label
                    className="uppercase text-gray-700 block text-xl font-bold"
                    htmlFor="email"
                >
                Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label
                    className="uppercase text-gray-700 block text-xl font-bold"
                    htmlFor="password"
                >
                Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label
                    className="uppercase text-gray-700 block text-xl font-bold"
                    htmlFor="password2"
                >
                Repetir Password</label>
                <input
                    id="password2"
                    type="password"
                    placeholder="Repetir Password de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={repetirPassword}
                    onChange={e => setRepetirPassword(e.target.value)}
                />
            </div>
            <input
                type="submit"
                value="Crear cuenta"
                className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
            />
        </form>

        <nav className="lg:flex lg:justify-between">
            <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/"
            >
            ¿Ya tienes una cuenta? <span className="font-bold">Inicia Sesión</span>
            </Link>
            <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/olvide-password"
            >
            Olvide mi password
            </Link>
        </nav>
    </>
  )
}

export default Registrar