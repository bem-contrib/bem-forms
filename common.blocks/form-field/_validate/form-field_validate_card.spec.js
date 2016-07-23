modules.define('spec',
    ['form-field', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_validate_card', function() {

    var formField;

    afterEach(function() {
        bemDom.destruct(formField.domElem);
    });

    // formField = buildFormField('hidden')
    it.skip('should set invalid mod to hidden after value change with invalid card');
    it.skip('should remove invalid mod from hidden with value after value changed to right');

    // formField = buildFormField('attach', { block : 'attach' })
    it.skip('should throw error if control is attach');

    // formField = buildFormField('input', { block : 'input' })
    it.skip('should set invalid mod to input after value change with invalid card');
    it.skip('should remove invalid mod from input with value after value changed to right');

    // formField = buildFormField('textarea', { block : 'textarea' })
    it.skip('should set invalid mod to textarea after value change with invalid card');
    it.skip('should remove invalid mod from textarea with value after value changed to right');

    // formField = buildFormField('select', { block : 'select' })
    it.skip('should set invalid mod to select after value change with invalid card');
    it.skip('should remove invalid mod from select with value after value changed to right');

    // formField = buildFormField('checkbox', { block : 'checkbox' })
    it.skip('should set invalid mod to empty checkbox after value change with invalid card');
    it.skip('should remove invalid mod from checkbox with value after value changed to right');

    // formField = buildFormField('checkbox-group', { block : 'checkbox-group' })
    it.skip('should set invalid mod to checkbox-group after value change with invalid card');
    it.skip('should remove invalid mod from checkbox-group with value after value changed to right');

    // formField = buildFormField('radio', { block : 'radio' })
    it.skip('should set invalid mod to radio after value change with invalid card');
    it.skip('should remove invalid mod from radio with value after value changed to right');

    // formField = buildFormField('radio-group', { block : 'radio-group' })
    it.skip('should set invalid mod to radio-group after value change with invalid card');
    it.skip('should remove invalid mod from radio-group with value after value changed to right');
});

function buildFormField(type, control) {
    return bemDom.init($(BEMHTML.apply({
        block : 'form-field',
        mods : { type : type, validate : 'card' },
        content : control
    })).appendTo('body')).bem('form-field');
}

provide();

});
