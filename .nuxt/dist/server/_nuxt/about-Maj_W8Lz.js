import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import __nuxt_component_0 from "quasar/src/components/page/QPage.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_page = __nuxt_component_0;
  _push(ssrRenderComponent(_component_q_page, mergeProps({ padding: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="q-my-xl text-center"${_scopeId}><div class="text-h4"${_scopeId}>About</div><p class="q-mt-sm text-grey-8"${_scopeId}> Vue &amp; Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다. </p></div>`);
      } else {
        return [
          createVNode("div", { class: "q-my-xl text-center" }, [
            createVNode("div", { class: "text-h4" }, "About"),
            createVNode("p", { class: "q-mt-sm text-grey-8" }, " Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-Maj_W8Lz.js.map
