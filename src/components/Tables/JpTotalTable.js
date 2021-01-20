import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core';
import { fetchProvinceData } from '../../api/japan';
import Loading from './Loading';

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
      const res = await fetchProvinceData();
      const p = res.map(a=>a.prefecture);
      const c = res.map(a=>a.confirmed);
      const d = res.map(a=>a.deaths);
      const a = res.map(a=>a.active);

      setApiData([
        {id:0, prefecture:p[0], confirmed:c[0],deaths:d[0],active:a[0]},
        {id:1, prefecture:p[1], confirmed:c[1],deaths:d[1],active:a[1]},
        {id:2, prefecture:p[2], confirmed:c[2],deaths:d[2],active:a[2]},
        {id:3, prefecture:p[3], confirmed:c[3],deaths:d[3],active:a[3]},
        {id:4, prefecture:p[4], confirmed:c[4],deaths:d[4],active:a[4]},
        {id:5, prefecture:p[5], confirmed:c[5],deaths:d[5],active:a[5]},
        {id:6, prefecture:p[6], confirmed:c[6],deaths:d[6],active:a[6]},
        {id:7, prefecture:p[7], confirmed:c[7],deaths:d[7],active:a[7]},
        {id:8, prefecture:p[8], confirmed:c[8],deaths:d[8],active:a[8]},
        {id:9, prefecture:p[9], confirmed:c[9],deaths:d[9],active:a[9]},
        {id:10, prefecture:p[10], confirmed:c[10],deaths:d[10],active:a[10]},
        {id:11, prefecture:p[11], confirmed:c[11],deaths:d[11],active:a[11]},
        {id:12, prefecture:p[12], confirmed:c[12],deaths:d[12],active:a[12]},
        {id:13, prefecture:p[13], confirmed:c[13],deaths:d[13],active:a[13]},
        {id:14, prefecture:p[14], confirmed:c[14],deaths:d[14],active:a[14]},
        {id:15, prefecture:p[15], confirmed:c[15],deaths:d[15],active:a[15]},
        {id:16, prefecture:p[16], confirmed:c[16],deaths:d[16],active:a[16]},
        {id:17, prefecture:p[17], confirmed:c[17],deaths:d[17],active:a[17]},
        {id:18, prefecture:p[18], confirmed:c[18],deaths:d[18],active:a[18]},
        {id:19, prefecture:p[19], confirmed:c[19],deaths:d[19],active:a[19]},
        {id:20, prefecture:p[20], confirmed:c[20],deaths:d[20],active:a[20]},
        {id:21, prefecture:p[21], confirmed:c[21],deaths:d[21],active:a[21]},
        {id:22, prefecture:p[22], confirmed:c[22],deaths:d[22],active:a[22]},
        {id:23, prefecture:p[23], confirmed:c[23],deaths:d[23],active:a[23]},
        {id:24, prefecture:p[24], confirmed:c[24],deaths:d[24],active:a[24]},
        {id:25, prefecture:p[25], confirmed:c[25],deaths:d[25],active:a[25]},
        {id:26, prefecture:p[26], confirmed:c[26],deaths:d[26],active:a[26]},
        {id:27, prefecture:p[27], confirmed:c[27],deaths:d[27],active:a[27]},
        {id:28, prefecture:p[28], confirmed:c[28],deaths:d[28],active:a[28]},
        {id:29, prefecture:p[29], confirmed:c[29],deaths:d[29],active:a[29]},
        {id:30, prefecture:p[30], confirmed:c[30],deaths:d[30],active:a[30]},
        {id:31, prefecture:p[31], confirmed:c[31],deaths:d[31],active:a[31]},
        {id:32, prefecture:p[32], confirmed:c[32],deaths:d[32],active:a[32]},
        {id:33, prefecture:p[33], confirmed:c[33],deaths:d[33],active:a[33]},
        {id:34, prefecture:p[34], confirmed:c[34],deaths:d[34],active:a[34]},
        {id:35, prefecture:p[35], confirmed:c[35],deaths:d[35],active:a[35]},
        {id:36, prefecture:p[36], confirmed:c[36],deaths:d[36],active:a[36]},
        {id:37, prefecture:p[37], confirmed:c[37],deaths:d[37],active:a[37]},
        {id:38, prefecture:p[38], confirmed:c[38],deaths:d[38],active:a[38]},
        {id:39, prefecture:p[39], confirmed:c[39],deaths:d[39],active:a[39]},
        {id:40, prefecture:p[40], confirmed:c[40],deaths:d[40],active:a[40]},
        {id:41, prefecture:p[41], confirmed:c[41],deaths:d[41],active:a[41]},
        {id:42, prefecture:p[42], confirmed:c[42],deaths:d[42],active:a[42]},
        {id:43, prefecture:p[43], confirmed:c[43],deaths:d[43],active:a[43]},
        {id:44, prefecture:p[44], confirmed:c[44],deaths:d[44],active:a[44]},
        {id:45, prefecture:p[45], confirmed:c[45],deaths:d[45],active:a[45]},
        {id:46, prefecture:p[46], confirmed:c[46],deaths:d[46],active:a[46]},
        {id:47, prefecture:p[47], confirmed:c[47],deaths:d[47],active:a[47]},
        {id:48, prefecture:p[48], confirmed:c[48],deaths:d[48],active:a[48]},
      ]);
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
      {apiData.length > 0 ? (
        <DataGrid
          rows={apiData}
          columns={columns}
          pageSize={7}
          sortModel={[{ field: 'active', sort: 'desc' }]}
          className={classes.root}
        />
         ) : <Loading />}
      </div>
    </div>
  );
}

export default JpTotalTable;
