/* global schema */
/**
 * @module validate
 */

modules.define(
    'validate',
    ['keyboard__codes'],
    function (provide, keyCodes, Validate) {

        /**
         * Error message
         */
        var MESSAGE = {
            validator : 'numbers',
            text : 'Неверные циферки'
        };

        /**
         * Default numbers format schema
         */
        var SCHEMA = schema({
            value : Number
        });

        provide(Validate.decl({ modName : 'float', modVal : true }, {

            onSetMod : {
                'js' : {
                    'inited' : function () {
                        this.__base.apply(this, arguments);

                        var _this = this;

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
                var _this = this;

                var data = {
                    value : parseFloat(_this.target.getVal())
                };

                if(!!data.value && !SCHEMA(data)) {
                    _this._error(MESSAGE);
                    return false;
                }

                _this.__base.apply(_this, arguments);
            }

        }));

    }
);
