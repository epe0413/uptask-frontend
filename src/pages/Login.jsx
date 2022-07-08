

const Login = () => {
  return (
    <>
        <h1 className="text-sky-600 font-black text-4xl md:text-5xl capitalize text-center">Inicia sesión y administra tus <span className="text-slate-700">proyectos</span> </h1>

        <form className="my-10 bg-white shadow rounded-lg p-5">
            <div className="my-5">
                <label
                    className="uppercase text-gray-700 block text-xl font-bold"
                    htmlFor="email"
                >
                Email</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Email de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
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
                />
            </div>
            <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
            />
        </form>
    </>
  )
}

export default Login