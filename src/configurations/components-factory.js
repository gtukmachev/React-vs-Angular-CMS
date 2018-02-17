import React from "react";

var cFactory = {

    build: function(settingItem){
        if (settingItem == null || settingItem.comp == null) return null;
        if (typeof settingItem === 'number') return settingItem;
        if (typeof settingItem === 'string') return settingItem;
        if (typeof settingItem === 'boolean') return settingItem;
        if (typeof settingItem.comp === 'number') return settingItem.comp;
        if (typeof settingItem.comp === 'string') return settingItem.comp;
        if (typeof settingItem.comp === 'boolean') return settingItem.comp;

        return React.createElement(settingItem.comp, settingItem.props || null, settingItem.children || null);
    }

};

export default cFactory;

