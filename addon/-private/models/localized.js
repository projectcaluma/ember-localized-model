import { inject as service } from "@ember/service";
import Model from "@ember-data/model";
import { macroCondition, getOwnConfig } from "@embroider/macros";
import { tracked } from "@glimmer/tracking";

export default class LocalizedModel extends Model {
  @service intl;
  @tracked localizedFieldLocale;
  @tracked _localizedObjects;

  get localizedObjects() {
    if (!this._localizedObjects) {
      // this is not in the constructor because
      // otherwise the environment cannot be resolved in the decorator
      this._localizedObjects = {};
      this.localizedFields.forEach((field) =>
        Object.defineProperty(this._localizedObjects, field, {
          get: () => {
            return this[`_${field}`];
          },
          set: (value) => {
            this[`_${field}`] = value;
          },
        }),
      );
    }

    return this._localizedObjects;
  }

  getFieldLocale() {
    const locale = this.localizedFieldLocale || this.intl.primaryLocale;

    if (macroCondition(getOwnConfig().sanitizeLocale)) {
      return locale.split("-")[0];
    }

    return locale;
  }
}
