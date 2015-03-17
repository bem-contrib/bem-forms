({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'examples.min.css' }],
    scripts : [{ elem : 'js', url : 'examples.min.js' }],
    content : [
        {
            block : 'form',
            mods :  { 'has-validate' : true, message : 'text' },
            mix :  { block : 'another-block' },
            attrs :  { 'data-form' : 'custom form data' },
            action : '/parse-form-data-on-back-end',
            method : 'POST',
            enctype : 'multipart/form-data',
            content : []
        }
    ]
})
