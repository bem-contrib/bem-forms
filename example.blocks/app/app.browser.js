/**
 * @module app
 */
modules.define('app',
    ['i-bem__dom'],
    function(provide, BEMDOM) {
/**
 * app block
 */
provide(BEMDOM.decl(this.name, /** @lends app.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findBlockInside('form');

                this._form.on('submit', function(e, val) {
                    this._form.validate().then(function (fieldsStatuses) {
                        if(this._form.checkFields(fieldsStatuses)) {
                            this._form.getMessage().hide();
                            console.log(val);
                        } else {
                            this._form.setMessageVal(this.concatMessages(fieldsStatuses));
                            this._form.getMessage().show();
                            this._form.getInvalidFields()[0].getControl().elem('control').focus();
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

    concatMessages : function(fieldsStatuses) {
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
