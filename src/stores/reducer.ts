import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/stores/store';

// Define a type for the slice state
interface StateTypes {
  isSearch: boolean
}

// Define the initial state using that type
const initialState: StateTypes = {
  isSearch: false,
};

export const globalSlicer = createSlice({
  name: 'Slicer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    searchAction: (state, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
  },
});

export const { searchAction } = globalSlicer.actions;

// Other code such as selectors can use the imported `RootState` type
export const globalState = (state: RootState) => state;

export default globalSlicer.reducer;
