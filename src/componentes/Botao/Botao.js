import styles from './Botao.module.css'

function Boatao({ texto,onClick,tipo,style })
{
    return (
            <button type = "button" onClick = {onClick} className = {`${ styles.btn } ${ styles.tipo }`} style = {style}>{ texto }</button>
    )
}

export default Boatao