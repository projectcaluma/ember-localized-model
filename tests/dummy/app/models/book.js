import { localiedAttr, LocalizedModel } from "ember-localized-model";

export default class BookModel extends LocalizedModel {
  @localiedAttr name;
}
