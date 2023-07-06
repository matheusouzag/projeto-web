import Cadastro from "./components/Login/cadastro";
import Configuracoes from "./components/Login/Configuracoes";
import Footer from "./components/Login/Footer";
import Header from "./components/Login/Header";
import Login from "./components/Login/login";
import Senha from "./components/Login/senha";

export default function Home() {
    return (
        <body className="bg-preto">
            <Header />
            <main>
                <div className="bg-preto h-10 py-2 px-96">
                    <h1 className="text-branco">Bem vindo ao Gamebald!</h1>
                </div>
                <div className="bg-amarelo h-8 flex justify-around px-96 text-lg">
                    <button>Perfil</button>
                    <button>Jogos</button>
                    <button>Configurações</button>
                </div>
                <section className="flex flex-row justify-center pt-2 px-96">
                    <div className="w-5/6 mr-8">
                        <h2 className="text-branco mb-2">Últimas novidades</h2>
                        <div className="grid grid-cols-2 grid-rows-3">
                            <div className="col-span-2 row-span-2 mb-2 bg-amarelo p-2">
                                <h3 className="pb-2">
                                    Starfield ganha data de lançamento, 6 de
                                    setembro de 2023!
                                </h3>
                                <div className="w-full pb-0.5 h-full ">
                                    <iframe
                                        className="h-full w-full pb-8"
                                        src="https://www.youtube.com/watch?v=vVP-41wMO4I&t=50s"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="bg-amarelo mr-1">
                                <picture>
                                    <img
                                        src="img/starfield.png"
                                        alt="Imagem ilustrativa do jogo Starfield, contendo um arco alienigena em um planeta diferente, com um astronauta encima de uma pedra."
                                        className="h-full w-full"
                                    />
                                </picture>
                            </div>
                            <div className="flex bg-amarelo ml-1 text-xl justify-center items-center p-3">
                                Neste RPG para a nova geração em, meio às
                                estrelas, crie o personagem que você quiser e
                                explore com liberdade inigualável enquanto
                                embarca em uma jornada épica para desvendar o
                                maior mistério da humanidade
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-branco mb-2">Top jogos (rating)</h2>
                        <div className="bg-amarelo mb-1 p-2">
                            <div className="flex flex-row">
                                <picture>
                                    <img
                                        className="h-28 w-26"
                                        src="img/gow.jpg"
                                        alt="Capa do jogo God of War Ragnarok, com Kratos e seu filho na neve"
                                    />
                                </picture>
                                <div>
                                    <div className="flex flex-col items-end">
                                        <h3 className="mt-2 ml-4 mb-6">
                                            GOD OF WAR RAGNAROK
                                        </h3>
                                        <div className="bg-preto w-fit px-2 py-1 mr-1 flex flex-row items-center">
                                            <picture>
                                                <img
                                                    className="w-5 mr-2"
                                                    src="img/estrela.png"
                                                    alt="Uma estrela amarela"
                                                />
                                            </picture>
                                            <p className="text-branco">4,9</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amarelo mb-1 p-2">
                            <div className="flex flex-row">
                                <picture>
                                    <img
                                        className="h-28 w-26"
                                        src="img/red_dead2.png"
                                        alt="Capa do jogo Red Dead Redemption, com um cowboy apontando pra fora da capa"
                                    />
                                </picture>

                                <div className="flex flex-col items-end">
                                    <h3 className="mt-2 ml-4 mb-6">
                                        RED DEAD REDEMPTION II
                                    </h3>
                                    <div className="bg-preto w-fit px-2 py-1 mr-1 flex flex-row items-center">
                                        <picture>
                                            <img
                                                className="w-5 mr-2"
                                                src="img/estrela.png"
                                                alt="Uma estrela amarela"
                                            />
                                        </picture>
                                        <p className="text-branco">4,9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amarelo mb-1 p-2">
                            <div className="flex flex-row">
                                <picture>
                                    <img
                                        className="h-28 w-20"
                                        src="img/gtaV.png"
                                        alt="Capa do jogo Grand theft auto V (GTA) com várias imagens ilustrativas da sociedade do jogo"
                                    />
                                </picture>

                                <div className="flex flex-col items-end">
                                    <h3 className="mt-2 ml-4 mb-6">
                                        GRAND THEFT AUTO V
                                    </h3>
                                    <div className="bg-preto w-fit px-2 py-1 mr-1 flex flex-row items-center">
                                        <picture>
                                            <img
                                                className="w-5 mr-2"
                                                src="img/estrela.png"
                                                alt="Uma estrela amarela"
                                            />
                                        </picture>
                                        <p className="text-branco">4,9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amarelo mb-1 p-2">
                            <div className="flex flex-row">
                                <picture>
                                    <img
                                        className="h-28 w-20"
                                        src="img/batmancity.jpg"
                                        alt="Capa do jogo Batman com dois agentes contra-terroristas armados"
                                    />
                                </picture>

                                <div className="flex flex-col items-end">
                                    <h3 className="mt-2 ml-4 mb-6">
                                        BATMAN: ARKHAN CITY
                                    </h3>
                                    <div className="bg-preto w-fit px-2 py-1 mr-1 flex flex-row items-center">
                                        <picture>
                                            <img
                                                className="w-5 mr-2"
                                                src="img/estrela.png"
                                                alt="Uma estrela amarela"
                                            />
                                        </picture>
                                        <p className="text-branco">4,9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amarelo mb-1 p-2">
                            <div className="flex flex-row">
                                <picture>
                                    <img
                                        className="h-28 w-24"
                                        src="img/thelastofus2.png"
                                        alt="Capa do jogo The Last of Us Part II, com sua protagonista Ellie na capa"
                                    />
                                </picture>

                                <div className="flex flex-col items-end">
                                    <h3 className="mt-2 ml-4 mb-6">
                                        THE LAST OF US PART II
                                    </h3>
                                    <div className="bg-preto w-fit px-2 py-1 mr-1 flex flex-row items-center">
                                        <picture>
                                            <img
                                                className="w-5 mr-2"
                                                src="img/estrela.png"
                                                alt="Uma estrela amarela"
                                            />
                                        </picture>
                                        <p className="text-branco">4,9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button>
                            <p className="text-branco flex justify-end">MAIS</p>
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
            <Login />
            <Cadastro />
            <Senha />
            <Header />
            <Configuracoes />
            <Footer />
        </body>
    );
}