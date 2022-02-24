import styled from "styled-components"
import Arrow from "../arrow.svg"

export const Direktor = () => {
    return (
        <DirektorContainer>
            <div className="top">
                <p>Direktorlar</p>
                <button>+ Yangi direktor qo’shish</button>
            </div>

            <div className="content">
                <div className="tahselmash">
                    <b>Tashselmash</b>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                </div>
                <div className="rohat">
                    <b>Rohat</b>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                    <p>Raxmatullayev Javohir <img src={Arrow} alt="" /></p>
                </div>
            </div>
        </DirektorContainer>
    )
}

const DirektorContainer = styled.div`
    padding: 40px;

    .content {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 40px;

        div {
            b {
                display: block;
                color: #434343;
                font-size: 26px;
                padding-bottom: 15px;
            }

            p {
                display: flex;
                align-items: center;
                gap: 20px;
                color: #535353;
                font-size: 18px;

                :not(:last-child) {
                    margin-bottom: 15px;
                }
            }
        }
    }

`