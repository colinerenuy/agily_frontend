function convertDate(utc) {
   let date = new Date(utc*1000);  
   let dayLowerCase = date.toLocaleString("fr", {weekday:"long"})
   let day = dayLowerCase.charAt(0).toUpperCase() + dayLowerCase.slice(1);
   let nb = date.toLocaleString("fr", {day: "numeric"})
    let month = date.toLocaleString("fr", {month: "long"})
    return ({day, nb, month})

//    let day = days.find((e, i) => i===date.getDay())
  }
  
  module.exports = { convertDate };