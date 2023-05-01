export default {
  name: 'grid-auto-flow',

  link: 'https://www.w3.org/TR/css-grid-1/#grid-auto-flow-property',

  initValue: 'row',

  appliesTo: '<a href="#grid-container">grid containers</a>',

  desc: `<p><a href="https://www.w3.org/TR/css-grid-1/#grid-item">Grid items</a> that aren’t explicitly placed are automatically placed
into an unoccupied space in the <a href="#grid-container">grid container</a> by the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a>. <a href="#section-grid-auto-flow">grid-auto-flow</a> controls how the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> works,
specifying exactly how auto-placed items get flowed into the grid.
See <a href="https://www.w3.org/TR/css-grid-1/#auto-placement-algo">§8.5 Grid Item Placement Algorithm</a> for details on precisely how the auto-placement algorithm works.</p>`,

  values: [
    {
      name: 'row',
      desc: 'The <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> places items by filling each row in turn, adding new rows as necessary. If neither <a href="#grid-auto-flow-row">row</a> nor <a href="#grid-auto-flow-column">column</a> is provided, <a href="#grid-auto-flow-row">row</a> is assumed.'
    },
    {
      name: 'column',
      desc: 'The <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> places items by filling each column in turn, adding new columns as necessary.'
    },
    {
      name: 'dense',
      desc: `If specified, the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> uses a “dense” packing algorithm, which attempts to fill in holes earlier in the grid if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.

      <p>If omitted, a “sparse” algorithm is used, where the placement algorithm only ever moves “forward” in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear “in order”, even if this leaves holes that could have been filled by later items.</p>`
    }
  ],

  customValues: [
    {
      name: 'row',
      current: true
    },
    {
      name: 'row dense'
    },
    {
      name: 'column'
    },
    {
      name: 'column dense'
    }
  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child child--featured"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': 'repeat(4, 1fr)',
      'grid-template-rows': 'repeat(4, 1fr)',
      'grid-auto-flow': 'row'
    }
  },
  {
    selector: '.child--featured',
    props: {
      'grid-column': 'span 3',
      'grid-row': 'span 3'
    }
  }]
};
