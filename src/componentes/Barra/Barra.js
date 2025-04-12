import { BiSolidShare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Barra({children})
{
    const navegar = useNavigate()
    
    return (
        <div className = "text-3xl flex justify-between items-center py-2 px-4">
            <BiSolidShare className = "text-gray-400 text-4xl" onClick = { () => navegar('/') }/>
            {children}
        </div>
    )
}

export default Barra