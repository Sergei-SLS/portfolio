import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/img/social.webp";
import timerImg from "../../../assets/img/timer.webp";
import {Container} from "../../../components/Container.ts";
import {S} from "./Works_Styles.ts";

const workItems = ['All', 'Landing page', 'React', 'spa']

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        title: 'Timer',
        src: timerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((w) => {
                       return  <Work title={w.title}
                                     src={w.src}
                                     text={w.text} />
                    })}
                </FlexWrapper>
            </Container>

        </S.Works>
    );
};