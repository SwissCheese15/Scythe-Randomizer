import { createSlice } from "@reduxjs/toolkit";

export const RandomizerSlice = createSlice({
    name: "Randomizer",
    initialState: {
        players: 2,
        banIllegal: true,
        invaders: false,
        rise: false,
        wind: false,
        nation: [],
        board: [],
        rememberNation: [],
        rememberBoard: [],
        building: 0,
        mode: "",
        offensiveAirship: "",
        defensiveAirship: "",
        endingCard: "",
        mechAbilities: "",
        fenrisHome: "",
        vesnaHome: "",
        ready: true,
        rotate: false,
        moreInfo: false
    },
    reducers: {
        toggle: (state, action) => {
            state[action.payload[0]] = action.payload[1]
        }, 
        changeState: (state, action) => {
            state[action.payload[0]] = action.payload[1]
        }
}});

export const { toggle, changeState } = RandomizerSlice.actions;
export default RandomizerSlice.reducer;
