// loading reducer intial state to maintain loading progress bar
const initialState = {
  user: {},
  isLoggedIn: false,
};

// changing store on the basis of different actions for loading progress bar
export default function auth(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
