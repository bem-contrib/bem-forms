/**
 * @module form
 */

modules.define('form', function(provide, Form) {

/**
 * Контрол типа radio (радиогруппа)
 * Подмешивается к блоку radio
 * @exports
 * @class form__control
 * @bem
 */

// TODO Form.decl({ elem: 'control', modName: 'type', modVal: 'radio' }, ...)
provide(Form.decl({ block : 'form', elem : 'control', modName : 'type', modVal : 'radio' },
    /** @lends form__control.prototype */{}, /** @lends form__control */{
    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockEvent('change', 'radio', ptp._onControlChange)
            .liveInitOnBlockEvent('focus', 'radio-option', ptp._onControlFocus)
            .liveInitOnBlockEvent('blur', 'radio-option', ptp._onControlBlur);
    }
}));

});
