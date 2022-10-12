import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

function generateRandomString(n) {
    let randomString           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for ( let i = 0; i < n; i++ ) {
      randomString += characters.charAt(Math.floor(Math.random()*characters.length));
   }
   return randomString;
}

export const shortenerFieldSlice = createSlice({
  name: 'shortenerField',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    shortenifyURL: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const baseURL = 'http://localhost:3000';
      let urlID = generateRandomString(5);
      state.value = `${baseURL}/${urlID}`;
      localStorage.setItem(`ls:${urlID}`, action.payload);
    }
  },
});

export const { shortenifyURL } = shortenerFieldSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectURL = (state) => state.shortenerField.value;



export default shortenerFieldSlice.reducer;
