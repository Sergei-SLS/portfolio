// import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/img/social.webp";
import timerImg from "../../../assets/img/timer.webp";
import {Container} from "../../../components/Container.ts";

const workItems = ['All', 'Landing page', 'React', 'spa']


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work title={'Social Network'}
                          src={socialImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                    <Work title={'Timer'}
                          src={timerImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`