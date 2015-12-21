/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {
/**
 * Select field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'select' }, {}, /** @lends form-field_type_checkbox */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'select', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'select', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'select', ptp._onControlBlur);
    }
});

provide(FormField);

});
