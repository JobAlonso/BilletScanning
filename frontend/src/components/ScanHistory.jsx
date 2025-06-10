import React from 'react';
import {
    Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Select, MenuItem, FormControl, InputLabel, Pagination, Box,
    Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Fade,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const scanData = [
    {
        BilletId: '110402616649',
        Heat: '1100069976',
        CastLot: '110006997601',
        Category: '',
        Disposition: 'Prime',
        Status: 'Charged',
        Match: 'true',
        ScanTime: '6/9/2025 11:34:50 AM'
    },
    // more data...
];

const CustomFade = React.forwardRef(function CustomFade(props, ref) {
    return <Fade ref={ref} timeout={{ enter: 800, exit: 500 }} {...props} />;
});

const ScanHistory = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [selectedImage, setSelectedImage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [pendingImage, setPendingImage] = React.useState(null);

    const handleOpenModal = (imageBase64, scanTime) => {
        if (open) {
            setOpen(false); // Cierra el diálogo para animación
            setTimeout(() => {
                setPendingImage(imageBase64);
                setSelectedScanTime(scanTime);
            }, 200);
        } else {
            // Cuando está cerrado, asigna directamente y abre diálogo
            setSelectedImage(imageBase64);
            setSelectedScanTime(scanTime);
            setOpen(true);
        }
    };


    // Cuando el diálogo termina de cerrarse (animación salida), abrimos si hay imagen pendiente
    const handleDialogExited = () => {
        if (pendingImage) {
            setSelectedImage(pendingImage);
            setPendingImage(null);
            setOpen(true);
        }
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedImage('');
    };

    const exampleImage =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA\
        AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHx\
        gljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

    const paginatedData = scanData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const [selectedScanTime, setSelectedScanTime] = React.useState('');


    return (
        <Card sx={{ p: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <FormControl size="small">
                        <InputLabel>Show</InputLabel>
                        <Select value={rowsPerPage} label="Show" onChange={handleChangeRowsPerPage}>
                            {[10, 25, 50, 100].map(num => (
                                <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Billet Id</TableCell>
                                <TableCell>Heat</TableCell>
                                <TableCell>Cast Lot</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Disposition</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Match</TableCell>
                                <TableCell>Scan Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.map((row, index) => (
                                <TableRow
                                    key={index}
                                    hover
                                    sx={{ cursor: 'pointer', color: 'primary.main' }}
                                    onClick={() => handleOpenModal(exampleImage, row.ScanTime)}
                                >
                                    <TableCell>{row.BilletId}</TableCell>
                                    <TableCell>{row.Heat}</TableCell>
                                    <TableCell>{row.CastLot}</TableCell>
                                    <TableCell>{row.Category}</TableCell>
                                    <TableCell>{row.Disposition}</TableCell>
                                    <TableCell>{row.Status}</TableCell>
                                    <TableCell>{row.Match}</TableCell>
                                    <TableCell>{row.ScanTime}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Typography variant="body2">
                        Showing {(page - 1) * rowsPerPage + 1} to {Math.min(page * rowsPerPage, scanData.length)} of {scanData.length} entries
                    </Typography>
                    <Pagination
                        count={Math.ceil(scanData.length / rowsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                    />
                </Box>
            </CardContent>

            <Dialog
                open={open}
                onClose={handleCloseModal}
                TransitionComponent={CustomFade}
                TransitionProps={{ onExited: handleDialogExited }}
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    ScanTime: {selectedScanTime || ''}
                    <IconButton onClick={handleCloseModal}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Scanned"
                            style={{ width: '100%', height: 'auto', borderRadius: 4 }}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="secondary" variant="outlined">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default ScanHistory;
