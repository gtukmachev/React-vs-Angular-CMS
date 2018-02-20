//import update from 'immutability-helper';
//import {rootConfig} from './root-config';

/*
export const subConfig = update.update( rootConfig, {
    root: {
        props: {
            footer: {
                props: {
                    bordercolor: {$set: 'green'}
                }
            }
        }
    }
});
*/

export const subConfig: ICMS_Config = {
  root: {
    comp: 'Layout1Component',
    props: {
      border: 20, bordercolor: 'blue',

      header: {comp: 'TextComponent', props: 'Header of the upper component'},
      left:  {comp: 'TextComponent', props: 'Left side'},
      right: {comp: 'TextComponent', props: 'Hello right'},
      footer: {comp: 'Layout1Component', props: {
          border: 5, bordercolor: 'green',
          header: {comp: 'TextComponent', props: 'Header of the inner component'},
          left: null,
          right: null,
          footer: null
        }
      }
    }
  }
};
