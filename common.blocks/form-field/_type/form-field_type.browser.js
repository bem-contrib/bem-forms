/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Base class for form-field block with _type modifier
 *
 * In common the name of incapsulated control equals to value of _type modifier
 * E.g. _type_input means that control is input
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'type' }, /** @lends form-field.prototype */{
    onSetMod : {
        'disabled' : function(modName, modVal) {
            this.getControl().setMod(modName, modVal);
        }
    },

    /**
     * Returns control of field
     * @protected
     * @returns {BEM}
     */
    getControl : function() {
        return this._control || (this._control = this.findBlockInside(this.getMod('type')));
    },

    /**
     * Returns field name
     * @returns {String}
     */
    getName : function() {
        return this.getControl().getName();
    },

    /**
     * Returns field value
     * @returns {String}
     */
    getVal : function() {
        return this.getControl().getVal();
    },

    /**
     * Устанавливает значение контрола
     * @param {*|String} val устанавливаемое значение
     */
    setVal : function(val) {
        this.getControl().setVal(val);
    },

    /**
     * Реакция на событие изменения значения контрола
     * @protected
     */
    _onControlChange : function(e, data) {
        /**
         * Input data change event
         *
         * @event FormField#change
         * @type {Object}
         */
        this.emit('change', data);
    },

    /**
     * Реакция на событие получения контролом фокуса
     * @protected
     */
    _onControlFocus : function(e, data) {
        this.setMod('focused', true);

        /**
         * Input focus event
         *
         * @event FormField#focus
         * @type {Object}
         */
        this.emit('focus', data);
    },

    /**
     * Реакция на событие потери контролом фокуса
     * @protected
     */
    _onControlBlur : function(e, data) {
        this.delMod('focused');

        /**
         * Input blur event
         *
         * @event FormField#blur
         * @type {Object}
         */
        this.emit('blur', data);
    }
});

provide(FormField);

});
