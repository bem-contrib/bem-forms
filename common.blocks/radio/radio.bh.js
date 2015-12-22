module.exports = function (bh) {

    bh.match('radio', function(ctx, json) {
        var _form_field = ctx.tParam('_form_field');

        if(_form_field) {
            json.name = json.name || _form_field.name;
            ctx.mod('disabled', _form_field.mods.disabled);
        }
    });

};
