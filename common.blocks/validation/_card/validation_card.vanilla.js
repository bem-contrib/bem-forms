/**
 * @module validation_card
 */

modules.define('validation_card',
['objects'],
function(provide, objects) {

var DEFAULT_MESSAGE = {
        wrongLength : 'Card number should be made of 16 or 18 digits',
        luhnFailed : 'Incorrect card number',
        unsupported : 'Unsupported card type'
    },

    DIGITS_RE = /^\d+$/,

    CARDS_RE = [
        {
            name : 'visa electron',
            pattern : /^(4026|417500|4405|4508|4844|4913|4917)/
        },
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
            pattern : /^(50|5[6-9]|6)/
        },
        {
    	    name : 'mir',
    	    pattern : /^220/
    	}
    ];

/**
 * Match card BIN pattern
 *
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
 *
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

/**
 * Resolve right message
 *
 * @returns {String}
 */
function _resolveMessage(message, type) {
    return typeof message === 'string'? message : message[type];
}

provide(function(params) {
    params = objects.extend({}, params);
    var message = params.message || DEFAULT_MESSAGE;

    return function(val) {
        if(!val) {
            return null;
        }

        if(!DIGITS_RE.test(val) || (val.length !== 16 && val.length !== 18)) {
            return _resolveMessage(message, 'wrongLength');
        }

        if(!_luhn(val)) {
            return _resolveMessage(message, 'luhnFailed');
        }

        var cardType = _detectType(val);

        if(!cardType) {
            return _resolveMessage(message, 'unsupported');
        }

        // if you need concrete card type
        if(params.cardType && !~params.cardType.indexOf(cardType.name)) {
            return _resolveMessage(message, 'unsupported');
        }

        return null;
    };
});

});
