import styled from "styled-components";

export const WalletEvaluationContainer = styled.div`
    width: 48%;
    height: 260px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header img {
        width: 35px;
        margin-left: 7px;
    }

    > header p {
        font-size: 18px;
    }

    @media(max-width: 770px) {
        width: 100%;
        height: 170px;
        > header {
            > h1 {
                font-size: 24px;

                > img {
                    height: 20px;
                    width: 20px;
                }
            }
            > p {
                font-size: 14px;
            }
        }
        > footer {
            > span {
                font-size: 14px;
            }
        }
    }

    @media(max-width: 420px) {
        width: 100%;
        height: 190px;
        height: auto;

        > header p {
            margin-bottom: 15px;
        }
        > footer span {
            font-size: 12px;
        }
    }
`;