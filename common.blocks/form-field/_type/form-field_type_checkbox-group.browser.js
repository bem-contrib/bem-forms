/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Checkbox-group field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'checkbox-group' }, {},
    /** @lends form-field_type_checkbox */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'checkbox-group', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'checkbox-group', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'checkbox-group', ptp._onControlBlur);
    }
});

provide(FormField);

});
