import { compile } from "./compile";

export type FailureAssertion = {
    name: string;
    scss: string; // input
    error: Parameters<jest.Matchers<string>["toThrow"]>[0];
} | (() => FailureAssertion);

/**
 * Compile SCSS and compare with expected CSS output.
 */
export function fails(assert: FailureAssertion): void {
    if ("function" === typeof assert) {
        return fails(assert());
    }
    const { name, scss, error } = assert;
    it(name, async () => {
        await expect(compile(scss)).rejects.toThrow(error);
    });
}
