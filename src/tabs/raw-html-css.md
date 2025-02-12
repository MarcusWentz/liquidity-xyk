# Raw HTML CSS

# Types

Lightweight tab example created using HTML and custom CSS referenced in `book.toml`.

Inspired by docusaurus Tabs:

https://docusaurus.io/docs/markdown-features/tabs

> 🔴 **Danger**
>
> This HTML + CSS example might break if modify the tab count or if there are multiple
> instances of these tabs on the same page. 
> You can use Javascript to program more tabs and more divs with tabs.

Demo:

<div class="tabs4">
  <input type="radio" id="tab1" name="tab-control" checked>
  <input type="radio" id="tab2" name="tab-control">
  <input type="radio" id="tab3" name="tab-control">
  <input type="radio" id="tab4" name="tab-control">
  <ul>
    <li><label for="tab1">Rust</label></li>
    <li><label for="tab2">Javascript</label></li>
    <li><label for="tab3">Go</label></li>
    <li><label for="tab4">Solidity</label></li>
  </ul>

  <div class="content">
    <section id="content1">
<pre><code class="language-rust">fn main() {
    println!("Hello, world!");
}
</code></pre>
    </section>
    <section id="content2">
<pre><code class="language-javascript">console.log("test print");
</code></pre>
    </section>
    <section id="content3">
<pre><code class="language-golang">package main
import "fmt"
func main() {
    fmt.Println("test print")
}
</code></pre>
    </section>
    <section id="content4">
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;
contract SimpleStorage {
    uint256 public storedData; //Do not set 0 manually it wastes gas!
    event setEvent();
    function set(uint256 x) public {
        storedData = x;
        emit setEvent();
    }
}
</code></pre>
    </section>
  </div>
</div>
