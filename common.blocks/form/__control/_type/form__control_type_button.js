/**
 * @module form
 */

modules.define('form', function(provide, Form) {

/**
 * Контрол типа button (кнопка)
 * Подмешивается к блоку button
 * @exports
 * @class form__control
 * @bem
 */
provide(Form.decl({ block : this.name, elem : 'control', modName : 'type', modVal : 'button' },
    /** @lends form__control.prototype */{
    /**
     * Заглушка
     */
    getName : function() {},

    /**
     * Заглушка
     */
    getVal : function() {},

    /**
     * Заглушка
     */
    setVal : function() {}
}));

});
