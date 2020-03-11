# Horat1us SASS Mixins
[![Build Status](https://travis-ci.org/Horat1us/sass-mixins.svg?branch=master)](https://travis-ci.org/Horat1us/sass-mixins)

Personal custom mixins collection. You are welcome to use.

*Includes 100% coverage compilation tests using node-sass, typescript and jest.*

## Usage
```bash
npm i @horat1us/sass-mixins
```
```scss
@import "~@horat1us/sass-mixins";
```

### Breakpoint
[Tests / Examples](./tests/breakpoint.test.ts)

```scss
// You can configure values as you want
$breakpoints: (
        'xsmall': (min-width: 370px),
        'small': (min-width: 767px),
        'medium': (min-width: 992px),
        'large': (min-width: 1200px),
        'xlarge': (min-width: 1600px),
) !default;

// if you want to use only breakpoint
@import "~@horat1us/sass-mixins/breakpoint";

.selector {
  color: red;
    
  @include match('small') {
     color: blue;
  }
  
  @include not-match('xlarge') {
    color: yellow;
  }
}
```

## Contributors
- [Alexander Letnikow](mailto:reclamme@gmail.com)

## License 
[MIT](./LICENSE)

