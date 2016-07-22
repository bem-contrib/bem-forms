modules.define('spec',
    ['form-field', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_required', function() {

    var formField;

    afterEach(function() {
        bemDom.destruct(formField.domElem);
    });

    // formField = buildFormField('hidden')
    it.skip('should set invalid mod to empty hidden after value change');
    it.skip('should remove invalid mod from hidden with value after value change');

    // formField = buildFormField('attach', { block : 'attach' })
    it.skip('should set invalid mod to empty attach after value change');
    it.skip('should remove invalid mod from attach with value after value change');

    // formField = buildFormField('input', { block : 'input' })
    it.skip('should set invalid mod to empty input after value change');
    it.skip('should remove invalid mod from input with value after value change');

    // formField = buildFormField('textarea', { block : 'textarea' })
    it.skip('should set invalid mod to empty textarea after value change');
    it.skip('should remove invalid mod from textarea with value after value change');

    // formField = buildFormField('select', { block : 'select' })
    it.skip('should set invalid mod to empty select after value change');
    it.skip('should remove invalid mod from select with value after value change');

    // formField = buildFormField('checkbox', { block : 'checkbox' })
    it.skip('should set invalid mod to empty checkbox after value change');
    it.skip('should remove invalid mod from checkbox with value after value change');

    // formField = buildFormField('checkbox-group', { block : 'checkbox-group' })
    it.skip('should set invalid mod to empty checkbox-group after value change');
    it.skip('should remove invalid mod from checkbox-group with value after value change');

    // formField = buildFormField('radio', { block : 'radio' })
    it.skip('should set invalid mod to empty radio after value change');
    it.skip('should remove invalid mod from radio with value after value change');

    // formField = buildFormField('radio-group', { block : 'radio-group' })
    it.skip('should set invalid mod to empty radio-group after value change');
    it.skip('should remove invalid mod from radio-group with value after value change');
});

function buildFormField(type, control) {
    return bemDom.init($(BEMHTML.apply({
        block : 'form-field',
        mods : { type : type, required : true },
        content : control
    })).appendTo('body')).bem('form-field');
}

provide();

});
