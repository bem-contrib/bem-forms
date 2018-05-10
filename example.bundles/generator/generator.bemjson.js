({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'generator.min.css' }],
    scripts : [{ elem : 'js', url : 'generator.min.js' }],
    content : [
        {
            block : 'form',
            mods : { theme : 'islands', message : 'popup' },
            content : [
                {
                    block : 'form-field',
                    mods : { type : 'input' },
                    name : 'q',
                    val : 'Generated val by form-field',
                    label : 'Label generate by form-field',
                    control : {
                        block : 'input',
                        mods : { theme : 'islands', size : 'l' }
                    }
                },
                // @voischev examples
                {
                    block : 'form-field',
                    mods : { type : 'input', required : true },
                    val : 'type something...',
                    label : 'test'
                },
                {
                    block : 'form-field',
                    mods : { type : 'input', required : true },
                    label : 'test',
                    control : {
                        block : 'input',
                        mods : { 'my-super-mod' : 'ololo' },
                        val : 'type something...'
                    }
                },
                {
                    block : 'form-field',
                    mods : { type : 'input', required : true },
                    content : [
                        {
                            block : 'awsome-wrapper',
                            content : [
                                { block : 'input', val : 'my custom content' },
                                { block : 'label' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
