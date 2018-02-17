const assert = require("chai").assert;

const StandardToken = artifacts.require("StandardTokenMock");

contract("StandardToken", function([_, owner, recipient, anotherAccount]) {
  beforeEach(async function() {
    this.token = await StandardToken.new(owner, 100);
  });

  describe("totalSupply", function() {
    it("returns 100", async function() {
      const supply = await this.token.totalSupply();
      assert.equal(supply, 100);
    });
  });
});
