import { Theme, useTheme } from '@mui/material/styles';
import { Link, LinkProps } from "react-router-dom";
import styled from 'styled-components';
import { lightTheme } from "../../style/theme";

const LinkStyled = styled(Link) <{ theme: Theme }>`
    color: ${props => props.theme.palette.text.secondary};
    text-decoration: none;
    transition: all 0.15s;
    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }
`;

export type TLinkAuthProps = LinkProps;

export const LinkAuth: React.FC<TLinkAuthProps> = ({ children, ...props }) => {
    const theme = useTheme();
    return (<LinkStyled theme={theme} {...props}>{children}</LinkStyled>);
};
