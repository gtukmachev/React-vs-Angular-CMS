# React.JS CMS 

## The main idea

* Make a library of independed components 
* Render final content base on external `configuration`
* `configuration`'s should be extendable 
    
## Project Structure

* `src/layouts` - Layouts 
* `src/copmonents` - Components   
* `src/configurations` - Content configuration   

## Implementation details

see in components: `subConfig` object extends `rootConfig` with changing only a single property extended from of parent configuration (color of inner table).  

React `immutability helper` used for rootConfig object extending 

Main app file `App.js` knew nothing about components which should be rendered - it depends on configuration only. 