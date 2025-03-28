import { Overrides } from "./common.js";

const override = (obj: Overrides, overrides?: Overrides) => {
  if (!overrides || !obj) {
    return;
  }

  for (const [key, value] of Object.entries(overrides)) {
    if (
      typeof value === "boolean" ||
      typeof value === "string" ||
      typeof value === "number" ||
      Array.isArray(value)
    ) {
      obj[key] = value;
    } else {
      // @ts-expect-error
      override(obj[key], value);
    }
  }
};

export default override;
