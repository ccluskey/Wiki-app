import React from 'react';
import { Box, Container, List, ListItem, Pagination, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from './components/SearchBar';

interface WikiAppState {
    articleData: Array<any>,
    curPage: number
}

class WikiApp extends React.Component<{}, WikiAppState> {    
    constructor(props: any) {
        super(props)
        this.state = { articleData: [
            {articleName: "AI", views: 100000},
            {articleName: "Machine Learning", views: 90000},
            {articleName: "Deep Learning", views: 80000},
            {articleName: "Artificial Intelligence", views: 70000},
            {articleName: "Neural Networks", views: 70000},
            {articleName: "Artificial Intelligence", views: 60000},
            {articleName: "Machine Learning", views: 50000},
            {articleName: "Deep Learning", views: 40000},
            {articleName: "Artificial Intelligence", views: 30000},
            {articleName: "Neural Networks", views: 20000},
            {articleName: "Artificial Intelligence", views: 10000},
            {articleName: "Machine Last Item", views: 5000},
        ],
        curPage: 1 };
    }

    render() {
        const theme = createTheme({
            palette: {
                primary: {
                    main: '#025b4b',
                },
                secondary: {
                    main: '#a7aaab',
                }
            },
            typography: {
                button: {
                  textTransform: 'none'
                }
              }
        });

        return (
            <ThemeProvider theme={theme}>
                <Container style={{ textAlign: 'center', backgroundColor: '#f5f7f7', padding: '16px' }}>
                    <Typography variant="h4" style={{ fontFamily: 'Georgia, serif', color: 'black' }}>
                        Top Wikipedia articles
                    </Typography>
                    <SearchBar></SearchBar>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <List sx={{
                            bgcolor: 'white',
                            borderRadius: '.5em',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            margin: '0 15%',
                            padding: '2%',
                            width: '100%'
                        }}>
                            {this.state.articleData.slice(this.state.curPage * 10 - 10, this.state.curPage * 10).map((value, index) => (
                                <ListItem disableGutters>
                                    <Box
                                        display="flex"
                                        justifyContent="stretch"
                                        alignItems="center"
                                        style={{ padding: '12px' }}
                                        width="100%"
                                        sx={{ border: 1, borderColor: '#e6eaeb', borderRadius: '.5em'}}
                                        onClick={() => { }}
                                    >
                                        <Typography style={{ fontFamily: 'Georgia, serif', color: '#73767f', fontSize: '12px', width: '2em' }}>{this.state.curPage * 10 - 10 + index + 1}</Typography>
                                        <Typography style={{ fontFamily: 'Georgia, serif', color: 'black', fontSize: '12px' }}>{value.articleName}</Typography>
                                        <Typography style={{ marginLeft: 'auto', fontFamily: 'sans-serif', color: '#73767f', fontSize: '10px' }}>{value.views} views</Typography>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box
                        alignItems="center"
                        display="flex"
                        justifyContent="center"
                        marginTop="10px"
                    >

                        <Pagination
                            onChange={(e, page) => this.setState({ curPage: page })}
                            count={Math.ceil(this.state.articleData.length / 10)}
                            size="small"
                        />
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}

export default WikiApp;
