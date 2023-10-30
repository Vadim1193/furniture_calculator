import styled from "styled-components";
import TableCheck from "./table-check";

const ModalContent = styled.div`
    width: 35%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
    text-align: center;
    padding: 25px 20px;
    border-radius: 5px;
    height: 100%;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;

    @media (max-width: 767px) {
        width: 95%;
        height: 97%;
        font-size: 1em;
        overflow: hidden;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: rgb(0 0 0 / 70%);
    backdrop-filter: blur(4px);
`;

export const Modal = () => {
    return (
        <ModalOverlay>
            <ModalContent>
                <TableCheck/>
            </ModalContent>
        </ModalOverlay>
    )
}
