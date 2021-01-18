import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core';
import { fetchProvinceNewData } from '../../api/japan';

const useStyles = makeStyles({
  root: {
    fontSize : "0.9rem",
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "#fcf8ec",
    }
  }
  
});

const JpDailyTable = () => {
  const classes = useStyles();

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchProvinceNewData();
      setApiData(res);
    };
    
    fetchApi();
  }, []);

  const columns = [
    { field: "prefecture", headerName: "Prefecture", width: 180 },
    { field: "newConfirmed", headerName: "Confirmed", type: "number", width: 180 },
    { field: "newDeaths", headerName: "Deaths", type: "number", width: 180 },
    { field: "newActive", headerName: "Active", type: "number", width: 180 },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    table: {
      height: 500,
      width: '85%'
    },
    title: {
      paddingBottom: 15,
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontSize: 16,
      fontWeight: 600
    }
  }

  return (
    <div style={styles.container}>
     <h4 style={styles.title}>Daily new cases by prefecture</h4>
      <div style={styles.table}>
        <DataGrid
          rows={apiData}
          columns={columns}
          pageSize={7}
          sortModel={[{ field: 'newConfirmed', sort: 'desc' }]}
          className={classes.root}
        />
      </div>
    </div>
  );
}

export default JpDailyTable;
