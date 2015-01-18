/**
 * @module form__field
 */
modules.define('form__field', function(provide, prev) {

/**
 * Болванка для контрола формы с заданным типом (модификатор _type)
 * К таким контролам подмешивается BEM-блок, реализующий АПИ соответсвующего контрола
 * В общем случае считается, что имя подмешанного блока совпадает со значением модификатора _type
 */
prev.decl({ block : 'form', elem : 'field', modName : 'type' }, /** @lends form__field_type.prototype */{
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
     * Returns control name
     * @returns {String}
     */
    getName : function() {
        return this.getControl().getName();
    },

    /**
     * Returns control value
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
        this.emit(e, data);
    },

    /**
     * Реакция на событие получения контролом фокуса
     * @protected
     */
    _onControlFocus : function(e, data) {
        /**
         * Input focus event
         *
         * @event FormField#focus
         * @type {Object}
         */
        this.emit(e, data);
    },

    /**
     * Реакция на событие потери контролом фокуса
     * @protected
     */
    _onControlBlur : function(e, data) {
        /**
         * Input blur event
         *
         * @event FormField#blur
         * @type {Object}
         */
        this.emit(e, data);
    }
});

provide(prev);

});
