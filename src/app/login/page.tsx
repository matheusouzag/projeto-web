"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (values: { email: any; senha: any }) => {
        axios
            .post("http://localhost:3001/usuarios/login", {
                email: values.email,
                senha: values.senha,
            })
            .then((response) => {
                alert("Usuário logado com sucesso");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.data.id);
                window.location.href = "/";
            })
            .catch((error) => {
                setErrorMessage("Email ou senha incorretos");
            });
    };

    const initialValues = {
        email: "",
        senha: "",
    };

    return (
        <section className="bg-preto h-screen flex justify-center items-center">
            <div className="bg-amarelo flex flex-col rounded-2xl">
                <h1 className="mx-48 mt-5 font-bold text-lg text-center">
                    LOGIN
                </h1>
                <Formik initialValues={initialValues} onSubmit={handleLogin}>
                    <Form>
                        <div className="mt-10">
                            <div className="flex flex-col max-w-md px-12 mb-4">
                                <label className="mb-2" htmlFor="email">
                                    E-mail
                                </label>
                                <Field
                                    className="border border-branco rounded-lg h-10"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="flex flex-col max-w-md px-12 ">
                                <label className="mb-2" htmlFor="password">
                                    Senha
                                </label>
                                <Field
                                    className="border border-branco rounded-lg h-10"
                                    name="senha"
                                    placeholder="Senha"
                                />
                            </div>
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2 mx-12">
                                {errorMessage}
                            </p>
                        )}
                        <Link className="text-end" href="/senha">
                            <button className="mr-12 text-xs mt-1">
                                Esqueci a senha
                            </button>
                        </Link>
                        <div className="flex justify-center mt-16 mb-10">
                            <Link href="/cadastro">
                                <button className="border-2 border-preto bg-preto rounded-lg text-branco px-5 py-5 flex items-center h-5 mr-20 text-sm">
                                    CADASTRE-SE
                                </button>
                            </Link>

                            <button
                                type="submit"
                                className="border-2 border-preto bg-preto rounded-lg text-branco px-10 py-5 flex items-center h-5 text-sm"
                            >
                                ENTRAR
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}
