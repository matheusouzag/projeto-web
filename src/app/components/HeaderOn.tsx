import { UsuarioDTO } from "@/model/usuario.dto";
import axios, { AxiosHeaders } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderOn() {
   const [usuario, setUsuario] = useState(null as unknown as UsuarioDTO)
    
  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(`http://localhost:3001/usuarios/${localStorage.getItem("user")}`)
        .then((result) =>{
            setUsuario(result.data.data)
        });
    }
  }, []);

  return (
    <header className="bg-amarelo h-18">
      <div className="flex flex-row justify-around items-center">
        <picture className="w-10">
          <img src="img/gamebald.png" alt="Logo do G" />
        </picture>

        <div className="flex justify-center">
          <p className=" px-5 py-4 h-5 flex items-center border-black">
           {usuario?.username}
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
