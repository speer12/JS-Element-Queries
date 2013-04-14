## Introduction

For a great write-up about Element Queries and why they are necessary, see Ian Storm Taylor's great article [Media Queries are a Hack](http://ianstormtaylor.com/media-queries-are-a-hack/)

While media queries help us create responsive websites, the problem is that they are, by their very nature, not modular. For instance, if I want my element article to be truly modular, I need to be able to use it in any context and have it reflow to fit *independently* of the context. With traditional media queries, any given element is inherently dependent upon it's context, ie the window width. If I want my article to flow properly at any given width, I have to restyle it within my CSS at every breakpoint. This is an at best an inconvenience and at worst a major coding nightmare. 

JS Element Queries seeks to solve this problem. For instance, let's say I want my articles to switch to center-aligned text when they get below 500px wide. I can style them using:

<pre>
.article{
  text-align: left;
}

.article.lt-500{
  text-align: center;
}
</pre>

This will cause my article to change to center-aligned text when <b>the article itself is less than 500px wide</b>. I can drop my article into any context and it will reflow to this new layout independently of the screen width. It is, in a very basic way, now modular. 

## Installation

To install, simply make sure to load Jquery, then simply link to the elment.queries.js file in the head of your document. Then within your HTML head, add a title attribute of "eq_stylesheet". This allows the JS to identify it as containing our custom element query tags. 


Then simply add tags into your CSS. Currently the only supported tags are Greater Than (gt) and Less Than (lt) as seen below:
<li>.lt-xxx</li>
<li>gt-xxx</li>

Where xxx represents your width in <b>pixels</b>.

## License

MIT License

## Releases

This project is stilll in very early Alpha stages. As such, this release may be unstable. Use at your own risk!
