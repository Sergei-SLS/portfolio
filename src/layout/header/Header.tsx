// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aqua;
    display: flex;
    justify-content: space-between;
`

