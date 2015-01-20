({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block : 'form',
            mods : { message : 'text', theme : 'islands' },
            method : 'GET',
            content : [
                {
                    elem : 'content',
                    content : [
                        {
                            block : 'form-field',
                            mods : { type : 'input', message : 'text', theme : 'islands' },
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
                            block : 'form-field',
                            mods : { type : 'checkbox', message : 'popup', theme : 'islands' },
                            attrs : { id : 'pop' },
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
                            block : 'form-field',
                            mods : { type : 'radio', theme : 'islands' },
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
