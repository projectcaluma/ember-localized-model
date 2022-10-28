import Model from "@ember-data/model";
import { deprecate } from '@ember/debug';
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class LocalizedModel extends Model {
  @service intl;
  @tracked localizedFieldLocale;

  getUnlocalizedField(field) {
    deprecate('Usage of `getUnlocalizedField` is deprecated. Access object directly.',
      false,
      {
        id: 'ember-localized-model.public-unlocalized',
        until: '2.0.0',
        url: 'https://github.com/projectcaluma/ember-localized-model/pull/101',
        for: 'ember-localized-model',
        since: {
          enabled: '1.2.0',
        }
      }
    );

    return this[`${field}Object`];
  }

  getFieldLocale() {
    return this.localizedFieldLocale || this.intl.primaryLocale;
  }
}
