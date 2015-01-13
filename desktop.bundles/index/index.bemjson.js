({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block : 'form',
            mods : { theme : 'islands' },
            method : 'GET',
            content : [
                {
                    elem : 'content',
                    content : [
                        {
                            elem : 'field',
                            mods : { type : 'input' },
                            content : [
                                {
                                    block : 'label',
                                    mods : { theme : 'islands' },
                                    content : 'Input'
                                },
                                {
                                    block : 'input',
                                    mods : { theme : 'islands', size : 'l' },
                                    name : 'input'
                                }
                            ]
                        },
                        {
                            elem : 'field',
                            mods : { type : 'checkbox' },
                            content : [
                                {
                                    block : 'checkbox',
                                    mods : { theme : 'islands', size : 'l' },
                                    text : 'Checkbox 1',
                                    name : 'checkbox'
                                }
                            ]
                        },
                        {
                            elem : 'field',
                            mods : { type : 'radio' },
                            content : [
                                {
                                    block : 'radio',
                                    mods : { theme : 'islands', size : 'l' },
                                    text : 'Radio 1',
                                    name : 'radio'
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
                            mods : { theme : 'islands', size : 'l', type : 'submit', view : 'action' },
                            text : 'Submit'
                        }
                    ]
                }
            ]
        }
    ]
})
