({
    mustDeps : [],
    shouldDeps : [
        { block : 'message', mods : { type : 'popup' } }
    ]
},
{
    tech : 'spec.js',
    shouldDeps : [
        { tech : 'js', block : 'form-field', mods : { type : 'input', message : 'popup' } },
        { tech : 'bemhtml', block : 'message', mods : { type : 'popup' } },
        { tech : 'bemhtml', block : 'form-field', mods : { type : 'input', message : 'popup' } }
    ]
});
