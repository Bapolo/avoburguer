import { useState,useEffect } from 'react'
import styles from './FormularioPagamento.module.css'
import Visa from '../Visa/Visa'

function FormularioPagamento()
{
    const [opcaoSelecionada,setOpcaoSelecionada] = useState("iban")
    const [iban,setIban] = useState(false)
    const [cash,setCash] = useState(false)
    const [visa,setVisa] = useState(false)

    function enviar(event)
    {
        event.preventDefault();
    }

    function selecionarOpcao(event)
    {
        setOpcaoSelecionada(event.target.value)
    }

    useEffect(() => 
    {
        if (opcaoSelecionada === "iban")
        {
            setIban(true)
            setCash(false)
            setVisa(false)
        }
        else if (opcaoSelecionada === "cash")
        {
            setIban(false)
            setCash(true)
            setVisa(false)
        }
        else if(opcaoSelecionada === "visa")
        {
            setIban(false)
            setCash(false)
            setVisa(true)
        }
    }, [opcaoSelecionada])

    return (
        <div className = { styles.formularioPagamento }>
            <h2>Método de pagamento</h2>
            <form onSubmit = {enviar} >
                <label>
                    <input
                        type = "radio" 
                        name = "iban"
                        value = "iban"
                        checked = {opcaoSelecionada === 'iban'}
                        onChange = {selecionarOpcao}
                    />
                    <b className = { styles.texto }>Iban</b>
                </label>

                <label>
                    <input 
                        type = "radio"
                        name = "cash"
                        value = "cash"
                        checked = {opcaoSelecionada === 'cash'}
                        onChange = {selecionarOpcao}
                    /> 
                    <b className = { styles.texto }>Multicaixa - Cash</b>
                </label>

                <label>
                    <input 
                    type = "radio"
                    name = "visa"
                    value = "visa"
                    checked = {opcaoSelecionada === "visa"}
                    onChange = {selecionarOpcao}
                    />
                    <b className = { styles.texto }>Visa - MasterCard</b>
                </label>
            </form>
            <div className = { styles.apresentacaoDaOpcaoSelecionada }>
                {iban && <p>Faça a transferência o seguinte iban <b>0040 0000 1223 8374 9832 1</b> e mande o comprovante para o nosso Whatsapp</p>}
                {cash && <p>O pagamento deve ser feito na entrega com valores em especie ou com um cartão multicaixa</p>}
                {visa && <Visa />}
            </div>
        </div>
    )
}

export default FormularioPagamento