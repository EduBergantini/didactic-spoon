import styled from "styled-components";

interface ILegendProps {
    color: string;
}

export const RelationChartContainer = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;
`;
export const InformationContainer = styled.aside`
    padding: 30px 20px;
`;
export const Title = styled.h2`
    margin-bottom: 20px;
`;
export const SubtitleContainer = styled.ul`
    list-style: none;

    max-height: 175px;
    overflow-y: scroll;
    padding-right: 15px;

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
`;
export const GraphicContainer = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;
