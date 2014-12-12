({
    block: 'page',
    title: 'form',
    styles: [{ elem: 'css', url: '_index.css' }],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: {
        block: 'form',
        method: 'GET',
        content: [
            {
                block: 'input',
                mods: { theme: 'islands', size: 'l' },
                name: 'text'
            },
            {
                block: 'button',
                mods: {  theme: 'islands', size: 'l' , type: 'submit' },
                text: 'Найти'
            }
        ]
    }
})
