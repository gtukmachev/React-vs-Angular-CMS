
interface IConfComponent {
  comp: string;
  props?: object;
  [propName: string]: any;
}

interface ICMS_Config {
  root: CMS_Config_Component;
}

type CMS_Config_Component = IConfComponent | null;
