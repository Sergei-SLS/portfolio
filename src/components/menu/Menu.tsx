// import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href=''>{item}</a>
                    </li>
                })}

                <li>
                    <a href=''>Home</a>
                </li>
                <li>
                    <a href=''>Skills</a>
                </li>
                <li>
                    <a href=''>Works</a>
                </li>
                <li>
                    <a href=''>Testimony</a>
                </li>
                <li>
                    <a href=''>Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        color: black;
    }
`