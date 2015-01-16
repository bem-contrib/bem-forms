modules.define('form', ['i-bem__dom', 'objects'], function(provide, BEMDOM, objects) {
/**
 * Форма
 */
provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._changeStorage = null;
            }
        },

        'disabled' : function(modName, modVal) {
            this.getFields().forEach(function(field) {
                field.setMod(modName, modVal);
            });
        }
    },

    getFields : function() {
        return this.elemInstances('field');
    },

    /**
     * Сериализует форму
     * @returns {Object}
     */
    getVal : function() {
        return this.getFields().reduce(function(res, field) {
            var name = field.getName();
            name && (res[name] = field.getVal());
            return res;
        }, {});
    },

    /**
     * Заполняет форму данными
     * @param {Object} val данные (если не передан - берется из параметра fillData)
     */
    setVal : function(val) {
        var storage = this._changeStorage = {};

        this
            .getFields()
            .forEach(function(field) {
                field.setVal(val[field.getName()]);
            });

        this.nextTick(function() {
            objects.isEmpty(storage) || this.emit('change', storage);
            this._changeStorage = null;
        });
    },

    /**
     * метод зовется элементом __control
     * @private
     * @deprecated
     */
    _onControlChange : function(control, event, data) {
        var storage = this._changeStorage || {},
            name = control.getName();

        if(!name) return; // TODO как быть?

        storage[name] = { event : event, data : data };
        this._changeStorage || this.emit('change', storage);
    }
}, {
    live : true
}));

});
