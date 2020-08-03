import Model from "@ember-data/model";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class LocalizedModel extends Model {
  @service intl;
  @tracked localizedFieldLocale;

  getUnlocalizedField(field) {
    return this[`_${field}`];
  }

  getFieldLocale() {
    return this.localizedFieldLocale || this.intl.primaryLocale;
  }
}
