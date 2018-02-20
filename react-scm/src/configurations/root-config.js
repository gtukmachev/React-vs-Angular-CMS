import Layout1 from "../layouts/layout-1";
import TextComponent from "../components/text-component";

const rootConfig = {
    root: {
        comp: Layout1,
        props: {
            border: 20, bordercolor: 'blue',
            header: {comp: TextComponent, props: {t: 'Header of the upper component'}},
            left:  {comp: TextComponent, props: {t: 'Left side'}},
            right: {comp: TextComponent, props: {t: 'Hello right'}},
            footer: {comp: Layout1, props: {
                    border: 5, bordercolor: 'red',
                    header: {comp: TextComponent, props: {t: 'Header of the inner component'}},
                    left: null,
                    right: null,
                    footer: null
                }
            }
        }
    }
};

export default rootConfig;