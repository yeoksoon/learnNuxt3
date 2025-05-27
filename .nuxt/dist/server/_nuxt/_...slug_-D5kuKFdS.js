import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import __nuxt_component_0 from "quasar/src/components/page/QPage.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_page = __nuxt_component_0;
  _push(ssrRenderComponent(_component_q_page, mergeProps({ padding: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center q-py-xl"${_scopeId}><div class="text-h1"${_scopeId}>404</div><p class="text-subtitle1 q-mt-md"${_scopeId}>Not found page</p><strong class="text-h6"${_scopeId}>slug</strong><p class="text-subtitle2"${_scopeId}>${ssrInterpolate(_ctx.$route.params.slug)}</p></div>`);
      } else {
        return [
          createVNode("div", { class: "text-center q-py-xl" }, [
            createVNode("div", { class: "text-h1" }, "404"),
            createVNode("p", { class: "text-subtitle1 q-mt-md" }, "Not found page"),
            createVNode("strong", { class: "text-h6" }, "slug"),
            createVNode("p", { class: "text-subtitle2" }, toDisplayString(_ctx.$route.params.slug), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-D5kuKFdS.js.map
