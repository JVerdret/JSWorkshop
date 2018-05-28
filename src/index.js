import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import get from "./actions/get";
import { getState } from "./store";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");
const pictureUpdateButtonElement = document.getElementById("picture-update-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  add(url);
  refreshGrid();
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};

const refreshGrid = () => {
  list();
  const items = getState();

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    imgElement.src = i;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );
    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid();
      console.log(items);    
    }
  );

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
