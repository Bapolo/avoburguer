import { useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import dados from '../../backend/dados.json'
import Contador from '../Contador/Contador'
import Botao from '../Botao/Botao'

function Informacoes()
{
    const { id } = useParams()
    const navegar = useNavigate()
    const [contador,setContador] = useState(1)
    const [preco,setPreco] = useState(0)

    useEffect(() =>
    {
        setPreco(dados[id].preco  * contador)
    }, [contador,id])

    return (
        <div key = {dados[id].id} className="flex flex-col items-center gap-3 text-gray-800 mt-3 py-6 px-4 ">
            <img src = {`${process.env.PUBLIC_URL}/${dados[id].urlImage}`} alt = { dados[id].descricao }/>

            <h2 className="text-3xl font-bold" > { dados[id].nome } </h2>
            <h3  className="text-xl font-medium">Peça sua comida favorita! </h3>
            <p> { dados[id].informacao }</p>

            <Contador contador = { contador } setContador = { setContador }/>

            <div className="flex justify-center items-center gap-5 mt-4">
                <p className="bg-red-600 text-white p-4 rounded-xl font-medium shadow-xl/20">{preco.toLocaleString("fr-FR")} KZ</p>
                <Botao texto = "Peça agora!" onClick = {() => navegar(`/checkout/${id}/${preco}`)} className="bg-black text-white p-4 rounded-xl font-bold shadow-xl/20"/>
            </div>
        </div>
    )
}

export default Informacoes