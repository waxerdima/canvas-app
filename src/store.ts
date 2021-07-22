type State = {
    currentTab: number;
};

type Action =
    | {
          type: 'START';
      }
    | {
          type: 'SELECT';
          tab: number;
      };

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
            };

        case 'SELECT':
            return {
                ...state,
                currentTab: action.tab
            };

        default:
            return {...state}
    }
};
