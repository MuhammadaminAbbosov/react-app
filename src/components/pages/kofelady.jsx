import styled from "styled-components"
import Arrow from "../arrow.svg"

export const Kofelady = () => {
    return (
        <KofeladyContainer>
            <div className="top">
                <p>Kofe Lady</p>
                <button>+ Yangi Kofe lady qo’shish</button>
            </div>

            <div className="content">
                <div className="tahselmash">
                    <b>Zulfiya Sulaymonova <img src={Arrow} alt="" /></b>
                    <p>Rohat, konsulting</p>
                    <p>Rohat, logistika</p>
                    <p>Rohat, buxalteriya</p>
                    <p>Rohat, Hr</p>
                </div>
                <div className="rohat">
                    <b>Sarvinoz Rajabova <img src={Arrow} alt="" /></b>
                    <p>Rohat, konsulting </p>
                    <p>Rohat, logistika</p>
                    <p>Rohat, buxalteriya</p>
                    <p>Rohat, Hr</p>
                </div>
            </div>
        </KofeladyContainer>
    )
}

const KofeladyContainer = styled.div`
    padding: 40px;

    .content {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 40px;

        div {
            b {
                display: flex;
                align-items: center;
                gap: 20px;
                
                color: #434343;
                font-size: 26px;
                padding-bottom: 15px;
            }

            p {
                color: #535353;
                font-size: 18px;

                :not(:last-child) {
                    margin-bottom: 15px;
                }
            }
        }
    }
`