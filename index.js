
function takeANumber(currentLinePeople, personName){
  let indiceNumber = 0;
  currentLinePeople.push(personName);
  for (let i = 0; i < currentLinePeople.length; i++){
    indiceNumber = i + 1
  };
  return `Welcome, ${personName}. You are number ${indiceNumber} in line.`;
};

function currentLine(currentLinePeople){
  const tamanhoArr = currentLinePeople.length;
  if (tamanhoArr === 0){
    return `The line is currently empty.`;
  };
  let indexAndValues = [];
  for(let x = 0; x < currentLinePeople.length; x++){
    indexAndValues.push(`${x + 1}. ${currentLinePeople[x]} `);
  };
  return `The line is currently: ${indexAndValues}`;
};
