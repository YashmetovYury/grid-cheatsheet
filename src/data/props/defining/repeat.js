export default {
  name: 'repeat()',
  alias: 'repeat',
  propDemoName: 'grid-template-columns',

  link: 'https://www.w3.org/TR/css-grid-1/#repeat-notation',

  desc: `<p>The <dfn id="funcdef-repeat">repeat()</dfn> notation represents a repeated fragment of the <a href="#track-list">track list</a>,
allowing a large number of columns or rows that exhibit a recurring pattern
to be written in a more compact form.</p>

<p>The generic form of the <a href="#funcdef-repeat">repeat()</a> syntax is, approximately,</p>

<pre>
<code>repeat( [ <a href="">&lt;positive-integer></a> | auto-fill | auto-fit ], <a href="#typedef-track-list">&lt;track-list></a> )
</code></pre>

<p>The first argument specifies the number of repetitions.
The second argument is a <a href="#track-list">track list</a>,
which is repeated that number of times.
However, there are some restrictions:</p>

<ul>
    <li>
     <p>The <a href="#funcdef-repeat">repeat()</a> notation can’t be nested.</p>
  </li><li>
     <p>Automatic repetitions (<a href="#valdef-repeat-auto-fill">auto-fill</a> or <a href="#valdef-repeat-auto-fit">auto-fit</a>)
cannot be combined with <a href="https://www.w3.org/TR/css-grid-1/#intrinsic-sizing-function">intrinsic</a> or <a href="https://www.w3.org/TR/css-grid-1/#flexible-sizing-function">flexible</a> sizes.</p>
  </li>
</ul>

<p>Thus the precise syntax of the <a href="#funcdef-repeat">repeat()</a> notation
has several forms:</p>

<pre>
<code><dfn id="typedef-track-repeat"><a href="#typedef-track-repeat">&lt;track-repeat></a></dfn> = repeat( [ <a href="">&lt;positive-integer></a> ], [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-track-size">&lt;track-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ? )
<dfn id="typedef-auto-repeat"><a href="#typedef-auto-repeat">&lt;auto-repeat></a></dfn>  = repeat( [ auto-fill | auto-fit ], [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-fixed-size">&lt;fixed-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ? )
<dfn id="typedef-fixed-repeat"><a href="#typedef-fixed-repeat">&lt;fixed-repeat></a></dfn> = repeat( [ <a href="">&lt;positive-integer></a> ], [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-fixed-size">&lt;fixed-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ? )
</code></pre>

<ul>
  <li>
    <p class="">The <a href="#typedef-track-repeat">&lt;track-repeat></a> variant can represent the repetition of any <a href="#typedef-track-size">&lt;track-size></a>,
but is limited to a fixed number of repetitions.</p>
  </li>
  <li>
    <p>The <a href="#typedef-auto-repeat">&lt;auto-repeat></a> variant can repeat automatically to fill a space,
but requires <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> track sizes so that the number of repetitions can be calculated.
It can only appear once in the <a href="#track-list">track list</a>,
but the same <a href="#track-list">track list</a> can also contain <a href="#typedef-fixed-repeat">&lt;fixed-repeat></a>s.</p>
  </li>
</ul>

<p>If the <a href="#funcdef-repeat">repeat()</a> function ends up placing two <a href="#typedef-line-names">&lt;line-names></a> adjacent to each other,
the name lists are merged.
For example, <code>repeat(2, [a] 1fr [b])</code> is equivalent to <code>[a] 1fr [b a] 1fr [b]</code>.</p>

<p>When <dfn id="valdef-repeat-auto-fill">auto-fill</dfn> is given as the repetition number,
if the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> size or max size in the relevant axis,
then the number of repetitions is the largest possible positive integer
that does not cause the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> to overflow its <a href="#grid-container">grid container</a> (treating each track as its <a href="https://www.w3.org/TR/css-grid-1/#max-track-sizing-function">max track sizing function</a> if that is <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> or as its minimum track sizing function otherwise,
and taking <a href="https://www.w3.org/TR/css3-align/#gap">gap</a> into account);
if any number of repetitions would overflow,
then 1 repetition.
Otherwise, if the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> min size in the relevant axis,
the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement.
Otherwise, the specified <a href="#track-list">track list</a> repeats only once.</p>

<p>The <dfn id="valdef-repeat-auto-fit">auto-fit</dfn> keyword behaves the same as <a href="#valdef-repeat-auto-fill">auto-fill</a>,
except that after <a href="https://www.w3.org/TR/css-grid-1/#auto-placement-algo">grid item placement</a> any empty repeated tracks are <a href="#collapsed-track">collapsed</a>.
An empty track is one with no in-flow grid items placed into or spanning across it.
(This can result in <em>all</em> tracks being <a href="#collapsed-track">collapsed</a>,
if they’re all empty.)</p>

<p>A <dfn id="collapsed-track">collapsed track</dfn> is treated as having
a fixed <a href="#grid-template-rows-track-sizing-function">track sizing function</a> of <code>0px</code>,
and the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a> on either side of it—<wbr>including any space allotted through <a href="https://www.w3.org/TR/css3-align/#distributed-alignment">distributed alignment</a>—<wbr><a href="#collapsed-gutter">collapse</a>.</p>

<p>For the purpose of finding the number of auto-repeated tracks,
the UA must floor the track size to a UA-specified value
to avoid division by zero.
It is suggested that this floor be <code>1px</code>.</p>`,

  customValues: [
    {
      name: 'repeat(5, 1fr)',
      current: true
    },
    {
      name: 'repeat(auto-fill, minmax(75px, 1fr))'
    },
    {
      name: 'repeat(auto-fit, minmax(75px, 1fr))'
    }
  ],

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': 'repeat(4, 1fr)'
    }
  }]
};
