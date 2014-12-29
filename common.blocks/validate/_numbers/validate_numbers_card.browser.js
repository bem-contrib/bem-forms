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

        provide(Validate.decl({ modName : 'numbers', modVal : 'card' }, {

            onSetMod : {
                'js' : {
                    'inited' : function () {
                        var _this = this;

                        this.__base.apply(this, arguments);

                        if (_this.target.hasMod('type', 'numbers')) {
                            // Compatibility with masks
                            _this.target.params.allowChars = [' '];
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

            /**
             * Match card BIN pattern
             * @param {String} number
             * @returns {Object} cardType - card info { name : 'name', pattern : '' }
             */
            _patterns : function(number) {
                var i, l, cardType;

                for(i = 0, l = CARDS.length; i < l; i++) {
                    cardType = CARDS[i];

                    if(number.match(cardType.pattern)) {
                        return cardType;
                    }

                    cardType = false;
                }

                return cardType;
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
                var digit, n, i, l,
                    sum = 0,
                    norm = this._normalize(number),
                    ref2 = norm.split('').reverse();

                for(n = i = 0, l = ref2.length; i < l; n = ++i) {
                    digit = Number(ref2[n]);
                    if(n % 2) {
                        digit *= 2;
                        if(digit < 10) {
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
                var data = {
                    value : this._normalize(this.target.getVal())
                };

                if(!!data.value) {
                    if(!SCHEMA(data)) {
                        this._error(MESSAGE);
                        return false;
                    }

                    if(!this._luhn(data.value)) {
                        this._error(MESSAGE);
                        return false;
                    }

                    this.card = this._patterns(data.value);

                    if(!this.card) {
                        this._error(MESSAGE);
                        return false;
                    }
                }

                this.__base.apply(this, arguments);
            }

        }));

    }
);
