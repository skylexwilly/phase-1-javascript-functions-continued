// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

// Export the function if using modules
//function mondayWork(activity = 'go to the office') {
//  return This Monday, I will ${activity}.;
//}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(delimiter = '*') {
  return function(adjective) {
    return `You are ${delimiter}${adjective}${delimiter}!`;
  };
}
