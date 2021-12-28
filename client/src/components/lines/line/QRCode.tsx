import { Dialog } from "@mui/material";
import { useMemo } from "react";
import QRCode from "react-qr-code";
import { lightTheme } from "../../../style/theme";

type TQRCodeDialogProps = {
    open: boolean;
    handleClose: () => void;
    lineId: string;
};

const QRCodeDialog: React.FC<TQRCodeDialogProps> = ({ open, handleClose, lineId }) => {

    const QRCodeComponent = useMemo(() => {
        const url = `https://medlineapp.herokuapp.com/lines/${lineId}`;
        return (
            <QRCode
                style={{ margin: '5px' }}
                id="qrCodeElToRender"
                size={250}
                value={url}
                bgColor="white"
                fgColor={lightTheme.palette.primary.main}
                level="H"
            />
        );

    }, [lineId]);

    return (
        <Dialog open={open} onClose={handleClose}>
            {QRCodeComponent}
        </Dialog>
    );
};

export default QRCodeDialog