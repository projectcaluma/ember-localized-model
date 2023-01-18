import { inject as service } from "@ember/service";
import Model from "@ember-data/model";
import { tracked } from "@glimmer/tracking";

export default class LocalizedModel extends Model {
  @service intl;
  @tracked localizedFieldLocale;
  @tracked _localizedObjects;

  get localizedObjects() {
    if (!this._localizedObjects) {
      // Save this since the getter will have the
      // context from the `_localizedObjects` object.
      const context = this;
      this._localizedObjects = this.localizedFields.reduce(
        (localizedObjects, field) => ({
          ...localizedObjects,
          get [field]() {
            return context[`_${field}`];
          },
          set [field](value) {
            context[`_${field}`] = value;
          },
        }),
        {}
      );
    }
    return this._localizedObjects;
  }

  getFieldLocale() {
    return this.localizedFieldLocale || this.intl.primaryLocale;
  }
}
