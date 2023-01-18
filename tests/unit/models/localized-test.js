import { setupTest } from "dummy/tests/helpers";
import { setupIntl, setLocale } from "ember-intl/test-support";
import { module, test } from "qunit";

module("Unit | Model | localized", function (hooks) {
  setupTest(hooks);
  setupIntl(hooks, "en");

  test("it sets value under correct locale", function (assert) {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("book");
    model.name = "test-en";
    setLocale("de");
    model.name = "test-de";
    setLocale("fr");
    model.name = "test-fr";

    assert.deepEqual(model.localizedObjects.name, {
      de: "test-de",
      en: "test-en",
      fr: "test-fr",
    });

    setLocale("en");
    assert.strictEqual(model.name, "test-en");
    setLocale("de");
    assert.strictEqual(model.name, "test-de");
    setLocale("fr");
    assert.strictEqual(model.name, "test-fr");
  });

  test("it respects localizedFieldLocale", function (assert) {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("book");
    model.localizedObjects.name = {
      en: "test-en",
      de: "test-de",
      fr: "test-fr",
    };

    assert.strictEqual(model.name, "test-en");

    model.localizedFieldLocale = "de";
    assert.strictEqual(model.name, "test-de");

    model.localizedFieldLocale = "fr";
    assert.strictEqual(model.name, "test-fr");
  });

  test("it has localizedObjects", function (assert) {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("book");

    assert.deepEqual(model.localizedObjects.name, {});
  });
});
