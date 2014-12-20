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
            validator : 'card',
            text : 'Неверный номер карты'
        };

        /**
         * Default card format schema
         */
        var SCHEMA = schema({
            value : String.of(16, 18, null)
        });

        var CARDS = [
            {
                name : 'visa',
                pattern : /^4/
            },
            {
                name : 'mastercard',
                pattern : /^5[1-5]/
            },
            {
                name : 'maestro',
                pattern : /^(5018|5020|5038|6304|6759|676[1-3])/
            }
        ];

        provide(Validate.decl({ modName : 'card', modVal : true }, {

            beforeSetMod : {
                js : {
                    inited : function() {
                        this.setMod('numbers');
                    }
                }
            },

            onSetMod : {
                js : {
                    inited : function () {
                        this.__base.apply(this, arguments);

                        var _this = this;

                        _this.target.elem('control')
                            .on('blur', function() {
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

            /**
             * Match card BIN pattern
             * @param {String} number
             * @returns {Object} c_type - card info { name : 'name', pattern : '' }
             */
            _patterns : function(number) {
                var _j, _len1, c_type;
                for (_j = 0, _len1 = CARDS.length; _j < _len1; _j++) {
                    c_type = CARDS[_j];
                    if (number.match(c_type.pattern)) {
                        return c_type;
                    }
                    else {
                        c_type = false;
                    }
                }

                return c_type;
            },

            /**
             * Clean all expect numbers
             * @param {String} number
             * @returns {String}
             */
            _normalize : function(number) {
                return number.replace(/[^0-9.]/g, '');
            },

            /**
             * Luhn algorithm
             * @param {String} number
             * @returns {Boolean}
             */
            _luhn : function(number) {
                var digit, n, _j, _len1,
                    sum = 0,
                    norm = this._normalize(number),
                    _ref2 = norm.split('').reverse();

                for (n = _j = 0, _len1 = _ref2.length; _j < _len1; n = ++_j) {
                    digit = _ref2[n];
                    digit = +digit;
                    if (n % 2) {
                        digit *= 2;
                        if (digit < 10) {
                            sum += digit;
                        } else {
                            sum += digit - 9;
                        }
                    } else {
                        sum += digit;
                    }
                }

                return sum % 10 === 0;
            },

            run : function() {
                var _this = this;

                var data = {
                    value : _this._normalize(_this.target.getVal())
                };

                if (!!data.value) {
                    if (!SCHEMA(data)) {
                        _this._error(MESSAGE);
                        return false;
                    }

                    if (!_this._luhn(data.value)) {
                        _this._error(MESSAGE);
                        return false;
                    }

                    _this.card = _this._patterns(data.value);

                    if (!_this.card) {
                        _this._error(MESSAGE);
                        return false;
                    }
                }

                _this.__base.apply(_this, arguments);
            }

        }));

    }
);
