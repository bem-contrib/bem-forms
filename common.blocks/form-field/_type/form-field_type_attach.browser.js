/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {
/**
 * Attach field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'attach' }, {}, /** @lends form-field_type_attach */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'attach', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'attach', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'attach', ptp._onControlBlur);
    }
});

provide(FormField);

});
