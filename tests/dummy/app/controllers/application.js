import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  @service store;
  @service intl;
  @tracked book;

  constructor(...args) {
    super(...args);

    this.intl.setLocale(["en", "de", "fr"]);

    const book = this.store.createRecord("book");
    book.localizedObjects.name = {
      de: "Der Mond",
      en: "The Moon",
      fr: "La Lune",
    };
    this.book = book;
  }

  get sortedLocales() {
    return [...this.intl.locale].sort();
  }

  @action
  changeLocale(locale) {
    this.intl.setLocale(Array.from(new Set([locale, ...this.intl.locale])));
  }

  @action
  changeModelLocale(locale) {
    this.book.localizedFieldLocale = locale;
  }
}
