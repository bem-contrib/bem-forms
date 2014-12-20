modules.define(
    'validate',
    ['i-bem__dom'],
    function (provide, BEMDOM, Validate) {

        /**
         * Error message
         */
        var MESSAGE = {
            validator : 'required',
            text : 'Поле обязательно к заполнению'
        };

        /**
         * Default required format schema
         */
        var SCHEMA = schema({
            value : undefined
        });

        provide(Validate.decl({ modName : 'required', modVal : true }, {

            onSetMod : {
                js : {
                    inited : function () {
                        this.__base.apply(this, arguments);

                        console.log('Init required validator');

                        var _this = this;

                        _this.target.elem('control').on('blur', function() {
                            _this.run();
                        });
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
                    value : _this.target.getVal()
                };

                if(!data.value) {
                    _this._error(MESSAGE);
                    return false;
                }

                _this.__base.apply(_this, arguments);
            }

        }));

    }
);
