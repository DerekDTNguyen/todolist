// Alternatively today = new Date();
// var currentDay = today.getDay();
// var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day = dayList[currentDay];
// Alternatively, we can use switch cases
exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
};
