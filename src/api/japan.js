import axios from "axios";

const url1 = 'https://covid-193.p.rapidapi.com/history';

const convertNullToZero = (num) => {
  return num === null ? 0 : num;
}

export const fetchData = async () => {
  try {
    const response = await axios.get(url1, {
      params: { country: 'japan' },
      headers: {
        'x-rapidapi-key': '6f2df78c88msha87c04480806b5ap14b47ajsn0b3d00797cce',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
      }
    });

    const data = response.data.response;
    const modifiedData = data.reduce((acc, item, itemIndex, arr) => {
      const today = new Date(item.day)
      const theDayBeforeYesterday = new Date(today-1000 * 60 * 60 * 24 * 2)
      const date = theDayBeforeYesterday.toISOString().split('T')[0]
  
      const obj = {
        confirmed: item.cases.total,
        newConfirmed: convertNullToZero(item.cases.new),
        recovered: item.cases.recovered,
        active: item.cases.active,
        critical: convertNullToZero(item.cases.critical),
        deaths: item.deaths.total,
        newDeaths: convertNullToZero(item.deaths.new),
        tested: convertNullToZero(item.tests.total),
        date: date,
        date_2: theDayBeforeYesterday.getMonth() + 1 + '.' + theDayBeforeYesterday.getDate()
      }

      if (itemIndex === 0) {
        acc.push(obj);
      }
      else if ((arr[itemIndex -1].day !== item.day)) {
        acc.push(obj);
      }
      return acc;
    }, []);

    return modifiedData;

  } catch (error) {
    console.log(error);
  }
}

const url2 = 'https://covid-19-statistics.p.rapidapi.com/reports'

export const fetchProvinceTotalData = async () => {
  try {
    const response = await axios.get(url2, {
      params: { iso: 'JPN' },
      headers: {
        'x-rapidapi-key': '6f2df78c88msha87c04480806b5ap14b47ajsn0b3d00797cce',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    });

    const data = response.data.data;
    const modifiedData = data.map((item) => ({
      prefecture: item.region.province,
      confirmed: item.confirmed,
      active: item.active,
      deaths: item.deaths
    }));

    modifiedData.forEach((item, i) => {
      item.id = i + 1;
    });

    return modifiedData;

  } catch (error) {
    console.log(error);
  }
}

export const fetchProvinceNewData = async () => {
  try {
    const response = await axios.get(url2, {
      params: { iso: 'JPN' },
      headers: {
        'x-rapidapi-key': '6f2df78c88msha87c04480806b5ap14b47ajsn0b3d00797cce',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    });

    const data = response.data.data;
    const modifiedData = data.map((item) => ({
      prefecture: item.region.province,
      newConfirmed: item.confirmed_diff,
      newActive: item.active_diff,
      newDeaths: item.deaths_diff,  
    }));

    modifiedData.forEach((item, i) => {
      item.id = i + 1;
    });

    return modifiedData;

  } catch (error) {
    console.log(error);
  }
}


