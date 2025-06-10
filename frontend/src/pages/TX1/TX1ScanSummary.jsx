// src/pages/TX1/TX1ScanSummary.jsx
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Chip,
  Grid,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import darkNucorTheme from '../../theme';
import MillOrderCard from '../../components/MillOrderCard';
import LastBilletScan from '../../components/LastBilletScan';
import ScanHistory from '../../components/ScanHistory';

const TX1ScanSummary = () => {
  const MillOrders = [
    {
      frpid: 116503, status: '', id1: '110006972920', id2: '110006972901',
      product: '1REBAR 04-60', grade: 'A615 Gr 60/M31', diameter: '6.25"', length: `37'7"`,
      scheduled: 41, scanned: 41, toScan: 0, toRoll: 30, selected: false
    },
    {
      frpid: 116504, status: 'Rolling', id1: '110006972820', id2: '110006972801',
      product: '1REBAR 04-60', grade: 'A615 Gr 60/M31', diameter: '6.25"', length: `37'7"`,
      scheduled: 40, scanned: 40, toScan: 0, toRoll: 40, selected: false
    },
    {
      frpid: 116505, status: '', id1: '110006972720', id2: '110006972701',
      product: '1REBAR 04-60', grade: 'A615 Gr 60/M31', diameter: '6.25"', length: `37'7"`,
      scheduled: 38, scanned: 38, toScan: 0, toRoll: 38, selected: false
    },
    {
      frpid: 116506, status: 'Charging', id1: '110006972620', id2: '110006972601',
      product: '1REBAR 04-60', grade: 'A615 Gr 60/M31', diameter: '6.25"', length: `37'7"`,
      scheduled: 38, scanned: 10, toScan: 28, toRoll: 38, selected: false
    },
    {
      frpid: 116507, status: '', id1: '110006972520', id2: '110006972501',
      product: '1REBAR 04-60', grade: 'A615 Gr 60/M31', diameter: '6.25"', length: `37'7"`,
      scheduled: 40, scanned: 0, toScan: 40, toRoll: 40, selected: false
    }
  ];
  return (
    <ThemeProvider theme={darkNucorTheme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
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
            TX1 Scanning Summary
          </Box>
          <Chip label="Match" color="success" sx={{ mr: 1, // sx={{ display: someCondition ? 'inline-flex' : 'none' }}
           }} /> 
          <Chip label="Problem" color="warning" sx={{ mr: 1, }} className="problem" />
          <Chip label="Mismatch" color="error" sx={{ mr: 1,  }} className="mismatch" />
          <Chip label="Not Prime" color="error" sx={{ mr: 1, display: 'none' }} className="not-prime" />
          <Chip label="Stocking Table" color="warning" sx={{  }} className="stockingTableProblem" />
        </Box>

        <Typography variant="h6" gutterBottom>
          <Box component="span" sx={{ bgcolor: 'primary.main', p: 1, borderRadius: 1 }}>
            Mill Orders
          </Box>
        </Typography>
        <Grid sx={{
          mb: 3, mt: 2,
        }} container>
          {MillOrders.map((order) => (
            <Grid sx={{ justifyContent: 'left', mb: 0 }}
              key={order.frpid}>
              <MillOrderCard {...order} />
            </Grid>
          ))}
        </Grid>
        <LastBilletScan />
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            <Box component="span" sx={{ bgcolor: 'primary.main', p: 1, borderRadius: 1 }}>
              Scan History
            </Box>
          </Typography>
          <ScanHistory />
        </Box>

      </Box>
    </ThemeProvider>
  );
};

export default TX1ScanSummary;
