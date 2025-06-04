import { Card, CardHeader, CardContent, Grid, Typography } from '@mui/material';

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
                border: selected ? '2px solid #1976d2' : undefined,
                backgroundColor: selected ? '#e3f2fd' : undefined,
                flex: 1, // Allow the card to grow and shrink as needed
                minWidth: 300,
                maxWidth: 1600,
            }}
            data-mill-order-frpid={frpid}
        >
            <CardHeader
                title={`${id1}`}
                subheader={`${status}`}
                sx={{ paddingBottom: 0 }}
            />
            <CardContent>
                <Grid
                    sx={{
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: {
                            xs: '1fr',       // 1 columna en pantallas pequeñas
                            sm: '1fr 1fr',   // 2 columnas en pantallas medianas
                            md: 'repeat(7, 1fr)', // 7 columnas en pantallas grandes
                        },
                    }}
                >
                    <Typography variant="body2" fontWeight="bold">{status}</Typography>
                    <Typography variant="body2">{id1}</Typography>
                    <Typography variant="body2">{id2}</Typography>
                    <Typography variant="body2">{product}</Typography>
                    <Typography variant="body2">{grade}</Typography>
                    <Typography variant="body2">{diameter}</Typography>
                    <Typography variant="body2">{length}</Typography>
                </Grid>

                <Grid
                    sx={{
                        display: 'grid',
                        gap: 2,
                        mt: 2,
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: 'repeat(4, 1fr)',
                        },
                    }}
                >
                    <Typography variant="body2">Scheduled: {scheduled}</Typography>
                    <Typography variant="body2">
                        Scanned: <span className="scanned">{scanned}</span>
                    </Typography>
                    <Typography variant="body2">
                        ToScan: <span className="toScan">{toScan}</span>
                    </Typography>
                    <Typography variant="body2">ToRoll: {toRoll}</Typography>
                </Grid>
            </CardContent>


        </Card>
    );
};

export default MillOrderCard;
