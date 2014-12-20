/**
 * @module validate
 */

modules.define(
    'validate',
    ['functions', 'keyboard__codes'],
    function (provide, functions, keyCodes, Validate) {

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
            value : Number
        });

        provide(Validate.decl({ modName : 'money', modVal : true }, {

            beforeSetMod : {
                js : {
                    inited : function() {
                        this.setMod('numbers');
                        this.params.decimal = '.';
                        this.params.scale = 2;
                    }
                }
            },

            onSetMod : {
                js : {
                    inited: function () {
                        this.__base.apply(this, arguments);
                    }
                },

                result : {
                    success : function() {
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
