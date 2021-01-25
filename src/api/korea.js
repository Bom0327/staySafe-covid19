import axios from "axios";

const url = 'https://covid-193.p.rapidapi.com/history';

const convertNullToZero = (num) => {
  return num === null ? 0 : num;
}

export const fetchData = async () => {
  try {
    const response = await axios.get(url, {
      params: { country: 's-korea' },
      headers: {
        'x-rapidapi-key': '6f2df78c88msha87c04480806b5ap14b47ajsn0b3d00797cce',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
      }
    });

    const data = response.data.response;
    const modifiedData = data.reduce((acc, item, itemIndex, arr) => {
      const today = new Date(item.day)
      const yesterday = new Date(today - 1000 * 60 * 60 * 24)
      const theDayBeforeYesterday = new Date(today - 1000 * 60 * 60 * 24 * 2)
      const date1 = yesterday.toISOString().split('T')[0]
      const date2 = theDayBeforeYesterday.toISOString().split('T')[0]

      const obj1 = {
        confirmed: item.cases.total,
        newConfirmed: convertNullToZero(item.cases.new),
        recovered: item.cases.recovered,
        active: item.cases.active,
        critical: convertNullToZero(item.cases.critical),
        deaths: item.deaths.total,
        newDeaths: convertNullToZero(item.deaths.new),
        tested: convertNullToZero(item.tests.total),
        date: date1,
        date_2: yesterday.getMonth() + 1 + '.' + yesterday.getDate()
      }

      const obj2 = {
        confirmed: item.cases.total,
        newConfirmed: convertNullToZero(item.cases.new),
        recovered: item.cases.recovered,
        active: item.cases.active,
        critical: convertNullToZero(item.cases.critical),
        deaths: item.deaths.total,
        newDeaths: convertNullToZero(item.deaths.new),
        tested: convertNullToZero(item.tests.total),
        date: date2,
        date_2: theDayBeforeYesterday.getMonth() + 1 + '.' + theDayBeforeYesterday.getDate()
      }

      if (itemIndex === 0) {
        acc.push(obj1);
      }
      else if (itemIndex === 1) {
        acc.push(obj2);
      }
      else if ((arr[itemIndex - 1].day !== item.day && itemIndex > 1)) {
        acc.push(obj2);
      }
      return acc;
    }, []);

    return modifiedData;

  } catch (error) {
    console.log(error);
  }
}