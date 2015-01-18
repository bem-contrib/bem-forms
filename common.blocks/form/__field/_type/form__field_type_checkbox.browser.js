/**
 * @module form__field
 */
modules.define('form__field', function(provide, prev) {

/**
 * Контрол типа checkbox (флажок)
 * Подмешивается к блоку checkbox
 */
prev.decl({ block : 'form', elem : 'field', modName : 'type', modVal : 'checkbox' },
    /** @lends form__field_type_checkbox.prototype */{

    /**
     * Возвращает значение контрола
     * @returns {String}
     */
    getVal : function() {
        var control = this.getControl();
        return control.hasMod('checked')? control.getVal() : '';
    },

    /**
     * Устанавливает значение контрола
     * @param {String} val значение
     */
    setVal : function(val) {
        this.getControl().setMod('checked', !!val);
    }
}, /** @lends form__field_type_checkbox */{
    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockInsideEvent('change', 'checkbox', ptp._onControlChange)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : true }, 'checkbox', ptp._onControlFocus)
            .liveInitOnBlockInsideEvent({ modName : 'focused', modVal : '' }, 'checkbox', ptp._onControlBlur);
    }
});

provide(prev);

});
