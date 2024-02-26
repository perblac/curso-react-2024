import { initialState } from "./BasicoReducer";

export function edadReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { edad: state.edad + 1 };
        case "DECREMENT":
            if (state.edad === 0) return { edad: state.edad };
            return { edad: state.edad - 1 };
        case "RESET":
            console.log("reset");
        default:
            return initialState;
    }
}
