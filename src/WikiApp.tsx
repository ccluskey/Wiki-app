import React from 'react';
import { Box, Container, List, ListItem, Pagination, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from './components/SearchBar';
import fetchWikiData from './fetchWikiData';
import dayjs, { Dayjs } from 'dayjs';

interface ArticleData {
    articleName: string;
    views: number;
}

interface WikiAppState {
    articleData: ArticleData[];
    curPage: number;
    date: Dayjs;
    numResults: number;
    country: string;
    isError: boolean;
    errorMessage?: string;
}

class WikiApp extends React.Component<{}, WikiAppState> {    
    constructor(props: any) {
        super(props)
        this.state = { articleData: [], curPage: 1, date: dayjs().add(-1, 'day'), numResults: 100, country: 'US', isError: false };
    }

    componentDidMount() {
        // Try to fetch the data if we don't have any and there wasn't an error
        if (this.state.articleData.length == 0 && this.state.isError == false) {
            this.fetchWikiData(this.state.date, this.state.numResults, this.state.country);
        }
        
    }
        
    fetchWikiData = (date: Dayjs, numResults: number, country: string) => {
        fetchWikiData(date.format("YYYY"), date.format("MM"), date.format("DD"), country).then(response => {
            let articleDataForDate = [];
            if (response.status == 200 && response.data && response.data.items && response.data.items.length > 0
                && response.data.items[0].articles && response.data.items[0].articles.length > 0) {
                // The app only ever shows up to 200 articles, but the API returns up to 1000 (not configurable)
                for (let i = 0; i < Math.min(response.data.items[0].articles.length, 200); i++) {
                    articleDataForDate.push({
                        articleName: response.data.items[0].articles[i].article.replaceAll("_", " "),
                        views: response.data.items[0].articles[i].views_ceil.toLocaleString()
                    });
                }
            
                this.setState({articleData: articleDataForDate, numResults: numResults, date: date, curPage: 1, country: country, isError: false});
            } else {
                this.setState({isError: true});
            }
        }).catch(error => {
            if (error.message == "Network Error") {
                 this.setState({articleData: [], isError: true, country: country, errorMessage: "Could not fetch article data, please check your network connection and try again"});
            } else if (error.response && error.response.data.title == "Not found.") {
                 this.setState({articleData: [], isError: true, country: country, errorMessage: "No data for the selected date, please chose another date"});
            } else {
            	this.setState({articleData: [], isError: true, country: country, errorMessage: "An unknown error occured, please try again later"});
            }
        });
    }

    renderListView() {
        return (
            <List sx={{
                bgcolor: 'white',
                borderRadius: '.5em',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                margin: '0 15%',
                padding: '2%',
                width: '100%'
            }}>
                {this.state.articleData.slice(this.state.curPage * 10 - 10, Math.min(this.state.numResults, this.state.curPage * 10)).map((value, index) => (
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
        )
    }

    renderErrorView() {
        return(
            <Typography style={{ fontFamily: 'Georgia, serif', fontSize: '12px' }}>{this.state.errorMessage}</Typography>
        )
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

	    let listView;
        if (this.state.isError) {
           listView = this.renderErrorView();
        } else {
           listView = this.renderListView();
        }

        return (
            <ThemeProvider theme={theme}>
                <Container style={{ textAlign: 'center', backgroundColor: '#f5f7f7', padding: '16px' }}>
                    <Typography variant="h4" style={{ fontFamily: 'Georgia, serif', color: 'black' }}>
                        Top Wikipedia articles
                    </Typography>
                    <SearchBar
                        handleSearch={this.fetchWikiData}
                        defaultDate={this.state.date}
                        defaultResults={this.state.numResults}
                        defaultCountry={this.state.country}
                    />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        {listView}
                        
                    </Box>

                    <Box
                        alignItems="center"
                        display="flex"
                        justifyContent="center"
                        marginTop="10px"
                    >

                        <Pagination
                            onChange={(e, page) => this.setState({ curPage: page })}
                            count={this.state.isError ? 0 : Math.min(Math.ceil(this.state.numResults / 10), Math.ceil(this.state.articleData.length / 10))}
                            page={this.state.curPage}
                            size="small"
                        />
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}

export default WikiApp;
