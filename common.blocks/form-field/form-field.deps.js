[{
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps : [
        { block : 'validation' },
        { block : 'vow' }
    ]
}, {
    tech : 'tmpl-spec.js',
    mustDeps : [
        { block : 'message', mods : { type : 'text' } },
        { block : 'message', mods : { type : 'popup' } },
        { block : 'form-field', mods : { message : 'popup' } },
        { block : 'form-field', mods : { message : 'text' } },
    ]
}]
