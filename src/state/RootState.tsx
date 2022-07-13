import { types } from 'mobx-state-tree';
import { ButtonTokens } from './tokens/ButtonTokens';

export const RootState = types.model({
    button: ButtonTokens,
    loggedIn: false,
    atomDirection: 'ccw'
})
.actions((self) => ({
    login() {
        self.loggedIn = true;
    },
    logout() {
        self.loggedIn = false;
    },
    reverseAtom() {
        self.atomDirection = self.atomDirection === 'ccw' ? 'cw' : 'ccw';
    }
}))
.views((self) => ({
    get loginMessage() {
        return self.loggedIn ? 'Please log in' : 'You are logged in';
    }
}))