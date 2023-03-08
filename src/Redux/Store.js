import { configureStore } from "@reduxjs/toolkit";
import Randomizer from "./Slice"

export default configureStore({
    reducer: {
        Randomizer: Randomizer
    }
});
