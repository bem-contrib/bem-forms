module.exports = function(bh) {

    bh.match('radio-group', function(ctx, json) {
        var _form_field = ctx.tParam('_form_field');

        if(_form_field) {
            json.name = json.name || _form_field.name;
            json.val = json.val || _form_field.val;

            ctx.mod('disabled', _form_field.mods.disabled);
        }
    });

};
