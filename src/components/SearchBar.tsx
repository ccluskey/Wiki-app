import React from "react";
import { Box, Button, Divider, Menu, MenuItem, Popover, Typography } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import calendar from '../assets/Calendar.png';
import numResults from '../assets/NumResults.png';

interface SearchBarProps {
    handleSearch: Function;
}

interface SearchBarState {
    calAnchor: HTMLButtonElement|null;
    date: Dayjs;
    numAnchor: HTMLButtonElement|null;
    numResults: number;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

    handleCalendarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({calAnchor: event.currentTarget});
    }

    handleNumClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({numAnchor: event.currentTarget});
    }

    constructor(props: any) {
        super(props)
        this.state = {calAnchor: null,  date: dayjs('2023-01-01'), numAnchor: null, numResults: 100};
    }

    render() {
        return (
            <Box sx={{
                backgroundColor: 'white',
                margin: '2% 15%',
                fontFamily: 'sans-serif',
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '50px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>              
                <Button 
                    color={'secondary'}
                    onClick={this.handleCalendarClick}
                    style={{ borderRadius: '50px', margin: '10px'}}
                >
                    <img id={"calOpen"} src={calendar} width={40} height={40} style={{ padding: '18px'}}alt="calendar image"/>
                    <Box sx={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}>
                        <Typography fontSize={10}  sx={{ display: 'flex'}}>
                            {Boolean(this.state.calAnchor) ? "DATE ˄" : "DATE ˅"}
                        </Typography>
                        <Typography fontSize={14} sx={{display: 'flex'}} color="black">
                            {dayjs(this.state.date).format('MMMM DD, YYYY')}
                        </Typography>
                    </Box>
                </Button>
                <Popover
                    open={Boolean(this.state.calAnchor)}
                    onClose={() => this.setState({calAnchor: null })}
                    anchorEl={this.state.calAnchor}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            defaultValue={this.state.date}
                            onChange={(newValue) => {
                                if (newValue) {
                                    this.setState({date: newValue, calAnchor: null})
                                }
                            }}
                        />                    
                    </LocalizationProvider>
                </Popover>

                <Divider orientation="vertical" flexItem style={{ margin: '24px 0', borderRightWidth: '.5px' }} />
                
                <Button 
                    color={'secondary'}
                    onClick={this.handleNumClick}
                    style={{ borderRadius: '50px', margin: '10px'}}
                >
                    <img src={numResults} width={40} height={40} style={{ padding: '18px'}}alt="number of results image"/>
                    <Box sx={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}>
                        <Typography fontSize={10}  sx={{ display: 'flex'}}>
                            {Boolean(this.state.numAnchor) ? "NUM RESULTS ˄" : "NUM RESULTS ˅"}
                        </Typography>
                        <Typography fontSize={14} sx={{display: 'flex'}} color="black">
                            {this.state.numResults}
                        </Typography>
                    </Box>
                </Button>
                <Menu
                    open={Boolean(this.state.numAnchor)}
                    onClose={() => this.setState({numAnchor: null })}
                    anchorEl={this.state.numAnchor}
                >
                    <Box sx={{
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '100px'
                    }}
                    >
                        <MenuItem sx={{justifyContent: 'center'}} onClick={() => this.setState({numResults: 25, numAnchor: null})}>25</MenuItem>
                        <MenuItem sx={{justifyContent: 'center'}} onClick={() => this.setState({numResults: 50, numAnchor: null})}>50</MenuItem>
                        <MenuItem sx={{justifyContent: 'center'}} onClick={() => this.setState({numResults: 75, numAnchor: null})}>75</MenuItem>
                        <MenuItem sx={{justifyContent: 'center'}} onClick={() => this.setState({numResults: 100, numAnchor: null})}>100</MenuItem>
                        <MenuItem sx={{justifyContent: 'center'}} onClick={() => this.setState({numResults: 200, numAnchor: null})}>200</MenuItem>
                    </Box>
                </Menu>

                <Button
                    variant="contained"
                    color="primary"
                    style={{ borderRadius: '50px', fontSize: '14px', padding: '10px 64px', margin: '12px' }}
                    onClick={() => this.props.handleSearch(this.state.date, this.state.numResults)}
                >
                    Search
                </Button>
            </Box>
        );
    }
}

export default SearchBar;