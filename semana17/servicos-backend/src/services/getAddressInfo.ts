import axios from "axios";
import { Address } from "../types";


export const getAddressInfo = async (cep: string, numero: number, complemento: string): Promise<Address> => {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return {
        cep: response.data.cep,
        logradouro: response.data.logradouro,
        numero: numero,
        complemento: complemento,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf,
    }

}

