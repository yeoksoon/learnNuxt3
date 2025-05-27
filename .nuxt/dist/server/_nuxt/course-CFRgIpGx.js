import { _ as __nuxt_component_6 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, withDirectives, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate } from "vue/server-renderer";
import { u as useCourses } from "./useCourses-DMZJofR-.js";
import __nuxt_component_0 from "quasar/src/components/page/QPage.js";
import __nuxt_component_0$1 from "quasar/src/components/card/QCard.js";
import __nuxt_component_2 from "quasar/src/components/item/QItemLabel.js";
import __nuxt_component_3 from "quasar/src/components/item/QList.js";
import __nuxt_component_4 from "quasar/src/components/item/QItem.js";
import __q_directive_0 from "quasar/src/directives/ripple/Ripple.js";
import __nuxt_component_5 from "quasar/src/components/item/QItemSection.js";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/study/learnNuxt-3/node_modules/hookable/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/unctx/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/study/learnNuxt-3/node_modules/radix3/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/defu/dist/defu.mjs";
import "D:/study/learnNuxt-3/node_modules/ufo/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/@unhead/vue/dist/index.mjs";
import "D:/study/learnNuxt-3/node_modules/klona/dist/index.mjs";
import "quasar/lang/en-US.js";
import "quasar/icon-set/material-icons.js";
import "quasar/src/vue-plugin.js";
import "quasar/src/composables/use-quasar/use-quasar.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "course",
  __ssrInlineRender: true,
  setup(__props) {
    const { courses } = useCourses();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_q_card = __nuxt_component_0$1;
      const _component_q_item_label = __nuxt_component_2;
      const _component_q_list = __nuxt_component_3;
      const _component_q_item = __nuxt_component_4;
      const _component_q_item_section = __nuxt_component_5;
      const _component_NuxtPage = __nuxt_component_6;
      const _directive_ripple = __q_directive_0;
      _push(ssrRenderComponent(_component_q_page, mergeProps({ padding: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row q-col-gutter-md"${_scopeId}><div class="col-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_q_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_label, { header: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`강의 로드맵`);
                      } else {
                        return [
                          createTextVNode("강의 로드맵")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_list, {
                    bordered: "",
                    separator: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(courses), (course, index) => {
                          _push4(ssrRenderComponent(_component_q_item, mergeProps({
                            key: course.courseSlug,
                            clickable: "",
                            to: course.path
                          }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_q_item_section, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(index + 1)}. ${ssrInterpolate(course.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(course.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_q_item_section, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(course.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course, index) => {
                            return withDirectives((openBlock(), createBlock(_component_q_item, {
                              key: course.courseSlug,
                              clickable: "",
                              to: course.path
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(course.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"])), [
                              [_directive_ripple]
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_label, { header: "" }, {
                      default: withCtx(() => [
                        createTextVNode("강의 로드맵")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_list, {
                      bordered: "",
                      separator: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course, index) => {
                          return withDirectives((openBlock(), createBlock(_component_q_item, {
                            key: course.courseSlug,
                            clickable: "",
                            to: course.path
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(course.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["to"])), [
                            [_directive_ripple]
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "row q-col-gutter-md" }, [
                createVNode("div", { class: "col-3" }, [
                  createVNode(_component_q_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, { header: "" }, {
                        default: withCtx(() => [
                          createTextVNode("강의 로드맵")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_list, {
                        bordered: "",
                        separator: ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course, index) => {
                            return withDirectives((openBlock(), createBlock(_component_q_item, {
                              key: course.courseSlug,
                              clickable: "",
                              to: course.path
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(course.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"])), [
                              [_directive_ripple]
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col" }, [
                  createVNode(_component_NuxtPage)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=course-CFRgIpGx.js.map
