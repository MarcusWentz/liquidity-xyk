# Raw HTML Javascript

Lightweight tab example created using HTML and Javascript.

Inspired by docusaurus Tabs:

https://docusaurus.io/docs/markdown-features/tabs

Demo:

Programming Languages:

<!-- <div class="tabs">
  <button class="tablinks" onclick="openTab(event, 'Tab1')">Rust</button>
  <button class="tablinks" onclick="openTab(event, 'Tab2')">Javascript</button>
  <button class="tablinks" onclick="openTab(event, 'Tab3')">Go</button>
  <button class="tablinks" onclick="openTab(event, 'Tab4')">Solidity</button>

</div>



Other:

> 🔴 **Danger**
>
> This demo is simple and might break if click the tabs in another div box.
> This might be due to the Javascript program connecting all tabs globally.

<!-- <div class="tabs">
  <button class="tablinks" onclick="openTab(event, 'Tab5')">Five</button>
  <button class="tablinks" onclick="openTab(event, 'Tab6')">Six</button>
  <button class="tablinks" onclick="openTab(event, 'Tab7')">Seven</button>

</div>
<div id="Tab5" class="tabcontent">
<pre><code class="language-rust">
5
</code></pre>
</div>
<div id="Tab6" class="tabcontent" style="display: none;">
<pre><code class="language-javascript">
6
</code></pre>
</div>
<div id="Tab7" class="tabcontent" style="display: none;">
<pre><code class="language-golang">
7
</code></pre>
</div> -->

<div class="tabs-container">
  <div class="tabs">
    <button class="tablinks" onclick="openTab(event, 'Tab1', this)">Rust</button>
    <button class="tablinks" onclick="openTab(event, 'Tab2', this)">Javascript</button>
    <button class="tablinks" onclick="openTab(event, 'Tab3', this)">Go</button>
    <button class="tablinks" onclick="openTab(event, 'Tab4', this)">Solidity</button>
  </div>

<div id="Tab1" class="tabcontent">
<pre><code class="language-rust">fn main() {
    println!("Hello, world!");
}
</code></pre>
</div>
<div id="Tab2" class="tabcontent" style="display: none;">
<pre><code class="language-javascript">console.log("test print");
</code></pre>
</div>
<div id="Tab3" class="tabcontent" style="display: none;">
<pre><code class="language-golang">package main
import "fmt"
func main() {
    fmt.Println("test print")
}
</code></pre>
</div>
<div id="Tab4" class="tabcontent" style="display: none;">
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
</div> 
</div>

Two tabs in another div independent from all other tabs:

<div class="tabs-container">
  <div class="tabs">
    <button class="tablinks" onclick="openTab(event, 'Tab5', this)">Five</button>
    <button class="tablinks" onclick="openTab(event, 'Tab6', this)">Six</button>
  </div>
  <div id="Tab5" class="tabcontent">
<pre><code class="language-javascript">console.log("5");
</code></pre>
  </div>
  <div id="Tab6" class="tabcontent" style="display: none;">
<pre><code class="language-javascript">console.log("6");
</code></pre>
  </div>
</div>

Three tabs in another div independent from all other tabs:

<div class="tabs-container">
  <div class="tabs">
    <button class="tablinks" onclick="openTab(event, 'Tab7', this)">Seven</button>
    <button class="tablinks" onclick="openTab(event, 'Tab8', this)">Eight</button>
    <button class="tablinks" onclick="openTab(event, 'Tab9', this)">Nine</button>
  </div>
  <div id="Tab7" class="tabcontent">
<pre><code class="language-javascript">console.log("7");
</code></pre>
  </div>
  <div id="Tab8" class="tabcontent" style="display: none;">
<pre><code class="language-javascript">console.log("8");
</code></pre>
  </div>
    <div id="Tab9" class="tabcontent" style="display: none;">
<pre><code class="language-javascript">console.log("9");
</code></pre>
  </div>
</div>

<script src="../static/tabsGeneral.js"></script>
