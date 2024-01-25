import { NavLink } from "react-router-dom";
import styled from '../Header/header.module.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className={styled.nav}>
            <li><NavLink className={styled.link} to='/'>Home</NavLink></li>
            <li><NavLink className={styled.link} to='/movies'>Movies</NavLink></li>
                    </ul>
            </nav>
        </header>
    )
};

export default Header