import { describe, it } from "vitest";
import $RefParser from "../../../lib/index.js";
import path from "../../utils/path.js";
import bundledSchema from "./bundled.js";

import { expect } from "vitest";

describe("Schema with deeply-nested external $refs", () => {
  it("should bundle successfully", async () => {
    let parser = new $RefParser();
    let schema = await parser.bundle(path.rel("test/specs/deep-external/definitions/Main-spec.yaml"));
    expect(schema).to.equal(parser.schema);
    expect(schema).to.deep.equal(bundledSchema);
  });
});
