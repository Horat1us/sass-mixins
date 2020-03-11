import { compare } from "./utils/compare"
import { fails } from "./utils/fails";

compare({
    name: "Match Mixin",
    // language=SCSS
    scss: `
      @import "../breakpoint";

      .selector {
        color: red;

        @include match('small') {
          color: blue;
        }
      }
    `,
    // language=CSS
    css: `
        .selector {
            color: red;
        }

        @media (min-width: 767px) {
            .selector {
                color: blue;
            }
        }
    `,
});

fails({
    name: "Match Mixin fails with invalid breakpoint name",
    // language=SCSS
    scss: `
      @import "../breakpoint";

      .selector {
        color: red;

        @include not-match('mobile') {
          color: blue;
        }
      }
    `,
    error: "Unknown breakpoint name to match `mobile`. Available breakpoints are: xsmall, small, medium, large, xlarge.",
});


compare({
    name: "Not Match Mixin",
    // language=SCSS
    scss: `
      @import "../breakpoint";

      .selector {
        color: red;

        @include not-match('xlarge') {
          color: blue;
        }
      }
    `,
    // language=CSS
    css: `
        .selector {
            color: red;
        }

        @media not all and (min-width: 1600px) {
            .selector {
                color: blue;
            }
        }
    `,
});

fails({
    name: "Not Match Mixin fails with invalid breakpoint name",
    // language=SCSS
    scss: `
      @import "../breakpoint";

      .selector {
        color: red;

        @include not-match('desktop') {
          color: blue;
        }
      }
    `,
    error: "Unknown breakpoint name to match `desktop`. Available breakpoints are: xsmall, small, medium, large, xlarge.",
});
