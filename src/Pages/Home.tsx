import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import getMovies from "../services/movie.service"
import axios from "axios"

// const Homes = [
//     {
//         id: 1,
//         src: "https://upload.wikimedia.org/wikipedia/id/2/20/Cek_Toko_Sebelah.jpg",
//         category: "Drama, Family, ID",
//         title: "Cek Toko Sebelah (2016)",
//     },
//     {
//         id: 2,
//         src: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
//         category: "Action, Crime, Drama",
//         title: "Joker (2019)"
//     },
//     {
//         id: 3,
//         src: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
//         "category": "Action, Adventure, Drama",
//         title: "The Lion King (2019)"
//     }
// ]


const Home: React.FC = () => {
    const [Homes, setUsers] = useState([])
    const [data, setData] = useState([])
    const MAX_TITLE_LENGTH = 20;
    const apiURL = 'https://api.themoviedb.org/3/movie/now_playing'

    const headers = { 'authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I' }
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I'

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(apiURL, {headers});
                setData(response.data)
            } catch (error) {
                console.log("Terjadi Kesalahan : ", error)
            }
        }
        fetchData()
    }, [accessToken])

    const fetchUserData = () => {
        fetch("https://fakestoreapi.com/products?limit=5", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [accessToken])
    return (
        <div>
            <Navbar />
            <div className="container m-10">
                <div className="flex gap-x-5">
                    {Homes.map((item, index) => (
                        <div className="">
                            <Card
                                key={index}
                                src={item.image}
                                category={item.category}
                            >{item.title.length > MAX_TITLE_LENGTH
                                ? `${item.title.slice(0, MAX_TITLE_LENGTH)}...`
                                : item.title}</Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Home
