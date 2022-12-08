function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

export default function recordsReducer(currentRecords, action) {
  switch (action.name) {
    case 'add': {
      const randomInt = getRandomInt(0, 3);

      let result;
      if (randomInt === 0) result = "Win";
      else if (randomInt === 1) result = "Lose";
      else result = "Tie";

      // We expect the move to be provided along with the action (e.g. dispatch({ name: add, move: 'Rock' }))
      return [...currentRecords, { result: result, move: action.move }];
    }
    case 'force add': {
        return [...currentRecords, { result:action.record.result, move:action.record.move}];
    }
    case 'remove': {
        let newRecords = [...currentRecords]
        newRecords.splice(action.index, 1);
        return newRecords;
    }
    default:
      return currentRecords;
  }
}
