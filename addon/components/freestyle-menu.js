import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';
import layout from '../templates/components/freestyle-menu';

export default Component.extend({
  layout,
  tagName: '',

  emberFreestyle: service(),
  menu: readOnly('emberFreestyle.menu')
});
