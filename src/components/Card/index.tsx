import { Link } from "react-router-dom"
import Button from "./Button"
import Image from "./Image"

interface CardProps {
    children: string
    category: string
    src: string
}

const Card = (props: CardProps) => {

    const { children = "Card", category, src} = props;

    return (
        <div className={`Card bg-slate-700 rounded-md`}>
            <Link to="/Detail">
                <Image src={src} alt="movie-poster"/>
                <div className="text-center text-white ">
                    <h1 className="text-xl font-bold ">{children}</h1>
                    <p>{category}</p>
                </div>
                <div className="flex flex-col items-center m-3">
                    <Button bgButt="bg-slate-500">Trailer</Button>
                    <Button bgButt="bg-red-500">Nonton</Button>
                    <Button bgButt="bg-green-400">Add To Favorite</Button>
                </div>
            </Link>
        </div>
    )
}

export default Card