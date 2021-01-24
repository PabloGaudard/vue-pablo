import Icon from "./Icon.vue";
import Pic from "./Pic.vue";
import Apax from "./Apax.js";

const install = function (Vue) {
    Vue.component("Icon", Icon);
    Vue.component("Pic", Pic);
}

const VuePablo = { Icon, Pic, Apax, install }

export default VuePablo
export {Icon, Pic, Apax, install}