module.exports = function(bh) {

    bh.match('form-field_required', function(ctx) {
        ctx.mix({ mods : { 'has-validation' : true } });
    });

};
