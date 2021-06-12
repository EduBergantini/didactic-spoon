import React from "react";
import CountUp from "react-countup";
import { WalletBoxContainer } from "./styles";

import DollarSvgImage from "../../assets/dollar.svg";
import ArrowUpSvgImage from "../../assets/arrow-up.svg"
import ArrowDownSvgImage from "../../assets/arrow-down.svg"


export enum IconEnums {
    DOLLAR,
    ARROW_UP,
    ARROW_DOWN
}

interface IWalletBoxProps {
    title: string;
    amount: number;
    label: string;
    icon: IconEnums;
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({ title, amount, label, icon, color }) => {

    const getImage = (icon: IconEnums) => {
        switch (icon) {
            case IconEnums.ARROW_UP:
                return ArrowUpSvgImage;
            case IconEnums.ARROW_DOWN:
                return ArrowDownSvgImage;
            case IconEnums.DOLLAR:
            default:
                return DollarSvgImage;
        }
    };

    return (
        <WalletBoxContainer color={color}>
            <span>{title}</span>
            <h1>
                <CountUp 
                    end={amount}
                    prefix="R$ "
                    separator="."
                    decimal=","
                    decimals={2} />
            </h1>
            <small>{label}</small>
            <img src={getImage(icon)} alt={title} />

        </WalletBoxContainer>
    )
}

export default WalletBox;