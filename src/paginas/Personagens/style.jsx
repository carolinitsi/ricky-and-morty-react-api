import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

     @media (max-width: 768px) {
        padding: 30px;
        width: 300px;
    }
`
export const Title = styled.h1`
    font-family: sans-serif; 
    text-align: center;
`