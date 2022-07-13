import { types } from 'mobx-state-tree';
import Color from 'color';
import { CSSProperties } from 'react';

export const ButtonTokens = types.model({
    // these hard coded values are shortcut for types.optional(types.number). This is in the docs
    // somewhere.
    borderRadius: 5,
    // same same
    borderWidth: types.optional(types.number, 2),
    backgroundColor: '#00ff40',
    color: '#ffffff'
})
.views((self) => ({
    get colors() {
        return `Button colors are ${self.color} for text and ${self.backgroundColor} for the bg`;
    },
    get CSS() {
        return {
            borderRadius: self.borderRadius,
            border: `${self.borderWidth}px solid white`,
            backgroundColor: self.backgroundColor,
            color: self.color
        } as CSSProperties;
    }
}))
.actions((self) => ({
    darkenBackground() {
        const color = Color(self.backgroundColor);
        // darken the bg color
        self.backgroundColor = color.darken(0.25).rgb().string();
    },
    thickenBorder() {
        self.borderWidth = self.borderWidth + 5;
    }
}))