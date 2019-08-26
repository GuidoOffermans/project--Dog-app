import * as request from "superagent";

export const SET_IMAGES = "SET_IMAGES";
export function setImages(images) {
  return {
    type: SET_IMAGES,
    payload: images
  };
}

export function getImages(breed) {
  return function(dispatch) {
    request(
      `https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`
    ).then(response => {
      dispatch(setImages(response.body.message));
    });
  };
}
