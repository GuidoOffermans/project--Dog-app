export const SET_CHUNKED_DOGS = "SET_CHUNKED_DOGS";

export function setChunkedDogs(dogs) {
  return {
    type: SET_CHUNKED_DOGS,
    payload: dogs
  };
}

export const SET_CURRENT_BREED = "SET_CURRENT_BREED";

export function setCurrentBreed(dog) {
  return {
    type: SET_CURRENT_BREED,
    payload: dog
  };
}

export const SET_GAME_TYPE = "SET_GAME_TYPE";
export function setGameType(gameType) {
  return {
    type: SET_GAME_TYPE,
    payload: gameType
  };
}
