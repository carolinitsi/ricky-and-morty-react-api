import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 0 auto;
    align-items: center;
    max-width: 100%;

    @media (max-width: 768px) {
        padding: 30px;
        width: 300px;
    }

    img {
        width: 500px;

        @media (max-width: 768px) {
            width: 300px;
        }
    }
`
export const Title = styled.h1`
    font-family: sans-serif; 
    text-align: center;
`