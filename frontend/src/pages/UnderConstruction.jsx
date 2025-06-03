import { Box, Typography } from '@mui/material';
import { Construction as ConstructionIcon } from '@mui/icons-material';

const UnderConstruction = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#121212"
      color="#ffffff"
      textAlign="center"
      p={2}
    >
      <ConstructionIcon sx={{ fontSize: 80, mb: 2, color: '#ffcc00' }} />
      <Typography variant="h4" gutterBottom>
        Page Under Construction
      </Typography>
      <Typography variant="body1">
        We're working hard to bring you this feature. Please check back later.
      </Typography>
    </Box>
  );
};

export default UnderConstruction;
