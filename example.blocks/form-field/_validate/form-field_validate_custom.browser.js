/**
 * @module form-field
 */
modules.define('form-field',
    ['vow'],
    function(provide, Vow, FormField) {
/**
 * Card form-field validation
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'validate', modVal : 'custom' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.setValidationMessages({
                    custom1 : 'This is\'t BEM',
                    custom2 : 'You need more BEM'
                });

                this.getValidator().push(this._validateEqual(this));
                this.getValidator().push(this._validateServer(this));
            }
        }
    },

    _validateEqual : function (field) {
        return function (val) {
            return val.substr(0, 3) === 'BEM'? null : {
                field : field.getName() || field.getId(),
                message : field.getValidationMessage('custom1')
            }
        }
    },

    _validateServer : function (field) {
        return function (val) {
             return new Vow.Promise(function (resolve) {
                 setTimeout(function () {
                     resolve(val.length > 3? null : {
                         field : field.getName() || field.getId(),
                         message : field.getValidationMessage('custom2')
                     });
                 }, 1000);
             })
        }
    }

});

provide(FormField);

});
