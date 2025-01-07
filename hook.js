Java.perform(function() {
    var TextView = Java.use('android.widget.TextView');
    TextView.setText.overload('java.lang.CharSequence').implementation = function(text) {
        console.log("old text: " + text);
        var newText = Java.use("java.lang.String").$new("This text is currently being hooked.");
        console.log('new text: ' + newText);
        return this.setText(newText);
    };
});
