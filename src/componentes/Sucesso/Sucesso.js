import { BiCheckCircle } from "react-icons/bi";
import Botao from '../Botao/Botao'
import { useNavigate } from 'react-router-dom'
function Sucesso()
{
    const navegar = useNavigate()

    return(
        <div className = "bg-gray-300 h-full w-full p-4">
            <div className = "flex flex-col justify-center items-center gap-2 p-4 bg-white rounded-2xl shadow-xl/20">
                <BiCheckCircle className="text-9xl text-red-600"/>
                <h1 className="text-5xl font-bold text-red-600">Sucesso!</h1>
                <p className="text-xl text-black my-4">Seu pagamento foi bem-sucedido. Um comprovante foi enviado para seu celular,cheque seu e-mail.</p>
                <Botao texto = "Voltar" tipo = "vermelho" onClick = { () => navegar('/') } className="py-4 px-10 bg-red-600 text-white rounded-2xl my-4 font-medium"/>
            </div>
        </div>
    )
}

export default Sucesso