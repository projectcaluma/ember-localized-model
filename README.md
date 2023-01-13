# ember-localized-model

Handle mutli-lang model fields where your JSON:API returns a dictionary / object
with all languages present.

**Example:**

```
{
  id: "1",
  type: "books",
  attributes: {
    name: {
      "de": "Der Name des Windes",
      "en": "The name of the wind"
    }
  }
}
```

## Compatibility

- Ember.js v3.28 or above
- Ember CLI v3.28 or above
- Node.js v16 or above

## Installation

```
ember install ember-localized-model
```

## Usage

#### First steps

> You need `ember-intl` for this addon to work: `ember install ember-intl`

To use this addon, first you need to import and extend your model from `LocalizedModel`:

```js
import { LocalizedModel } from "ember-localized-model";

export default class YourModel extends LocalizedModel {}
```

To serialize the multi-lang field correctly you also need to add a serializer:

```js
import { LocalizedSerializer } from "ember-localized-model";

export default class YourModelSerializer extends LocalizedSerializer {}
```

Once this is done, you can start adding your localized field via the `@localizedAttr` decorator:

```js
import { LocalizedModel, localizedAttr } from "ember-localized-model";

export default class YourModel extends LocalizedModel {
  @localizedAttr firstName;
  @localizedAttr lastName;
}
```

#### Accessing the fields value

To read the model field you can simply use `yourModel.firstName`.

The locale the field displays depends on your `intl.primaryLocale`. You can
change your `primaryLocale` to display the model field in another locale.

If you want to switch locale for only one specific model, you can set
`yourModel.localizedFieldLocale` to the desired locale.

If you want to access the raw data as sent by the backend, you can use
`yourModel.getUnlocalizedField("firstName")`. This will return the raw data.

For example:

```json
{
  "de": "Johan",
  "en": "John"
}
```

## Known Issues

#### Creating model records

If you have your model defined with a `@localizedAttr` field and directly set the
field on `store.createRecord` the setter for the field will not be called and
instead of the dictionary with the locale key, the value directly will be assigned
to the field.

The serialized model then looks like this:

```json
{
  "type": "your-model",
  "attributes": {
    "name": "your name"
  }
}
```

instead of

```json
{
  "type": "your-model",
  "attributes": {
    "name": {
      "en": "your name"
    }
  }
}
```

**Solution**:
Create your record first and then assign the localized field:

```js
const yourModel = this.store.createRecord("yourModel");
yourModel.name = "this is a test";
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [GPL-3.0 License](LICENSE).
