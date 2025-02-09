// import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={'space-between'}>
                    <Skill iconId={'code'}
                           title={'html5'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}></Skill>
                    <Skill iconId={'css'}
                           title={'css3'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}></Skill>
                    <Skill iconId={'react'}
                           title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}></Skill>
                    <Skill iconId={'typescript'}
                           title={'typeScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}></Skill>
                    <Skill iconId={'style'}
                           title={'styled components'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}></Skill>
                    <Skill iconId={'figma'}
                           title={'WEB DESIgN'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}></Skill>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`