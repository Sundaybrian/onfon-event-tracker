// module.exports = (socket, totalSeconds) => {
//   ++totalSeconds;
//   var hour = Math.floor(totalSeconds / 3600); //12
//   var minute = Math.floor((totalSeconds - hour * 3600) / 60); // 43380 - 43300 = 180/60 = 3mins
//   var seconds = totalSeconds - (hour * 3600 + minute * 60);
//   if (hour < 10) hour = "0" + hour;
//   if (minute < 10) minute = "0" + minute;
//   if (seconds < 10) seconds = "0" + seconds;

//   let response = {
//     hour,
//     minute,
//     seconds,
//   };

//   // emit a new message which will be consumed by the client
//   socket.emit("dateFromApi", response);
// };
