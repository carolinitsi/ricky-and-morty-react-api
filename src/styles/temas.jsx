import styled from 'styled-components';
import {
    Background_Light,
    Background_Dark,
    text_Ligth,
    text_Dark,
} from './variaveis';

export const ButtonTheme = styled.button` 
        background-color: transparent;
        border: none;
        cursor: pointer;

        img {
            width: 30px;
            position: fixed;
            right: 10px;
            z-index: 9;
            top: 6px;

            @media (max-width: 768px) {
                top: 20px;
            }
        }
`;

export const temaClaro = {
    body:Background_Light,
    text:text_Ligth,
}

export const temaEscuro = {
    body:Background_Dark,
    text:text_Dark,
}