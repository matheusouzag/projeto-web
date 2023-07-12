import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Perfil() {
    return (
        <body className="bg-preto">
            <Header />

            <section className="bg-preto">
                <div className="bg-amarelo h-8 flex justify-around px-52 text-lg my-6">
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

                <div className="grid grid-cols-12 px-52  h-full  gap-4">
                    <div className="col-span-4 row-span-2 bg-amarelo rounded-lg p-4">
                        <button className="float-right  w-8"><img src="img/icone-config.png" alt=""/></button>
                        <div className="mt-12 mb-6 w-full flex flex-col items-center justify-center gap-6">
                        <img className="w-40" src="img/foto-perfil.png" alt="" />
                        <span className="text-2xl  uppercase">akuman</span>
                        </div>
                        
                        <span className="text-sm  uppercase">Amigos</span>

                        <div className="grid grid-cols-12 gap-4 pr-1 h-36 overflow-auto mt-2">
                            <div className="col-start-1 col-span-3  bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>

                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                            <div className="col-span-3 h-16 bg-preto rounded-lg"></div>
                        </div>
                        
                        


                    </div>

                    <div className="col-span-8 p-4  flex flex-col bg-amarelo rounded-lg">
                        <h4 className="text-2xl  mb-2">Estatísticas</h4>

                        <div className="flex flex-col justify-between h-full">
                        <div className="flex gap-1"><p>Média de notas:</p> <span>3,5</span></div>
                        <div className="flex  gap-1"><p>Jogando:</p> <span>10</span></div>
                        <div className="flex  gap-1"><p>Completos:</p> <span>30</span></div>
                        <div className="flex  gap-1"><p>Quero jogar:</p> <span>5</span></div>
                        <div className="flex  gap-1"><p>Não aguento mais:</p> <span>15</span></div>

                        </div>
                        

                    </div>

                    <div className="col-span-8 p-4  bg-amarelo rounded-lg">
                    <h4 className="text-2xl  mb-2">Biografia</h4>
                    <div className="overflow-auto max-h-48">
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique molestiae dolore cupiditate, minima eveniet, aspernatur earum ad aliquid, necessitatibus asperiores dignissimos maiores voluptatibus reprehenderit dicta quis tempore facere dolores repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit, reiciendis non ex minima labore, optio temporibus, numquam eaque officia nihil corrupti distinctio quibusdam! Itaque quas quam doloremque tempore perferendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam esse inventore praesentium odit nesciunt nihil rerum quaerat, maxime officiis numquam totam, optio est mollitia laboriosam. Nisi perspiciatis tenetur velit labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eos, corporis ad nulla totam magni repellendus temporibus aliquam deserunt voluptatem. Dolorum rerum repudiandae reprehenderit nihil non deserunt doloremque harum illum!</span>                    
                        </div>

                    </div>

                    <div className="col-span-12  p-4  bg-amarelo rounded-lg">
                        <span className="text-2xl">Lista de jogos completos</span>
                        <div className="grid grid-cols-8 mt-2 gap-2 overflow-x-auto h-32">
                            <div className="h-32 rounded-lg bg-preto"></div>
                            <div className="h-32 rounded-lg bg-preto"></div>
                            <div className="h-32 rounded-lg  bg-preto"></div>
                            <div className="h-32 rounded-lg bg-preto"></div>
                            <div className="h-32 rounded-lg bg-preto"></div>
                            <div className="h-32 rounded-lg  bg-preto"></div>
                            <div className="h-32 rounded-lg  bg-preto"></div>
                           <div className="flex justify-center items-center"><button>+ Ver Mais</button></div>
                        </div>
                    </div>
                   
                     
                </div>
            </section>

            <Footer />
        </body>
    );
}