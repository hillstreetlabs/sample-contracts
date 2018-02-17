const assert = require("chai").assert;

const MetaCoin = artifacts.require("Metacoin");

const timeout = ms => new Promise(res => setTimeout(res, ms));

contract("Metacoin", function([_, owner, recipient, anotherAccount]) {
  context("parallel", function() {
    beforeEach(async function() {
      this.token = await MetaCoin.new({ owner: owner });
      console.log("Before parallel", this.token.address);
    });

    describe("text", function() {
      it("returns the default text", async function() {
        const text = await this.token.text();
        assert.equal(text, "hello, world");
      });
    });

    describe("updateText", function() {
      it("succeeds", async function() {
        const newText = "hello";
        const oldText = await this.token.text();
        assert.notEqual(oldText, newText);
        await this.token.updateText(newText);
        const text = await this.token.text();
        assert.equal(text, newText);
      });
    });
  });

  context("synchronous", function() {
    before(async function() {
      this.token = await MetaCoin.new({ owner: owner });
      console.log("Before synchronous", this.token.address);
    });

    it("sets text 1", async function() {
      const token = this.token;
      console.log("Start text 1", token.address);
      await timeout(1000);
      await token.updateText("text 1");
      const text = await token.text();
      assert.equal(text, "text 1");
    });

    it("sets text 2", async function() {
      console.log("Start text 2", this.token.address);
      const oldText = await this.token.text();
      assert.equal(oldText, "text 1");
      await this.token.updateText("text 2");
      const text = await this.token.text();
      assert.equal(text, "text 2");
    });
  });
});

describe("Addition", function() {
  before(function() {
    this.sum = 0;
  });

  it("adds 1", async function() {
    await timeout(1000);
    this.sum += 1;
    assert.equal(this.sum, 1);
  });

  it("adds 1", function() {
    this.sum += 1;
    assert.equal(this.sum, 2);
  });
});
