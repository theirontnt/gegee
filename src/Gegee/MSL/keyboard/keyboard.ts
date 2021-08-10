import type GegeeKeyboardLayout from "./layout";

export interface GegeeKeyboardOptions {
  layout: GegeeKeyboardLayout;
}

export class GegeeKeyboard {
  constructor(
    readonly options = {
      layout: {},
    }
  ) {}
}

// TODO: insert value at caret(s)
export function gegee_keyboard(node: Node) {
  const keyboard = new GegeeKeyboard();

  return {
    destroy() {
      // ...cleanup goes here
    },
  };
}
