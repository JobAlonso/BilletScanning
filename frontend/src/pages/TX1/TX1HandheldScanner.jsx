// src/pages/TX1/TX1HandheldScanner.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@mui/material';

const TX1HandheldScanner = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const input = inputRef.current;

    const refocus = () => input?.focus();
    const numOnly = (e) => {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
    };

    input?.addEventListener('blur', refocus);
    input?.addEventListener('input', numOnly);

    refocus();

    return () => {
      input?.removeEventListener('blur', refocus);
      input?.removeEventListener('input', numOnly);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#080808',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h5">
        Billet Scan
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
        Normal Mode
      </Typography>
      
      <Typography variant="h6" sx={{ color: '#ff8888' }} gutterBottom>
        {/*Error message will go here if needed        */}
      </Typography>

      {/* This form submits the scanned data, replace the /Scanner */}
      <Box component="form" action="/Scanner" method="post" sx={{ mb: 4 }}>
        <TextField
          inputRef={inputRef}
          name="NewId"
          label="Scan"
          variant="outlined"
          autoFocus
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
            width: '300px',
            '& .MuiInputLabel-root': {
              color: '#aaa',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              '& fieldset': {
                borderColor: '#aaa',
              },
              '&:hover fieldset': {
                borderColor: '#fff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff',
              },
            },
          }}
        />
      </Box>

      <Typography variant="h6" gutterBottom>
        Scanned Billet Info
      </Typography>

      <Paper sx={{ backgroundColor: '#121212', color: '#fff', maxWidth: 500 }}>
        <Table size="small">
          <TableBody>
            {[
              'BilletId',
              'Heat',
              'CastLot',
              'Category',
              'Disposition',
              'Status',
            ].map((label) => (
              <TableRow key={label}>
                <TableCell sx={{ color: '#fff' }}>{label}</TableCell>
                <TableCell sx={{ color: '#fff' }} colSpan={2}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="success"
          sx={{ mr: 2 }}
          onClick={() => navigate('/TX1/StockingTableScan')}
        >
          TX1 Stocking Table
        </Button>
        {/* Add more buttons as needed 
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            (window.location.href = '/TX2/StockingTableScan')
          }
        >
          TX2 Stocking Table
        </Button>
        */}
      </Box>
    </Box>
  );
};

export default TX1HandheldScanner;
