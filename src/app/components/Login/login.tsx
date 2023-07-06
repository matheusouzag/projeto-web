export default function Login() {
    return (
        <section className="bg-preto py-96 flex justify-center items-center">
            <div className="bg-amarelo flex flex-col rounded-2xl">
                <h1 className="mx-48 mt-5 font-bold text-lg text-center">
                    LOGIN
                </h1>
                <div className="mt-10">
                    <div className="flex flex-col max-w-md px-12 mb-4">
                        <label className="mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            className="border border-branco rounded-lg h-10"
                            id="email"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col max-w-md px-12 ">
                        <label className="mb-2" htmlFor="password">
                            Senha
                        </label>
                        <input
                            className="border border-branco rounded-lg h-10"
                            id="password"
                            type="text"
                        />
                    </div>
                </div>

                <button className="text-end mr-12 text-xs mt-1">
                    Esqueci a senha
                </button>

                <div className="flex justify-center mt-16 mb-10">
                    <button className="border-2 border-preto bg-preto rounded-lg text-branco px-5 py-5 flex items-center h-5 mr-20 text-sm">
                        CADASTRE-SE
                    </button>
                    <button className="border-2 border-preto bg-preto rounded-lg text-branco px-10 py-5 flex items-center h-5 text-sm">
                        ENTRAR
                    </button>
                </div>
            </div>
        </section>
    );
}
