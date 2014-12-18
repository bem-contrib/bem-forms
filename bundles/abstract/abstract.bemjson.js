({
    block : 'form',
    id : 'very_pseudo',
    val : {
        id : 42,
        title : 'Title',
        checkboxes : [1, 3],
        radios : 2
    },
    content : [
        { elem : 'field', type : 'static', name : 'id', label : '#' },
        { elem : 'field', type : 'text', name : 'title', label : 'Title' },
        { elem : 'field', type : 'checkbox-group', name : 'checkboxes', label : 'Flags', options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second' },
            { val : 3, text : 'third' }
        ] },
        { elem : 'field', type : 'radio-group', name : 'radios', label : 'Radios', options : [
            { val : '1', text : 'uno' },
            { val : '2', text : 'dos' },
            { val : '3', text : 'tres' }
        ] }
    ]
})
