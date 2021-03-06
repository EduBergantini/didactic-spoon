import styled from "styled-components";

export const ListContainer = styled.div``;
export const ListContent = styled.main``;
export const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.primaryFontColor};
        margin: 0 10px 30px;
        transition: opacity .3s;
        opacity: .4;

        &:hover {
            opacity: .7;
        }
    }
    .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
    .tag-filter-recurrent::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.success};
    }
    .tag-activated {
        opacity: 1;
    }
`;

