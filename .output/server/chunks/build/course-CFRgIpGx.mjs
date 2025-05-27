import { c as createComponent, s as stopAndPrevent, _ as __nuxt_component_6 } from './server.mjs';
import { computed, h, getCurrentInstance, ref, defineComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, withDirectives, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { u as useCourses } from './useCourses-DMZJofR-.mjs';
import { _ as __nuxt_component_0 } from '../_/QPage.mjs';
import { _ as __nuxt_component_0$1 } from '../_/QCard.mjs';
import { h as hSlot, a as hUniqueSlot } from '../_/render.mjs';
import { u as useDarkProps, a as useDark } from '../_/use-dark.mjs';
import { u as useRouterLinkProps, a as useRouterLink, i as isKeyCode, R as Ripple } from '../_/Ripple.mjs';
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

const __nuxt_component_2 = createComponent({
  name: 'QItemLabel',

  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [ Number, String ]
  },

  setup (props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));

    const classes = computed(() =>
      'q-item__label'
      + (props.overline === true ? ' q-item__label--overline text-overline' : '')
      + (props.caption === true ? ' q-item__label--caption text-caption' : '')
      + (props.header === true ? ' q-item__label--header' : '')
      + (parsedLines.value === 1 ? ' ellipsis' : '')
    );

    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1
        ? {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': parsedLines.value
          }
        : null
    });

    return () => h('div', {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default))
  }
});

const roleAttrExceptions = [ 'ul', 'ol' ];

const __nuxt_component_3 = createComponent({
  name: 'QList',

  props: {
    ...useDarkProps,

    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,

    tag: {
      type: String,
      default: 'div'
    }
  },

  setup (props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);

    const role = computed(() => (
      roleAttrExceptions.includes(props.tag) ? null : 'list')
    );

    const classes = computed(() =>
      'q-list'
      + (props.bordered === true ? ' q-list--bordered' : '')
      + (props.dense === true ? ' q-list--dense' : '')
      + (props.separator === true ? ' q-list--separator' : '')
      + (isDark.value === true ? ' q-list--dark' : '')
      + (props.padding === true ? ' q-list--padding' : '')
    );

    return () => h(props.tag, { class: classes.value, role: role.value }, hSlot(slots.default))
  }
});

const __nuxt_component_4 = createComponent({
  name: 'QItem',

  props: {
    ...useDarkProps,
    ...useRouterLinkProps,

    tag: {
      type: String,
      default: 'div'
    },

    active: {
      type: Boolean,
      default: null
    },

    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,

    tabindex: [ String, Number ],

    focused: Boolean,
    manualFocus: Boolean
  },

  emits: [ 'click', 'keyup' ],

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();

    const rootRef = ref(null);
    const blurTargetRef = ref(null);

    const isActionable = computed(() =>
      props.clickable === true
        || hasLink.value === true
        || props.tag === 'label'
    );

    const isClickable = computed(() =>
      props.disable !== true && isActionable.value === true
    );

    const classes = computed(() =>
      'q-item q-item-type row no-wrap'
      + (props.dense === true ? ' q-item--dense' : '')
      + (isDark.value === true ? ' q-item--dark' : '')
      + (
        hasLink.value === true && props.active === null
          ? linkClass.value
          : (
              props.active === true
                ? ` q-item--active${ props.activeClass !== void 0 ? ` ${ props.activeClass }` : '' }`
                : ''
            )
      )
      + (props.disable === true ? ' disabled' : '')
      + (
        isClickable.value === true
          ? ' q-item--clickable q-link cursor-pointer '
            + (props.manualFocus === true ? 'q-manual-focusable' : 'q-focusable q-hoverable')
            + (props.focused === true ? ' q-manual-focusable--focused' : '')
          : ''
      )
    );

    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null
      }

      const dir = $q.lang.rtl === true ? 'Right' : 'Left';
      return {
        [ 'padding' + dir ]: (16 + props.insetLevel * 56) + 'px'
      }
    });

    function onClick (e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null && e.qAvoidFocus !== true) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          }
          else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }

        navigateOnClick(e);
      }
    }

    function onKeyup (e) {
      if (isClickable.value === true && isKeyCode(e, [ 13, 32 ]) === true) {
        stopAndPrevent(e);

        // for ripple
        e.qKeyEvent = true;

        // for click trigger
        const evt = new MouseEvent('click', e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }

      emit('keyup', e);
    }

    function getContent () {
      const child = hUniqueSlot(slots.default, []);

      isClickable.value === true && child.unshift(
        h('div', { class: 'q-focus-helper', tabindex: -1, ref: blurTargetRef })
      );

      return child
    }

    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: 'listitem',
        onClick,
        onKeyup
      };

      if (isClickable.value === true) {
        data.tabindex = props.tabindex || '0';
        Object.assign(data, linkAttrs.value);
      }
      else if (isActionable.value === true) {
        data[ 'aria-disabled' ] = 'true';
      }

      return h(
        linkTag.value,
        data,
        getContent()
      )
    }
  }
});

const __nuxt_component_5 = createComponent({
  name: 'QItemSection',

  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-item__section column'
      + ` q-item__section--${ props.avatar === true || props.side === true || props.thumbnail === true ? 'side' : 'main' }`
      + (props.top === true ? ' q-item__section--top justify-start' : ' justify-center')
      + (props.avatar === true ? ' q-item__section--avatar' : '')
      + (props.thumbnail === true ? ' q-item__section--thumbnail' : '')
      + (props.noWrap === true ? ' q-item__section--nowrap' : '')
    );

    return () => h('div', { class: classes.value }, hSlot(slots.default))
  }
});

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
      const _directive_ripple = Ripple;
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
                        _push4(`\uAC15\uC758 \uB85C\uB4DC\uB9F5`);
                      } else {
                        return [
                          createTextVNode("\uAC15\uC758 \uB85C\uB4DC\uB9F5")
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
                        createTextVNode("\uAC15\uC758 \uB85C\uB4DC\uB9F5")
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
                          createTextVNode("\uAC15\uC758 \uB85C\uB4DC\uB9F5")
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

export { _sfc_main as default };
//# sourceMappingURL=course-CFRgIpGx.mjs.map
