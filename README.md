#slogs

## Install packages

In terminal run commands below to install package

```
npm i -g nodemon

npm i slogs
```

### Getting started

Create a logs directory in root level of your project.
Inside create a eLog.log file to create a file to log errors

logs/err.log

### Usage

To use debug utility tool.

create a logs folder on root level.

To start api in debug mode in command line run.

```
DEBUG = true nodemon
```

### Debugging

write it in this format

```
slogs.debug('example route hit');
```
Example Output:

in terminal output will be

```
example route hit
```

###Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)

###Contributors
[View Contributors](https://github.com/seanedw1/uTool/graphs/contributors)
