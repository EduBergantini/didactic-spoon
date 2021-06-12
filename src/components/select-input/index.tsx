import React from "react"
import { SelectInputContainer } from "./styles";

interface ISelectInputOptionProps {
    options: {
        value: string | number;
        label: string;
    }[],
    onSelectInputChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
}

const SelectInput: React.FC<ISelectInputOptionProps> = ({options, defaultValue, onSelectInputChange}) => {
    return (
        <SelectInputContainer>
            <select onChange={onSelectInputChange} defaultValue={defaultValue}>
            {
                options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>)
                )
            }
            </select>
        </SelectInputContainer>
    )
};

export default SelectInput;