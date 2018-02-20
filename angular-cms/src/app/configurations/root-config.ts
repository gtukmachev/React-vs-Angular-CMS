import {Layout1Component} from '../layouts/layout1/layout1.component';
import {TextComponent} from '../components/text-component/text-component.component';

export const rootConfig: ICMS_Config = {
    root: {
        comp: 'Layout1Component',
        props: {
            border: 20, bordercolor: 'blue',

            header: {comp: 'TextComponent', props: 'Header of the upper component'},
            left:  {comp: 'TextComponent', props: 'Left side'},
            right: {comp: 'TextComponent', props: 'Hello right'},
            footer: {comp: 'Layout1Component', props: {
                    border: 5, bordercolor: 'red',
                    header: {comp: 'TextComponent', props: 'Header of the inner component'},
                    left: null,
                    right: null,
                    footer: null
                }
            }
        }
    }
};

