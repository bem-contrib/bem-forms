/**
 * @module app
 */
modules.define('app',
    ['i-bem-dom', 'form'],
    function(provide, bemDom, Form) {
/**
 * app block
 */
provide(bemDom.declBlock(this.name, /** @lends app.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findChildBlock(Form);
                this._form._domEvents().on('submit', function(e, val) {
                    this._form.validate()
                        .then(function (fieldsStatuses) {
                            if(this._form.checkFields(fieldsStatuses)) {
                                this._form.getMessage().hide();
                                console.log(val);
                            } else {
                                this._form.setMessageVal(this._concatMessages(fieldsStatuses));
                                this._form.getMessage().show();
                                this._form.getInvalidFields()
                                    .then(function (invalidFields) {
                                        invalidFields[0].getControl().setMod('focused');
                                    });
                            }
                        }.bind(this));
                }.bind(this));

                //this._form.getFields()[1].setValidationMessage('required', 'Ololo!');
                //this._form.getFields()[0].setValidationMessages({
                //    required : 'FUCK!'
                //});

                //this._form.getFields()[2].setMod('disabled');
                //this._form.getFields()[0].setStatus('invalid');

                // You can bind to other form events
                // this._form.on('change', function(e, data) {
                //     console.log('changed form', data);
                // });

                // this._form.on('focus', function(e, data) {
                //     console.log('focused form', data);
                // });
            }
        }
    },

    _concatMessages : function(fieldsStatuses) {
        var messages = [];
        for(var i = 0, l = fieldsStatuses.length; i < l; i++) {
            if(fieldsStatuses[i] !== null) {
                messages.push([
                    fieldsStatuses[i]['field'],
                    ': ',
                    fieldsStatuses[i]['message']
                ].join(''));
            }
        }
        return messages.join('<br>');
    }

}));

});
