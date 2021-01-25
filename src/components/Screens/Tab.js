import React, { useState } from 'react';
import PropTypes from "prop-types";
import { makeStyles, AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import AusScreen from './AusScreen';
import JpScreen from './JpScreen';
import KrScreen from './KrScreen';
import MysScreen from './MysScreen';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography component={'span'} variant={'body2'}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles({
  header: {
    padding: 5,
    display: 'flex',
    justifyContent : 'center',
    alignItems: 'center'
  }

});

function CovidData() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{marginTop:'3%'}}>
      <AppBar position="static" color="inherit" elevation={0} className={classes.header}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Japan" />
          <Tab label="Malaysia" />
          <Tab label="Korea" />
          <Tab label="Australia" />

        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} {...a11yProps(0)} >
        <JpScreen />
      </TabPanel>
      <TabPanel value={value} index={1} {...a11yProps(1)} >
        <MysScreen/>
      </TabPanel>
      <TabPanel value={value} index={2} {...a11yProps(2)} >
        <KrScreen/>
      </TabPanel>
      <TabPanel value={value} index={3} {...a11yProps(3)} >
        <AusScreen/>
      </TabPanel>

    </div>
  );
}

export default CovidData;

