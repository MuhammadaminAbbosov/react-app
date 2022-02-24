import styled from "styled-components";
import { Aside } from "./components/aside";
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/pages/home";
import { Hudud } from "./components/pages/hudud";
import { Direktor } from "./components/pages/direktor";
import { Hodim } from "./components/pages/hodim";
import { Kofelady } from "./components/pages/kofelady";
import { Oshpaz } from "./components/pages/oshpaz";


function App() {
    return (
        <AppContainer>
            <Aside />
            <Content>
                <Routes>
                    <Route element={<Home />} path="/"></Route>
                    <Route element={<Hudud />} path="/hudud"></Route>
                    <Route element={<Direktor />} path="/direktor"></Route>
                    <Route element={<Hodim />} path="/hodim"></Route>
                    <Route element={<Kofelady />} path="/kofelady"></Route>
                    <Route element={<Oshpaz />} path="/oshpaz"></Route>
                </Routes>
            </Content>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
`
const Content = styled.div`
    background-color: #FAFAFA;
`