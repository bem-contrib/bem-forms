/**
 * @module form__field
 */
modules.define('form__field', function(provide, prev) {

/**
 * Контрол типа radio (радиогруппа)
 * Подмешивается к блоку radio
 */
prev.decl({ block : 'form', elem : 'field', modName : 'type', modVal : 'radio' }, {},
    /** @lends form__field_type_radio */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'radio', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'radio', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'radio', ptp._onControlBlur);
    }
});

provide(prev);

});
