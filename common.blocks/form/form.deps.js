[{
    mustDeps : [
        { block : 'i-bem' }
    ],
    shouldDeps : [
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
        { block : 'form', elem : 'text' },
        { block : 'form', elem : 'message' },
        { block : 'form', mods : { message : 'text' } },
        { block : 'form', mods : { message : 'popup' } },
        { block : 'message', elem : 'control' },
        { block : 'message', mods : { type : 'text' } },
        { block : 'message', mods : { type : 'popup' } }
    ]
}]
