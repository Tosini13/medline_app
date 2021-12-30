import { Theme, useTheme } from '@mui/material/styles';
import { Link, LinkProps } from "react-router-dom";
import styled from 'styled-components';

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


const LinkAStyled = styled.a<{ theme: Theme }>`
    ${props => `color: ${props.theme.palette.primary.contrastText};`}
    text-decoration: none;
    transition: all 0.3s;
    &:hover{
        text-shadow: 1px 0px 6px rgb(255 255 255 / 70%);
    }
`;

type TLinkAProps = {
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkA: React.FC<TLinkAProps> = ({ children, ...props }) => {
    const theme = useTheme()
    return (<LinkAStyled theme={theme} {...props}>{children}</LinkAStyled>);
};
