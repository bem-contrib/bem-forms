/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Radio-group field
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type', modVal : 'radio-group' }, {}, /** @lends form-field_type_radio-group */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'radio-group', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'radio-group', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'radio-group', ptp._onControlBlur);
    }
});

provide(FormField);

});
