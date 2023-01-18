import { getOwner } from "@ember/application";
import { isEmpty } from "@ember/utils";
import { attr } from "@ember-data/model";

export default function (...args) {
  const [target, name] = args;

  // We cannot set the `defaultValue` directly to `{}` because of:
  // Error: Assertion Failed: Non primitive defaultValues are not supported because they are shared
  // between all instances. If you would like to use a complex object as a default value please
  // provide a function that returns the complex object.
  const attrComputed = attr({ defaultValue: () => ({}) })(...args);
  const { get: getter, set: setter } = attrComputed;

  target.localizedFields = [...(target.localizedFields || []), name];

  attrComputed.get = function () {
    const value = getter.call(this);

    if (!value) {
      return;
    }

    const {
      localizedModel: { allowAnyFallback = false, fallbacks = [] } = {},
    } = getOwner(this).resolveRegistration("config:environment");

    if (
      value[this.getFieldLocale()] ||
      (!allowAnyFallback && !fallbacks.length)
    ) {
      return value[this.getFieldLocale()];
    }

    let key = fallbacks.find((key) => !isEmpty(value[key]));

    if (!key && allowAnyFallback) {
      key = Object.keys(value).find((key) => !isEmpty(value[key]));
    }

    return value[key];
  };

  attrComputed.set = function (value) {
    let attribute = getter.call(this);

    if (!attribute) {
      attribute = this.intl.locales.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue]: "",
        }),
        {}
      );
    }

    attribute[this.getFieldLocale()] = value;
    setter.call(this, attribute);
  };

  // Use the getter and setter for the original property so both
  // the Object and the previous getter and setter access the same value.
  Object.defineProperty(target, `_${name}`, {
    get: getter,
    set: setter,
    enumerable: false,
  });

  return attrComputed;
}
