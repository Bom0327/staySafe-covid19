import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core';
import { fetchProvinceData } from '../../api/japan';
import Loading from './Loading';

const useStyles = makeStyles({
  root: {
    fontSize: "0.9rem",
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
      const res = await fetchProvinceData();
      const p = res.map(a => a.prefecture);
      const nc = res.map(a => a.newConfirmed);
      const nd = res.map(a => a.newDeaths);
      const na = res.map(a => a.newActive);

      setApiData([
        { id: 0, prefecture: p[0], newConfirmed: nc[0], newDeaths: nd[0], newActive: na[0] },
        { id: 1, prefecture: p[1], newConfirmed: nc[1], newDeaths: nd[1], newActive: na[1] },
        { id: 2, prefecture: p[2], newConfirmed: nc[2], newDeaths: nd[2], newActive: na[2] },
        { id: 3, prefecture: p[3], newConfirmed: nc[3], newDeaths: nd[3], newActive: na[3] },
        { id: 4, prefecture: p[4], newConfirmed: nc[4], newDeaths: nd[4], newActive: na[4] },
        { id: 5, prefecture: p[5], newConfirmed: nc[5], newDeaths: nd[5], newActive: na[5] },
        { id: 6, prefecture: p[6], newConfirmed: nc[6], newDeaths: nd[6], newActive: na[6] },
        { id: 7, prefecture: p[7], newConfirmed: nc[7], newDeaths: nd[7], newActive: na[7] },
        { id: 8, prefecture: p[8], newConfirmed: nc[8], newDeaths: nd[8], newActive: na[8] },
        { id: 9, prefecture: p[9], newConfirmed: nc[9], newDeaths: nd[9], newActive: na[9] },
        { id: 10, prefecture: p[10], newConfirmed: nc[10], newDeaths: nd[10], newActive: na[10] },
        { id: 11, prefecture: p[11], newConfirmed: nc[11], newDeaths: nd[11], newActive: na[11] },
        { id: 12, prefecture: p[12], newConfirmed: nc[12], newDeaths: nd[12], newActive: na[12] },
        { id: 13, prefecture: p[13], newConfirmed: nc[13], newDeaths: nd[13], newActive: na[13] },
        { id: 14, prefecture: p[14], newConfirmed: nc[14], newDeaths: nd[14], newActive: na[14] },
        { id: 15, prefecture: p[15], newConfirmed: nc[15], newDeaths: nd[15], newActive: na[15] },
        { id: 16, prefecture: p[16], newConfirmed: nc[16], newDeaths: nd[16], newActive: na[16] },
        { id: 17, prefecture: p[17], newConfirmed: nc[17], newDeaths: nd[17], newActive: na[17] },
        { id: 18, prefecture: p[18], newConfirmed: nc[18], newDeaths: nd[18], newActive: na[18] },
        { id: 19, prefecture: p[19], newConfirmed: nc[19], newDeaths: nd[19], newActive: na[19] },
        { id: 20, prefecture: p[20], newConfirmed: nc[20], newDeaths: nd[20], newActive: na[20] },
        { id: 21, prefecture: p[21], newConfirmed: nc[21], newDeaths: nd[21], newActive: na[21] },
        { id: 22, prefecture: p[22], newConfirmed: nc[22], newDeaths: nd[22], newActive: na[22] },
        { id: 23, prefecture: p[23], newConfirmed: nc[23], newDeaths: nd[23], newActive: na[23] },
        { id: 24, prefecture: p[24], newConfirmed: nc[24], newDeaths: nd[24], newActive: na[24] },
        { id: 25, prefecture: p[25], newConfirmed: nc[25], newDeaths: nd[25], newActive: na[25] },
        { id: 26, prefecture: p[26], newConfirmed: nc[26], newDeaths: nd[26], newActive: na[26] },
        { id: 27, prefecture: p[27], newConfirmed: nc[27], newDeaths: nd[27], newActive: na[27] },
        { id: 28, prefecture: p[28], newConfirmed: nc[28], newDeaths: nd[28], newActive: na[28] },
        { id: 29, prefecture: p[29], newConfirmed: nc[29], newDeaths: nd[29], newActive: na[29] },
        { id: 30, prefecture: p[30], newConfirmed: nc[30], newDeaths: nd[30], newActive: na[30] },
        { id: 31, prefecture: p[31], newConfirmed: nc[31], newDeaths: nd[31], newActive: na[31] },
        { id: 32, prefecture: p[32], newConfirmed: nc[32], newDeaths: nd[32], newActive: na[32] },
        { id: 33, prefecture: p[33], newConfirmed: nc[33], newDeaths: nd[33], newActive: na[33] },
        { id: 34, prefecture: p[34], newConfirmed: nc[34], newDeaths: nd[34], newActive: na[34] },
        { id: 35, prefecture: p[35], newConfirmed: nc[35], newDeaths: nd[35], newActive: na[35] },
        { id: 36, prefecture: p[36], newConfirmed: nc[36], newDeaths: nd[36], newActive: na[36] },
        { id: 37, prefecture: p[37], newConfirmed: nc[37], newDeaths: nd[37], newActive: na[37] },
        { id: 38, prefecture: p[38], newConfirmed: nc[38], newDeaths: nd[38], newActive: na[38] },
        { id: 39, prefecture: p[39], newConfirmed: nc[39], newDeaths: nd[39], newActive: na[39] },
        { id: 40, prefecture: p[40], newConfirmed: nc[40], newDeaths: nd[40], newActive: na[40] },
        { id: 41, prefecture: p[41], newConfirmed: nc[41], newDeaths: nd[41], newActive: na[41] },
        { id: 42, prefecture: p[42], newConfirmed: nc[42], newDeaths: nd[42], newActive: na[42] },
        { id: 43, prefecture: p[43], newConfirmed: nc[43], newDeaths: nd[43], newActive: na[43] },
        { id: 44, prefecture: p[44], newConfirmed: nc[44], newDeaths: nd[44], newActive: na[44] },
        { id: 45, prefecture: p[45], newConfirmed: nc[45], newDeaths: nd[45], newActive: na[45] },
        { id: 46, prefecture: p[46], newConfirmed: nc[46], newDeaths: nd[46], newActive: na[46] },
        { id: 47, prefecture: p[47], newConfirmed: nc[47], newDeaths: nd[47], newActive: na[47] },
        { id: 48, prefecture: p[48], newConfirmed: nc[48], newDeaths: nd[48], newActive: na[48] },
      ]);
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
        {apiData.length > 0 ? (
          <DataGrid
            rows={apiData}
            columns={columns}
            pageSize={7}
            sortModel={[{ field: 'newConfirmed', sort: 'desc' }]}
            className={classes.root}
          />
        ) : <Loading />}
      </div>
    </div>
  );
}

export default JpDailyTable;
