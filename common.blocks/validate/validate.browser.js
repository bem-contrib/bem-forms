/**
 * @module validate
 */

modules.define(
    'validate',
    ['i-bem__dom'],
    function (provide, BEMDOM) {

        /** Make schemas for awesome format validation
         *  More info about js-schema: https://github.com/molnarg/js-schema
         */
        /*borschik:include:../../libs/js-schema/js-schema.min.js*/

        provide(BEMDOM.decl(this.name, {

            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this.messages = {};

                        // Get block name
                        // Name is the first DOM class
                        this.targetName = this.domElem.attr('class').split(' ')[0];
                        this.target = this.findBlockOn(this.targetName);
                    }
                },

                /**
                 * Mod for detect result of validations in CSS
                 * @returns false
                 */
                'result' : {
                    'success' : function() {
                        // Event on success validate
                        // console.log(this.messages);
                    },
                    'error' : function() {
                        // Event on error validate
                        window.console.error(this.messages);
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

            /**
             * Get all validators on this control
             * @returns {Array} validates
             */
            getValidates : function() {
                // all mods without js_inited
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
