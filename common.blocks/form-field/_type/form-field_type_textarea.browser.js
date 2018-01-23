/**
 * @module form-field
 */
modules.define('form-field', ['textarea'],
    function(provide, Textarea, FormField) {
/**
 * Textarea field
 *
 * @exports
 * @class form-field
 * @bem
 */
provide(FormField.declMod({ modName : 'type', modVal : 'textarea' }, {

    getControl : function() {
        return this._control || (this._control = this.findChildBlock(Textarea));
    }

}, /** @lends form-field_type_textarea */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(Textarea)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
}));

});
