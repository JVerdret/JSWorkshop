import { getState } from "../store";

/* FIXME:
*
* export a function that returns all the current elements from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const list = () => {
    return getState();
};

export default list;
