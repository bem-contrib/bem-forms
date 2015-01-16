modules.define('form', function(provide, Form) {
/**
 * Контрол (поле ввода) формы
 */
provide(Form.decl({ block : this.name, elem : 'field' }, {}, { live : true }));

});
