import Botao from '../Botao/Botao'
import styles from './Contador.module.css'

function Contador({ contador,setContador })
{
    function aumentar()
    {
        setContador( (prevContador) => prevContador + 1)
    }

    function diminuir()
    {
        if (contador > 1)
        {
            setContador( (prevContador) => prevContador - 1)
        }
    }

    return (
        <div className = { styles.contador }>
            <p>Porções </p>
            <Botao texto = "-" onClick = { diminuir } tipo = "vermelho"/>
            { contador }
            <Botao texto = "+" onClick = { aumentar } tipo = "vermelho"/>
        </div>
    )
}

export default Contador