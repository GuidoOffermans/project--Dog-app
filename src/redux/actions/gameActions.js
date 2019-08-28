export const SET_CHUNKED_DOGS = "SET_CHUNKED_DOGS";

export function setChunkedDogs(dogs) {
  return {
    type: SET_CHUNKED_DOGS,
    payload:  dogs
  };
}

export const SET_CURRENT_BREED = "SET_CURRENT_BREED";

export function setCurrentBreed(dog) {
  console.log('dog',dog)
  return {
    type: SET_CURRENT_BREED,
    payload: dog
  };
}



