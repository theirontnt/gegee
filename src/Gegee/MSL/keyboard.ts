import type KeyboardLayout from "./keyboard/layout";

export interface KeyboardOptions {
  layout: KeyboardLayout;
}

export class Keyboard {
  constructor(readonly options: KeyboardOptions) {}
}
