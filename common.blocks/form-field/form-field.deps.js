[{
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
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
