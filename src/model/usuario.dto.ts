export interface UsuarioDTO{
    id: number,
    nome: string,
    email: string,
    senha:string,
    username: string,
    bio?: string,
    foto_de_perfil?: string,
    avaliacao: string[],
    amigo: string[],
    amigoDe: string[],
}