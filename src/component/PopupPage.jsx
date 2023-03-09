import { Dialog, DialogTitle, DialogContent, Typography, DialogActions } from "@mui/material";
import { Button } from "react-bootstrap";
import React from "react";


export const PopUpPage = (props) => {
    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} maxWidth="md" >
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h3" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button style={{ backgroundColor: "green", color: "white" ,borderColor: "white"}} onClick={() => { setOpenPopup(false) }}>&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;</Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button style={{ backgroundColor: "green", color: "white",borderColor: "white" }} onClick={() => { setOpenPopup(false) }}>ยกเลิก</Button>
            </DialogActions>
        </Dialog>
    );
}