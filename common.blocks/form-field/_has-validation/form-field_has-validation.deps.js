({
    shouldDeps : [
        { block : 'validation' }
    ]
},
{
    tech : 'spec.js',
    shouldDeps : [
        { tech : 'js', block : 'form-field', mods : { type : 'input', message : 'text' } },
        { tech : 'bemhtml', block : 'form-field', mods : { type : 'input', message : 'text' } }
    ]
});
