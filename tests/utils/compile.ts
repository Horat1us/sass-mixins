import * as path from "path";
import { render, Result, SassError } from "node-sass";

export function compile(data: string): Promise<string> {
    return new Promise((resolve, reject) => render({
        data,
        includePaths: [path.resolve(path.dirname(__dirname))],
        sourceComments: false,
        outputStyle: "compressed",
    }, (error: SassError, result: Result) => {
        if (error) {
            return reject(error);
        }
        return resolve(result.css.toString("utf-8"));
    }));
}
