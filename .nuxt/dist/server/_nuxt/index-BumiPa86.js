import { _ as __nuxt_component_0 } from "./AppCard-CtI1DF6I.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import __nuxt_component_1 from "quasar/src/components/btn/QBtn.js";
import "quasar/src/components/card/QCard.js";
import "quasar/src/components/card/QCardSection.js";
import "quasar/src/components/separator/QSeparator.js";
import "quasar/src/components/card/QCardActions.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppCard = __nuxt_component_0;
  const _component_q_btn = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppCard, { class: "text-center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="q-py-xl"${_scopeId}><div class="text-h4"${_scopeId}>Vue3 Master 로드맵</div><div class="text-subtitle1 text-grey-8 q-mt-sm"${_scopeId}> 웹개발 입문부터, Vue 프론트엔드 실전 그리고 실무 활용법까지 함께 시작해봐요! </div>`);
        _push2(ssrRenderComponent(_component_q_btn, {
          label: "시작하기",
          class: "q-mt-lg",
          size: "lg",
          color: "primary",
          unelevated: "",
          to: "/course/html-css"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "q-py-xl" }, [
            createVNode("div", { class: "text-h4" }, "Vue3 Master 로드맵"),
            createVNode("div", { class: "text-subtitle1 text-grey-8 q-mt-sm" }, " 웹개발 입문부터, Vue 프론트엔드 실전 그리고 실무 활용법까지 함께 시작해봐요! "),
            createVNode(_component_q_btn, {
              label: "시작하기",
              class: "q-mt-lg",
              size: "lg",
              color: "primary",
              unelevated: "",
              to: "/course/html-css"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BumiPa86.js.map
