import Icon from "./Icon.vue";
import Apax from "./Apax.js";

export default {
    install(Vue) {
        Vue.component("Icon", Icon);
        Vue.use(Apax);
    }
}

//module.exports.Apax = Apax;