import Card from "../components/Card"
import Navbar from "../components/Navbar"

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="m-10 content-start text-center">
                <div className="flex gap-x-5">
                    <div className="w-80">
                        <Card bg="bg-blue-200">CTK1</Card>
                    </div>
                    <div className="w-80">
                        <Card bg="bg-red-200">CTK2</Card>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home
