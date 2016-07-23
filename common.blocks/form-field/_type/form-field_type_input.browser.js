/**
 * @module form-field
 */
modules.define('form-field', ['input'],
    function(provide, Input, FormField) {
/**
 * Input field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'type', modVal : 'input' }, {}, /** @lends form-field_type_input */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;
        ptp._controls['input'] = Input;

        this.__base();
        this._events(Input)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
});

provide(FormField);

});
