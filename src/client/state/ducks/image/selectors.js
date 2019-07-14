import { createSelector} from 'reselect';
import { findKeyByValue } from "./util";

const inUploadedSelector = state => findKeyByValue(state.image.uploadedImages, false);

const availableImageUploadSelector = createSelector (
    inUploadedSelector,
    (uploadedImages) => uploadedImages
);

export { availableImageUploadSelector }