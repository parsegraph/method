var assert = require("assert");
import todo from "../dist/method";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});
