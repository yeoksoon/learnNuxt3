import { mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, createVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import __nuxt_component_0$1 from "quasar/src/components/card/QCard.js";
import __nuxt_component_1 from "quasar/src/components/card/QCardSection.js";
import __nuxt_component_2 from "quasar/src/components/separator/QSeparator.js";
import __nuxt_component_3 from "quasar/src/components/card/QCardActions.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_card = __nuxt_component_0$1;
  const _component_q_card_section = __nuxt_component_1;
  const _component_q_separator = __nuxt_component_2;
  const _component_q_card_actions = __nuxt_component_3;
  _push(ssrRenderComponent(_component_q_card, mergeProps({ class: "card" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(ssrRenderComponent(_component_q_card_section, { class: "card__header" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "header", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_q_card_section, { class: "card__body" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_separator, null, null, _parent2, _scopeId));
        if (_ctx.$slots.footer) {
          _push2(ssrRenderComponent(_component_q_card_actions, { class: "card__footer" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock(_component_q_card_section, {
            key: 0,
            class: "card__header"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "header", {}, void 0, true)
            ]),
            _: 3
          })) : createCommentVNode("", true),
          createVNode(_component_q_card_section, { class: "card__body" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }),
          createVNode(_component_q_separator),
          _ctx.$slots.footer ? (openBlock(), createBlock(_component_q_card_actions, {
            key: 1,
            class: "card__footer"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "footer", {}, void 0, true)
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-62984262"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=AppCard-CtI1DF6I.js.map
