/**
 * @module message
 */

modules.define(
    'message',
    ['i-bem__dom'],
    function (provide, BEMDOM) {

        provide(BEMDOM.decl(this.name, {

            onSetMod : {
                'js' : {
                    'inited' : function() {

                    }
                }
            },

            /**
             * Set message value
             * @param {String} value
             * @returns false
             */
            setVal : function(value) {
                this.domElem.text(value);
            }

        }));

    }
);
