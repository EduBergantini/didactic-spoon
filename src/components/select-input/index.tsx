import React from "react"
import { SelectInputContainer } from "./styles";

interface ISelectInputOptionProps {
    options: {
        value: string | number;
        label: string;
    }[],
}

const SelectInput: React.FC<ISelectInputOptionProps> = ({options}) => {
    return (
        <SelectInputContainer>
            <select>
            {
                options.map(option => (<option value={option.value}>{option.label}</option>))
            }
            </select>
        </SelectInputContainer>
    )
};

export default SelectInput;