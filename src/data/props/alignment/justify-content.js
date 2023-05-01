export default {
  name: 'justify-content',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-justify-content',

  initValue: 'normal',

  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, and <a href="#grid-container">grid containers</a>',

  desc: '',

  values: [
    {
      name: '<a href="#justify-self-normal">normal</a> | <a href="#content-distribution">&lt;content-distribution></a> | <a href="#overflow-position">&lt;overflow-position></a> ? [ <a href="#content-position">&lt;content-position></a> | left | right ]',
      alias: 'justify-content-value',
      desc: ''
    }
  ],

  customValues: [
    /* Basic keywords */
    {
      name: 'normal',
      current: true
    },
    {
      name: 'stretch'
    },
    /* Positional alignment */
    {
      name: 'center'
    },
    {
      name: 'start'
    },
    {
      name: 'end'
    },
    {
      name: 'left'
    },
    {
      name: 'right'
    },
    /* Baseline alignment */
    {
      name: 'space-around'
    },
    {
      name: 'space-between'
    },
    {
      name: 'space-evenly'
    },
    /* Overflow alignment (for positional alignment only) */
    {
      name: 'safe center'
    },
    {
      name: 'unsafe center'
    }

  ],

  htmlMarkup: `<div class="parent">
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
        'grid-template': '100px 100px / 100px 100px',
        'justify-content': 'auto'
      }
    }
  ]
};
