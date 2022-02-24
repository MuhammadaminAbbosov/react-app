import styled from "styled-components"

export const Home = () => {
    return (
        <HomeContainer>
            <div className="top">
                <p>Home</p>
                <button>+ Yangi hodim qo’shish</button>
            </div>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    padding: 40px;
`