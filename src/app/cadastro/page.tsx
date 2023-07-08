import Link from "next/link";

export default function Cadastro() {
    return (
        <section className="bg-preto h-screen flex justify-center items-center">
            <div className="bg-amarelo flex flex-col rounded-2xl">
                <h1 className="mx-48 mt-5 font-bold text-lg text-center">
                    CADASTRO
                </h1>
                <div className="mt-10">
                    <div className="flex flex-col px-12 mb-4">
                        <label className="mb-2" htmlFor="nome">
                            Nome
                        </label>
                        <input
                            className="border border-branco rounded-lg h-10"
                            id="nome"
                            type="text"
                        />
                    </div>

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
                        <label className="mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            className="border border-branco rounded-lg h-10"
                            id="username"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col px-12 mt-4">
                        <label className="mb-2" htmlFor="password">
                            Senha
                        </label>
                        <input
                            className="border border-branco rounded-lg h-10"
                            id="username"
                            type="text"
                        />
                    </div>
                </div>

                <div className="flex justify-between mt-16 mb-10 mx-12">
                    <Link href="/login">
                        <button className="border-2 border-preto bg-preto rounded-lg text-branco px-10 py-5 flex items-center h-5 mr-24 text-sm">
                            LOGIN
                        </button>
                    </Link>
                    <button className="border-2 border-preto bg-preto rounded-lg text-branco px-5 py-5 flex items-center h-5 text-sm">
                        CADASTRE-SE
                    </button>
                </div>
            </div>
        </section>
    );
}
