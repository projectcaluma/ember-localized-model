import { localizedAttr, LocalizedModel } from "ember-localized-model";

export default class BookModel extends LocalizedModel {
  @localizedAttr name;
}
