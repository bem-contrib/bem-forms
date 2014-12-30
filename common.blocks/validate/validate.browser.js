/**
 * @module validate
 */

modules.define(
    'validate',
    ['i-bem__dom', 'jquery'],
    function (provide, BEMDOM, $) {

        /** Make schemas for awesome format validation
         *  More info about js-schema: https://github.com/molnarg/js-schema
         */
        /*borschik:include:../../libs/js-schema/js-schema.min.js*/

        provide(BEMDOM.decl(this.name, {

            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this.messages = {};

                        this.target = this.findBlockInside(this.params.target);
                    }
                },

                /**
                 * Mod for detect result of validations in CSS
                 * @returns false
                 */
                'valid' : {
                    'true': function () {
                        this._messages();
                        this.setValid(true);
                        this.emit('changeState');
                        this.target.delMod('invalid');
                        this.target.setMod('valid');
                    }
                },
                'invalid' : {
                    'true' : function() {
                        this._messages();
                        this.setValid(false);
                        this.emit('changeState');
                        this.target.delMod('valid');
                        this.target.setMod('invalid');

                        this.target.elem('control').focus();
                    }
                }
            },

            /**
             * Call this when validation is error
             * @param {Object} message - error message { validator : 'name', text : 'error' }
             * @returns false
             */
            _error : function(message) {
                this.messages[message.validator] = message.text;

                this.emit('stateError');
                this.delMod('valid');
                this.setMod('invalid');
            },

            /**
             * Call this when validation is success
             * @returns false
             */
            _success : function() {
                this.emit('stateSuccess');
                this.delMod('invalid');
                this.setMod('valid');
            },

            _messages : function() {
                var html_text = [];

                $.each(this.messages, function(validator, message) {
                    html_text.push(validator + ': ' + message);
                });

                this.elem('messages').text(html_text);
            },

            setValid : function(valid) {
                this._valid = valid;
            },

            getValid : function() {
                return this._valid;
            },
            /**
             * Validation stub
             * @returns false
             */
            run : function() {
                this._success();
            }

        }));

    }
);
