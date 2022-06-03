// SPDX-License-Identifier: MIT
pragma solidity >=0.7.3;

contract SayHello {
    event SayIt(string helloMsg);
    string public message;

    constructor(string memory initMessage){
        message = initMessage;
    }

    function sayHello (string memory helloMessage) public{
        message = helloMessage;
        emit SayIt(helloMessage);
    }
}