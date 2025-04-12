import { BiCheckCircle } from "react-icons/bi";
import Botao from '../Botao/Botao'
import { useNavigate } from 'react-router-dom'
import styles from './Sucesso.module.css'

function Sucesso()
{
    const navegar = useNavigate()

    return(
        <div className = { styles.sucesso }>
            <div className = { styles.suce }>
                <BiCheckCircle style = {{fontSize: 6 + "em", color: "#DD1C1A"}}/>
                <h1>Sucesso!</h1>
                <p>Seu pagamento foi bem-sucedido. Um comprovante foi enviado para seu celular,cheque seu e-mail.</p>
                <Botao texto = "Voltar" tipo = "vermelho" onClick = { () => navegar('/') }/>
            </div>
        </div>
    )
}

export default Sucesso