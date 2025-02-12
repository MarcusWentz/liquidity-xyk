# Solidity

Foundry Book supports Solidity syntax text highlighting.

https://github.com/foundry-rs/book

Solidity is not natively added to mdbook at least yet based on this current issue:

https://github.com/rust-lang/mdBook/issues/2237

Documented in issue how to add Solidity support To new mdbook project:

https://github.com/rust-lang/mdBook/issues/2237#issuecomment-2563031227

## Add Solidity Support To New mdbook Project

1. In book.toml for your mdbook project, go to output.html to add additional-js with the following path:
```toml
[output.html]
additional-js = ["src/static/solidity.min.js"]
```
2. Copy the solidity.min.js file in Foundry Book:

https://github.com/foundry-rs/book/blob/master/src/static/solidity.min.js

into the path just like Foundry Book for mdbook to load. 

## Solidity Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract SimpleStorage {
    uint256 public storedData; //Do not set 0 manually it wastes gas!

    event setEvent();
    
    function set(uint256 x) public {
        storedData = x;
        emit setEvent();
    }

}
```
