
# Deeper Systems PenTest Application Test

This repository presents the results of the testing conducted for the application as part of the recruitment process for the Mobile Penetration Tester / Reverse Engineer position at Deeper Systems.


## Author

- [Victor Sousa](https://github.com/victorluisbessa/ds-test)



## Repo

 - [GitHub Project Repo](https://github.com/victorluisbessa/ds-test)


## Demonstration
* Emulator: BlueStacks 5
* Android: Android 11
* Frida: 16.5.9
* Microsoft Windowns 11
* Kali Linux 2024.4
* Apple MacOS 14.6

# Instructions to Run the Hook

## 1. **Create or Download the `.js` File:**
   - Create or download a `hook.js` file with the following content:

```javascript
Java.perform(function() {
    var TextView = Java.use('android.widget.TextView');
    TextView.setText.overload('java.lang.CharSequence').implementation = function(text) {
        console.log("old text: " + text);
        var newText = Java.use("java.lang.String").$new("This text is currently being hooked.");
        console.log('new text: ' + newText);
        return this.setText(newText);
    };
});

```
## 2. **Ensure the Android Device is Properly Configured:**

Install the .apk app on your Android device.

Make sure the frida-server is running on the device.

 You can do this by connecting the device via ADB and starting the frida-server with the following commands:

``` sh 
adb shell
frida-server &
```
## 3. **Running the hook**

In your pc go to terminal and type:

```
frida -U -f com.ds.testapp -l hook.js
```

## 4. **Results**
```
    ____
    / _  |   Frida 16.5.9 - A world-class dynamic instrumentation toolkit
   | (_| |
    > _  |   Commands:
   /_/ |_|       help      -> Displays the help system
   . . . .       object?   -> Display information about 'object'
   . . . .       exit/quit -> Exit
   . . . .
   . . . .   More info at https://frida.re/docs/home/
   . . . .
   . . . .   Connected to NE2211 (id=127.0.0.1:5585)
Spawned `com.ds.testapp`. Resuming main thread!
[NE2211::com.ds.testapp ]-> Texto original: This is a Test App
Novo texto: This text is currently being hooked.
old text: Test App
New text: This text is currently being hooked.
```
![Proof](https://i.ibb.co/HB9HMKM/Captura-de-tela-2025-01-07-110056.png)


