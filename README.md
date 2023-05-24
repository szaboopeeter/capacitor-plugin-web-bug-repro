# capacitor-plugin-web-bug-repro

Demo plugin to demonstrate potential bug in capacitor's way of loading plugins for web

## Setup
This project was set up by running `npm init @capacitor/plugin@latest`, following https://capacitorjs.com/docs/plugins/creating-plugins
All the changes compared to the generated code are found in the following files:
```shell
example/src/js/capacitor-welcome.js
src/web.ts
```

## Issue description
The `MyPlugin` implementation is changed to log to the console when its constructor is executed.

The example project is changed to import `MyPlugin` and execute its `.echo()` function twice.

### Expected behavior
1. Plugin gets instantiated once.
2. The `.echo()` method gets called on this single instance twice.

### Observed behavior
1. Plugin gets instantiated for the first time.
2. `.echo()` gets called on the first instance.
3. Plugin gets instantiated for the second time.
4. `.echo()` gets called on the second instance.

From console output:
```shell
MyPluginWeb > constructor
MyPluginWeb > ECHO {value: 'Hello world!!!'}
MyPluginWeb > constructor
MyPluginWeb > ECHO {value: 'Hello world!!!'}
```

## Running the code
You can run `npm start` in the `example` folder after building the package to observe the behavior.
