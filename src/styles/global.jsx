import { styled, createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        text-decoration:none;
        list-style: none;
    }
    body{
        background-color:${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`;

export const ContainerPrincipal = styled.div`
    align-items: center;
    max-width: 100%;
`