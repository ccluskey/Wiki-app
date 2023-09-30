import { Box, Button, Container, Divider, List, ListItem, Pagination, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

function App() {
    const state = [
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "ChatGPT", itemValue: "1,900,451 Views" },
        { itemName: "Jerry Springer", itemValue: "1,567,232 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
        { itemName: "The Last of Us (TV show)", itemValue: "2,000,321 Views" },
    ];

    const theme = createTheme({
        palette: {
            primary: {
                main: '#025b4b',
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" style={{ textAlign: 'center', backgroundColor: '#f5f7f7', padding: '16px' }}>
                <Typography variant="h7" style={{ fontFamily: 'Georgia, serif', color: 'black' }}>
                    Top Wikipedia articles
                </Typography>
                <Box style={{
                    backgroundColor: 'white',
                    margin: '5%',
                    fontFamily: 'sans-serif',
                    fontSize: '0.5em',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '3em',
                    boxShadow: 1,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
                        Calendar
                    </div>
                    <Divider orientation="vertical" flexItem style={{ margin: '6px 0', borderRightWidth: '.5px' }} />
                    <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
                        Num Results
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ color: 'button', borderRadius: '15px', fontSize: '0.75em', padding: '5px 16px', margin: '6px' }}
                    >
                        Search
                    </Button>
                </Box>

                <Box style={{
                    backgroundColor: 'white',
                    margin: '5%',
                    fontFamily: 'sans-serif',
                    fontSize: '0.5em',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '30em',
                    boxShadow: 1,
                }}>
                    <List sx={{ borderRadius: '.5em', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {state.map((value) => (
                            <ListItem
                                key={value}
                                disableGutters
                            >
                                <div>{value.itemName} {value.itemValue}</div>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Pagination count={4} size="small" />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
