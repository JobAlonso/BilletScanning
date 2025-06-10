import { Box, Grid, Typography } from '@mui/material';

const LastBilletScan = () => {
    return (
        <Grid
            container
            spacing={4}
            sx={{ mt: 3, flexWrap: 'nowrap' }} // Evitar que las columnas bajen de línea
        >
            {/* Left column with data */}
            <Grid
                sx={{
                    flexBasis: { xs: '30%', md: '30%' },
                    flexGrow: 1,
                    maxWidth: { xs: '30%', md: '30%' },
                }}
            >
                <Typography variant="h6" gutterBottom>
                    <Box
                        component="span"
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            p: 1,
                            borderRadius: 1,
                        }}
                    >
                        Stocking Table
                    </Box>
                </Typography>

                {[
                    { label: 'Mill Order', value: '110006997620' },
                    { label: 'Next Billet', value: '110402616656' },
                    { label: 'Billets Charged', value: '15' },
                    { label: 'Billets on Table', value: '25' },
                ].map((item, idx) => (
                    <Box
                        key={item.label + idx}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '40% 60%',
                            mb: 1,
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{ textAlign: 'right', pr: 1 }}
                        >
                            {item.label}
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                            {item.value}
                        </Typography>
                    </Box>
                ))}

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    <Box
                        component="span"
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            p: 1,
                            borderRadius: 1,
                        }}
                    >
                        Last Camera Scan
                    </Box>
                </Typography>

                {[
                    { label: 'BilletId', value: '110402616653' },
                    { label: 'Heat', value: '1100069976' },
                    { label: 'CastLot', value: '110006997601' },
                    { label: 'Category', value: '' },
                    {
                        label: 'Match',
                        value: (
                            <input
                                className="check-box"
                                disabled
                                type="checkbox"
                                checked
                            />
                        ),
                    },
                    { label: 'Disposition', value: 'Prime' },
                    { label: 'Status', value: 'Charged' },
                ].map((item, idx) => (
                    <Box
                        key={item.label + idx}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '40% 60%',
                            mb: 1,
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{ textAlign: 'right', pr: 1 }}
                        >
                            {item.label}
                        </Typography>
                        {typeof item.value === 'string' ? (
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>
                                {item.value}
                            </Typography>
                        ) : (
                            <Box sx={{ textAlign: 'left' }}>{item.value}</Box>
                        )}
                    </Box>
                ))}
            </Grid>

            <Grid
                sx={{
                    flexBasis: { xs: '10%', md: '10%' },
                    flexGrow: 1,
                    maxWidth: { xs: '10%', md: '10%' },
                }}
            >
            </Grid>

            {/* Right column with the image */}
            <Grid
                sx={{
                    flexBasis: { xs: '60%', md: '60%' },
                    flexGrow: 1,
                    maxWidth: { xs: '60%', md: '60%' },
                }}
            >
                <img
                    className="img-fluid billet-tag"
                    style={{ maxWidth: '100%' }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAXoxQHVBfyOUiJ+vl0xv68qUjk7MefzP5svtt8nf8HX/H3/F3/B1/x9/xd/wdf8ff8f8n/vu//z8lJvjIp/L6aAAAAABJRU5ErkJggg=="
                    alt="Billet tag"
                />
            </Grid>
        </Grid>
    );
};

export default LastBilletScan;
