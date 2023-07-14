"use client";
import { UsuarioDTO } from "@/model/usuario.dto";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderOn from "../components/HeaderOn";

export default function Rating() {
    const [token, setToken] = useState("");
    const [usuario, setUsuario] = useState(null as unknown as UsuarioDTO);

    const [status, setStatus] = useState("");
    const [nota, setNota] = useState("");

    useEffect(() => {
        if (localStorage.getItem("user")) {
            axios
                .get(
                    `http://localhost:3001/usuarios/${localStorage.getItem(
                        "user"
                    )}`
                )
                .then((result) => {
                    setUsuario(result.data.data);
                });
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage?.getItem("token") || "");
        }
    }, []);

    const mandarAvaliacao = (values: {
        nome: any;
        username: any;
        email: any;
        senha: any;
    }) => {
        axios
            .post("http://localhost:3001/avaliacao", {
                usuario: usuario.id,
            })
            .then((response) => {
                alert(response.data.msg);
                console.log(response);
            });
    };

    const initialValues = {
        nome: "",
        username: "",
        email: "",
        senha: "",
    };

    return (
        <body className="bg-preto">
            {!token && <Header />}
            {token && <HeaderOn />}

            <section className="bg-preto">
                <div className="bg-amarelo h-8 flex justify-around px-96 text-lg mt-6">
                    <Link className="text-end" href="/perfil">
                        <button>Perfil</button>
                    </Link>

                    <Link className="text-end" href="/rating">
                        <button>Jogos</button>
                    </Link>
                    <Link href="/configuracoes">
                        <button>Configurações</button>
                    </Link>
                </div>

                <div className="grid grid-cols-6 grid-rows-3 px-96 mt-6 py-20">
                    <p className="col-span-2 row-span-3">
                        <picture>
                            <img
                                src="img/red_dead2.png"
                                alt="Capa do jogo red dead redemption 2"
                            />
                        </picture>
                    </p>
                    <div className="col-span-4 bg-amarelo rounded-lg">
                        <div className="flex flex-row justify-between">
                            <div className="ml-8 mt-4">
                                <h1 className="font-bold text-lg">
                                    RED DEAD REDEMPTION II
                                </h1>
                                <div className="flex flex-row mt-6">
                                    <h2 className="">STATUS :</h2>
                                    <select
                                        name="status"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                    >
                                        <option value="">---</option>
                                        <option value="jogando">JOGANDO</option>
                                        <option value="completo">
                                            COMPLETO
                                        </option>
                                        <option value="quero jogar">
                                            QUERO JOGAR
                                        </option>
                                        <option value="dropped">DROPPED</option>
                                    </select>
                                </div>
                                <div className="flex flex-row mt-2">
                                    <h2>NOTA: </h2>
                                    <select
                                        name="nota"
                                        value={nota}
                                        onChange={(e) =>
                                            setNota(e.target.value)
                                        }
                                    >
                                        <option value="">---</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <picture>
                                    <img
                                        className="h-20"
                                        src="img/logo_Gamebald.png"
                                        alt="Logo da Gamebald, com um G grande com uma coroa amarela"
                                    />
                                </picture>
                                <button className="bg-preto text-branco mr-2">
                                    ENVIAR
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="col-span-4 row-span-2 bg-amarelo mt-2 rounded-lg">
                        <div className="mx-8 my-4">
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="font-bold text-lg">SINOPSE</h1>
                                <div className="flex flex-row">
                                    <h2 className="text-lg font-bold mr-2">
                                        Nota média:
                                    </h2>
                                    <div className="bg-preto w-fit h-fit px-2 py-1 mr-1 flex flex-row items-center">
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
                            <p className="mt-4">
                                Em “Red Dead Redemption 2”, os jogadores assumem
                                o papel de Arthur Morgan, um fora-da-lei no
                                Velho Oeste americano. A história segue a gangue
                                de bandidos liderada por Dutch van der Linde
                                enquanto eles fazem um último esforço para
                                sobreviver em um mundo que está mudando
                                rapidamente. Os jogadores vão experimentar a
                                ameaça constante das autoridades e dos
                                outrosbandidos, além de ter que lidar com as
                                dificuldades da vida no Velho Oeste, como a fome
                                e o tempo ruim.
                            </p>
                        </div>
                    </p>
                </div>
            </section>

            <Footer />
        </body>
    );
}
