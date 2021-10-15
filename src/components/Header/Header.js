import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { fetchMovies, fetchShows } from '../../features/movies/movieSlice';
import user from "../../images/user.png"
import "./Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import HdIcon from '@mui/icons-material/Hd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(term === "") alert('Please type in a movie name.')
        else{
            dispatch(fetchMovies(term))
            dispatch(fetchShows(term))
        }
    }
    return (
        <div className="header">
            
            <div className="logo"><Link to="/"><HdIcon fontSize="large" color="info" /></Link></div>
            <div className="search-bar">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=> setTerm(e.target.value)} />
                    <button type="submit"><SearchIcon  fontSize="large" /></button>
                </form>
            </div>
            <div className="user-image">
                <AccountCircleIcon  color="info" fontSize="large"/>
            </div>
        </div>
    )
}

export default Header
