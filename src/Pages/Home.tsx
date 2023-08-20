import Card from "../components/Card"
import Navbar from "../components/Navbar"

const Homes = [
    {
        id: 1,
        src: "https://upload.wikimedia.org/wikipedia/id/2/20/Cek_Toko_Sebelah.jpg",
        category: "Drama, Family, ID",
        title: "Cek Toko Sebelah (2016)",
    },
    {
        id: 2,
        src: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
        category: "Action, Crime, Drama",
        title: "Joker (2019)"
    },
    {
        id: 3,
        src: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
        "category": "Action, Adventure, Drama",
        title: "The Lion King (2019)"
    }
]

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="container m-10">
                <div className="flex gap-x-5">
                    {Homes.map((home) => (
                        <div className="">
                            <Card
                                src={home.src}
                                category={home.category}
                                >{home.title}</Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Home
