import { Link } from "react-router-dom"

interface CardProps {
    children: string
    bg: string
}

const Card = (props: CardProps) => {

    const { children = "Card", bg = "bg-blue-400" } = props;

    return (
        <div className={`Card ${bg}`}>
            <Link to="/Detail">
                <div className="">
                    <img
                        className="w-auto h-1/2"
                        src="https://upload.wikimedia.org/wikipedia/id/2/20/Cek_Toko_Sebelah.jpg" alt="Joker-movie-poster" />
                </div>
                <div className="text-center text-5xl font-normal">
                    <h1>{children}</h1>
                </div>
            </Link>
        </div>
    )
}

export default Card