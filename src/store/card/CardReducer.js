// cardReducer.js
const initialState = {
    itemCount: 0,
    product: { name: "Unknown", price: 0 },
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                itemCount: state.itemCount + 1,
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                itemCount: state.itemCount > 0 ? state.itemCount - 1 : 0,
            };
        case "SET_PRODUCT":
            return {
                ...state,
                product: action.payload,
            };
        default:
            return state;
    }
};
