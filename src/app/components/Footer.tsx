export default function Footer() {
    return (
        <footer className="bg-amarelo h-40 mt-10 flex flex-row px-96 items-center justify-between ">
            <picture className="w-52">
                <img
                    src="img/logo_Gamebald.png"
                    alt="Logo do site Gamebald, um G bem grande com uma coroa"
                />
            </picture>
            <div className="flex flex-row items-center">
                <p>REDES SOCIAIS: </p>
                <a target="_blank" href="https://discord.com/">
                    <button className="ml-2">
                        <picture>
                            <img
                                className="w-14"
                                src="img/discord.png"
                                alt="Icone da rede Discord"
                            />
                        </picture>
                    </button>
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                    <button className="ml-2">
                        <picture>
                            <img
                                className="w-14"
                                src="img/instagram.png"
                                alt="Icone da rede social Instagram"
                            />
                        </picture>
                    </button>
                </a>
                <a target="_blank" href="https://www.facebook.com/">
                    <button className="ml-2">
                        <picture>
                            <img
                                className="w-14"
                                src="img/facebook.png"
                                alt="Icone da rede social Facebook"
                            />
                        </picture>
                    </button>
                </a>
                <a target="_blank" href="https://twitter.com/">
                    <button className="ml-2">
                        <picture>
                            <img
                                className="w-14"
                                src="img/twitter.png"
                                alt="Icone da rede social "
                            />
                        </picture>
                    </button>
                </a>
            </div>
        </footer>
    );
}
