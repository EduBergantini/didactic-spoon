import React from "react";
import { ToggleContainer, ToggleLabel,ToggleSelector } from "./styles";

const Toggle: React.FC = () => (
    <ToggleContainer>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log("mudou")}
            />
        <ToggleLabel>Dark</ToggleLabel>
    </ToggleContainer>
)

export default Toggle;