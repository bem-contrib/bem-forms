/**
 * @module validation_card
 */

modules.define('validation_card',
    ['objects'],
    function(provide, objects) {

    var DEFAULT_MESSAGE = 'Incorrect card number';

    var DIGITS_RE = /^\d+$/;
    var CARDS_RE = [
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

    return provide(function(message, params) {
        message = message || DEFAULT_MESSAGE;
        params = objects.extend({}, params);

        return function (val) {
            if(!val) {
                return null;
            }

            if(!DIGITS_RE.test(val) || (val.length !== 16 && val.length !== 18)) {
                return message;
            }

            if(!_luhn(val)) {
                return message;
            }

            var cardType = _detectType(val);

            if(!cardType) {
                return message;
            }

            // if you need concrete card type
            if(params.cardType && !~params.cardType.indexOf(cardType.name)) {
                return message;
            }

            return null;
        };
    });

    /**
     * Match card BIN pattern
     * @param {String} cardNumber
     * @returns {{ name : String, pattern : RegExp }} cardType - card info
     */
    function _detectType(cardNumber) {
        var i, l, cardType;

        for(i = 0, l = CARDS_RE.length; i < l; i++) {
            cardType = CARDS_RE[i];

            if(cardNumber.match(cardType.pattern)) {
                return cardType;
            }

            cardType = false;
        }

        return cardType;
    }

    /**
     * Luhn algorithm
     * @param {String} cardNumber
     * @returns {Boolean}
     */
    function _luhn(cardNumber) {
        var digit, n, i, l,
            sum = 0,
            ref2 = cardNumber.split('').reverse();

        for(n = i = 0, l = ref2.length; i < l; n = ++i) {
            digit = Number(ref2[n]);
            if(n % 2) {
                digit *= 2;
                sum += digit < 10? digit : digit - 9;
            } else {
                sum += digit;
            }
        }

        return sum % 10 === 0;
    }
});
