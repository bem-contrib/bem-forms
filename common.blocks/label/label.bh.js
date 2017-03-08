module.exports = function(bh) {

    bh.match('label', function (ctx, json) {
        var _form_field = ctx.tParam('_form_field');

        ctx
            .tag('label')
            .attr('for', json.for);

        if (_form_field) {
            ctx
                .attr('for', _form_field.id)
                .mod('disabled', _form_field.mods.disabled);
        }
    });

};
