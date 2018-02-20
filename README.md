# React.JS vs Angular CMS 

## The main idea
Implement  the same  functionality (a very lite CMS) using React.JS and Angular 2 
and compare.


## The idea for the CMS
* Make a library of independent components 
* Render final content base on external `configuration`
* `configuration`'s should be extendable 

so, the project should contain components and a configuration file...

    
## Project Structure

* `src/layouts` - Layouts 
* `src/copmonents` - Components   
* `src/configurations` - Content configuration   

## Implementation details

the same components were created in both projects. You can see the difference in the components syntax definition:
* TextComponent - a simple text
* Layout1 - an example of Layout based on HTML table tag     

2 configurations were created: 
* `rootConfig`
* `sunConfig` - with changing only a single property extended from of parent configuration (color of inner table)
see in components: `subConfig` object extends `rootConfig` with changing only a single property extended from parent configuration (color of the inner table).

`immutability helper` library used for rootConfig object extending 

The main app knows nothing about components which should be rendered - it depends on configuration only.

## Implementation challenges comparing 

Ok, the job done - both projects render the same content based on external configuration. 
Now let's see what issues we solved in both of projects.

### components code simplicity
* Angular - 5
* React - 5 
Both frameworks looks good. 
It's possible to define a component in a single file in both frameworks. 
Both frameworks provide us a way to use HTML syntax to define markup, add event behaviors and so on 

### Dynamic components creation
* Angular - 4
* React - 5 
Angular has no a simple way to create a component in TypeScript code -  I was forced to use an internal API for that and the code doesn't look like something simple and readable.
But, after moving this code into a common library - both React and Angular looks good.
Look at the `ComponentsFactory` in both projects to see the difference.

So -1 for angular...     

