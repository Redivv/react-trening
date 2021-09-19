import { createStore } from 'redux';

const counterReducer = (state = {
    counter: 0
}, action) => {
    let finalState = state.counter;
    switch (action.type) {
        case 'increment':
            finalState += 1;
            break;
        case 'decrement':
            finalState -= 1;
            break;
    }
    return {
        counter: finalState
    };
};

const store = createStore(counterReducer);

export default store;