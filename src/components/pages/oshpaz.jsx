import styled from "styled-components"
import Arrow from "../arrow.svg"


export const Oshpaz = () => {
    return (
        <OshpazContainer>
            <div className="top">
                <p>Oshpazlar</p>
                <button>+ Yangi oshpaz qo’shish</button>
            </div>

            <div className="content">
                <div className="tahselmash">
                    <b>Bahodir Abdullayev <img src={Arrow} alt="" /></b>
                    <p>Rohat, konsulting</p>
                    <p>Rohat, logistika</p>
                    <p>Rohat, buxalteriya</p>
                    <p>Rohat, Hr</p>
                </div>
                <div className="rohat">
                    <b>Temur Soatov <img src={Arrow} alt="" /></b>
                    <p>Rohat, konsulting </p>
                    <p>Rohat, logistika</p>
                    <p>Rohat, buxalteriya</p>
                    <p>Rohat, Hr</p>
                </div>
            </div>
        </OshpazContainer>
    )
}

const OshpazContainer = styled.div`
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