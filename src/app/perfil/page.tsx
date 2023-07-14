"use client";
import Modal from "@/Modal";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UsuarioDTO } from "@/model/usuario.dto";
import axios from "axios";
import HeaderOn from "../components/HeaderOn";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null as unknown as UsuarioDTO);

  const [completo, setCompleto] = useState("");
  const [jogando, setJogando] = useState("");
  const [queroJogar, setQueroJogar] = useState("");
  const [naoAguento, setNaoAguento] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(`http://localhost:3001/usuarios/${localStorage.getItem("user")}`)
        .then((result) => {
          setUsuario(result.data.data);
        });
      axios
        .get(
          `http://localhost:3001/avaliacao/estatistica/${localStorage.getItem(
            "user"
          )}`
        )
        .then((result) => {
          setJogando(result.data.jogando);
          setQueroJogar(result.data.queroJogar);
          setNaoAguento(result.data.naoAguento);
          setCompleto(result.data.completo);
        })
        .catch((error) => {
          console.log("Ocorreu um erro ao buscar as estatísticas:", error);
        });
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddFriend = (friendName: any) => {
    // Execute a ação desejada, como adicionar o amigo à lista, enviar uma solicitação, etc.
    console.log("Nome do amigo:", friendName);

    // Feche o modal
    setIsModalOpen(false);
  };

  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage?.getItem("token") || "");
    }
  }, []);

  return (
    <body className="bg-preto">
      {!token && <Header />}
      {token && <HeaderOn />}

      <section className="bg-preto">
        <div className="bg-amarelo h-8 flex justify-around px-52 text-lg my-6">
          <Link className="text-end" href="/perfil">
            <button>Perfil</button>
          </Link>
          <Link className="text-end" href="/jogos">
            <button>Jogos</button>
          </Link>
        </div>

        <div className="grid grid-cols-12 px-52 py-16  h-full  gap-4">
          <div className="col-span-4 row-span-2 bg-amarelo rounded-lg p-4">
            <div className="mt-12 mb-6 w-full flex flex-col items-center justify-center gap-6">
              {usuario?.foto_de_perfil && (
                <img
                  className="w-40"
                  src={`${usuario?.foto_de_perfil}`}
                  alt=""
                />
              )}
              {!usuario?.foto_de_perfil && (
                <img className="w-40" src="img/perfil.png" alt="" />
              )}
              <span className="text-2xl  uppercase">{usuario?.username}</span>
            </div>
            </div>


          <div className="col-span-8 p-4  flex flex-col bg-amarelo rounded-lg">
            <h4 className="text-2xl  mb-2">Estatísticas</h4>

            <div className="flex flex-col justify-between h-full">
              <div className="flex  gap-1">
                <p>Jogando:</p> <span>{jogando}</span>
              </div>
              <div className="flex  gap-1">
                <p>Completos:</p> <span>{completo}</span>
              </div>
              <div className="flex  gap-1">
                <p>Quero jogar:</p> <span>{queroJogar}</span>
              </div>
              <div className="flex  gap-1">
                <p>Não aguento mais:</p>
                <span>{naoAguento}</span>
              </div>
            </div>
          </div>

          <div className="col-span-8 p-4  bg-amarelo rounded-lg">
            <h4 className="text-2xl  mb-2">Avaliação</h4>
            <div className="overflow-auto max-h-48">
              {usuario?.bio && <span>usuario?.bio</span>}

              {!usuario?.bio && (
                <span className="flex items-center gap-2">
                  Para avaliar seus jogos clique no botão   <Link href="/jogos"><button className="bg-preto text-branco rounded-lg p-2">Ver Jogos</button></Link>
                </span>
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </body>
  );
}
