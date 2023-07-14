"use client";
import { UsuarioDTO } from "@/model/usuario.dto";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderOn from "../components/HeaderOn";
import { JogosDTO } from "@/model/jogos.dto";

export default function Rating() {
  const [token, setToken] = useState("");
  const [jogo, setJogo] = useState(null as unknown as JogosDTO);

  const [status, setStatus] = useState("");
  const [nota, setNota] = useState("");


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage?.getItem("token") || "");
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/jogos/id/${localStorage.getItem("idJogo")}`)
      .then((result) => {
        setJogo(result.data.data);
      });
  }, []);

  const mandarAvaliacao = (status: string, nota: string) => {
    axios
      .post("http://localhost:3001/avaliacao", {
        usuario: localStorage.getItem("user"),
        jogo: localStorage.getItem("idJogo"),
        nota: nota,
        status: status
      })
      .then((response) => {
        alert(response.data.msg);
        window.location.href = "/jogos";
      });
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
          <div className="col-span-2 row-span-3">
            <picture>
              <img src={`http://localhost:3001/public/${jogo?.foto}`} alt="" />
            </picture>
          </div>
          <div className="col-span-4 bg-amarelo rounded-lg">
            <div className="flex flex-row justify-between">
              <div className="ml-8 mt-4">
                <h1 className="font-bold text-2xl">{jogo?.nome}</h1>
                <div className="flex flex-row mt-4">
                  <h2 className="">STATUS :</h2>
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">---</option>
                    <option value="jogando">JOGANDO</option>
                    <option value="completo">COMPLETO</option>
                    <option value="quero jogar">QUERO JOGAR</option>
                    <option value="dropped">DROPPED</option>
                  </select>
                </div>
                <div className="flex flex-row mt-2">
                  <h2>NOTA: </h2>
                  <select
                    name="nota"
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
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
              </div>
            </div>
          </div>
          <div className="col-span-4 row-span-2 bg-amarelo mt-2 rounded-lg">
            <div className="mx-8 my-4">
              <div className="flex flex-row justify-between items-center">
                <h1 className="font-bold text-lg">SINOPSE</h1>
                <div className="flex flex-row">
                  <h2 className="text-lg font-bold mr-2">Nota média:</h2>
                  <div className="bg-preto w-fit h-fit px-2 py-1 mr-1 flex flex-row items-center">
                    <picture>
                      <img
                        className="w-5 mr-2"
                        src="img/estrela.png"
                        alt="Uma estrela amarela"
                      />
                    </picture>
                    {jogo?.nota && <p className="text-branco">{jogo?.nota}</p>}
                    {!jogo?.nota && <p className="text-branco">...</p>}
                  </div>
                </div>
              </div>
              <p className="mt-4">{jogo?.sinopse}</p>
            </div>
            <button
              disabled={!nota || !status}
              onClick={() => {mandarAvaliacao(status, nota)}}
              className="bg-preto float-right w-24 text-branco m-2 p-2 rounded-lg"
            >
              ENVIAR
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </body>
  );
}
