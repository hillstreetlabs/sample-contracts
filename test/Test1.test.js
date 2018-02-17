const assert = require("chai").assert;

const MetaCoin = artifacts.require("Metacoin");

const timeout = ms => new Promise(res => setTimeout(res, ms));

console.log("TEST 1");

contract("Metacoin", function([_, owner, recipient, anotherAccount]) {
  beforeEach(async function() {
    this.token = await MetaCoin.new({ owner: owner });
  });

  describe("text", function() {
    it("returns the default text", async function() {
      await timeout(1000);
      const text = await this.token.text();
      assert.equal(text, "hello, world");
    });

    it("returns the default text", async function() {
      await timeout(1000);
      const text = await this.token.text();
      assert.equal(text, "hello, world");
    });

    it("returns the default text", async function() {
      await timeout(1000);
      const text = await this.token.text();
      assert.equal(text, "hello, world");
    });

    it("returns the default text", async function() {
      await timeout(1000);
      const text = await this.token.text();
      assert.equal(text, "hello, world");
    });
  });
});
