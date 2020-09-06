import { loadingStop, loadingStart, setError, setMessage } from "../actions";
import { APIUrls, getFormBody } from "../helpers";

export function signUp(user) {
  return (dispatch) => {
    dispatch(loadingStart());
    const url = APIUrls.signUp();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(
            setMessage("Registration Successful", "Please Login to Continue")
          );
        } else {
          dispatch(setError("Registration Error", data.message));
        }
        dispatch(loadingStop());
      });
  };
}
