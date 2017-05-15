<a name="module_express-app-runner"></a>

## express-app-runner
A ridiculously fast and easy way to configure and run an express app.


* [express-app-runner](#module_express-app-runner)
    * [app](#exp_module_express-app-runner--app) : <code>Express</code> ⏏
    * [setIndexPage(filePath)](#exp_module_express-app-runner--setIndexPage) ⏏
    * [addPage(urlPath, filePath)](#exp_module_express-app-runner--addPage) ⏏
    * [addStaticDir(dirPath)](#exp_module_express-app-runner--addStaticDir) ⏏
    * [run([options])](#exp_module_express-app-runner--run) ⇒ <code>http.Server</code> ⏏

<a name="exp_module_express-app-runner--app"></a>

### app : <code>Express</code> ⏏
The expression application.

**Kind**: Exported member
<a name="exp_module_express-app-runner--setIndexPage"></a>

### setIndexPage(filePath) ⏏
Defines an index page to be provided by '/'.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | Path to the HTML file to be provided by '/'. |

<a name="exp_module_express-app-runner--addPage"></a>

### addPage(urlPath, filePath) ⏏
Adds a page to be provided by the specified 'urlPath'.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| urlPath | <code>string</code> | Path where the page will be provided. |
| filePath | <code>string</code> | Path to the HTML file to be provided. |

<a name="exp_module_express-app-runner--addStaticDir"></a>

### addStaticDir(dirPath) ⏏
Makes the content of 'dirPath' directory available for the app.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>string</code> | Directory path. |

<a name="exp_module_express-app-runner--run"></a>

### run([options]) ⇒ <code>http.Server</code> ⏏
Runs the application.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options to configure how the app should be run. |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options.port | <code>string</code> | <code>3000</code> | Application port. |
| options.hostname | <code>string</code> | <code>&quot;localhost&quot;</code> | Application hostname. |
| options.open | <code>string</code> | <code>true</code> | Defines whether or not the application should be open after running it. |
| options.showListeningLog | <code>string</code> | <code>true</code> | Defines whether or not it's to show a log after it successfully started listening to the app. |
| options.listeningCallback | <code>string</code> | <code>null</code> | Callback function to be called after it successfully started listening to the app. |