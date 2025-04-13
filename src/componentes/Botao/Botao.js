

function Botao({ texto,onClick, className,children })
{
    return (
            <button type = "button" onClick = {onClick} className={ className }>{ texto }{ children }</button>
    )
}

export default Botao