module.exports = function(bh) {

    bh.match('label', function(ctx, json) {
        var _form_field = ctx.tParam('_form_field');

        if(_form_field) {
            json.for = _form_field.id;
        }

        ctx.tag('label').attrs({ for : json.for });
    });

};
