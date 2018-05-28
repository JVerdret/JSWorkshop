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
    const tablo = getState();
    var suppr = tablo.indexOf(String(i));
    delete tablo[suppr];
    console.log(suppr);  
    tablo.length--;
    setState(tablo);
    
};

export default remove;
