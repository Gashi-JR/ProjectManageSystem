import moment from "moment/moment";

const Time = (time) => {
  return moment().format("YYYY/MM/DD/HH:mm:ss");
};

export default Time;
