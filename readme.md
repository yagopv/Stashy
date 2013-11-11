#Stashy

Stashy is a library containing web components for doing responsive things.

# What´s included ?

You will find several layouts and utilities inside Stashy:

- **OffCanvas** : Create responsive pages using this awesome layout
- **Flyout** : Hide your navigation options or wathever you want in a nice left panel
- **Toggle** : Create beautiful top responsive navigation menu in your pages
- **Menu** : Hidden Menu for your applications
- **Sticky** : Structure your content to ensure footer at bottom
- **ShowMeMore** : Hide items ... and show a button for showing more of them
- **FocalPoint** : Beautiful responsive images
- **Loader** : Nice loader based in CSS3 transitions and animations
- **Slider** : Touch enabled slider for creating sliding layouts, carousels, ...etc
- **Refresh** : Touch enabled pull to refresh control
- **ElasticVideo** : Adapt videos to any screen size
- **ElasticText** : Adapt text to any screen size
- **List** : Beautiful responsive List
- **Table** : Nice responsive table with priority columns
- **Notify** : Notications using toasts, bars and panels


#Getting started

Check the project site [here](http://stashy.azurewebsites.net)

In order to work with this repo you have to install the required node dependencies

```
npm install
```

Install also the Durandal optimizer

```
npm install -g weyland
```

Use the grunt file (Gruntfile.js) for building the repo. If you type the command ...

```
grunt
```

... the "dist" folder will be regenerated and the public Stashy site will be built and optimized.

When you are just developing and changing some styles you can use:

```
grunt watch
```

The "watch" task will spy inside the "less" and "src" directory for changes. When you save any file contained in those directories, the Stashy.css and Stahy.js files will be regenerated.

Enjoy!!

#Further notes

Created and developed by Yago Pérez Vázquez

#License

Licesed under [MIT public license](http://opensource.org/licenses/mit-license.php)




