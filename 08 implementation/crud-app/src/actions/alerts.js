import { v4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (displayType, code) => (dispatch) => {
  const id = v4();
  const msg = (() => {
    switch (code) {
      case "auth/too-many-requests":
        return "Denne konto er midlertidig låst grundet for mange login forsøg";
      case "auth/user-not-found":
        return "Det indtastede brugernavn blev ikke fundet";
      case "auth/wrong-password":
        return "Det indtastede password er forkert";
      default:
        return "Vi støtte på en fejl";
    }
  })();

  dispatch({
    type: SET_ALERT,
    payload: { id, displayType, msg },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    5000
  );
};
