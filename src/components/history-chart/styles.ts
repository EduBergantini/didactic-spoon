import styled from "styled-components";

interface ISubtitleProps {
    color: string;
}
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

`;
export const HistoryChartHeader = styled.header`
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }
`;
export const HistorySubtitleContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;

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
`;
export const HistoryChartArea = styled.div`
    flex: 1;
    height: 260px;
    color: ${props => props.color};
`;