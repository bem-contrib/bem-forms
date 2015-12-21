/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {
/**
 * Textarea field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'textarea' }, {}, /** @lends form-field_type_textarea */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'textarea', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'textarea', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'textarea', ptp._onControlBlur);
    }
});

provide(FormField);

});
