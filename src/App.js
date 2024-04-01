



import React, { useState } from 'react';
import OverviewTab from './OverviewTab'; // Assuming OverviewPane.jsx is in the same directory
import OtherTab from './OtherTab'; // Assuming OtherTab.jsx is in the same directory
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Grid,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem
} from '@mui/material';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Importing arrow back icon from Material-UI
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const App = () => {
  const [value, setValue] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [client, setClient] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rfqCode, setRfqCode] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSave = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  const handleFormSubmit = () => {
    // Perform form submission logic here, e.g., saving data
    console.log("Client:", client);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("RFQ Code:", rfqCode);

    // Close the overlay after submission
    setIsOverlayOpen(false);
  };

  const handleClientChange = (event) => {
    setClient(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleRfqCodeChange = (event) => {
    setRfqCode(event.target.value);
  };

  return (
    <div>
      <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => console.log("Go back")} sx={{ p: '6px', '& svg': { fontSize: '1.5rem' } }}>
            <ArrowBackIosNewIcon /> {/* Adding arrow back icon */}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }} >
            Create Workorder
          </Typography>
          {/* Right-aligned save button */}
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Toolbar>
      </AppBar>

      {/* Tabs and content section */}
      <Grid container spacing={2}>
        <Grid item xs={12}>

          <Tabs value={value} onChange={handleChange} >
            <Tab label="Overview" />
            <Tab label="Other" />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          {/* Content for each tab can be placed here */}
          {value === 0 && <OverviewTab />}
          {value === 1 && <OtherTab />}
        </Grid>
      </Grid>

      {/* Overlay for additional details */}
      <Dialog open={isOverlayOpen} onClose={handleCloseOverlay}>
        <DialogTitle> Workorder</DialogTitle>
        <DialogContent>

          <TextField
            select
            label="Client"
            value={client}
            onChange={handleClientChange}
            fullWidth
            required
            sx={{ marginBottom: '1rem' }} // Add margin-bottom for spacing
            InputLabelProps={{
              style: { color: 'black' } // Apply black color to label
            }}
          >
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
          </TextField>
          <TextField
            label="Date of Commencement"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
              style: { color: 'black' } // Apply black color to label
            }}
            sx={{ marginBottom: '1rem' }} // Add margin-bottom for spacing
          />
          <TextField
            label="Date of Completion"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
              style: { color: 'black' } // Apply black color to label
            }}
            sx={{ marginBottom: '1rem' }} // Add margin-bottom for spacing
          />
          <TextField
            label="RFQ Code"
            value={rfqCode}
            onChange={handleRfqCodeChange}
            fullWidth
            required
            InputLabelProps={{
              style: { color: 'black' } // Apply black color to label
            }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOverlay}>Cancel</Button>
          <Button onClick={handleFormSubmit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;

