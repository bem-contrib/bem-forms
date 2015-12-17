block('input')(

    match(function() { return this._form_field; }).mix()(function() {
        this.mods.disabled = this._form_field.mods.disabled;

        return applyNext();
    })
);
