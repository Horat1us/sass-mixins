import { compile } from "./compile";

export type CompareAssertion = {
    name: string;
    scss: string; // input
    css: string; // output
} | (() => CompareAssertion);

/**
 * Compile SCSS and compare with expected CSS output.
 */
export function compare(assert: CompareAssertion): void {
    if ("function" === typeof assert) {
        return compare(assert());
    }
    const { name, scss, css } = assert;
    it(name, async () => {
        const output = await Promise.all([scss,css].map((input) => compile(input)));
        expect(output[0]).toEqual(output[1]);
    })
}
