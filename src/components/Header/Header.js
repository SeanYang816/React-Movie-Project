import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { fetchMovies, fetchShows } from '../../features/movies/movieSlice';
import user from "../../images/user.png"
import "./Header.scss"
function Header() {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        if(term === ""){ alert('Please type in a movie name.')}
        e.preventDefault();
        dispatch(fetchMovies(term))
        dispatch(fetchShows(term))
    }
    return (
        <div className="header">
            
            <div className="logo"><Link to="/">Movie App</Link></div>
            <div className="search-bar">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=> setTerm(e.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header
