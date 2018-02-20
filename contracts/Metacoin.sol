pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract MetaCoin is StandardToken {

  string public text;

  function MetaCoin() public {
    text = "hello, ETHDenver";
  }

  function updateText(string _text) public returns (bool) {
    //text = _text;
    text = "blah";
  }
}
