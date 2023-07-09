import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-amarelo h-18">
            <div className="flex flex-row justify-around items-center">
                <picture className="w-10">
                    <img src="img/gamebald.png" alt="Logo do G" />
                </picture>

                <div className="flex justify-center">
                    <Link href="/login">
                        <button className="border-2 px-5 py-4 h-5 flex items-center border-black mr-6">
                            Login
                        </button>
                    </Link>
                    <Link href="/cadastro">
                        <button className="border-2 border-preto bg-preto text-branco px-5 py-4 flex items-center h-5">
                            Cadastro
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
