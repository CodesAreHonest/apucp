import { createSelector} from 'reselect';
import { findKeyByValue, displayImageDivision } from "./util";

const inUploadedSelector = state => findKeyByValue(state.image.uploadedImages, false);
const imageDivisionStatusSelector = (state) =>
    displayImageDivision(state.image.uploadedImages);


const availableImageUploadSelector = createSelector (
    inUploadedSelector,
    (uploadedImages) => uploadedImages
);

const displayImageDivisionSelector = createSelector(
    imageDivisionStatusSelector,
    (uploadedImages) => uploadedImages
);

export { availableImageUploadSelector, displayImageDivisionSelector }