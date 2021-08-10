export type StringFn = () => string;
export type StringValue = StringFn | string;

/**
 * Use function for dynamic results.
 */
export class DynamicKeyResponse {
  private readonly _value: StringValue;
  get value() {
    if (typeof this._value == "string") {
      return this._value;
    }
    return this._value();
  }

  private readonly _valueAlt?: StringValue;
  get valueAlt() {
    if (this._valueAlt == null) {
      return this.value;
    } else if (typeof this._valueAlt == "string") {
      return this._valueAlt;
    }
    return this._valueAlt();
  }

  private readonly _valueShift?: StringValue;
  get valueShift() {
    if (this._valueShift == null) {
      return this.value;
    } else if (typeof this._valueShift == "string") {
      return this._valueShift;
    }
    return this._valueShift();
  }

  constructor(value: StringValue, valueAlt?: StringValue, valueShift?: StringValue) {
    this._value = value;
    this._valueAlt = valueAlt;
    this._valueShift = valueShift;
  }
}

export class StaticKeyResponse {
  readonly valueAlt: string;
  readonly valueShift: string;

  constructor(readonly value: string, valueAlt?: string, valueShift?: string) {
    this.valueAlt = valueAlt ?? value;
    this.valueShift = valueShift ?? value;
  }
}

export type GegeeKeyResponse = StaticKeyResponse | DynamicKeyResponse;
