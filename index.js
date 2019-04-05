
function takeANumber(currentLinePeople, personName){
  currentLinePeople.push(personName)
  return `Welcome, ${personName}. You are number ${currentLinePeople.length} in line.`;
};

function nowServing(){

};

function currentLine(currentLinePeople){
  const arr = currentLinePeople.length;
  if (arr === 0){
    return `The line is currently empty.`;
  };
  let indexAndValues = [];
  for(let x = 0; x < currentLinePeople.length; x++){
    indexAndValues.push(` ${x + 1}. ${currentLinePeople[x]}`);
  };
  return `The line is currently:${indexAndValues}`;
};
