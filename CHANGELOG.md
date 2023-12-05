## [3.2.1](https://github.com/projectcaluma/ember-localized-model/compare/v3.2.0...v3.2.1) (2023-12-05)


### Bug Fixes

* **deps:** update dependencies ([9e29831](https://github.com/projectcaluma/ember-localized-model/commit/9e298315e7d6071ea1ead9cd2b6f03bbb2d437c9))

# [3.2.0](https://github.com/projectcaluma/ember-localized-model/compare/v3.1.0...v3.2.0) (2023-07-27)


### Features

* add embroider/macros for better config ([d67afbc](https://github.com/projectcaluma/ember-localized-model/commit/d67afbcb52ae5b87dcec699d1b47d78908bf7532))

# [3.1.0](https://github.com/projectcaluma/ember-localized-model/compare/v3.0.1...v3.1.0) (2023-07-04)


### Features

* add locale region sanitization ([00fdd75](https://github.com/projectcaluma/ember-localized-model/commit/00fdd7558dc090f2f24f24148c4a813182909a81))

## [3.0.1](https://github.com/projectcaluma/ember-localized-model/compare/v3.0.0...v3.0.1) (2023-05-22)


### Bug Fixes

* **model:** use objectDefineProperty for localized attributes ([1b1b05b](https://github.com/projectcaluma/ember-localized-model/commit/1b1b05b150e175befda6942dfea8b12a974e7252))

# [3.0.0](https://github.com/projectcaluma/ember-localized-model/compare/v2.0.0...v3.0.0) (2023-05-17)


### Bug Fixes

* **deps:** convert @glimmer/tracking to dependency ([947a5c4](https://github.com/projectcaluma/ember-localized-model/commit/947a5c4f80096e6b8391c24d822523eb568c1350))
* **deps:** convert ember-data to peer dependency ([b3adf35](https://github.com/projectcaluma/ember-localized-model/commit/b3adf353dfb53886598ac8db998a55dbe49b63c4))


### chore

* **deps:** update dependencies ([0ef2341](https://github.com/projectcaluma/ember-localized-model/commit/0ef2341e9008041ae2e4f477d35455350dff1e40))


### BREAKING CHANGES

* **deps:** Drop support for Ember v3.

# [2.0.0](https://github.com/projectcaluma/ember-localized-model/compare/v1.2.1...v2.0.0) (2023-01-27)


### Bug Fixes

* add missing params for deprecate ([efc09aa](https://github.com/projectcaluma/ember-localized-model/commit/efc09aa9e8748b297d0c4b41426995d01bad6831))
* change license to LGPL ([3aa7bc7](https://github.com/projectcaluma/ember-localized-model/commit/3aa7bc74547e0e9f910c7f9f0a96093a4bcee47e))


### chore

* upgrade to ember v4 ([65ab213](https://github.com/projectcaluma/ember-localized-model/commit/65ab2130dc9b02d197737daa80e83c197fa5e9d2))


### Code Refactoring

* **decorator:** remove need for magic getter to access localized object of a field ([af52008](https://github.com/projectcaluma/ember-localized-model/commit/af520080663d38c349bc232ccbf73d4e32d94055))


### BREAKING CHANGES

* **decorator:** - Remove previously deprecated `getUnlocalizedField`.
- Access the localized object of an attribute via `localizedObjects.myField` instead of the magic key `myFieldObject`.
* - Requires ember-auto-import >= v2.0.0
- Supports node >= 16.x
* The library is now licensed under the LGPL-3.0-or-later license.

## [1.2.1](https://github.com/projectcaluma/ember-localized-model/compare/v1.2.0...v1.2.1) (2021-04-21)

### Bug Fixes

- **decorators/localized-attr:** set default value for new object api ([8abf42f](https://github.com/projectcaluma/ember-localized-model/commit/8abf42f2b3bb30d55da6b35d1e41c676e152fbc3))

# [1.2.0](https://github.com/projectcaluma/ember-localized-model/compare/v1.1.0...v1.2.0) (2021-03-29)

### Features

- make source property name public under new name ([41d56c1](https://github.com/projectcaluma/ember-localized-model/commit/41d56c1e8fab000b6cbc313891d0c666482403cf))

# [1.1.0](https://github.com/projectcaluma/ember-localized-model/compare/v1.0.0...v1.1.0) (2021-03-17)

### Bug Fixes

- **exports:** fix typo for localized "localied" ([cd1eda7](https://github.com/projectcaluma/ember-localized-model/commit/cd1eda7a78cd221f89afb0c9a232d15941be39cd))
- **serializer:** handle for non-localized models ([c76d829](https://github.com/projectcaluma/ember-localized-model/commit/c76d82989e967deb4acdccaaa2d1a88e86af1a06))

### Features

- add fallback locales to ensure we display something ([6237bc3](https://github.com/projectcaluma/ember-localized-model/commit/6237bc3d170099b54be5d4399e591c395c7e3627))

## [1.0.1](https://github.com/projectcaluma/ember-localized-model/compare/v1.0.0...v1.0.1) (2020-12-10)

### Bug Fixes

- **exports:** fix typo for localized "localied" ([cd1eda7](https://github.com/projectcaluma/ember-localized-model/commit/cd1eda7a78cd221f89afb0c9a232d15941be39cd))
- **serializer:** handle for non-localized models ([c76d829](https://github.com/projectcaluma/ember-localized-model/commit/c76d82989e967deb4acdccaaa2d1a88e86af1a06))
