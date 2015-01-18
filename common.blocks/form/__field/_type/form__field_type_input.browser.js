/**
 * @module form__field
 */
modules.define('form__field', function(provide, prev) {

/**
 * Контрол типа input (текстовое поле ввода)
 * Подмешивается к блоку input
 */
prev.decl({ block : 'form', elem : 'field', modName : 'type', modVal : 'input' }, {},
    /** @lends form__field_type_input */{

    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'input', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'input', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'input', ptp._onControlBlur);
    }
});

provide(prev);

});
