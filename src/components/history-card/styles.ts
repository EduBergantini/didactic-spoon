import styled from "styled-components";

interface IHistoryTagProps {
    color: string;
}

export const HistoryCardContainer = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;

        > span {
            font-size: 22px;
            font-weight: 500
        }

    }


`;

export const HistoryTag = styled.div<IHistoryTagProps>`
    background-color: ${props => props.color};
    position: absolute;
    width: 10px;
    height: 60%;
    left: 0;
`;