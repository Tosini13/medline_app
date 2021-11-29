import { Link, LinkProps } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../style/theme";

const LinkStyled = styled(Link)`
    color: ${theme.palette.primary.main};
    text-decoration: none;
    &:hover {
        color: ${theme.palette.text.primary};
    }
`;

export type TLinkAuthProps = LinkProps;

export const LinkAuth: React.FC<TLinkAuthProps> = ({ children, ...props }) => {
    return (<LinkStyled {...props}>{children}</LinkStyled>);
};
