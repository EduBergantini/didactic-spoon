import React from "react";
import CountUp from "react-countup";
import getImage, { IconEnums } from "../../utils/images";
import { WalletBoxContainer } from "./styles";


interface IWalletBoxProps {
    title: string;
    amount: number;
    label: string;
    icon: IconEnums;
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({ title, amount, label, icon, color }) => {

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