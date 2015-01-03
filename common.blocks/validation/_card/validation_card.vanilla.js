/**
 * @module validation_card
 */

modules.define('validation_card',
    ['objects'],
    function(provide, objects) {

    var DEFAULT_MESSAGE = {
        wrong_length : 'Card number should be made of 16 or 18 digits',
        luhn_failed : 'Incorrect card number',
        unsupported : 'Unsupported card type'
    };
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
        message = objects.extend(message, DEFAULT_MESSAGE);

        return function (val) {
            if(!val) {
                return null;
            }

            if((val.length !== 16 && val.length !== 18) ||
                DIGITS_RE.test(val)) {
                return message.wrong_length;
            }

            if(!_luhn(val)) {
                return message.luhn_failed;
            }

            var cardType = _detectType(val);

            if(!cardType) {
                return message.unsupported;
            }

            // if you need concrete card type
            if(params.cardType && !~params.cardType.indexOf(cardType.name)) {
                return message.unsupported;
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
