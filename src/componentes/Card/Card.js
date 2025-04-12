import dados from '../../backend/dados.json'
import { BiSolidStar } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

function Card()
{
    const navegar = useNavigate()

    return (
        <>
            {dados.map((dado,index) => (
                <div key = {dado.id} className = "flex flex-col justify-center items-center bg-gray-100 rounded-2xl py-2 shadow-xl" onClick = { () => navegar(`/detalhes/${index}`)}>
                    <img src = {`${process.env.PUBLIC_URL}/${dado.urlImage}`} alt = {dado.descricao} className='max-w-35'/>
                    <h3 className='font-bold'> { dado.nome } </h3>
                    <p> { dado.descricao } </p>
                    <p className='flex gap-2 items-center'> <BiSolidStar className = "text-amber-300" /> { dado.classificacao }</p>
                </div>
            ))}
        </>
    )
}

export default Card