import { BiSolidShare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styles from './Barra.module.css'

function Barra({children})
{
    const navegar = useNavigate()
    
    return (
        <div className = "fs-3">
            <BiSolidShare className = { styles.iconReturn } onClick = { () => navegar('/') }/>
            {children}
        </div>
    )
}

export default Barra