
import { BiSolidStar } from "react-icons/bi";
import styles from './Classificacao.module.css'

function classificacao({classificacao})
{
    return (
        <p style = {{display: "flex", alignItems: "center", gap: 0.3+"em", color: "gray"}}>         <BiSolidStar  className = { styles.iconStar } /> { classificacao }
        </p>
    )
}

export default classificacao