# Redux Road

This project simulates a simple wagon journey using Redux for state management. The state of the wagon journey is managed through a reducer function that handles different actions such as gathering supplies, traveling, and dealing with a tipped wagon.

## Initial State

The initial state of the wagon is defined as follows:

```javascript
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};
```

## Actions

The project defines three actions:

- **GATHER**: Increases supplies by 15 and days by 1.
- **TRAVEL**: Decreases supplies based on the number of days traveled and increases distance and days accordingly.
- **TIPPED_WAGON**: Decreases supplies by 30 and increases days by 1.

## Reducer

The reducer function handles the state transitions based on the actions:

```javascript
function reducer(state = initialWagonState, action) {
  switch (action.type) {
    case GATHER: {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case TRAVEL: {
      const { payload: days } = action;
      const newSupplies = state.supplies - 20 * days;
      if (newSupplies < 0) {
        return state;
      }
      return {
        ...state,
        supplies: newSupplies,
        distance: state.distance + 10 * days,
        days: state.days + days,
      };
    }
    case TIPPED_WAGON: {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    default:
      return state;
  }
}
```

## Usage

To use the reducer, you can dispatch actions to it and update the state accordingly. Here is an example:

```javascript
let state = initialWagonState;

state = reducer(state, { type: GATHER });
state = reducer(state, { type: TRAVEL, payload: 3 });
state = reducer(state, { type: TIPPED_WAGON });

console.log(state);
```

This will log the updated state of the wagon journey after each action is dispatched.

test