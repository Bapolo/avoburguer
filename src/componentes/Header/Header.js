import { useNavigate } from 'react-router-dom'

function Header()
{
    const navegar = useNavigate()

    return (
        <div className = "flex justify-between items-center py-0 px-4">
            <img src = {`${process.env.PUBLIC_URL}/imagens/logo.png`} alt = "Logotipo da hamburgaria" width = "100" onClick = { () => navegar('/') } />
            <h1 onClick = { () => navegar('/') } className ="text-4xl font-thin">Donda</h1>
            <img src = {`${process.env.PUBLIC_URL}/imagens/user/user.png`} alt = "Imagem do usuário" width = "60" onClick = { () => navegar('/configuracao') }/>
        </div>
    )
}

export default Header