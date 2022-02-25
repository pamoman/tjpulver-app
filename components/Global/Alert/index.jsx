/*
 * Alert
 */

import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Alert = ({ buttonTitle, icon, alertTitle, description, onAccept, onAbort, disabled }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAbort = () => {
    setOpen(false);
    onAbort && onAbort();
  };

  const handleAccept = () => {
    setOpen(false);
    onAccept && onAccept();
  };

    return (
        <>
            <Button color="primary" variant="contained" startIcon={icon} onClick={handleClickOpen} disabled={disabled}>
                {buttonTitle}
            </Button>

            <Dialog
                open={open}
                onClose={handleAbort}
                aria-labelledby="confirm"
                aria-describedby="confirm"
            >
                <DialogTitle id="confirm">{alertTitle}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleAbort} variant="contained" color="secondary">
                        Nej
                    </Button>
                    <Button onClick={handleAccept} variant="contained" color="primary" autoFocus>
                        Ja
                    </Button>
                </DialogActions>
            </Dialog>
        </>
  );
};

export default Alert;