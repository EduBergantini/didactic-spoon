import styled from "styled-components";

interface IContainerProps {
    color: string;
}
export const WalletBoxContainer = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    width: 32%;
    height: 150px;
    margin: 10px 0;
    border-radius: 7px;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;

    > img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: -30px;
        opacity: .3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px) {
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 20px;
            > strong {
                display: inline-block;
                width: 100%;
                font-size: 14px;
            }
        }
    }

    @media(max-width: 420px) {
        width: 100%;
        > h1 {
            display: flex;
            align-items: center;

            > strong {
                width: auto;
                font-size: 22px;
            }
            > strong:after {
                display: inline-block;
                content: ' ';
                width: 3px;

            }
        }

    }
`;