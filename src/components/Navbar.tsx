
const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex  items-center">
                <a href="/" className="text-white font-bold text-lg mx-5">My Website</a>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white">Home</a></li>
                    <li><a href="/Favorites" className="text-white">Favorites</a></li>
                    <li><a href="/Detail" className="text-white">Detail</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
