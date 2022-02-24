import styled from "styled-components"

export const Hudud = () => {
    return (
        <HududContainer>
            <div className="top">
                <p>Hududlar</p>
                <button>+ Yangi hudud qo’shish</button>
            </div>
            <div className="areas">
                <p>Orzu</p>
                <p>Rohat</p>
                <p>Tashselmash</p>
                <p>Nukus</p>
                <p>Alfa Lighting</p>
                <p>Export</p>
                <p>Gaz plita</p>
                <p>Kondisioner</p>
            </div>
        </HududContainer>
    )
}

const HududContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    
    .areas {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;

        p {
            text-align: center;
            color: #535353;
            padding: 20px 30px;
            background: #E7E7E7;
        }
    }
`