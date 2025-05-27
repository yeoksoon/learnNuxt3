import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0 } from '../_/QPage.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_page = __nuxt_component_0;
  _push(ssrRenderComponent(_component_q_page, mergeProps({ padding: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="q-my-xl text-center"${_scopeId}><div class="text-h4"${_scopeId}>About</div><p class="q-mt-sm text-grey-8"${_scopeId}> Vue &amp; Nuxt Mastery Class \uC6F9\uC740 Nuxt3\uB85C \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. </p></div>`);
      } else {
        return [
          createVNode("div", { class: "q-my-xl text-center" }, [
            createVNode("div", { class: "text-h4" }, "About"),
            createVNode("p", { class: "q-mt-sm text-grey-8" }, " Vue & Nuxt Mastery Class \uC6F9\uC740 Nuxt3\uB85C \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. ")
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

export { about as default };
//# sourceMappingURL=about-Maj_W8Lz.mjs.map
