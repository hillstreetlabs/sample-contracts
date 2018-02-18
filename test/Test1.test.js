const assert = require("chai").assert;

const MetaCoin = artifacts.require("Metacoin");

const timeout = ms => new Promise(res => setTimeout(res, ms));

contract("Metacoin", function([_, owner, recipient, anotherAccount]) {
  beforeEach(async function() {
    this.token = await MetaCoin.new({ owner: owner });
  });

  it("text is correct", async function() {
    const text = await this.token.text();
    assert.equal(text, "hello, ETHDenver");
  });

  it("updateText succeeds", async function() {
    const newText = "text 1";
    const oldText = await this.token.text();
    assert.notEqual(oldText, newText);
    const res = await this.token.updateText(newText);
    const text = await this.token.text();
    assert.notEqual(text, newText);
  });
});
