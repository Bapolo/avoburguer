import { useState,useEffect } from 'react'
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
        <div className = "py-2 px-4">
            <h2 className="text-3xl font-medium mb-4">Método de pagamento</h2>

            <form onSubmit = {enviar} className="flex flex-wrap items-center gap-4 my-6">
                <label className="flex justify-center items-center gap-1 mb-4">
                    <input
                        type = "radio" 
                        name = "iban"
                        value = "iban"
                        checked = {opcaoSelecionada === 'iban'}
                        onChange = {selecionarOpcao}
                    /> 
                    <p className="font-xl m-0">Iban</p>                    
                </label>

                <label className="flex justify-center items-center gap-4">
                    <input 
                        type = "radio"
                        name = "cash"
                        value = "cash"
                        checked = {opcaoSelecionada === 'cash'}
                        onChange = {selecionarOpcao}
                    /> 
                    <p>Cartão - Cash </p>                   
                </label>

                <label className="flex justify-center items-center gap-4">
                    <input 
                    type = "radio"
                    name = "visa"
                    value = "visa"
                    checked = {opcaoSelecionada === "visa"}
                    onChange = {selecionarOpcao}
                    /> 
                    <p>Internacional</p>                    
                </label>
            </form>
            <div className = "mt-5 text-xl">
                {iban && <p>Faça a transferência o seguinte iban <b>0040 0000 1223 8374 9832 1</b> e mande o comprovante para o nosso Whatsapp</p>}
                {cash && <p>O pagamento deve ser feito na entrega com valores em especie ou com um cartão multicaixa</p>}
                {visa && <Visa />}
            </div>
        </div>
    )
}

export default FormularioPagamento