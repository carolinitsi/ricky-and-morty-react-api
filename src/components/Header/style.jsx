import styled from 'styled-components';
import background from '../../assets/images/background.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${background});
    height: 260px;
    background-position: center;
    background-size: cover;
`

export const Navigation = styled.div`
    display: flex;
    list-style: none;
    justify-content: space-around;
    background-color: #353435;
    padding: 8px;
    position: fixed;
    width: 100vw;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 65px;
    }
   
    height: 30px;
    top: 0px;

    li a{
        color: #ffffff;
        text-decoration: none;

        :hover{
            background-color: red;
        }
    }

    li img {
        width: 90px;
    }
`