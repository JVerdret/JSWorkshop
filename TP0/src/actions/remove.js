import data from "../fixtures";
import pictures from "../fixtures.js";
import { setState, getState } from "../store";

/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const remove = (i) => {
    const state = getState();
    state.splice(state.findIndex((x) => x === i), 1);
    setState(state);
    
};

export default remove;
