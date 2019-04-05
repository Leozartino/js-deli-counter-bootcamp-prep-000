
function takeANumber(currentLinePeople, personName){
  let indiceNumber = 0;
  currentPeople.push(personName);
  for (let i = 0; i < currentPeople.length; i++){
    indiceNumber = i + 1
  };
  return `Welcome, ${personName}. You are number ${indiceNumber} in line.`;
};

function currentLine(currentLinePeople){
  const tamanhoArr = currentLinePeople.length;
  if (tamanhoArr === 0){
    return `The line is currently empty.`;
  };
  return `The line is currently: ${tamanhoArr}.`;
};
