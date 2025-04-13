import Header from "../Header/Header"
import Barra from "../Barra/Barra"
import { BiSearchAlt2 } from "react-icons/bi";
import dados from '../../backend/dados.json'
import FormularioPagamento from "../FormularioPagamento/FormularioPagamento";
import { useNavigate,useParams } from 'react-router-dom'

function Checkout()
{
    const navegar = useNavigate()
    const { id,preco } = useParams()

    return (
        <div className = "">
            <Header />
            <Barra>
                <h1>Pagamento</h1>
                <BiSearchAlt2 />
            </Barra>
            <div className = "px-4 py-6">
                <div className="flex justify-between my-2">Pedido <p>{`${dados[id].nome}`}</p></div>
                <div className="flex justify-between my-2">Preço <p>{`KZ ${preco}`}</p></div>
                <div className="flex justify-between my-2">Imposto <p>{`KZ ${ preco * 0.1 }`}</p></div>
                <div className="flex justify-between my-2">Entrega <p>{`KZ ${ 1000}`}</p></div>
                <hr className="my-4"/>
                <div className="flex justify-between font-medium my-2">Total <p>{`KZ ${1000 + Number(preco) + (Number(preco) * 0.1)}`}</p></div>
                <div className="flex justify-between font-medium my-2">Tempo de entrega <p>{"20 min"}</p></div>
            </div>

            <FormularioPagamento />
        </div>
    )
}

export default Checkout