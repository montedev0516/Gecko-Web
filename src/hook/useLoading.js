import { SET_LOADING } from "../actions/types";
import store from "../store";

export default function useLoading() {
  const setLoading = (flag) => {
    store.dispatch({
      type: SET_LOADING,
      payload: flag,
    });
  };

  return { setLoading };
}
