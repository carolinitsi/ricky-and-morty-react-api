import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const listaPersonagens = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const mostraPersonagem = async(url,setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const retornaPersonagem = async(url) => {
    const resposta = await api.get(url)
    return resposta.data;
}