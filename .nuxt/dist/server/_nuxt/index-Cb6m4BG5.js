import { _ as __nuxt_component_0$2 } from "./nuxt-link-Bv5HG-Ud.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, unref, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import __nuxt_component_0 from "quasar/src/components/card/QCard.js";
import __nuxt_component_1 from "quasar/src/components/card/QCardSection.js";
import { u as useCourses } from "./useCourses-DMZJofR-.js";
import __nuxt_component_0$1 from "quasar/src/components/page/QPage.js";
import "D:/study/learnNuxt-3/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/study/learnNuxt-3/node_modules/hookable/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/unctx/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/study/learnNuxt-3/node_modules/radix3/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/defu/dist/defu.mjs";
import "D:/study/learnNuxt-3/node_modules/@unhead/vue/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/klona/dist/index.mjs";
import "quasar/lang/en-US.js";
import "quasar/icon-set/material-icons.js";
import "quasar/src/vue-plugin.js";
import "quasar/src/composables/use-quasar/use-quasar.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CourseCard",
  __ssrInlineRender: true,
  props: {
    thumbnail: { default: "" },
    title: { default: "" },
    subtitle: { default: "" }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_card = __nuxt_component_0;
      const _component_q_card_section = __nuxt_component_1;
      _push(ssrRenderComponent(_component_q_card, mergeProps({
        class: "my-card",
        onClick: ($event) => _ctx.$emit("click")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _ctx.thumbnail)}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_q_card_section, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6 ellipsis"${_scopeId2}>${ssrInterpolate(_ctx.title)}</div><div class="text-subtitle2 ellipsis text-grey-8"${_scopeId2}>${ssrInterpolate(_ctx.subtitle)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-h6 ellipsis" }, toDisplayString(_ctx.title), 1),
                    createVNode("div", { class: "text-subtitle2 ellipsis text-grey-8" }, toDisplayString(_ctx.subtitle), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("img", { src: _ctx.thumbnail }, null, 8, ["src"]),
              createVNode(_component_q_card_section, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6 ellipsis" }, toDisplayString(_ctx.title), 1),
                  createVNode("div", { class: "text-subtitle2 ellipsis text-grey-8" }, toDisplayString(_ctx.subtitle), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CourseCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { courses } = useCourses();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CourseCard = _sfc_main$1;
      _push(ssrRenderComponent(_component_q_page, mergeProps({ padding: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="q-my-xl text-center"${_scopeId}><div class="text-h4"${_scopeId}>All Courses</div><p class="q-mt-sm text-grey-8"${_scopeId}>웹 개발 입문부터 실전까지 학습해보세요.</p></div><div class="row q-col-gutter-lg"${_scopeId}><!--[-->`);
            ssrRenderList(unref(courses), ({ courseSlug, thumbnail, title, subtitle, path }) => {
              _push2(`<div class="col-12 col-md-4 col-sm-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                custom: "",
                to: path
              }, {
                default: withCtx(({ navigate }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CourseCard, {
                      thumbnail,
                      title,
                      subtitle,
                      onClick: navigate
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CourseCard, {
                        thumbnail,
                        title,
                        subtitle,
                        onClick: navigate
                      }, null, 8, ["thumbnail", "title", "subtitle", "onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "q-my-xl text-center" }, [
                createVNode("div", { class: "text-h4" }, "All Courses"),
                createVNode("p", { class: "q-mt-sm text-grey-8" }, "웹 개발 입문부터 실전까지 학습해보세요.")
              ]),
              createVNode("div", { class: "row q-col-gutter-lg" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), ({ courseSlug, thumbnail, title, subtitle, path }) => {
                  return openBlock(), createBlock("div", {
                    key: courseSlug,
                    class: "col-12 col-md-4 col-sm-6"
                  }, [
                    createVNode(_component_NuxtLink, {
                      custom: "",
                      to: path
                    }, {
                      default: withCtx(({ navigate }) => [
                        createVNode(_component_CourseCard, {
                          thumbnail,
                          title,
                          subtitle,
                          onClick: navigate
                        }, null, 8, ["thumbnail", "title", "subtitle", "onClick"])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Cb6m4BG5.js.map
