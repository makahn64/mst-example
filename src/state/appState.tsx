import { RootState } from "./RootState";
import { ButtonTokens } from "./tokens/ButtonTokens";

export const appState = RootState.create({
    button: ButtonTokens.create(),
    loggedIn: false,
    atomDirection: 'ccw'
});

