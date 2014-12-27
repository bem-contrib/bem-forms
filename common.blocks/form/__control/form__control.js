/**
 * @module form
 */

modules.define('form', function(provide, Form) {

/**
 * Контрол (поле ввода) формы
 * @exports
 * @class form__control
 * @bem
 */
provide(Form.decl({ block : this.name, elem : 'control' },
    /** @lends form__control.prototype */{},
    /** @lends form__control */{ live : true }));

});
