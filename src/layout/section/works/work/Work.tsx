// import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=''></Image>
           <Title>{props.title}</Title>
           <Text>{props.text}</Text>
           {/*<StyledLink href={'#'}>demo</StyledLink>*/}
           {/*<StyledLink href={'#'}>code</StyledLink>*/}
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: black;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
// const StyledLink = styled.link``
const Title = styled.h3``
const Text = styled.p``
