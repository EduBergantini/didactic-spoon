import styled from "styled-components";


interface ILegendProps {
    color: string;
}

export const MonthlyRecurrentEventualChartContainer = styled.div`
    width: 48%;
    min-height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;
`;
export const MonthlyRecurrentEventualSubtitleContainer = styled.aside`
    flex: 1;
    
    padding: 30px 20px;

    > {
        h2 {
            padding-left: 16px;
            margin-bottom: 10px;
        }
    }
`;
export const SubtitleContainer = styled.ul`
    list-style: none;
    max-height: 175px;
    padding-right: 15px;

`;
export const SubTitle = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 16px;
    

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
export const MonthlyRecurrentEventualMainChartContainer = styled.main`
    flex: 1;
    min-height: 150px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;