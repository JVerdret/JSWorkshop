import { getState } from "../store";

/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const get = (i) => {
    return getState().indexof(i);
};

export default get;
