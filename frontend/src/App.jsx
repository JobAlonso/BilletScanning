import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import { Typography } from '@mui/material';
//import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx';

// Importing TX1 components
import TX1HandheldScanner from './pages/TX1/TX1HandheldScanner.jsx';
import TX1ScanSummary from './pages/TX1/TX1ScanSummary.jsx';
import TX1StockingTableScan from './pages/TX1/TX1StockingTableScan.jsx';
import TX1MillOrders from './pages/TX1/TX1MillOrders.jsx';
import TX1StockingTableMap from './pages/TX1/TX1StockingTableMap.jsx';

// Importing TX2 components
import TX2HandheldScanner from './pages/TX2/TX2HandheldScanner.jsx';;
import TX2ScanSummary from './pages/TX2/TX2ScanSummary.jsx';
import TX2StockingTableScan from './pages/TX2/TX2StockingTableScan.jsx';
import TX2MillOrders from './pages/TX2/TX2MillOrders.jsx';
import TX2StockingTableMap from './pages/TX2/TX2StockingTableMap.jsx';


function Home() {
  return (
    <Typography variant="h5" fontWeight="normal">
      Billet Scanning site for Handheld Scanner and DataMan Barcode reader
    </Typography>
  );
}

export default function App() {
  return (
    <Navbar drawerWidth={220} content={
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TX1/HandheldScanner" element={<TX1HandheldScanner />} />
        <Route path="/TX1/ScanSummary" element={<TX1ScanSummary />} />
        <Route path="/TX1/StockingTableScan" element={<TX1StockingTableScan />} />
        <Route path="/TX1/MillOrders" element={<TX1MillOrders />} />
        <Route path="/TX2/HandheldScanner" element={<TX2HandheldScanner />} />
        <Route path="/TX2/ScanSummary" element={<TX2ScanSummary />} />
        <Route path="/TX2/StockingTableScan" element={<TX2StockingTableScan />} />
        <Route path="/TX2/MillOrders" element={<TX2MillOrders />} />
        <Route path="/TX1/StockingTableMap" element={<TX1StockingTableMap />} />
        <Route path="/TX2/StockingTableMap" element={<TX2StockingTableMap />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/UnderConstruction" element={<UnderConstruction />} />
      </Routes>
    } />
  )
}
