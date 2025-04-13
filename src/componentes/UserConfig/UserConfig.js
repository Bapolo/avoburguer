import Barra from "../Barra/Barra"
import UserForm from "../UserForm/UserForm"
import Botao from '../Botao/Botao'
import { BsBoxArrowLeft } from "react-icons/bs";

function UserConfig() {
    return (
        <div className="bg-red-600 h-vh ">
            <Barra />
            <div className="bg-white p-4 pt-20 mt-25 rounded-tl-4xl rounded-tr-4xl relative ">
                <img src={`${process.env.PUBLIC_URL}/imagens/user/user.png`} alt="Imagem do usuario" width={90} className="absolute -top-10 left-35"/>
                <UserForm />
                <hr className="my-5"/>

                <div className="flex justify-center items-center gap-4">
                    <Botao texto="Editar Perfil" tipo="preto" className="py-4 px-6 bg-black text-white rounded-xl font-bold"/>
                    <Botao texto="Sair" className="flex gap-2 items-center py-4 px-6 rounded-xl border-2 border-red-600 text-red-600 font-bold"><BsBoxArrowLeft /></Botao>
                </div>
            </div>
        </div>
    )
}

export default UserConfig