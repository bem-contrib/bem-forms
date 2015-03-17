({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'examples.min.css' }],
    scripts : [{ elem : 'js', url : 'examples.min.js' }],
    content : [
        {
            block : 'form-field',
            mods : {
                type : 'input',
                'has-validate' : true,
                required : true,
                message : 'text'
            },
            mix :  { block : 'another-block' },
            attrs :  { 'data-form-field' : 'custom form-field data' },
            name : 'tmplFormField',
            content : []
        }
    ]
})
