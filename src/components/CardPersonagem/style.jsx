import styled from 'styled-components';

export const Container = styled.div`
    background-color: #2523230a;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 16px;

    border-radius: 20px;
    border: solid 2px black;

    img {
        border-radius: 20px 20px 0px 0px;
        width: 100%;
    }
`
export const ContainerText = styled.div`
    padding: 8px;
    

    h1 {
        font-family: cursive;
        font-size: 24px;
    }
`