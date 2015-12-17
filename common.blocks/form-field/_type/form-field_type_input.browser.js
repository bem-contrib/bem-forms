/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Input field (simple text input)
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'input' }, {}, /** @lends form-field_type_input */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'input', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'input', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'input', ptp._onControlBlur);
    }
});

provide(FormField);

});
