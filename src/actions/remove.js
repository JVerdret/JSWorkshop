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
    /*for (var j = 0; j < tablo.length ; j++) {
        console.log(tablo[j]);
        if (String(tablo[j]) == "undefined") {
            for (var k = j ; k < tablo.length - 1 ;k ++) {
                tablo[k] = tablo[k + 1];
            }
            remove(tablo.length - 1);
        }
    }*/
    //tablo.splice(suppr, suppr + 1);
    setState(tablo);
};

export default remove;
