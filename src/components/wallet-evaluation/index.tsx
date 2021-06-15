import React from "react";
import getImage, { IconEnums } from "../../utils/images";
import { WalletEvaluationContainer } from "./styles";


interface IWalletEvaluationProps {
    title: string;
    description: string;
    footerText: string;
    icon: IconEnums
}

const WalletEvaluation: React.FC<IWalletEvaluationProps> = ({ title, description, footerText, icon }) => (
    <WalletEvaluationContainer>
        <header>
            <h1>
                {title}
                <img src={getImage(icon)} alt={title} />
            </h1>
            <p>{description}</p>
        </header>
        <footer>
            <span>{footerText}</span>
        </footer>
    </WalletEvaluationContainer>
);

export default WalletEvaluation;