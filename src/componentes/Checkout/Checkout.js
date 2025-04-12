import Header from "../Header/Header"
import Barra from "../Barra/Barra"
import { BiSearchAlt2 } from "react-icons/bi";
import dados from '../../backend/dados.json'
import FormularioPagamento from "../FormularioPagamento/FormularioPagamento";
import BtnAcao from "../BtnAcao/BtnAcao";
import styles from './Checkout.module.css'
import { useNavigate,useParams } from 'react-router-dom'

function Checkout()
{
    const navegar = useNavigate()
    const { id,preco } = useParams()

    return (
        <div className = { styles.checkout }>
            <Header />
            <Barra>
                <h1 style = {{fontSize: 2+"em", fontWeight: 500}}>Pagamento</h1>
                <BiSearchAlt2 style = {{color: "gray"}} />
            </Barra>
            <div className = { styles.info }>
                <div>Pedido <p>{`${dados[id].nome}`}</p></div>
                <div>Preço <p>{`KZ ${preco}`}</p></div>
                <div>Imposto <p>{`KZ ${ preco * 0.1 }`}</p></div>
                <div>Entrega <p>{`KZ ${ 1000}`}</p></div>
                <hr />
                <div style = {{fontWeight: "500"}}>Total <p>{`KZ ${1000 + Number(preco) + (Number(preco) * 0.1)}`}</p></div>
                <div style = {{fontWeight: "500"}}>Tempo de entrega <p>{"20 min"}</p></div>
            </div>

            <FormularioPagamento />

            <BtnAcao dados = {`${1000 + Number(preco) + (Number(preco) * 0.1)} `} texto = "Peça agora!" tipo = "preto" classTip = "precoBackgroundTransparente" onClick = { () => navegar('/sucesso')}/>
        </div>
    )
}

export default Checkout