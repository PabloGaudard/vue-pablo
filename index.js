import Apax from "./Apax.js";

import Icon from "./Icon.vue";
import Pic from "./Pic.vue";
import WhatsApp from "./WhatsApp.vue";
import Styles from "./styles.scss";

const install = function (Vue) {
    Vue.component("Icon", Icon);
    Vue.component("Pic", Pic);
    Vue.component("WhatsApp", WhatsApp);
}

const VuePablo = { Apax, Icon, Pic, WhatsApp, Styles, install }

export default VuePablo
export {Apax, Icon, Pic, WhatsApp, Styles, install}