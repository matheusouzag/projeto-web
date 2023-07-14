"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import HeaderOn from "../components/HeaderOn";
import { UsuarioDTO } from "@/model/usuario.dto";
import axios from "axios";
import { JogosDTO } from "@/model/jogos.dto";

export default function Login() {
  const [filtroJogos, setFiltroJogos] = useState("Todos");
  const [usuario, setUsuario] = useState(null as unknown as UsuarioDTO);
  const [jogos, setJogos] = useState([]);

  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage?.getItem("token") || "");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(`http://localhost:3001/usuarios/${localStorage.getItem("user")}`)
        .then((result) => {
          setUsuario(result.data.data);
        });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios.get(`http://localhost:3001/jogos`).then((result) => {
        setJogos(result.data.data);
      });
    }
  }, []);

  function filtrarJogos(filtro: string) {
    setFiltroJogos(filtro);
    const params = {
      status: filtro,
    };
    if (filtro != "Todos") {
      axios
        .get(
          `http://localhost:3001/avaliacao/nota/${localStorage.getItem("user")}`,
          {params}
        )
        .then((result) => {
          setJogos(result.data.data);
        });
    } else {
      axios.get(`http://localhost:3001/jogos`).then((result) => {
        setJogos(result.data.data);
      });
    }
  }

  function editar(id: any) {
    localStorage.setItem("idJogo", `${id}`);
  }

  return (
    <body className="bg-preto">
      {!token && <Header />}
      {token && <HeaderOn />}

      <section className="bg-preto">
        <div className="bg-amarelo h-8 flex justify-between items-center px-52  text-lg mt-6">
          <button onClick={() => filtrarJogos("Todos")}>Todos</button>

          <button onClick={() => filtrarJogos("Todos")}>Jogando</button>

          <button onClick={() => filtrarJogos("Todos")}>Completos</button>

          <button onClick={() => filtrarJogos("Todos")}>Quero Jogar</button>

          <button onClick={() => filtrarJogos("Dropados")}>Dropados</button>

          <div className="flex justify-center items-center gap-2">
            <input className="h-6 w-32 rounded-lg" type="text" />
            <button onClick={() => filtrarJogos("Buscar")}>
              <img className="w-5 h-5" src="img/icone-buscar.png" alt="" />
            </button>
          </div>
        </div>

        <h4 className="text-center text-3xl my-2 text-branco">{filtroJogos}</h4>

        <div className="bg-amarelo rounded-lg  mx-52 h-[35em] p-8 flex flex-col gap-4 overflow-y-auto">
          {jogos.length == 0 && (
            <span className="text-center mt-56">
              Você não possui nenhum jogo em andamento.
            </span>
          )}
          {jogos?.map((jogo: JogosDTO) => (
            <div className="flex items-end gap-4">
              <img
                className="bg-preto w-28 h-32"
                src={`http://localhost:3001/public/${jogo.foto}`}
                alt=""
              />
              <div className="w-full">
                <Link href="/rating">
                  <button
                    onClick={() => {
                      editar(jogo?.id);
                    }}
                    className="float-right text-xl hover:text-branco"
                  >
                    EDIT
                  </button>
                </Link>

                <span className="text-xl">{jogo.nome}</span>
                <div className="bg-preto mt-4 w-fit h-fit px-2 py-1 mr-1 flex flex-row items-center">
                  <picture>
                    <img
                      className="w-5 mr-2"
                      src="img/estrela.png"
                      alt="Uma estrela amarela"
                    />
                  </picture>
                  {jogo.nota && <p className="text-branco">{jogo.nota}</p>}
                  {!jogo.nota && <p className="text-branco">...</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </body>
  );
}
