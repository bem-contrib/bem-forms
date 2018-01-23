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
provide(FormField.declMod({ modName : 'type', modVal : 'input' }, {

    getControl : function() {
        return this._control || (this._control = this.findChildBlock(Input));
    },

}, /** @lends form-field_type_input */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(Input)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
}));

});
