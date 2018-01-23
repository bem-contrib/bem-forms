/**
 * @module form-field
 */
modules.define('form-field', ['attach'],
    function(provide, Attach, FormField) {
/**
 * Attach field
 *
 * @exports
 * @class form-field
 * @bem
 */
provide(FormField.declMod({ modName : 'type', modVal : 'attach' }, {

    getControl : function() {
        return this._control || (this._control = this.findChildBlock(Attach));
    }

}, /** @lends form-field_type_attach */{
    lazyInit : true,

    onInit : function() {
        var ptp = this.prototype;

        this.__base();
        this._events(Attach)
            .on('change', ptp._onControlChange)
            .on({ modName : 'focused', modVal : true }, ptp._onControlFocus)
            .on({ modName : 'focused', modVal : '' }, ptp._onControlBlur);
    }
}));

});
