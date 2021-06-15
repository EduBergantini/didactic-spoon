import styled, { keyframes } from "styled-components";

interface ISubtitleProps {
    color: string;
}

const animationFrame = keyframes`
    0% {
        transform: translateY(100px);
        opacity: 0;
    }

    50% {
        opacity: .4;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const HistoryChartContainer = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
    animation: ${animationFrame} .5s;

`;
export const HistoryChartHeader = styled.header`
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }
    @media(max-width: 1200px) {
        flex-direction: column;
    }
`;
export const HistorySubtitleContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
    
    @media(max-width: 1200px) {
        padding-right: 0;
        padding-left: 6px;
    }
`;

export const HistorySubtitle = styled.li<ISubtitleProps>`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 10px;

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

    @media(max-width: 1200px) {
        > div {
            width: 35px;
            height: 35px;
        }
    }
`;
export const HistoryChartArea = styled.div`
    flex: 1;
    height: 260px;
    color: ${props => props.color};
`;