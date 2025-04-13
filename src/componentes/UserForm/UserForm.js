import { useState } from 'react'

function UserForm()
{
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [endereco,setEndereco] = useState("")
    const [senha,setSenha] = useState("")

    function submit(event)
    {
        event.preventDefult()
    }

    return (
    <form onSubmit = {submit} className = "flex flex-col gap-8 mb-8">
            <label htmlFor = "nome" className = "flex flex-col gap-2 text-xl">
                Nome
                <input 
                    type = "text"
                    name = "nome"
                    value = {nome}
                    id = "nome"
                    placeholder = "digite o seu nome"
                    onChange = { (event) => setNome(event.target.value) }
                    className="p-2 bg-gray-200 rounded-2xl"
                />
            </label>
                
            <label htmlFor = "email" className = "flex flex-col gap-2 text-xl">
                Email
                <input
                    type = "email"
                    name = "email"
                    value = {email}
                    id = "email"
                    placeholder = "digite o seu email"
                    onChange = { (event) => setEmail(event.target.value) }
                    className="p-2 bg-gray-200 rounded-2xl"
                />
            </label>
                
            <label htmlFor = "endereco" className = "flex flex-col gap-2 text-xl">
                Endereço
                <input
                    type = "text"
                    name = "endereco"
                    value = {endereco}
                    id = "endereco"
                    placeholder = "municipio,Bairro,Rua"
                    onChange = { (event) => setEndereco(event.target.value)}
                    className="p-2 bg-gray-200 rounded-2xl"
                />
            </label>

            <label htmlFor = "password" className = "flex flex-col gap-2 text-xl">
                Senha
                <input 
                    type = "password"
                    name = "senha"
                    value = {senha}
                    placeholder = "senha"
                    id = "password"
                    onChange = { (event) => setSenha(event.target.value)}
                    className="p-2 bg-gray-200 rounded-2xl"
                />
            </label>                
            
        </form>
    )
}

export default UserForm