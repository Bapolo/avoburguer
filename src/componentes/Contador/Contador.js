import Botao from '../Botao/Botao'
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
        <div className = "w-full flex items-center justify-end gap-4 p-4 mt-4">
            <p className="font-bold">Porções </p>
            <Botao texto = "-" onClick = { diminuir } className = "bg-red-600 py-2 px-4 rounded-xl text-white"/>
            { contador }
            <Botao texto = "+" onClick = { aumentar } className = "bg-red-600 py-2 px-4 rounded-xl text-white"/>
        </div>
    )
}

export default Contador