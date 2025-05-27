import { _ as __nuxt_component_0 } from './AppCard-CtI1DF6I.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1$1 } from '../_/QBtn.mjs';
import '../_/QCard.mjs';
import '../_/use-dark.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '../_/render.mjs';
import '../_/QCardSection.mjs';
import '../_/Ripple.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppCard = __nuxt_component_0;
  const _component_q_btn = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppCard, { class: "text-center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="q-py-xl"${_scopeId}><div class="text-h4"${_scopeId}>Vue3 Master \uB85C\uB4DC\uB9F5</div><div class="text-subtitle1 text-grey-8 q-mt-sm"${_scopeId}> \uC6F9\uAC1C\uBC1C \uC785\uBB38\uBD80\uD130, Vue \uD504\uB860\uD2B8\uC5D4\uB4DC \uC2E4\uC804 \uADF8\uB9AC\uACE0 \uC2E4\uBB34 \uD65C\uC6A9\uBC95\uAE4C\uC9C0 \uD568\uAED8 \uC2DC\uC791\uD574\uBD10\uC694! </div>`);
        _push2(ssrRenderComponent(_component_q_btn, {
          label: "\uC2DC\uC791\uD558\uAE30",
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
            createVNode("div", { class: "text-h4" }, "Vue3 Master \uB85C\uB4DC\uB9F5"),
            createVNode("div", { class: "text-subtitle1 text-grey-8 q-mt-sm" }, " \uC6F9\uAC1C\uBC1C \uC785\uBB38\uBD80\uD130, Vue \uD504\uB860\uD2B8\uC5D4\uB4DC \uC2E4\uC804 \uADF8\uB9AC\uACE0 \uC2E4\uBB34 \uD65C\uC6A9\uBC95\uAE4C\uC9C0 \uD568\uAED8 \uC2DC\uC791\uD574\uBD10\uC694! "),
            createVNode(_component_q_btn, {
              label: "\uC2DC\uC791\uD558\uAE30",
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

export { index as default };
//# sourceMappingURL=index-BumiPa86.mjs.map
