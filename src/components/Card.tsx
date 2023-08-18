import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="my-card mb-3 p-3">
      <div className="relative">
        <img src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg" alt="Joker-movie-poster" />
      </div>
      <div className="container mx-auto text-center">
        <button className="rounded-none">
          <Link to="/Detail">Save Changes</Link>
        </button>
        <h1>Joker</h1>
      </div>
    </div>
  )
}

export default Card