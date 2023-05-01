export default {
  name: 'grid-column-end',

  isFeaturedHighlighted: true,

  customValues: [
    {
      name: '2',
      current: true
    },
    {
      name: '3'
    },
    {
      name: '4'
    },
    {
      name: 'span 2'
    },
    {
      name: 'a-end'
    },
    {
      name: 'b-end'
    },
    {
      name: 'c-end'
    },
    {
      name: 'aside-end'
    },
    {
      name: 'main-end'
    },
    {
      name: 'aside2-end'
    },
    {
      name: 'auto'
    }
  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child child--featured"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': '[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]',
        'grid-template-rows': 'repeat(3, 1fr)',
        'grid-template-areas': '"a b c" \n "a b c" \n "a b c"'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'grid-column-end': '1'
      }
    }
  ]
};
