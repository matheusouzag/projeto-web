"use client";
import axios from "axios";
import { useRef } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import Link from "next/link";

export default function Cadastro() {
  const handleRegister = (values: {
    nome: any;
    username: any;
    email: any;
    senha: any;
  }) => {
    axios
      .post("http://localhost:3001/usuarios", {
        nome: values.nome,
        username: values.username,
        email: values.email,
        senha: values.senha,
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
    <section className="bg-preto h-screen flex justify-center items-center">
      <div className="bg-amarelo flex flex-col rounded-2xl">
        <h1 className="mx-48 mt-5 font-bold text-lg text-center">CADASTRO</h1>

        <Formik initialValues={initialValues} onSubmit={handleRegister}>
          <Form>
            <div className="mt-10">
              <div className="flex flex-col px-12 mb-4">
                <label className="mb-2" htmlFor="nome">
                  Nome
                </label>
                <Field
                  className="border border-branco rounded-lg h-10"
                  name="nome"
                  placeholder="Nome"
                />
              </div>

              <div className="flex flex-col px-12 ">
                <label className="mb-2" htmlFor="username">
                  Username
                </label>
                <Field
                  className="border border-branco rounded-lg h-10"
                  name="username"
                  placeholder="Username"
                />
              </div>

              <div className="flex flex-col px-12 mt-4">
                <label className="mb-2" htmlFor="email">
                  E-mail
                </label>
                <Field
                  className="border border-branco rounded-lg h-10"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col px-12 mt-4">
                <label className="mb-2" htmlFor="senha">
                  Senha
                </label>
                <Field
                  className="border border-branco rounded-lg h-10"
                  name="senha"
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="flex justify-between mt-16 mb-10 mx-12">
              <Link href="/login">
                <button
                  type="submit"
                  className="border-2 border-preto bg-preto rounded-lg text-branco px-10 py-5 flex items-center h-5 mr-24 text-sm"
                >
                  LOGIN
                </button>
              </Link>
              <button
                type="submit"
                className="border-2 border-preto bg-preto rounded-lg text-branco px-5 py-5 flex items-center h-5 text-sm"
              >
                CADASTRE-SE
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
