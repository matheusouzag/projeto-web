import Link from "next/link";

export default function HeaderOn() {
    return (
        <header className="bg-amarelo h-18">
            <div className="flex flex-row justify-around items-center">
                <picture className="w-10">
                    <img src="img/gamebald.png" alt="Logo do G" />
                </picture>

                <div className="flex justify-center">
                    <p className=" px-5 py-4 h-5 flex items-center border-black">
                        Akumak
                    </p>
                    <button className="px-5 py-4 flex items-center h-5">
                        <picture>
                            <img
                                className="h-10"
                                src="img/perfil.png"
                                alt="Perfil aleatório"
                            />
                        </picture>
                    </button>
                </div>
            </div>
        </header>
    );
}
