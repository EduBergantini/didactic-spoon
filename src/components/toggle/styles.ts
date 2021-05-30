import styled from "styled-components";
import ReactSwitch, { ReactSwitchProps } from "react-switch";

export const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const ToggleLabel = styled.span``;
export const ToggleSelector = styled(ReactSwitch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    })
)`
    margin: 0 10px;
`;