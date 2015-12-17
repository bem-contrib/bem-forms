/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 select
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
            .liveInitOnBlockInsideEvent('change', 'button', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'button', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'button', ptp._onControlBlur);
    }
});

provide(FormField);

});
