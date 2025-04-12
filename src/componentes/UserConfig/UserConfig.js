import Barra from "../Barra/Barra"
import UserForm from "../UserForm/UserForm"
import Botao from '../Botao/Botao'
import styles from './UserConfig.module.css'

function UserConfig()
{
    return (
        <div className = { styles.userConfig }>
            <Barra />
            <div className = { styles.detalhesConfig }>
                <img src = {`${process.env.PUBLIC_URL}/imagens/user/user.png`} alt = "Imagem do usuario" width = {90} />
                <UserForm />                
                <hr/>
            
                <Botao texto = "Editar Perfil" tipo = "preto" />
                <Botao texto = "Sair"  style = {{backgroundColor: "white", border: "2px solid #DD1C1A", color: "#DD1C1A"}}/>
            </div>
        </div>
    )
}

export default UserConfig