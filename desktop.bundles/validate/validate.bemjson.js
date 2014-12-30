({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'validate.min.css' }],
    scripts : [{ elem : 'js', url : 'validate.min.js' }],
    content : [
        {
            block : 'form',
            method : 'GET',
            mods : { validate : true, theme : 'islands' },
            content : [
                {
                    elem : 'content',
                    content : [
                        {
                            elem : 'field',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Simple'
                                },
                                {
                                    block : 'input',
                                    name : 'simple',
                                    mods : { theme : 'islands', size : 'l' }
                                }
                            ]
                        },
                        {
                            elem : 'field',
                            validate : { required : true },
                            target : 'input',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Required'
                                },
                                {
                                    block : 'input',
                                    name : 'required',
                                    mods : { theme : 'islands', size : 'l' }
                                }
                            ]
                        },
                        {
                            elem : 'field',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Integers'
                                },
                                {
                                    block : 'input',
                                    name : 'integers',
                                    mods : { theme : 'islands', size : 'l', type : 'numbers' }
                                }
                            ]
                        },
                        {
                            elem : 'field',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Decimal'
                                },
                                {
                                    block : 'input',
                                    name : 'decimal',
                                    mods : { theme : 'islands', size : 'l', type : 'numbers' },
                                    js : {
                                        precision : 7,
                                        scale : 2,
                                        decimal : '.'
                                    }
                                }
                            ]
                        },
                        {
                            elem : 'field',
                            validate : { numbers : 'money' },
                            target : 'input',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Money'
                                },
                                {
                                    block : 'input',
                                    name : 'money',
                                    mods : { theme : 'islands', size : 'l', type : 'numbers' }
                                }
                            ]
                        },
                        {
                            elem : 'field',
                            validate : { numbers : 'card', required : true },
                            target : 'input',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Required card'
                                },
                                {
                                    block : 'input',
                                    name : 'requiredCard',
                                    mods : { theme : 'islands', size : 'l', type : 'numbers' }
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'footer',
                    content : [
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 'l', view : 'action', type : 'submit' },
                            text : 'Submit'
                        }
                    ]
                }
            ]
        }
    ]
})
