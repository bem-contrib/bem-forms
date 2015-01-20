/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Base form-field__message class
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'message' }, /** @lends form-field.prototype */{

    /**
     * Return message of field
     * @protected
     * @abstract
     */
    getMessage : function() {
        return this._message || (this._message = this.findBlockInside('message'));
    }

});

provide(FormField);

});
