export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   address: string
}

export type Address = {
   cep: string
   logradouro: string,
   numero: number,
   complemento: string,
   bairro: string,
   cidade: string,
   estado: string
}