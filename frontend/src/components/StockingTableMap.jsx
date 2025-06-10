import { Box, Button, Chip } from '@mui/material';
import React, { useState } from 'react';

const BilletBar = ({ billet, onClick, isEditing = false, onRemoveBillet, onInsertBeforeBillet }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
  <g>
    <g
      transform={`translate(${billet.x}, 0)`}
      id={`scan${billet.id}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Billet bar */}
      <rect
        y={60}
        height={860}
        width={25}
        stroke="rgba(128, 100, 75, 0.7)"
        fill={isHovered ? '#FF9800' : billet.color || '#80644B'}
      />
      {/* Billet info */}
      <g transform="rotate(-90) translate(-500, 17.5)">
        <text fill="rgb(200,200,200)">{billet.barcode}</text>
        <text fill="rgb(200,200,200)" transform="translate(125)">
          {billet.status1}
        </text>
        <text fill="rgb(200,200,200)" transform="translate(175)">
          {billet.status2}
        </text>
        <text fill="rgb(200,200,200)" transform="translate(250)">
          {billet.heat}
        </text>
      </g>
    </g>

    {/* Controles (remove + insert) */}
    {isEditing && (
      <g transform={`translate(${billet.x}, 0)`}>
        {/* Remove button (top) */}
        <g
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
            onRemoveBillet?.();
          }}
          transform="translate(0, -5)"
          className="control"
        >
          <rect rx="5" ry="5" height="25" width="25" fill="#c62828" />
          <title>Remove {billet.barcode}</title>
          <path
            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
            fill="white"
            transform="scale(1) translate(1, 1)"
          />
        </g>

        {/* Insert button (below) */}
        <g
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
            onInsertBeforeBillet?.();
          }}
          transform="translate(0, 25)"
          className="control"
        >
          <rect rx="5" ry="5" height="25" width="25" fill="#2e7d32" />
          <title>Insert before {billet.barcode}</title>
          <path
            d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"
            fill="white"
            transform="scale(1) translate(1, 1)"
          />
        </g>
      </g>
    )}
  </g>
);

};


const StockingTableMap = ({
    billets = [],
    onCharge,
    onEdit,
    onClearMap,
    onRemoveBillet,
    isEditing = false,
}) => {
    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Button variant="contained" color="success" onClick={onCharge} sx={{ mr: 1 }}>
                    « Charge
                </Button>
                <Button variant="contained" color={isEditing ? 'primary' : 'warning'} onClick={onEdit} sx={{ mr: 1 }}>
                    {isEditing ? 'Done' : 'Edit'}
                </Button>
                <Button variant="contained" color="error" onClick={onClearMap} sx={{ display: isEditing ? 'inline-flex' : 'none' }}>
                    Clear Map
                </Button>
            </Box>

            <Box className="mapContainer" sx={{ overflow: 'auto', border: '1px solid #3B3F44' }}>
                <svg
                    className="map stockingTable"
                    width="3130"
                    height="600"
                    viewBox="0 0 3130 600"
                    preserveAspectRatio="xMinYMin meet"
                >
                    <g transform="translate(70, 60)">
                        {billets.map((billet, index) => (
                            <BilletBar
                                key={billet.id}
                                billet={billet}
                                //onClick={() => onRemoveBillet?.(index)}
                                isEditing={isEditing}
                                onRemoveBillet={() => onRemoveBillet?.(index)}
                                onInsertBeforeBillet={() => onRemoveBillet?.(index - 1)}
                                onClick={() => console.log(`Clicked on billet ${billet.id}`)}
                            />
                        ))}
                    </g>
                </svg>
            </Box>
        </Box>

    );
};

export default StockingTableMap;