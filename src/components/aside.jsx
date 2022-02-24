import styled from "styled-components"
import Logo from "./logo.svg"
import { NavLink } from "react-router-dom"

export const Aside = () => {
    return (
        <AsideContainer>
            <img src={Logo} className="logo" alt="" />

            <nav>
                <NavLink to="/">Xabarlar</NavLink>
                <NavLink to="/hudud">Hududlar va Bo’limlar</NavLink>
                <NavLink to="/direktor">Direktorlar</NavLink>
                <NavLink to="/hodim">Hodimlar</NavLink>
                <NavLink to="/kofelady">Kofe Ladylar</NavLink>
                <NavLink to="/oshpaz">Oshpazlar</NavLink>
            </nav>
        </AsideContainer>
    )
}

const AsideContainer = styled.aside`
    height: 100vh;
    padding: 30px 50px;

    background-color: white;
    
    .logo {
        display: block;
        margin: auto;
        width: 240px;
    }

    nav {
        margin-top: 40px;
        display: flex;
        flex-direction: column;

        a {
            padding: 20px 0 20px 10px;
            text-decoration: none;
            font-size: 17px;
            line-height: 20px;
            color: #535353;
            :not(:last-child) {
                border-bottom: 1px solid #aaaaaa;
            }

            &.active {
                background-color: #ddd;
                color: black;
            }
        }
    }
`