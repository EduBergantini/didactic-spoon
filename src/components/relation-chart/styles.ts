import styled, { keyframes } from "styled-components";

interface ILegendProps {
    color: string;
}

const animationFrame = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    50% {
        opacity: .4;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const RelationChartContainer = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;
    animation: ${animationFrame} .5s;
    
    @media(max-width: 770px) {
        display: flex;
        width: 100%;
    }
`;
export const InformationContainer = styled.aside`
    padding: 30px 20px;
    
    @media(max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;
    }
    
    @media(max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    }
`;
export const Title = styled.h2`
    margin-bottom: 20px;

    @media(max-width: 1345px) {
        margin: 15px inherit 7px inherit;
    }
`;
export const SubtitleContainer = styled.ul`
    list-style: none;

    max-height: 175px;
    overflow-y: scroll;
    padding-right: 15px;

    @media(max-width: 1345px) {
        display: flex;
        flex-direction: column;
    }
`;
export const SubTitle = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    

    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }
    > span {
        margin-left: 7px;
    }

    @media(max-width: 1345px) {
        font-size: 14px;
        margin: 3px 0;
        > div {
            width: 35px;
            height: 35px;
            line-height: 35px;
        }
        
    }
`;
export const GraphicContainer = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px) {
        height: 100%;
    }
`;
