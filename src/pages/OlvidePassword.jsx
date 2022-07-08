import { Link } from 'react-router-dom'
const OlvidePassword = () => {
  return (
    <>
        <h1 className="text-sky-600 font-black text-4xl md:text-5xl capitalize text-center">Recupera tu acceso y no pierdas tus <span className="text-slate-700">proyectos</span></h1>

        <form className="my-10 mx-5 bg-white shadow rounded-lg p-5">
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
                />
            </div>
            <input
                type="submit"
                value="Enviar Instrucciones"
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
                to="/registrar"
            >
            ¿No tienes una cuenta? <span className="font-bold">Regístrate</span>
            </Link>
        </nav>
    </>
  )
}

export default OlvidePassword