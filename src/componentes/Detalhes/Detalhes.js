import Header from "../Header/Header"
import Barra from "../Barra/Barra"
import Informacoes from "../Informacoes/Informacoes"
import styles from './Detalhes.module.css'
import Classificacao from "../Classificacao/Classificacao"
import { useParams } from 'react-router-dom'
import dados from '../../backend/dados.json'
import { BiSearchAlt2 } from "react-icons/bi";

function Detalhes()
{

    const { id } = useParams()

    return (
        <div className = { styles.detalhes }>
            <Header />
            <Barra>
                <Classificacao classificacao = {dados[id].classificacao}/>
                <BiSearchAlt2 style = {{color: "gray"}}/>
            </Barra>
            <Informacoes />
        </div>
    )
}

export default Detalhes