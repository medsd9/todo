import { createSlice } from "@reduxjs/toolkit";

const initialState = { connected: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    connexion(state, action) {
      const { email, password } = action.payload;

      if (email === "test@test.com" && password === "test") {
        state.connected = true;
      }
    },

    deconnexion(state, action) {
      state.connected = false;
    },
  },
});

export const { connexion, deconnexion } = authSlice.actions;

export default authSlice.reducer;
