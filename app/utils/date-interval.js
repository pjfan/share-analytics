/*
  Returns a suitable date interval in string for charting depending on how big the date range is
 */
export default function dateInterval(d1, d2) {
  if((d2 - d1) >= 31622400000) { // If our dates are more than a year apart
    return 'month'; // We want to increment our TS data by months
  }
  if((7948800000 <= (d2 - d1)) && ((d2 - d1) < 31622400000)) { // If our dates are less than a year apart but more than three months apart
    return 'week'; // We want to increment our TS data by weeks
  }
  if((d2 - d1) < 7948800000) { // If our data are less than three months apart
    return 'day'; // We want to increment our TS data by days
  }
}
