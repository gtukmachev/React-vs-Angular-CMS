import Layout1 from "../layouts/layout-1";

const rootConfig = {
    root: {
        comp: Layout1,
        props: {
            border: 5, bordercolor: 'blue',
            header: {comp: '1'},
            left: null,
            right: null,
            footer: {comp: Layout1, props: {
                    border: 1, bordercolor: 'red',
                    header: {comp: '2'},
                    left: null,
                    right: null,
                    footer: null
                }
            }
        }
    }
};

export default rootConfig;