import { createSlice } from '@reduxjs/toolkit';

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

export const recordSlice = createSlice({
    name: 'Record Slice',
    initialState: {
        value: [ { move: "Rock", result: "Win" },
        { move: "Paper", result: "Lose" },
        { move: "Scissors", result: "Draw" }], // No records initially
        
    },
    reducers: {
        add: function (state, action) {
            // copy-pasted from RockPaperScissors component, remember to copy getRandomInt definition too
            const randomInt = getRandomInt(0, 3);

            let result;
            if (randomInt === 0) result = 'Win';
            else if (randomInt === 1) result = 'Lose';
            else result = 'Tie';

            // action.payload will be the move
            state.value.push({ move: action.payload, result: result });
        },
        forceAdd: function (state, action){
            alert(state.value)
            state.value.push({ move: action.payload.move, result: action.payload.result});
        },
        remove: function (state, action) {
			// Referenced from recordsRecducer.js from Practical 8
          
            // action.payload contains the argument given to the dispatcher
            state.value.splice(action.payload, 1);

            // We can mutate the state here because Redux uses the immer library
            // The "state" variable here is actually a "draft" version of the state
            // It detects changes to the "draft" version and updates the actual state accordingly
        },
      

    },
});

// Use these to update the state in your component
export const { add, remove, forceAdd } = recordSlice.actions;

// This part goes into the store.
export default recordSlice.reducer;