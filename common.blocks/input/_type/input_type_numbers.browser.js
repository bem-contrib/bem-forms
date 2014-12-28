/**
 * @module input
 */

modules.define(
    'input',
    ['keyboard__codes'],
    function (provide, keyCodes, Input) {

        var ALLOWED_CHARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        provide(Input.decl({ modName : 'type', modVal : 'numbers' }, {

            onSetMod : {
                js : {
                    inited: function () {
                        var _this = this;

                        _this.elem('control')
                            .on('keypress', function(e) {
                                _this._onKeyPress(e);
                            })
                            .on('keyup', function() {
                                _this._onKeyUp();
                            });
                    }
                }
            },

            _onKeyPress : function(e) {
                var _this = this,
                    value = _this.target.getVal();

                // get the key that was pressed
                var key = e.charCode? e.charCode : e.keyCode? e.keyCode : 0;

                // allow enter/return key
                if(key === keyCodes.ENTER) return true;

                // allow Ctrl+A
                if((e.ctrlKey && key === 97 /* firefox */) || (e.ctrlKey && key === 65) /* opera */) return true;
                // allow Ctrl+X (cut)
                if((e.ctrlKey && key === 120 /* firefox */) || (e.ctrlKey && key === 88) /* opera */) return true;
                // allow Ctrl+C (copy)
                if((e.ctrlKey && key === 99 /* firefox */) || (e.ctrlKey && key === 67) /* opera */) return true;
                // allow Ctrl+Z (undo)
                if((e.ctrlKey && key === 122 /* firefox */) || (e.ctrlKey && key === 90) /* opera */) return true;
                // allow or deny Ctrl+V (paste), Shift+Ins
                if((e.ctrlKey && key === 118 /* firefox */) || (e.ctrlKey && key === 86) /* opera */ ||
                    (e.shiftKey && key === 45)) return true;

                // if a number was not pressed
                if(key < 48 || key > 57)  {
                    // check for other keys that have special purposes
                    // for detecting special keys (listed above)
                    // IE does not support 'charCode' and ignores them in keypress anyway
                    var IE = _this._otherKeys(key) && typeof e.charCode !== 'undefined';
                    // special keys have 'keyCode' and 'which' the same (e.g. backspace)
                    if(IE && ((e.keyCode === e.which && e.which !== 0) ||
                        (e.keyCode !== 0 && e.charCode === 0 && e.which === 0)))  {
                        return true;
                    }

                    // if key pressed is the _this.params.decimal and it is not already in the field
                    if(_this.params.decimal && key === _this.params.decimal.charCodeAt(0) &&
                        value.indexOf(_this.params.decimal) === -1) {
                        return true;
                    }

                    // -----------------------------------------------------------------
                } else {
                    // if a number key was pressed.
                    // If scale >= 0, make sure there's only <scale> characters
                    // after the _this.params.decimal point.
                    _this.params.scale && _this._parseDecimal(value);
                    // If precision > 0, make sure there's not more digits than precision
                    _this._parsePrecision();

                    return true;
                }

                return false;
            },

            _onKeyUp : function() {
                var _this = this,
                    allowed_chars_with_delimiter = ALLOWED_CHARS;
                allowed_chars_with_delimiter.push(_this.params.decimal);

                var caret = _this._getSelectionStart(_this.target.elem('control'));
                var val   = _this._clean(_this.target.getVal(), allowed_chars_with_delimiter);

                _this.target.setVal(val);
                _this._setSelection(_this.target.elem('control'), caret);
            },

            /**
             * Clean unneeded chars
             * @param {String} value
             * @param {Array} validChars
             * @returns false
             */
            _clean : function(value, validChars) {
                var _this = this,
                    val = value;

                for(var i = val.length - 1; i >= 0; i--) {
                    var ch = val.charAt(i),
                        validChar = false;
                    // loop through validChars
                    for(var j = 0; j < validChars.length; j++) {
                        // if it is valid, break out the loop
                        if(ch === validChars[j]) {
                            validChar = true;
                            break;
                        }
                    }
                    // if not a valid character, or a space, remove
                    if(!validChar || ch === ' ') val = val.substring(0, i) + val.substring(i + 1);
                }

                // remove extra decimal characters
                var firstDecimal = val.indexOf(_this.params.decimal);
                if(firstDecimal > 0)
                {
                    for(var k = val.length - 1; k > firstDecimal; k--)
                    {
                        var chch = val.charAt(k);
                        // remove decimal character
                        if(chch === _this.params.decimal)
                        {
                            val = val.substring(0, k) + val.substring(k + 1);
                        }
                    }
                    // remove numbers after the decimal so that scale matches.
                    if(_this.params.scale >= 0) val = val.substring(0, firstDecimal + _this.params.scale + 1);

                    // remove numbers so that precision matches.
                    if(_this.params.precision > 0) val = val.substring(0, _this.params.precision + 1);
                } else if(_this.params.precision > 0) {
                    // limit the integers quantity, necessary when user delete decimal separator
                    val = val.substring(0, _this.params.precision - _this.params.scale);
                }

                return val;
            },

            _getSelectionStart : function(o) {
                if(o.createTextRange) {
                    var r = document.selection.createRange().duplicate();
                    r.moveEnd('character', o.value.length);

                    if(r.text === '') return o.value.length;

                    return o.value.lastIndexOf(r.text);
                } else return o.selectionStart;
            },

            _setSelection : function(o, p) {
                // if p is number, start and end are the same
                if(typeof p === 'number') { p = [p, p]; }
                // only set if p is an array of length 2
                if(p && p.constructor === Array && p.length === 2) {
                    if(o.createTextRange) {
                        var r = o.createTextRange();
                        r.collapse(true);
                        r.moveStart('character', p[0]);
                        r.moveEnd('character', p[1]);
                        r.select();
                    } else if(o.setSelectionRange) {
                        o.focus();
                        o.setSelectionRange(p[0], p[1]);
                    }
                }
            },

            _otherKeys : function(key) {
                return key === keyCodes.BACKSPACE &&
                    key === keyCodes.TAB       &&
                    key === keyCodes.ENTER     &&
                    key === keyCodes.END       &&
                    key === keyCodes.HOME      &&
                    key === keyCodes.LEFT      &&
                    key === keyCodes.RIGHT     &&
                    key === keyCodes.DELETE;
            },

            _parseDecimal : function(value) {
                var _this = this,
                    DECIMALsQuantity,
                    DECIMALPosition = value.indexOf(_this.params.decimal);

                // If there is a _this.params.decimal.
                if(DECIMALPosition >= 0) {
                    DECIMALsQuantity = value.length - DECIMALPosition - 1;
                    // If the cursor is after the _this.params.decimal.
                    if(_this._getSelectionStart(_this.target.elem('control')) > DECIMALPosition) {
                        return DECIMALsQuantity < _this.params.scale;
                    } else if(((_this.target.getVal().length - 1) - DECIMALsQuantity) < (_this.params.precision - _this.params.scale)) {
                        // If precision > 0, integers and decimals quantity should not be greater than precision
                        return true;
                    }
                } else if(_this.params.precision > 0) {
                    // If there is no decimal
                    return _this.target.getVal().replace(_this.params.decimal, '').length < _this.params.precision - _this.params.scale;
                } else {
                    return true;
                }
            },

            _parsePrecision : function() {
                var _this = this;

                if (_this.params.precision > 0) {
                    return _this.target.getVal().replace(_this.params.decimal, '').length < _this.params.precision;
                } else {
                    return true;
                }
            }

        }));

    }
);
