"use client";
import { UsuarioDTO } from "@/model/usuario.dto";
import axios from "axios";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [usuario, setUsuario] = useState(null as unknown as UsuarioDTO);

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

    const handleRegister = (values: UsuarioDTO) => {
        axios
            .put(`http://localhost:3001/usuarios/config/${usuario?.id}`, {
                username: values.username,
                bio: values.bio,
            })
            .then((response) => {
                alert(response.data.msg);
            });
    };

    const initialValues = {
        username: usuario?.username,
        bio: "",
    } as UsuarioDTO;
    return (
        <section className="bg-preto h-screen flex justify-center items-center">
            <div className="bg-amarelo flex flex-col rounded-2xl">
                <h1 className="mx-48 mt-5 font-bold text-lg text-center">
                    CONFIGURAÇÕES
                </h1>
                <Formik initialValues={initialValues} onSubmit={handleRegister}>
                    <Form>
                        <div className="mt-10">
                            <div className="flex flex-col px-12 ">
                                <label className="mb-2" htmlFor="username">
                                    Username
                                </label>
                                <Field
                                    className="border border-branco rounded-lg h-10"
                                    id="username"
                                    name="username"
                                    type="text"
                                />
                            </div>

                            <div className="flex flex-col px-12 mt-4">
                                <label className="mb-2" htmlFor="biografia">
                                    Biografia
                                </label>
                                <Field
                                    className="border border-branco rounded-lg h-40"
                                    id="bio"
                                    name="bio"
                                    type="text"
                                />
                            </div>

                        </div>

                        <div className="flex justify-between mt-16 mb-10 mx-12">
                            <Link href="/">
                                <button className="border-2 border-preto bg-preto rounded-lg text-branco px-6 py-5 flex items-center h-5 mr-24 text-sm">
                                    CANCELAR
                                </button>
                            </Link>

                            <button
                                type="submit"
                                className="border-2 border-preto bg-preto rounded-lg text-branco px-5 py-5 flex items-center h-5 text-sm"
                            >
                                CONFIRMAR
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}
