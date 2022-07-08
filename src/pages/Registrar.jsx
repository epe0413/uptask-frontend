import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/Alerta'

const Registrar = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        if(password !== repetirPassword){
            setAlerta({
                msg: 'Los Password no son iguales',
                error: true
            })
            return
        }

        if(password.length < 6){
            setAlerta({
                msg: 'El Password es muy corto, agrega minimo 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})

        // Crear el usuario en la API
        try {
            const { data } = await axios.post('http://localhost:4000/api/usuarios', {nombre, email, password})

            setAlerta({
                msg: data.msg,
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

  return (
    <>
        <h1 className="text-sky-600 font-black text-4xl md:text-5xl capitalize text-center">Crea tu cuenta y Administra tus <span className="text-slate-700">proyectos</span></h1>

        {msg && <Alerta alerta={alerta}/>}

        <form
            className="my-10 mx-5 md:mx-0 bg-white shadow rounded-lg p-5"
            onSubmit={handleSubmit}
        >
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