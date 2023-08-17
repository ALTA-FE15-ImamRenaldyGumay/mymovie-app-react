import { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className='bg-blue-800 p-4'>
        <div className="container mx-auto">
            <a className='text-white font-bold text-xl' href="/">Logo</a>
            <ul className='space-x-4'>
                <li><a className='text-white hover:text-gray-300' href="/">Beranda</a></li>
                <li><a className='text-white hover:text-gray-300' href="/about">Tentang</a></li>
                <li><a className='text-white hover:text-gray-300' href="/Kontak">Kontak</a></li>
            </ul>
        </div>

      </nav>
    )
  }
}

export default Navbar