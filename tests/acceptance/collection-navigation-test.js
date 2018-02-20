import { test } from 'qunit';
import { A } from '@ember/array';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import freestyleGuide from '../pages/freestyle-guide';

let variantKeys = A(['normal', 'special', 'hyper', 'classic', 'elegant', 'tasteful']);

moduleForAcceptance('Acceptance | collection navigation', {
  async beforeEach() {
    await freestyleGuide.visit();
  }
});

test('verifying variantListItem selection', (assert) => {
  assert.expect(36);

  let fooCollection = freestyleGuide.content.sections(0).subsections(0).collections(0);

  variantKeys.forEach((activeVariant, idx) => {
    fooCollection.variantListItems().selectVariant(activeVariant);

    assert.equal(fooCollection.variants(idx).usageTitle.toLowerCase(), activeVariant);
    variantKeys.reject((each) => {
      return each === activeVariant;
    }).map((otherVariant) => {
      let otherIndex = variantKeys.indexOf(otherVariant);
      assert.equal(fooCollection.variants(otherIndex).text, '');
    });
  });

});
