# React.JS vs Angular CMS 

## The main idea
Implement  the same  functionality (a vey lite CMS) using React.JS and Angular 2 
and compare.


## The idea for the CMS
* Make a library of independent components 
* Render final content base on external `configuration`
* `configuration`'s should be extendable 

so, the project should contains components and a configuration file...

    
## Project Structure

* `src/layouts` - Layouts 
* `src/copmonents` - Components   
* `src/configurations` - Content configuration   

## Implementation details

the same components were created in both projects. You can see the difference in the components syntax definition  

2 configurations were created: 
* `rootConfig`
* `sunConfig` - with changing only a single property extended from of parent configuration (color of inner table)
see in components: `subConfig` object extends `rootConfig` with changing only a single property extended from of parent configuration (color of inner table).

`immutability helper` library used for rootConfig object extending 

Main app knew nothing about components which should be rendered - it depends on configuration only.

## Implementation challenges comparing 

Ok, the job done - both projects render the same content based on external configuration. 
Now let's see what issues we solved in both of projects.

 
