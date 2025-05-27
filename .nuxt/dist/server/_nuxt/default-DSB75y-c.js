import { _ as __nuxt_component_0$1 } from "./nuxt-link-Bv5HG-Ud.js";
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import __nuxt_component_0 from "quasar/src/components/layout/QLayout.js";
import __nuxt_component_1 from "quasar/src/components/header/QHeader.js";
import __nuxt_component_2 from "quasar/src/components/toolbar/QToolbar.js";
import __nuxt_component_3 from "quasar/src/components/toolbar/QToolbarTitle.js";
import __nuxt_component_2$1 from "quasar/src/components/separator/QSeparator.js";
import __nuxt_component_1$1 from "quasar/src/components/btn/QBtn.js";
import __nuxt_component_7 from "quasar/src/components/page/QPageContainer.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const pageContainerStyle = computed(() => ({
      maxWidth: "1080px",
      margin: "0 auto"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_layout = __nuxt_component_0;
      const _component_q_header = __nuxt_component_1;
      const _component_q_toolbar = __nuxt_component_2;
      const _component_q_toolbar_title = __nuxt_component_3;
      const _component_q_separator = __nuxt_component_2$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_q_btn = __nuxt_component_1$1;
      const _component_q_page_container = __nuxt_component_7;
      _push(ssrRenderComponent(_component_q_layout, mergeProps({
        view: "hHh lpR fFf",
        class: "bg-grey-2"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_header, {
              elevated: "",
              class: "bg-dark text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_toolbar, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_toolbar_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Vue Master Course`);
                            } else {
                              return [
                                createTextVNode("Vue Master Course")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_separator, {
                          dark: "",
                          vertical: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          custom: "",
                          to: "/"
                        }, {
                          default: withCtx(({ navigate }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_q_btn, {
                                stretch: "",
                                flat: "",
                                label: "Home",
                                "no-caps": "",
                                onClick: ($event) => navigate()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_q_btn, {
                                  stretch: "",
                                  flat: "",
                                  label: "Home",
                                  "no-caps": "",
                                  onClick: ($event) => navigate()
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_separator, {
                          dark: "",
                          vertical: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          custom: "",
                          to: "/about"
                        }, {
                          default: withCtx(({ navigate }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_q_btn, {
                                stretch: "",
                                flat: "",
                                label: "About",
                                "no-caps": "",
                                onClick: ($event) => navigate()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_q_btn, {
                                  stretch: "",
                                  flat: "",
                                  label: "About",
                                  "no-caps": "",
                                  onClick: ($event) => navigate()
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_toolbar_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Vue Master Course")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_separator, {
                            dark: "",
                            vertical: ""
                          }),
                          createVNode(_component_NuxtLink, {
                            custom: "",
                            to: "/"
                          }, {
                            default: withCtx(({ navigate }) => [
                              createVNode(_component_q_btn, {
                                stretch: "",
                                flat: "",
                                label: "Home",
                                "no-caps": "",
                                onClick: ($event) => navigate()
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_separator, {
                            dark: "",
                            vertical: ""
                          }),
                          createVNode(_component_NuxtLink, {
                            custom: "",
                            to: "/about"
                          }, {
                            default: withCtx(({ navigate }) => [
                              createVNode(_component_q_btn, {
                                stretch: "",
                                flat: "",
                                label: "About",
                                "no-caps": "",
                                onClick: ($event) => navigate()
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_toolbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_toolbar_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Vue Master Course")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_separator, {
                          dark: "",
                          vertical: ""
                        }),
                        createVNode(_component_NuxtLink, {
                          custom: "",
                          to: "/"
                        }, {
                          default: withCtx(({ navigate }) => [
                            createVNode(_component_q_btn, {
                              stretch: "",
                              flat: "",
                              label: "Home",
                              "no-caps": "",
                              onClick: ($event) => navigate()
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_separator, {
                          dark: "",
                          vertical: ""
                        }),
                        createVNode(_component_NuxtLink, {
                          custom: "",
                          to: "/about"
                        }, {
                          default: withCtx(({ navigate }) => [
                            createVNode(_component_q_btn, {
                              stretch: "",
                              flat: "",
                              label: "About",
                              "no-caps": "",
                              onClick: ($event) => navigate()
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_page_container, { style: unref(pageContainerStyle) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_header, {
                elevated: "",
                class: "bg-dark text-white"
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_toolbar, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_toolbar_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Vue Master Course")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_separator, {
                        dark: "",
                        vertical: ""
                      }),
                      createVNode(_component_NuxtLink, {
                        custom: "",
                        to: "/"
                      }, {
                        default: withCtx(({ navigate }) => [
                          createVNode(_component_q_btn, {
                            stretch: "",
                            flat: "",
                            label: "Home",
                            "no-caps": "",
                            onClick: ($event) => navigate()
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_separator, {
                        dark: "",
                        vertical: ""
                      }),
                      createVNode(_component_NuxtLink, {
                        custom: "",
                        to: "/about"
                      }, {
                        default: withCtx(({ navigate }) => [
                          createVNode(_component_q_btn, {
                            stretch: "",
                            flat: "",
                            label: "About",
                            "no-caps": "",
                            onClick: ($event) => navigate()
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_page_container, { style: unref(pageContainerStyle) }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["style"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-DSB75y-c.js.map
