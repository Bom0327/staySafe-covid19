import React, { useState } from 'react';
import PropTypes from "prop-types";
import { makeStyles, Paper, AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import JpTotalTable from '../Tables/JpTotalTable';
import JpDailyTable from '../Tables/JpDailyTable';


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
        <Box p={5}>
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

function JpTable() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <AppBar position="sticky" color="inherit" elevation={0} className={classes.header}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Total" />
          <Tab label="Daily" />

        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} {...a11yProps(0)} >
        <JpTotalTable />
      </TabPanel>
      <TabPanel value={value} index={1} {...a11yProps(1)} >
        <JpDailyTable />
      </TabPanel>

    </Paper>
  );
}

export default JpTable;

