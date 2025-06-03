import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';

// Importing icons for the navbar
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import InfoIcon from '@mui/icons-material/Info';
import FactoryIcon from '@mui/icons-material/Factory';
import RuleSharpIcon from '@mui/icons-material/RuleSharp';
import MenuIcon from '@mui/icons-material/Menu';
import ViewWeekSharpIcon from '@mui/icons-material/ViewWeekSharp';

// Importing necessary components from Material-UI
import Collapse from '@mui/material/Collapse';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function Navbar(props) {
    const { drawerWidth, content } = props
    const location = useLocation()
    const path = location.pathname

    const [open, setOpen] = React.useState(false);

    const changeOpenStatus = () => {
        setOpen(!open)
    }

    const [openTX1, setOpenTX1] = React.useState(false);
    const [openTX2, setOpenTX2] = React.useState(false);

    const toggleTX1 = () => setOpenTX1(!openTX1);
    const toggleTX2 = () => setOpenTX2(!openTX2);

    const myDrawer = (
        <div>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <ListItemButton onClick={toggleTX1}>
                    <ListItemIcon><FactoryIcon /></ListItemIcon>
                    <ListItemText primary="TX1" />
                    {openTX1 ? <NavigateNextSharpIcon /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openTX1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX1/HandheldScanner" selected={path === '/TX1/TX1HandheldScanner'}>
                            <ListItemIcon><QrCodeScannerIcon /></ListItemIcon>
                            <ListItemText primary="Handheld Scanner" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX1/ScanSummary" selected={path === '/TX1/TX1ScanSummary'}>
                            <ListItemIcon><RuleSharpIcon /></ListItemIcon>
                            <ListItemText primary="Scan Summary" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX1/StockingTableScan" selected={path === '/TX1/TX1StockingTableScan'}>
                            <ListItemIcon><ViewWeekSharpIcon /></ListItemIcon>
                            <ListItemText primary="Stocking Table Map" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX1/MillOrders" selected={path === '/TX1/TX1MillOrders'}>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary="Mill Orders" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={toggleTX2}>
                    <ListItemIcon><FactoryIcon /></ListItemIcon>
                    <ListItemText primary="TX2" />
                    {openTX2 ? <NavigateNextSharpIcon /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openTX2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX2/HandheldScanner" selected={path === '/TX2/TX2HandheldScanner'}>
                            <ListItemIcon><QrCodeScannerIcon /></ListItemIcon>
                            <ListItemText primary="Handheld Scanner" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX2/ScanSummary" selected={path === '/TX2/TX2ScanSummary'}>
                            <ListItemIcon><RuleSharpIcon /></ListItemIcon>
                            <ListItemText primary="Scan Summary" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX2/StockingTableScan" selected={path === '/TX2/TX2StockingTableScan'}>
                            <ListItemIcon><ViewWeekSharpIcon /></ListItemIcon>
                            <ListItemText primary="Stocking Table Map" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/TX2/MillOrders" selected={path === '/TX2/TX2MillOrders'}>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary="Mill Orders" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/info" selected={path === '/info'}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary="Info" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </div>
    )



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    bgcolor: '#066334', // Nucor green
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={changeOpenStatus}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        Billet Scanning
                    </Typography>
                </Toolbar>
            </AppBar>



            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: '#1e1e1e',  // dark background
                        color: '#fff', // light text color
                        [`& .MuiListItemIcon-root`]: {
                            color: '#fff'
                        }
                    },
                }}
            >

                {myDrawer}

            </Drawer>

            <Drawer
                variant="temporary"
                open={open}
                onClose={changeOpenStatus}
                sx={{
                    display: { xs: "block", sm: "none" },
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: '#1e1e1e', // dark background
                        color: '#fff', // light text color
                        [`& .MuiListItemIcon-root`]: {
                            color: '#fff'
                        }
                    },
                }}
            >

                {myDrawer}

            </Drawer>





            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    bgcolor: '#121212',   // Fondo oscuro
                    color: '#ffffff',     // Texto claro
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Toolbar />

                {content}

                <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto', fontSize: '0.875rem', color: 'gray', width: '100%' }}>
                    © {new Date().getFullYear()} - Nucor
                </Box>
            </Box>
        </Box>
    );
}