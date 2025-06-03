// src/pages/TX2/TX2StockingTableScan.jsx
import { useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TX2StockingTableScan = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const refocus = () => inputRef.current?.focus();
    const numOnly = (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('blur', refocus);
      input.addEventListener('input', numOnly);
      refocus();
    }

    return () => {
      if (input) {
        input.removeEventListener('blur', refocus);
        input.removeEventListener('input', numOnly);
      }
    };
  }, []);

  return (
    <Box sx={{ bgcolor: '#088808', color: '#fff', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        TX2 Stocking Table Scan
      </Typography>

      <Box component="form" action="/StockingTableScan" method="post" sx={{ mb: 3, width: '300px' }}>
        <TextField
          inputRef={inputRef}
          name="BilletId"
          label="Scan"
          variant="outlined"
          autoFocus
          fullWidth
          slotProps={{
            input: {
              style: { color: '#fff' },
            },
            inputLabel: {
              shrink: true,
              style: { color: '#aaa' },
            },
          }}
          sx={{
            input: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#aaa' },
              '&:hover fieldset': { borderColor: '#fff' },
              '&.Mui-focused fieldset': { borderColor: '#fff' },
            },
            '& .MuiInputLabel-root': {
              color: '#aaa',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#fff',
            },
          }}
        />
        <input type="hidden" name="MillOrder.Id" value="115741" />
        <input type="hidden" name="Mill" value="1" />
        <input type="hidden" name="ScannerId" value="4" />
      </Box>

      <Typography variant="h6" gutterBottom>
        Scanned Billet Info
      </Typography>

      <Paper sx={{ backgroundColor: '#088808', color: '#fff', maxWidth: 400 }}>
        <Table size="small">
          <TableBody>
            {['Billet Id', 'Cast Lot', 'Disposition', 'Status'].map((label) => (
              <TableRow key={label}>
                <TableCell sx={{ color: '#fff' }}>{label}</TableCell>
                <TableCell sx={{ color: '#fff' }} colSpan={2}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Button variant="contained" color="inherit" onClick={() => navigate('/TX2/HandheldScanner')} sx={{ mt: 2, color: '#000000' }}>
        Normal Mode
      </Button>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Mill Order
      </Typography>

      <Paper sx={{ backgroundColor: '#088808', color: '#fff', maxWidth: 400 }}>
        <Table size="small">
          <TableBody>
            {['Number', 'Heat', 'Cast Lot', 'Scheduled', 'Remaining'].map((label) => (
              <TableRow key={label}>
                <TableCell sx={{ color: '#fff' }}>{label}</TableCell>
                <TableCell sx={{ color: '#fff' }} colSpan={2}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Box component="form" action="/StockingTableScan/CompleteMillOrder" method="post" sx={{ mt: 3 }}>
        <input type="hidden" name="MillOrder.Id" value="115741" />
        <input type="hidden" name="Mill" value="1" />
        <input type="hidden" name="ScannerId" value="4" />
        <input type="hidden" name="Scanned" value="30" />
        <input type="hidden" name="MillOrder.Number" value="110006975120" />
        <input type="hidden" name="MillOrder.Scheduled" value="40" />
        <Button type="submit" variant="contained" color="primary">
          Complete
        </Button>
      </Box>
    </Box>
  );
};

export default TX2StockingTableScan;
