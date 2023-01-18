import { setupTest } from "dummy/tests/helpers";
import { setupIntl } from "ember-intl/test-support";
import { module, test } from "qunit";

module("Unit | Serializer | localized", function (hooks) {
  setupTest(hooks);
  setupIntl(hooks, "en");

  test("it serializes records", function (assert) {
    const store = this.owner.lookup("service:store");
    const record = store.createRecord("book");
    record.name = "test";

    const serializedRecord = record.serialize();

    assert.deepEqual(serializedRecord, {
      data: {
        attributes: {
          name: {
            en: "test",
          },
        },
        type: "books",
      },
    });
  });
});
