block('input').elem('control')(

    match(function() { return this._form_field; }).def()(function() {
        this._input.id = this._input.id || this._form_field.id;
        this._input.name = this._input.name || this._form_field.name;

        return applyNext();
    })
);
