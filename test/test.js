var { assert } = require("chai");
import Method from "../dist/parsegraph-method";

function testMethod(a, b, c) {
  return this.base + a + b + c;
}

function testMethodB(a, b, c) {
  return this.base - a - b - c;
}

describe("Method", function () {
  it("works with call", () => {
    var b = { base: 1 };
    var m = new Method(testMethod, b);
    assert.equal(1 + 2 + 3 + 4, m.call(2, 3, 4));
  });
  it("works with apply", () => {
    var b = { base: 1 };
    var m = new Method(testMethod, b);
    assert.equal(1 + 2 + 3 + 4, m.apply([2, 3, 4]));
  });
  it("works with set", () => {
    var b = { base: 1 };
    var m = new Method(testMethod, b);
    m.set(testMethodB, b);
    assert.equal(1 - 2 - 3 - 4, m.apply([2, 3, 4]));
  });
});
