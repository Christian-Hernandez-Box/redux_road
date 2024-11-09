const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
  };
  
  const GATHER = "gather";
  const TRAVEL = "travel";
  const TIPPED_WAGON = "tippedWagon";
  
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

