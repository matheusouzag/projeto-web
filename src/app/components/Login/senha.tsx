export default function Senha() {
    return (
        <div>
            <section className="bg-preto py-96 flex justify-center items-center">
                <div className="bg-amarelo flex flex-col rounded-2xl">
                    <h1 className="mx-40 mt-5 font-bold text-center mb-5 text-lg">
                        ESQUECEU A SENHA?
                    </h1>

                    <p className="px-12">
                        Não se preocupe, uma nova senha será enviada para seu
                        e-mail.
                    </p>

                    <div className="mt-6">
                        <div className="flex flex-col px-12 mt-4">
                            <label className="mb-2" htmlFor="email">
                                E-mail
                            </label>
                            <input
                                className="border border-branco rounded-lg h-10"
                                id="username"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between mt-12 mb-10 mx-12">
                        <button className="border-2 border-preto bg-preto rounded-lg text-branco px-10 py-5 flex items-center h-5 mr-24 text-sm">
                            LOGIN
                        </button>
                        <button className="border-2 border-preto bg-preto rounded-lg text-branco px-5 py-5 flex items-center h-5 text-sm">
                            RECUPERAR
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
