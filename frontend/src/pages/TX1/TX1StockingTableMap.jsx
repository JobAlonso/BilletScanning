// src/pages/TX1/TX1StockingTableMap.jsx
import React, { useState } from 'react';
import { Box, Button, Chip, Stack, SvgIcon, Typography, CssBaseline, ThemeProvider, } from '@mui/material';
import darkNucorTheme from '../../theme';
import StockingTableMap from '../../components/StockingTableMap';

const billets = [
  {
    id: 7474502,
    barcode: '110402616582',
    status1: 'Prime',
    status2: 'Charged',
    heat: '110006997401',
    length: '11355', // Length in mm
    x: 0
  },
  {
    id: 7474503,
    barcode: '110402616580',
    status1: 'Prime',
    status2: 'Charged',
    heat: '110006997401',
    length: '11455', // Length in mm
    x: 30
  },
  {
    id: 7474606,
    barcode: '110402616523',
    status1: 'Prime',
    status2: 'Assigned',
    heat: '110006997301',
    length: '11255', // Length in mm
    x: 120
  },
  {
    id: 7474505,
    barcode: '110402616581',
    status1: 'Prime',
    status2: 'Charged',
    heat: '110006997402',
    length: '11155', // Length in mm
    x: 60
  },
];

export default function TX1StockingTableMap() {
  const [isEditing, setIsEditing] = useState(false);

  const handleCharge = () => {
    console.log('Charge button clicked');
    // lógica para iniciar el cargado de billets...
  };

  const handleOnClick = () => {
    console.log('Billet button clicked');
    // lógica para iniciar el cargado de billets...
  };

  const handleEdit = () => {
    //console.log('Edit mode:', !isEditing ? 'ON' : 'OFF');
    // logic to rename the EDIT button to a DONE button:
    setIsEditing(prev => !prev);
  };

  const handleClearMap = () => {
    console.log('Clear map button clicked');
    //setBillets([]); // logic to clear all billets from the map
  };

  const handleRemoveBillet = (index) => {
    console.log('Removing billet at index', index);
    const newBillets = billets.slice(); // copia del array
    newBillets.splice(index, 1);        // elimina el billet
    //setBillets(newBillets);             // actualiza el estado
  };

  return (
    <Box sx={{ p: 2 }}>
      <ThemeProvider theme={darkNucorTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            component="span"
            sx={{
              bgcolor: 'primary.main',
              p: 1,
              borderRadius: 1,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              mr: 2,
            }}
          >
            TX1 Stocking Table Map
          </Box>
        </Box>
      </ThemeProvider>

      <StockingTableMap billets={billets}
        onClick={handleOnClick} 
        onCharge={handleCharge} // Pass the charge handler
        onEdit={handleEdit} // Pass the edit handler
        onClearMap={handleClearMap} // Pass the clear map handler
        onRemoveBillet={handleRemoveBillet} // Pass the remove billet handler
        isEditing={isEditing} // Pass the editing state
      />
    </Box>

  );
}
