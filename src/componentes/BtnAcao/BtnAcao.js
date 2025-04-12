import styles from './BtnAcao.module.css'
import Botao from '../Botao/Botao.js'

function BtnAcao({ id,texto,tipo,classTip,dados,onClick })
{
    return (
        <div className = { styles.acao }>
            <p className = { styles.classTip }> {`KZ ${dados}`} </p>
            <Botao texto = {texto} onClick = {onClick} tipo = {tipo}/>
        </div>
    )
}

export default BtnAcao