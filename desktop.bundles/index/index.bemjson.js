({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : {
        block : 'form',
        method : 'GET',
        content : [
            {
                block : 'input',
                mods : { theme : 'islands', size : 'l' },
                name : 'text'
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 'l', type : 'submit' },
                text : 'Найти'
            }
        ]
    }
})
