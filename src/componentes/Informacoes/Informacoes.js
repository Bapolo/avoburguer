import { useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import dados from '../../backend/dados.json'
import Contador from '../Contador/Contador'
import styles from './Informacoes.module.css'
import BtnAcao from '../BtnAcao/BtnAcao'

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
        <div key = {dados[id].id} style = {{paddingBottom: 1+"em"}}>
            <img src = {`${process.env.PUBLIC_URL}/${dados[id].urlImage}`} alt = { dados[id].descricao }/>
            <h2 className = { styles.infoTitulo } > { dados[id].nome } </h2>
            <h3 className = { styles.infoSubtitulo } >Peça sua comida favorita! </h3>
            <p className = { styles.info } > { dados[id].informacao }</p>

            <Contador contador = { contador } setContador = { setContador }/>
            <BtnAcao dados = { preco } texto = "Peça agora!" tipo = "preto" classTip = "preco" onClick = {() => navegar(`/checkout/${id}/${preco}`)}/>
        </div>
    )
}

export default Informacoes