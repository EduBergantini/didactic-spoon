import React, { InputHTMLAttributes } from "react";
import { CustomInputTextContainer } from "./styles";

type ICustomInputTextProps = InputHTMLAttributes<HTMLInputElement>;

const CustomInputText: React.FC<ICustomInputTextProps> = ({...rest}) => (
    <CustomInputTextContainer {...rest}/>
)

export default CustomInputText;