import { BiSolidHome } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import styles from './Footer.module.css'

function Footer()
{
    return (
        <div className = { styles.footer }>
            <BiSolidHome className = { styles.icon } />
            <BiSolidUser className = { styles.icon }  />
            <BiSolidStar className = { `${styles.icon} ${styles.estrela}` }  />
            <BiSolidMessageRoundedDots className = { styles.icon }  />
            <BiSolidHeart className = { styles.icon }  />
        </div>
    )
}

export default Footer