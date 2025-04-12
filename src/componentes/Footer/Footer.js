import { BiSolidHome } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

function Footer()
{
    return (
        <div className = "bg-red-600 flex gap-8 justify-center items-center text-white text-4xl py-2 px-4 ">
            <BiSolidHome className = "" />
            <BiSolidUser className = ""  />
            <BiSolidStar className = "text-7xl border-4 border-white rounded-full p-1"   />
            <BiSolidMessageRoundedDots className = ""  />
            <BiSolidHeart className = ""  />
        </div>
    )
}

export default Footer