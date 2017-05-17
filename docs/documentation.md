<a name="module_express-app-runner"></a>

## express-app-runner
A ridiculously fast and easy way to configure and run an express app.


* [express-app-runner](#module_express-app-runner)
    * [app](#exp_module_express-app-runner--app) : <code>Express</code>
    * [routeHomepageToFile(filePath)](#exp_module_express-app-runner--routeHomepageToFile)
    * [routeToFile(urlPath, filePath)](#exp_module_express-app-runner--routeToFile)
    * [addStaticDir(dirPath)](#exp_module_express-app-runner--addStaticDir)
    * [run([options], [callback])](#exp_module_express-app-runner--run) ⇒ <code>http.Server</code>

<a name="exp_module_express-app-runner--app"></a>

### app : <code>Express</code>
The expression application.

**Kind**: Exported member
<a name="exp_module_express-app-runner--routeHomepageToFile"></a>

### routeHomepageToFile(filePath)
Routes HTTP GET requests to the '/', providing the specified "filePath" by it.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | The relative path to the HTML file to be provided by '/'. |

<a name="exp_module_express-app-runner--routeToFile"></a>

### routeToFile(urlPath, filePath)
Routes HTTP GET requests to the specified 'urlPath', providing the specified "filePath" by it.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| urlPath | <code>string</code> | The path for which the file will be provided. |
| filePath | <code>string</code> | The relative path to the HTML file to be provided. |

<a name="exp_module_express-app-runner--addStaticDir"></a>

### addStaticDir(dirPath)
Makes the content of 'dirPath' directory available for the app.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>string</code> | The relative path to the directory. |

<a name="exp_module_express-app-runner--run"></a>

### run([options], [callback]) ⇒ <code>http.Server</code>
Runs the application.

**Kind**: Exported function

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options to configure how the app should be run. |
| [callback] | <code>Object</code> | Callback function to be called after it successfully started listening to the app. |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options.port | <code>string</code> | <code>3000</code> | Application port. |
| options.hostname | <code>string</code> | <code>&quot;localhost&quot;</code> | Application hostname. |
| options.open | <code>string</code> | <code>true</code> | Defines whether or not the application should be open after running it. |
| options.showListeningLog | <code>string</code> | <code>true</code> | Defines whether or not it's to show a log after it successfully started listening to the app. |