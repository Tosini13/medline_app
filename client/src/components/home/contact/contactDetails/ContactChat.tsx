import { Stack, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Theme, useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Button from "../../../buttons/Button";
import { ETheme } from "../../../../stores/Theme";
import { TextField, TextFieldProps } from "@mui/material";
import { hexToRgb } from "../../../../helpers/calcHexToRGB";


const ChatContainerStyled = styled.div<{ theme: Theme }>`
    background-color: ${props => props.theme.palette.mode === ETheme.light ? 'white' : props.theme.palette.primary.main};
    border-radius: 30px;
    border-top-left-radius: 0px;
    width: 300px;
    padding: 20px;
    margin-top: 80px;
    max-width: 90%;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translateY(-100%);
        border: 20px solid transparent;
        border-left-color: ${props => props.theme.palette.mode === ETheme.light ? 'white' : props.theme.palette.primary.main};
        border-bottom-color: ${props => props.theme.palette.mode === ETheme.light ? 'white' : props.theme.palette.primary.main};
    }
`;

type TContactChatProps = {};

const ContactChat: React.FC<TContactChatProps> = () => {
    const theme = useTheme();
    return (
        <Stack alignItems={"center"}>
            <Typography variant="h6">
                In case of emergancy text us below
            </Typography>
            <ChatContainerStyled theme={theme}>
                <Stack alignItems={"flex-end"} spacing={4}>
                    <TextFieldRU fullWidth multiline variant="standard" placeholder="let us know about Your problem..." />
                    <Button endIcon={<Send />} color="secondary" style={{ borderRadius: '20px' }}>
                        Send
                    </Button>
                </Stack>
            </ChatContainerStyled>
        </Stack>
    );
};

export default ContactChat;


const TextFieldStyled = styled(TextField) <{ theme: Theme }>`
  ${props => `color: ${props.theme.palette.primary.contrastText};`}
  div.MuiOutlinedInput-root{
  ${props => props.theme.palette.mode === ETheme.dark
        ? `background-color: rgba(${hexToRgb(props.theme.palette.primary.light)},0.8);`
        :
        'background-color: rgba(255,255,255,0.8);'}
  }
  input:-webkit-autofill{
    ${props => props.theme.palette.mode === ETheme.dark
        ? `-webkit-box-shadow: 0 0 0 100px rgba(${hexToRgb(props.theme.palette.primary.main)},0.8) inset !important;`
        :
        '-webkit-box-shadow: 0 0 0 100px rgba(255,255,255,0.8) inset !important;'}
  }
  .MuiInput-root{
    &:hover{
      &::before{
      ${props => `border-bottom: 1px solid rgba(${hexToRgb(props.theme.palette.secondary.main)}, 0.9);`}
      }
    }
    &::before{
      ${props => `border-bottom: 1px solid rgba(${hexToRgb(props.theme.palette.secondary.main)}, 0.7);`}
    }
    &::after{
      ${props => props.theme.palette.mode === ETheme.light ? `border-bottom-color: ${props.theme.palette.primary.main};` : 'border-bottom-color: white'}
    }
  }
`;

type TTextFieldRUProps = TextFieldProps;

const TextFieldRU: React.FC<TTextFieldRUProps> = ({ children, ...props }) => {
    const theme = useTheme()
    return (
        <TextFieldStyled variant="outlined" theme={theme} {...props}>
            {children}
        </TextFieldStyled>
    );
};