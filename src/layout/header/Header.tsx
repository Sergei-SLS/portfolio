// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const items = ['Home', 'Skills', 'Works', 'testimony', 'Contact']


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={'center'}>
                    <Logo/>
                    <Menu menuItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aqua;
`

