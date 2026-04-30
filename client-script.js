function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;

    var impact = g_form.getValue('impact');
    var urgency = g_form.getValue('urgency');

    if (impact == '1' && urgency == '1') {
        g_form.setValue('priority', '1');
        g_form.addErrorMessage('Priority set to Critical automatically');
    }
}
