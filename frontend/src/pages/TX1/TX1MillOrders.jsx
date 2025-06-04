// src/pages/TX1/TX1MillOrders.jsx
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
  Grid,
} from '@mui/material';
import { ArrowUpward, ArrowDownward, Close } from '@mui/icons-material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import darkNucorTheme from '../../theme';

const TX1MillOrders = () => {
  const millOrders = [
    {
      id: 43513,
      orderNumber: '110001358620',
      subOrderNumber: '110001358601',
      scheduled: 35,
      completed: true,
    },
    {
      id: 44591,
      orderNumber: '110001449320',
      subOrderNumber: '110001449301',
      scheduled: 23,
      completed: true,
    },
    {
      id: 45439,
      orderNumber: '110001302400',
      subOrderNumber: '110001302402',
      scheduled: 1,
      completed: true,
    },
    {
      id: 45805,
      orderNumber: '110001546820',
      subOrderNumber: '110001546801',
      scheduled: 39,
      completed: true,
    },
    {
      id: 45975,
      orderNumber: '110001560921',
      subOrderNumber: '110001560901',
      scheduled: 1,
      completed: true,
    },
  ];

  return (
    <ThemeProvider theme={darkNucorTheme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">
          <Box component="span" sx={{ bgcolor: 'primary.main', p: 1, borderRadius: 1 }}>
            TX1 Mill Orders
          </Box>
        </Typography>
        {millOrders.map((order) => (
          <Card key={order.id} sx={{ mb: 3, mt: 2 }}>
            <CardHeader sx={{ bgcolor: 'background.cardTitle' }}
              title={
                <Grid container alignItems="center" spacing={3}>
                  <Grid>
                    <Typography variant="h6" title="Order Number" color="text.secondary">{order.orderNumber}</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle1" title="sub Order Number" color="text.secondary">{order.subOrderNumber}</Typography>
                  </Grid>
                  <Grid sx={{ textAlign: 'right' }}>
                    <IconButton title="Move up"
                      sx={{
                        color: 'primary.contrastText',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}>
                      <ArrowUpward />
                    </IconButton>
                    <IconButton title="Move down"
                      sx={{
                        color: 'primary.contrastText',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}>
                      <ArrowDownward />
                    </IconButton>
                    <IconButton title="Remove"
                      sx={{
                        color: 'primary.contrastText',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}>
                      <Close />
                    </IconButton>
                  </Grid>
                </Grid>
              }
            />
            <CardContent sx={{ bgcolor: 'background.cardContent' }}>
              <form method="post" action="/MillOrder/Edit">
                <input type="hidden" name="id" value={order.id} />
                <Grid container spacing={3} alignItems="center">
                  <Grid>
                    <TextField
                      label="Scheduled"
                      type="number"
                      name="scheduled"
                      defaultValue={order.scheduled}

                      sx={{
                        width: '150px',
                        '& .MuiInputBase-input': {
                          color: 'text.primary', // text color of the input
                          fontSize: '20px', // font size of the input
                          textAlign: 'center', // align text to the right
                        },
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.light', // border color of the input
                        },
                        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.contrastText', // border color on hover
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.contrastText', // border color when focused
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary', //label color by default
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.contrastText', // label color when focused
                        },
                      }}
                    />
                  </Grid>
                  <Grid>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="completed"
                          defaultChecked={order.completed}
                          value="false"
                          title="Mark as completed"
                          sx={{
                            color: 'primary.main', // border color when unchecked
                            '& .MuiSvgIcon-root': {
                              fontSize: 28,
                              backgroundColor: 'background.white', // background color of the icon when unchecked
                              borderRadius: '2px', // border radius of the icon 
                              transition: 'background-color 0.2s ease', // smooth transition for background color
                            },
                            '&.Mui-checked .MuiSvgIcon-root': {
                              color: 'primary.main', // color when checked
                              backgroundColor: 'secondary.main', // background color when checked
                            },
                            '&:hover .MuiSvgIcon-root': {
                              backgroundColor: 'rgba(133, 140, 145, 0.6)', // background color on hover
                            },
                          }}
                        />
                      }
                      label="Completed"
                      sx={{ color: 'text.secondary' }}
                    />
                    <input type="hidden" name="completed" value="false" />
                  </Grid>
                  <Grid>
                    <Button type="submit" variant="contained" color="secondary">
                      Update
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default TX1MillOrders;
