/**
 * @module form
 */

modules.define('form', function(provide, Form) {

/**
 * Контрол типа checkbox (флажок)
 * Подмешивается к блоку checkbox
 * @exports
 * @class form__control
 * @bem
 */
provide(Form.decl({ block : this.name, elem : 'control', modName : 'type', modVal : 'checkbox' },
    /** @lends form__control.prototype */{
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
}, /** @lends form__control */{
    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockEvent('change', 'checkbox', ptp._onControlChange)
            .liveInitOnBlockEvent('focus', 'checkbox', ptp._onControlFocus)
            .liveInitOnBlockEvent('blur', 'checkbox', ptp._onControlBlur);
    }
}));

});
