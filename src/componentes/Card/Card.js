import dados from '../../backend/dados.json'
import { useNavigate } from 'react-router-dom'
import Classificacao from '../Classificacao/Classificacao'

function Card()
{
    const navegar = useNavigate()

    return (
        <>
            {dados.map((dado,index) => (
                <div key = {dado.id} className = "flex flex-col justify-center items-center bg-gray-100 rounded-2xl py-2 shadow-xl/20" onClick = { () => navegar(`/detalhes/${index}`)}>
                    <img src = {`${process.env.PUBLIC_URL}/${dado.urlImage}`} alt = {dado.descricao} className='max-w-35'/>
                    <h3 className='font-bold'> { dado.nome } </h3>
                    <p> { dado.descricao } </p>
                    <Classificacao classificacao = { dado.classificacao }/>
                </div>
            ))}
        </>
    )
}

export default Card