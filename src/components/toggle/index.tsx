import React from "react";
import { ToggleContainer, ToggleLabel,ToggleSelector } from "./styles";

interface IToggleProps {
    rightLabel: string;
    leftLabel: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({ rightLabel, leftLabel, checked, onChange, }) => (
    <ToggleContainer>
        <ToggleLabel>{leftLabel}</ToggleLabel>
        <ToggleSelector
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}
            />
        <ToggleLabel>{rightLabel}</ToggleLabel>
    </ToggleContainer>
)

export default Toggle;