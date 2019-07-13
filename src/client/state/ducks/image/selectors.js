import { createSelector} from 'reselect';
import { findKeyByValue } from "./util";

const imageSelector = state =>
    state.image.uploadedImages;

const availableImageUploadSelector = createSelector (
    imageSelector,
    (uploadedImages) => findKeyByValue(uploadedImages, false)
);

export { availableImageUploadSelector }