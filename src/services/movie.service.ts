import axios from "axios";

const getMovies = () => {
    axios
    .get("'https://fakestoreapi.com/products")
    .then((res) => {
        console.log("Berhasil", res)
    })
    .catch((err) => {
        console.log("Kesalahan", err)
    })
}

export default getMovies