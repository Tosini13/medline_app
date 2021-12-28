
import { Stack } from '@mui/material';
import { useMemo, useState } from 'react';
import QrReader from 'react-qr-reader';
import { lightTheme } from '../../style/theme';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { navigateTo } from '../../models/routes';

const QrReaderStyled = styled(QrReader)`
    div {
        box-shadow: ${lightTheme.palette.primary.main} 0px 0px 0px 5px inset !important;
    }
`;

type TScanQrCodeProps = {};

const ScanQrCode: React.FC<TScanQrCodeProps> = () => {
    const domain = process.env.REACT_APP_DOMAIN;
    const navigate = useNavigate();
    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const handleErrorWebCam = (error: any) => {
        console.log(error);
    }
    const handleScanWebCam = (result: any) => {
        console.log('result', result);
        console.log('process.env.REACT_APP_DOMAIN', process.env.REACT_APP_DOMAIN);
        if (result) {
            setScanResultWebCam(result);
        }
    }

    const params = useMemo(() => scanResultWebCam.replace(domain ?? "", '').split("/"), [scanResultWebCam]);

    if (params[1] === "lines" && params[2]) {
        console.log('LINE!', params[2]);
        navigate(navigateTo.line(params[2]));
    }

    return (
        <Stack alignItems="center" justifyContent="center" style={{ height: '100%' }}>
            <div style={{ width: '100%', height: '100%', maxHeight: '500px', maxWidth: '500px' }}>
                <QrReaderStyled
                    delay={300}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                />
            </div>
        </Stack>
    );
};

export default ScanQrCode