/**
 * @module validate
 */

modules.define(
    'validate',
    function (provide, Validate) {

        /**
         * Error message
         */
        var MESSAGE = {
            validator : 'required',
            text : 'Поле обязательно к заполнению'
        };

        provide(Validate.decl({ modName : 'required', modVal : true }, {

            onSetMod : {
                'js' : {
                    'inited' : function () {
                        this.__base.apply(this, arguments);

                        var _this = this;

                        _this.target.elem('control').on('blur', function() {
                            _this.run();
                        });
                    }
                },

                'result' : {
                    'success' : function() {
                        delete this.messages[MESSAGE.validator];

                        this.__base.apply(this, arguments);
                    }

                }
            },

            run : function() {
                if(!this.target.getVal()) {
                    this._error(MESSAGE);
                    return false;
                }

                this.__base.apply(this, arguments);
            }

        }));

    }
);
