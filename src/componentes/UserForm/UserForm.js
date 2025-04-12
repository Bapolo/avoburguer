import { useState } from 'react'
import styles from './UserForm.module.css'

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
        <>
        <form onSubmit = {submit} className = { styles.userForm }>
                <label htmlFor = "nome">
                    Nome
                </label>
                    <input 
                        type = "text"
                        name = "nome"
                        value = {nome}
                        id = "nome"
                        placeholder = "digite o seu nome"
                        onChange = { (event) => setNome(event.target.value) }
                    />
                

                <label htmlFor = "email">
                    Email
                </label>
                    <input
                        type = "email"
                        name = "email"
                        value = {email}
                        id = "email"
                        placeholder = "digite o seu email"
                        onChange = { (event) => setEmail(event.target.value) }
                    />
                
                <label htmlFor = "endereco">
                    Endereço
                </label>
                    <input
                    type = "text"
                    name = "endereco"
                    value = {endereco}
                    id = "endereco"
                    placeholder = "municipio,Bairro,Rua"
                    onChange = { (event) => setEndereco(event.target.value)}
                />
             

                <label htmlFor = "password">
                    Senha
                </label>
                    <input 
                        type = "password"
                        name = "senha"
                        value = {senha}
                        placeholder = "senha"
                        id = "password"
                        onChange = { (event) => setSenha(event.target.value)}
                />
                
            </form>
        </>
    )
}

export default UserForm