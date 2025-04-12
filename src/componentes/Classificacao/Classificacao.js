
import { BiSolidStar } from "react-icons/bi";

function Classificacao({classificacao, ...rest})
{
    return (
        <p className="flex justify-center items-center gap-2">         
            <BiSolidStar  className = "text-amber-300" {...rest}/> { classificacao }
        </p>
    )
}

export default Classificacao