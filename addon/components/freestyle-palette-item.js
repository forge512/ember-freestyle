import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/freestyle-palette-item';

export default Component.extend({
  layout,
  tagName: '',
  // color - passed in
  paletteStyle: computed('color', function() {
    let color = this.get('color');
    return htmlSafe(`background-color: ${color.base};`);
  })
});
