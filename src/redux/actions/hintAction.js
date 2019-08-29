export const SHOW_HINT = "SHOW_HINT";
export function showHint(boolean) {
  return {
    type: SHOW_HINT,
    payload: boolean
  };
}
