/**
 * @module form
 */
modules.define('form',
    function(provide, Form) {

/**
 * Base form__message class
 *
 * @exports
 * @class form
 * @bem
 */
Form.decl({ block : this.name, modName : 'message' }, /** @lends form.prototype */{

    /**
     * Return message of form
     * @protected
     * @abstract
     */
    getMessage : function() {
        return this._message || (this._message = this.findBlockInside('message'));
    }

});

provide(Form);

});
