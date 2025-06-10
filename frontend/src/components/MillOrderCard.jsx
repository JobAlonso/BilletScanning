import { Box, Card, CardHeader, CardContent, Grid, Typography, Tooltip } from '@mui/material';

const MillOrderCard = ({
    frpid,
    status,
    id1,
    id2,
    product,
    grade,
    diameter,
    length,
    scheduled,
    scanned,
    toScan,
    toRoll,
    selected
}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                mb: 0,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: ['Rolling', 'Charging'].includes(status)
                    ? '#646464' // Dark gray for Rolling or Charging status
                    : selected
                        ? '#e3f2fd' // Light blue for selected
                        : '#33383E', // Default color for the card background
                flex: 1,
                minWidth: 300,
                maxWidth: 1600,
            }}
            data-mill-order-frpid={frpid}
        >
            <CardHeader
                title={<Tooltip title={`Mill Order ID`} arrow>
                    <Box component="span" sx={{ cursor: 'pointer' }}>{id1}</Box>
                </Tooltip>}
                subheader={
                    <Box
                        sx={{
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            color: ['Rolling', 'Charging'].includes(status) ? '#ffffff' : '#ffffff',
                            textTransform: 'uppercase',
                            backgroundColor: ['Rolling', 'Charging'].includes(status) ? '#088808' : 'transparent',
                            px: 1.5,
                            py: 0.1,
                            borderRadius: 2,
                            borderColor: ['Rolling', 'Charging'].includes(status) ? '#000000' : 'transparent',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            display: 'inline-block',
                            mt: 0.5,
                        }}
                    >
                        {status}
                    </Box>
                }
                sx={{ paddingBottom: 0 }}

            />
            <CardContent>
                <Grid
                    sx={{
                        display: 'grid',
                        gap: 4,
                        gridTemplateColumns: {
                            xs: '1fr',       // 1 columna en pantallas pequeñas
                            sm: '1fr 1fr',   // 2 columnas en pantallas medianas
                            md: 'repeat(6, 1fr)', // 7 columnas en pantallas grandes
                            textAlign: 'center',
                        },
                    }}
                >
                    <Tooltip title={`ID2`} arrow>
                        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                            {id2}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={`Product`} arrow>
                        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                            {product}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={`Grade`} arrow>
                        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                            {grade}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={`Diameter`} arrow>
                        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                            {diameter}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={`Length`} arrow>
                        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                            {length}
                        </Typography>
                    </Tooltip>
                </Grid>

                <Grid
                    sx={{
                        display: 'grid',
                        gap: 4,
                        mt: 1,
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: 'repeat(6, 1fr)',
                            textAlign: 'center',
                        },
                    }}
                >
                    <Typography variant="body2">
                        Scheduled: {scheduled}
                    </Typography>
                    <Typography variant="body2">
                        Scanned: <span className="scanned">{scanned}</span>
                    </Typography>
                    <Typography variant="body2">
                        To Scan: <span className="toScan">{toScan}</span>
                    </Typography>
                    <Typography variant="body2">
                        To Roll: {toRoll}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default MillOrderCard;
