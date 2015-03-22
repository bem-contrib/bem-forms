[{
    mustDeps : [
        { block : 'i-bem', elems : ['dom'] }
    ]
}, {
    tech : 'tmpl-spec.js',
    mustDeps : [
        { block : 'message', elem : 'control' },
        { block : 'message', mods : { type : ['text', 'popup'] } },
        { block : 'popup', mods : { target : 'anchor' } },
    ]
}]
