/**
 * @module form-field
 */
modules.define('form-field', ['radio-group'],
    function(provide, RadioGroup, FormField) {
/**
 * Radio-group field
 *
 * @exports
 * @class form-field
 * @bem
 */
provide(FormField.declMod({ modName : 'type', modVal : 'radio-group' }, {

    getControl : function() {
        return this._control || (this._control = this.findChildBlock(RadioGroup));
    },

}, /** @lends form-field_type_radio-group */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(RadioGroup)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
}));

});
