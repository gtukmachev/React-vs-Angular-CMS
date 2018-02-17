import update from 'immutability-helper';
import rootConfig from './root-config';

const subConfig = update( rootConfig, {
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

export default subConfig;