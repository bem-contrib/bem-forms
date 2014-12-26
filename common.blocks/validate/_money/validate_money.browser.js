/**
 * @module validate
 */

modules.define(
    'validate',
    [],
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
            value : Number
        });

        provide(Validate.decl({ modName : 'money', modVal : true }, {

            onSetMod : {
                js : {
                    inited: function () {
                        this.__base.apply(this, arguments);
                        this.setMod('numbers');
                        this.params.decimal = '.';
                        this.params.scale = 2;
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
                var data = {
                    value : parseFloat(this.target.getVal())
                };

                if(!!data.value && !SCHEMA(data)) {
                    this._error(MESSAGE);
                    return false;
                }

                this.__base.apply(this, arguments);
            }

        }));

    }
);
