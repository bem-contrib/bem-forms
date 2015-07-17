/**
 * @module form-field
 */
modules.define('form-field',
function(provide, FormField) {

/**
 * Radio field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'radio' }, {}, /** @lends form-field_type_radio */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'radio', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'radio', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'radio', ptp._onControlBlur);
    }
});

provide(FormField);

});
