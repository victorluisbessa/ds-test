Java.perform(function() {
    // Localiza a classe TextView
    var TextView = Java.use('android.widget.TextView');

    // Substitui a implementação do setText com CharSequence
    TextView.setText.overload('java.lang.CharSequence').implementation = function(text) {
        console.log("Texto original: " + text);

        // Cria o novo texto que será passado para o setText
        var newText = Java.use("java.lang.String").$new("This text is currently being hooked.");

        console.log('Novo texto: ' + newText);

        // Chama o método setText com o novo texto
        return this.setText(newText);
    };
});
