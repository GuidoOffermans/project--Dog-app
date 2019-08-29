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

export const SET_NEXT_QUESTION = "SET_NEXT_QUESTION";

export function setNextQuestion(boolean) {
  return {
    type: SET_NEXT_QUESTION,
    payload: boolean
  };
}

export const SET_GAME_TYPE = "SET_GAME_TYPE";
export function setGameType(gameType) {
  return {
    type: SET_GAME_TYPE,
    payload: gameType
  };
}


export const ADD_NEXT_CHUNK = "ADD_NEXT_CHUNK";
export function addNextChunk() {
  return {
    type: ADD_NEXT_CHUNK
  };
}

export const CLEAR_DOG_POOL = "CLEAR_DOG_POOL";
export function clearDogPool() {
  return {
    type: CLEAR_DOG_POOL
  };
}