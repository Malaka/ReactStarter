module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'color-named': [
      'never',
      {
        ignoreProperties: ['composes'],
      },
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates'],
      },
    ],
    'declaration-no-important': true,
    'function-url-quotes': 'always',
    indentation: 2,
    'max-nesting-depth': 0,
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: 'inverted-colors',
      },
    ],
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-unknown-animations': true,
    'order/properties-order': [
      ['composes'],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'selector-max-id': 0,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': true,
    'unit-blacklist': ['em'],
    'value-no-vendor-prefix': true,
  },
};
