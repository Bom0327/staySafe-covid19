import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core';
import { fetchProvinceTotalData } from '../../api/japan';

const useStyles = makeStyles({
  root: {
    fontSize : "0.9rem",
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "#fcf8ec",
    }
  }
});

const JpTotalTable = () => {
  const classes = useStyles();

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchProvinceTotalData();
      setApiData(res);
    };
    
    fetchApi();
  }, []);

  const columns = [
    { field: "prefecture", headerName: "Prefecture", width: 180 },
    { field: "confirmed", headerName: "Confirmed", type: "number", width: 180 },
    { field: "deaths", headerName: "Deaths", type: "number", width: 180 },
    { field: "active", headerName: "Active", type: "number", width: 180 },
  ];

  const styles = {
    container : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    },
    table:{
      height:500,
      width:'85%'
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
      <h4 style={styles.title}>Total cases by prefecture</h4>
      <div style={styles.table}>
        <DataGrid
          rows={apiData}
          columns={columns}
          pageSize={7}
          sortModel={[{ field: 'active', sort: 'desc' }]}
          className={classes.root}
        />
      </div>
    </div>
  );
}

export default JpTotalTable;
