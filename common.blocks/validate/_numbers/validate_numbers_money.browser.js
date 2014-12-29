/* global schema */
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
            validator : 'money',
            text : 'Неверный формат денег'
        };

        /**
         * Default money format schema
         */
        var SCHEMA = schema({
            value : Number.min(1).max(1000000)
        });

        provide(Validate.decl({ modName : 'numbers', modVal : 'money' }, {

            onSetMod : {
                'js' : {
                    'inited' : function () {
                        var _this = this;

                        this.__base.apply(this, arguments);

                        // input_type_numbers required for format settings
                        if (this.target.hasMod('type', 'numbers')) {
                            this.target.params.decimal = '.';
                            this.target.params.scale = 2;
                        }

                        _this.target.elem('control')
                            .on('blur', function() {
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
                var data = {
                    value : parseFloat(this.target.getVal())
                };

                if(!!data.value) {
                    if(!SCHEMA(data)) {
                        this._error(MESSAGE);
                        return false;
                    }
                }

                this.__base.apply(this, arguments);
            }

        }));

    }
);
