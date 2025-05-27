import { _ as __nuxt_component_0 } from "./AppCard-CtI1DF6I.js";
import { mergeProps, useSSRContext, defineComponent, ref, withCtx, unref, isRef, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { a as useRoute } from "../server.mjs";
import { u as useCourses } from "./useCourses-DMZJofR-.js";
import "D:/study/learnNuxt-3/node_modules/hookable/dist/index.mjs";
import __nuxt_component_1 from "quasar/src/components/btn/QBtn.js";
import __nuxt_component_2 from "quasar/src/components/separator/QSeparator.js";
import __nuxt_component_6 from "quasar/src/components/form/QForm.js";
import __nuxt_component_7 from "quasar/src/components/input/QInput.js";
import __nuxt_component_2$1 from "quasar/src/components/space/QSpace.js";
import __nuxt_component_1$1 from "quasar/src/components/icon/QIcon.js";
import "quasar/src/components/card/QCard.js";
import "quasar/src/components/card/QCardSection.js";
import "quasar/src/components/card/QCardActions.js";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "video-container" }, _attrs))} data-v-6a16624f><iframe width="100%" height="100%"${ssrRenderAttr("src", "https://www.youtube.com/embed/zmq2zu-UsRk")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-6a16624f></iframe></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6a16624f"]]);
const useCourse = (courseSlug) => {
  const { courses } = useCourses();
  const index = courses.findIndex((course2) => course2.courseSlug === courseSlug);
  const course = courses[index];
  const prevCourse = index <= 0 ? null : courses[index - 1];
  const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
  return { course, prevCourse, nextCourse };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[courseSlug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const courseSlug = route.params.courseSlug;
    const { course, prevCourse, nextCourse } = useCourse(courseSlug);
    route.meta.pageType;
    const memo = ref("");
    const completed = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCard = __nuxt_component_0;
      const _component_q_icon = __nuxt_component_1$1;
      const _component_q_space = __nuxt_component_2$1;
      const _component_VideoPlayer = __nuxt_component_3;
      const _component_q_btn = __nuxt_component_1;
      const _component_q_separator = __nuxt_component_2;
      const _component_q_form = __nuxt_component_6;
      const _component_q_input = __nuxt_component_7;
      _push(ssrRenderComponent(_component_AppCard, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="text-h5 text-weight-medium"${_scopeId}>${ssrInterpolate((_a = unref(course)) == null ? void 0 : _a.title)}</div><div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8"${_scopeId}><span class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_q_icon, {
              name: "star",
              size: "16px",
              color: "orange"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate((_b = unref(course)) == null ? void 0 : _b.rating)}</span></span><span${_scopeId}>${ssrInterpolate((_c = unref(course)) == null ? void 0 : _c.reviewsCount)}개의 수강평 </span><span${_scopeId}>·</span><span${_scopeId}>${ssrInterpolate((_d = unref(course)) == null ? void 0 : _d.studentCount)}명의 수강생</span>`);
            _push2(ssrRenderComponent(_component_q_space, null, null, _parent2, _scopeId));
            _push2(`<a class="text-bold"${ssrRenderAttr("href", (_e = unref(course)) == null ? void 0 : _e.reviewsUrl)} target="_blank"${_scopeId}> 수강평 보기 </a></div>`);
          } else {
            return [
              createVNode("div", { class: "text-h5 text-weight-medium" }, toDisplayString((_f = unref(course)) == null ? void 0 : _f.title), 1),
              createVNode("div", { class: "flex q-gutter-x-sm items-center q-mt-sm text-grey-8" }, [
                createVNode("span", { class: "flex items-center" }, [
                  createVNode(_component_q_icon, {
                    name: "star",
                    size: "16px",
                    color: "orange"
                  }),
                  createVNode("span", null, toDisplayString((_g = unref(course)) == null ? void 0 : _g.rating), 1)
                ]),
                createVNode("span", null, toDisplayString((_h = unref(course)) == null ? void 0 : _h.reviewsCount) + "개의 수강평 ", 1),
                createVNode("span", null, "·"),
                createVNode("span", null, toDisplayString((_i = unref(course)) == null ? void 0 : _i.studentCount) + "명의 수강생", 1),
                createVNode(_component_q_space),
                createVNode("a", {
                  class: "text-bold",
                  href: (_j = unref(course)) == null ? void 0 : _j.reviewsUrl,
                  target: "_blank"
                }, " 수강평 보기 ", 8, ["href"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(prevCourse)) {
              _push2(ssrRenderComponent(_component_q_btn, {
                label: "이전 강의",
                color: "primary",
                unelevated: "",
                to: unref(prevCourse).path
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_q_btn, {
              label: "쿼리 추가",
              color: "dark",
              unelevated: "",
              to: { path: _ctx.$route.path, query: { timestamp: Date.now() } }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_space, null, null, _parent2, _scopeId));
            if (unref(nextCourse)) {
              _push2(ssrRenderComponent(_component_q_btn, {
                label: "다음 강의",
                color: "primary",
                unelevated: "",
                to: unref(nextCourse).path
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(prevCourse) ? (openBlock(), createBlock(_component_q_btn, {
                key: 0,
                label: "이전 강의",
                color: "primary",
                unelevated: "",
                to: unref(prevCourse).path
              }, null, 8, ["to"])) : createCommentVNode("", true),
              createVNode(_component_q_btn, {
                label: "쿼리 추가",
                color: "dark",
                unelevated: "",
                to: { path: _ctx.$route.path, query: { timestamp: Date.now() } }
              }, null, 8, ["to"]),
              createVNode(_component_q_space),
              unref(nextCourse) ? (openBlock(), createBlock(_component_q_btn, {
                key: 1,
                label: "다음 강의",
                color: "primary",
                unelevated: "",
                to: unref(nextCourse).path
              }, null, 8, ["to"])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="q-mb-md"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_VideoPlayer, {
              src: (_a = unref(course)) == null ? void 0 : _a.video
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="row q-col-gutter-md"${_scopeId}><div class="col-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_q_btn, {
              label: "인프런에서 수강하기",
              unelevated: "",
              class: "full-width",
              color: "primary",
              href: (_b = unref(course)) == null ? void 0 : _b.inflearnUrl,
              target: "_blank"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_q_btn, {
              label: "짐코딩 클럽에서 수강하기",
              unelevated: "",
              class: "full-width",
              color: "red",
              href: (_c = unref(course)) == null ? void 0 : _c.gymcodingUrl,
              target: "_blank"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><p class="q-mt-lg text-grey-8"${_scopeId}>${ssrInterpolate((_d = unref(course)) == null ? void 0 : _d.content)}</p>`);
            _push2(ssrRenderComponent(_component_q_separator, { class: "q-mb-lg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_form, { class: "q-gutter-y-md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_btn, {
                    label: "수강완료",
                    class: "full-width",
                    color: "green",
                    unelevated: "",
                    outline: unref(completed) ? false : true,
                    icon: unref(completed) ? "check" : void 0,
                    onClick: ($event) => completed.value = !unref(completed)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    modelValue: unref(memo),
                    "onUpdate:modelValue": ($event) => isRef(memo) ? memo.value = $event : null,
                    type: "textarea",
                    outlined: "",
                    dense: "",
                    placeholder: "메모를 작성해주세요.",
                    rows: "3",
                    autogrow: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_btn, {
                      label: "수강완료",
                      class: "full-width",
                      color: "green",
                      unelevated: "",
                      outline: unref(completed) ? false : true,
                      icon: unref(completed) ? "check" : void 0,
                      onClick: ($event) => completed.value = !unref(completed)
                    }, null, 8, ["outline", "icon", "onClick"]),
                    createVNode(_component_q_input, {
                      modelValue: unref(memo),
                      "onUpdate:modelValue": ($event) => isRef(memo) ? memo.value = $event : null,
                      type: "textarea",
                      outlined: "",
                      dense: "",
                      placeholder: "메모를 작성해주세요.",
                      rows: "3",
                      autogrow: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "q-mb-md" }, [
                createVNode(_component_VideoPlayer, {
                  src: (_e = unref(course)) == null ? void 0 : _e.video
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "row q-col-gutter-md" }, [
                createVNode("div", { class: "col-6" }, [
                  createVNode(_component_q_btn, {
                    label: "인프런에서 수강하기",
                    unelevated: "",
                    class: "full-width",
                    color: "primary",
                    href: (_f = unref(course)) == null ? void 0 : _f.inflearnUrl,
                    target: "_blank"
                  }, null, 8, ["href"])
                ]),
                createVNode("div", { class: "col-6" }, [
                  createVNode(_component_q_btn, {
                    label: "짐코딩 클럽에서 수강하기",
                    unelevated: "",
                    class: "full-width",
                    color: "red",
                    href: (_g = unref(course)) == null ? void 0 : _g.gymcodingUrl,
                    target: "_blank"
                  }, null, 8, ["href"])
                ])
              ]),
              createVNode("p", { class: "q-mt-lg text-grey-8" }, toDisplayString((_h = unref(course)) == null ? void 0 : _h.content), 1),
              createVNode(_component_q_separator, { class: "q-mb-lg" }),
              createVNode(_component_q_form, { class: "q-gutter-y-md" }, {
                default: withCtx(() => [
                  createVNode(_component_q_btn, {
                    label: "수강완료",
                    class: "full-width",
                    color: "green",
                    unelevated: "",
                    outline: unref(completed) ? false : true,
                    icon: unref(completed) ? "check" : void 0,
                    onClick: ($event) => completed.value = !unref(completed)
                  }, null, 8, ["outline", "icon", "onClick"]),
                  createVNode(_component_q_input, {
                    modelValue: unref(memo),
                    "onUpdate:modelValue": ($event) => isRef(memo) ? memo.value = $event : null,
                    type: "textarea",
                    outlined: "",
                    dense: "",
                    placeholder: "메모를 작성해주세요.",
                    rows: "3",
                    autogrow: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/[courseSlug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_courseSlug_-BRcWcs32.js.map
