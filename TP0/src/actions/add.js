/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
import data from "../fixtures";
import pictures from "../fixtures.js";
import { setState, getState } from "../store";

const add = (urlulu) => {
    if (!urlulu) { return; } //Check if the field is not empty
    //if (urlulu.match(/\.(jpeg|jpg|gif|png)$/) == null) { return; }  // Check if the link is a valid pictures URL

    const tablo = getState();
    setState([...tablo, urlulu]);
};

export default add;


