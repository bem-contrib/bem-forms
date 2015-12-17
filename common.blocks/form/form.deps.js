[{
    mustDeps : [
        { block : 'i-bem' }
    ],
    shouldDeps : [
        { mods : { 'has-validation' : true, message : ['text', 'popup'] } },
        { block : 'objects' },
        { block : 'form-field' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'form' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { block : 'form', mods : { message : ['text', 'popup'] } },
        { block : 'message' }
    ]
}]
