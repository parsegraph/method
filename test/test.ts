const { assert } = require("chai");
import Method from "..";

function testMethod(a, b, c) {
  return this.base + a + b + c;
}

function testMethodB(a, b, c) {
  return this.base - a - b - c;
}

describe("Method", function () {
  it("works with call", () => {
    const b = { base: 1 };
    const m = new Method(testMethod, b);
    assert.equal(1 + 2 + 3 + 4, m.call(2, 3, 4));
  });
  it("works with apply", () => {
    const b = { base: 1 };
    const m = new Method(testMethod, b);
    assert.equal(1 + 2 + 3 + 4, m.apply([2, 3, 4]));
  });
  it("works with set", () => {
    const b = { base: 1 };
    const m = new Method(testMethod, b);
    m.set(testMethodB, b);
    assert.equal(1 - 2 - 3 - 4, m.apply([2, 3, 4]));
  });
  it("works with canCall", () => {
    const b = { base: 1 };
    const m = new Method();
    assert.isFalse(m.canCall());
    m.call();
    m.set(testMethodB, b);
    assert.isTrue(m.canCall());
    assert.equal(1 - 2 - 3 - 4, m.apply([2, 3, 4]));
  });
  it("works with returning function", () => {
    const m = new Method(() => {
      return true;
    });
    m.clear();
    assert.isUndefined(m.call());
  });
});
