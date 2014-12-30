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
                'result' : {
                    'success' : function() {
                        // Event on success validate
                        this._messages();
                        this.target.delMod('invalid');
                        this.target.setMod('valid');
                    },
                    'error' : function() {
                        // Event on error validate
                        this._messages();
                        this.target.delMod('valid');
                        this.target.setMod('invalid');
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

                this.emit('error');
                this.setMod('result', 'error');
            },

            /**
             * Call this when validation is success
             * @returns false
             */
            _success : function() {
                this.emit('success');
                this.setMod('result', 'success');
            },

            _messages : function() {
                var html_text = [];

                $.each(this.messages, function(validator, message) {
                    html_text.push(validator + ': ' + message);
                });

                this.elem('message').text(html_text);
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
