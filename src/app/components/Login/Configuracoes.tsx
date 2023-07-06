export default function Header() {
    return (
        <section className="bg-preto py-60 flex justify-center items-center">
            <div className="bg-amarelo flex flex-col rounded-2xl">
                <h1 className="mx-48 mt-5 font-bold text-lg text-center">
                    CONFIGURAÇÕES
                </h1>
                <div className="mt-10">
                    <div className="flex flex-col px-12 ">
                        <label className="mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="border border-branco rounded-lg h-10"
                            id="username"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col px-12 mt-4">
                        <label className="mb-2" htmlFor="biografia">
                            Biografia
                        </label>
                        <input
                            className="border border-branco rounded-lg h-40"
                            id="username"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col px-12 mt-4">
                        <label className="mb-2" htmlFor="image">
                            Imagem
                        </label>
                        <input
                            className="border border-branco rounded-lg h-10"
                            id="username"
                            type="text"
                        />
                    </div>
                </div>

                <div className="flex justify-between mt-16 mb-10 mx-12">
                    <button className="border-2 border-preto bg-preto rounded-lg text-branco px-6 py-5 flex items-center h-5 mr-24 text-sm">
                        CANCELAR
                    </button>
                    <button className="border-2 border-preto bg-preto rounded-lg text-branco px-5 py-5 flex items-center h-5 text-sm">
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </section>
    );
}
