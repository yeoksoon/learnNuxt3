import { _ as __nuxt_component_0$1 } from './nuxt-link-Bv5HG-Ud.mjs';
import { unref, watch, getCurrentInstance, onMounted, onBeforeUnmount, ref, computed, reactive, provide, h, inject, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { c as createComponent, g as listenOpts, n as noop, i as isRuntimeSsrPreHydration, l as layoutKey, e as emptyRenderFn, d as pageContainerKey } from './server.mjs';
import { b as hMergeSlot, a as hUniqueSlot, h as hSlot } from '../_/render.mjs';
import { b as __nuxt_component_2$1, _ as __nuxt_component_1$1 } from '../_/QBtn.mjs';
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
import '../_/use-dark.mjs';
import '../_/Ripple.mjs';

function css (element, css) {
  const style = element.style;

  for (const prop in css) {
    style[ prop ] = css[ prop ];
  }
}

// internal
function getElement (el) {
  if (el === void 0 || el === null) {
    return void 0
  }

  if (typeof el === 'string') {
    try {
      return document.querySelector(el) || void 0
    }
    catch (err) {
      return void 0
    }
  }

  const target = unref(el);
  if (target) {
    return target.$el || target
  }
}

const scrollTargetProp = {} /* SSR does not know about Element */
  ;

const scrollTargets = []
  ;

function getScrollTarget (el, targetEl) {
  let target = getElement(targetEl);

  if (target === void 0) {
    if (el === void 0 || el === null) {
      return window
    }

    target = el.closest('.scroll,.scroll-y,.overflow-auto');
  }

  return scrollTargets.includes(target)
    ? window
    : target
}

function getVerticalScrollPosition (scrollTarget) {
  return scrollTarget === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : scrollTarget.scrollTop
}

function getHorizontalScrollPosition (scrollTarget) {
  return scrollTarget === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : scrollTarget.scrollLeft
}

let size;
function getScrollbarWidth () {
  if (size !== undefined) {
    return size
  }

  const
    inner = document.createElement('p'),
    outer = document.createElement('div');

  css(inner, {
    width: '100%',
    height: '200px'
  });
  css(outer, {
    position: 'absolute',
    top: '0px',
    left: '0px',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  const w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  outer.remove();
  size = w1 - w2;

  return size
}

const { passive } = listenOpts;
const axisValues = [ 'both', 'horizontal', 'vertical' ];

const QScrollObserver = createComponent({
  name: 'QScrollObserver',

  props: {
    axis: {
      type: String,
      validator: v => axisValues.includes(v),
      default: 'vertical'
    },

    debounce: [ String, Number ],

    scrollTarget: scrollTargetProp
  },

  emits: [ 'scroll' ],

  setup (props, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },

      direction: 'down',
      directionChanged: false,

      delta: {
        top: 0,
        left: 0
      },

      inflectionPoint: {
        top: 0,
        left: 0
      }
    };

    let clearTimer = null, localScrollTarget, parentEl;

    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });

    function emitEvent () {
      clearTimer?.();

      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);

      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };

      if (
        (props.axis === 'vertical' && delta.top === 0)
        || (props.axis === 'horizontal' && delta.left === 0)
      ) return

      const curDir = Math.abs(delta.top) >= Math.abs(delta.left)
        ? (delta.top < 0 ? 'up' : 'down')
        : (delta.left < 0 ? 'left' : 'right');

      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;

      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }

      emit('scroll', { ...scroll });
    }

    function configureScrollTarget () {
      localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
      localScrollTarget.addEventListener('scroll', trigger, passive);
      trigger(true);
    }

    function unconfigureScrollTarget () {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener('scroll', trigger, passive);
        localScrollTarget = void 0;
      }
    }

    function trigger (immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === '0') {
        emitEvent();
      }
      else if (clearTimer === null) {
        const [ timer, fn ] = props.debounce
          ? [ setTimeout(emitEvent, props.debounce), clearTimeout ]
          : [ requestAnimationFrame(emitEvent), cancelAnimationFrame ];

        clearTimer = () => {
          fn(timer);
          clearTimer = null;
        };
      }
    }

    const { proxy } = getCurrentInstance();

    watch(() => proxy.$q.lang.rtl, emitEvent);

    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });

    onBeforeUnmount(() => {
      clearTimer?.();
      unconfigureScrollTarget();
    });

    // expose public methods
    Object.assign(proxy, {
      trigger,
      getPosition: () => scroll
    });

    return noop
  }
});

const QResizeObserver = createComponent({
  name: 'QResizeObserver',

  props: {
    debounce: {
      type: [ String, Number ],
      default: 100
    }
  },

  emits: [ 'resize' ],

  setup (props, { emit }) {
    { return noop }
  }
});

const __nuxt_component_0 = createComponent({
  name: 'QLayout',

  props: {
    container: Boolean,
    view: {
      type: String,
      default: 'hhh lpr fff',
      validator: v => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },

    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const rootRef = ref(null);

    // page related
    const height = ref($q.screen.height);
    const width = ref(props.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: 'down', inflectionPoint: 0 });

    // container only prop
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());

    const classes = computed(() =>
      'q-layout q-layout--'
      + (props.container === true ? 'containerized' : 'standard')
    );

    const style = computed(() => (
      props.container === false
        ? { minHeight: $q.screen.height + 'px' }
        : null
    ));

    // used by container only
    const targetStyle = computed(() => (
      scrollbarWidth.value !== 0
        ? { [ $q.lang.rtl === true ? 'left' : 'right' ]: `${ scrollbarWidth.value }px` }
        : null
    ));

    const targetChildStyle = computed(() => (
      scrollbarWidth.value !== 0
        ? {
            [ $q.lang.rtl === true ? 'right' : 'left' ]: 0,
            [ $q.lang.rtl === true ? 'left' : 'right' ]: `-${ scrollbarWidth.value }px`,
            width: `calc(100% + ${ scrollbarWidth.value }px)`
          }
        : null
    ));

    function onPageScroll (data) {
      if (props.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };

        scroll.value = info;
        props.onScroll !== void 0 && emit('scroll', info);
      }
    }

    function onPageResize (data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;

      if (height.value !== newHeight) {
        resized = true;
        height.value = newHeight;
        props.onScrollHeight !== void 0 && emit('scrollHeight', newHeight);
        updateScrollbarWidth();
      }
      if (width.value !== newWidth) {
        resized = true;
        width.value = newWidth;
      }

      if (resized === true && props.onResize !== void 0) {
        emit('resize', data);
      }
    }

    function onContainerResize ({ height }) {
      if (containerHeight.value !== height) {
        containerHeight.value = height;
        updateScrollbarWidth();
      }
    }

    function updateScrollbarWidth () {
      if (props.container === true) {
        const width = height.value > containerHeight.value
          ? getScrollbarWidth()
          : 0;

        if (scrollbarWidth.value !== width) {
          scrollbarWidth.value = width;
        }
      }
    }

    let animateTimer = null;

    const $layout = {
      instances: {},
      view: computed(() => props.view),
      isContainer: computed(() => props.container),

      rootRef,

      height,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width.value + scrollbarWidth.value),

      rows: computed(() => {
        const rows = props.view.toLowerCase().split(' ');
        return {
          top: rows[ 0 ].split(''),
          middle: rows[ 1 ].split(''),
          bottom: rows[ 2 ].split('')
        }
      }),

      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),

      scroll,

      animate () {
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
        }
        else {
          document.body.classList.add('q-body--layout-animate');
        }

        animateTimer = setTimeout(() => {
          animateTimer = null;
          document.body.classList.remove('q-body--layout-animate');
        }, 155);
      },

      update (part, prop, val) {
        $layout[ part ][ prop ] = val;
      }
    };

    provide(layoutKey, $layout);

    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver, { onScroll: onPageScroll }),
        h(QResizeObserver, { onResize: onPageResize })
      ]);

      const layout = h('div', {
        class: classes.value,
        style: style.value,
        ref: props.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);

      if (props.container === true) {
        return h('div', {
          class: 'q-layout-container overflow-hidden',
          ref: rootRef
        }, [
          h(QResizeObserver, { onResize: onContainerResize }),
          h('div', {
            class: 'absolute-full',
            style: targetStyle.value
          }, [
            h('div', {
              class: 'scroll',
              style: targetChildStyle.value
            }, [ layout ])
          ])
        ])
      }

      return layout
    }
  }
});

const __nuxt_component_1 = createComponent({
  name: 'QHeader',

  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,

    heightHint: {
      type: [ String, Number ],
      default: 50
    }
  },

  emits: [ 'reveal', 'focusin' ],

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QHeader needs to be child of QLayout');
      return emptyRenderFn
    }

    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);

    const fixed = computed(() =>
      props.reveal === true
      || $layout.view.value.indexOf('H') !== -1
      || ($q.platform.is.ios && $layout.isContainer.value === true)
    );

    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0
      }
      const offset = size.value - $layout.scroll.value.position;
      return offset > 0 ? offset : 0
    });

    const hidden = computed(() => props.modelValue !== true
      || (fixed.value === true && revealed.value !== true)
    );

    const revealOnFocus = computed(() =>
      props.modelValue === true && hidden.value === true && props.reveal === true
    );

    const classes = computed(() =>
      'q-header q-layout__section--marginal '
      + (fixed.value === true ? 'fixed' : 'absolute') + '-top'
      + (props.bordered === true ? ' q-header--bordered' : '')
      + (hidden.value === true ? ' q-header--hidden' : '')
      + (props.modelValue !== true ? ' q-layout--prevent-focus' : '')
    );

    const style = computed(() => {
      const
        view = $layout.rows.value.top,
        css = {};

      if (view[ 0 ] === 'l' && $layout.left.space === true) {
        css[ $q.lang.rtl === true ? 'right' : 'left' ] = `${ $layout.left.size }px`;
      }
      if (view[ 2 ] === 'r' && $layout.right.space === true) {
        css[ $q.lang.rtl === true ? 'left' : 'right' ] = `${ $layout.right.size }px`;
      }

      return css
    });

    function updateLayout (prop, val) {
      $layout.update('header', prop, val);
    }

    function updateLocal (prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }

    function onResize ({ height }) {
      updateLocal(size, height);
      updateLayout('size', height);
    }

    function onFocusin (evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }

      emit('focusin', evt);
    }

    watch(() => props.modelValue, val => {
      updateLayout('space', val);
      updateLocal(revealed, true);
      $layout.animate();
    });

    watch(offset, val => {
      updateLayout('offset', val);
    });

    watch(() => props.reveal, val => {
      val === false && updateLocal(revealed, props.modelValue);
    });

    watch(revealed, val => {
      $layout.animate();
      emit('reveal', val);
    });

    watch($layout.scroll, scroll => {
      props.reveal === true && updateLocal(revealed,
        scroll.direction === 'up'
        || scroll.position <= props.revealOffset
        || scroll.position - scroll.inflectionPoint < 100
      );
    });

    const instance = {};

    $layout.instances.header = instance;
    props.modelValue === true && updateLayout('size', size.value);
    updateLayout('space', props.modelValue);
    updateLayout('offset', offset.value);

    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout('size', 0);
        updateLayout('offset', 0);
        updateLayout('space', false);
      }
    });

    return () => {
      const child = hUniqueSlot(slots.default, []);

      props.elevated === true && child.push(
        h('div', {
          class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
        })
      );

      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );

      return h('header', {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child)
    }
  }
});

const __nuxt_component_2 = createComponent({
  name: 'QToolbar',

  props: {
    inset: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-toolbar row no-wrap items-center'
      + (props.inset === true ? ' q-toolbar--inset' : '')
    );

    return () => h('div', { class: classes.value, role: 'toolbar' }, hSlot(slots.default))
  }
});

const __nuxt_component_3 = createComponent({
  name: 'QToolbarTitle',

  props: {
    shrink: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-toolbar__title ellipsis'
      + (props.shrink === true ? ' col-shrink' : '')
    );

    return () => h('div', { class: classes.value }, hSlot(slots.default))
  }
});

const __nuxt_component_7 = createComponent({
  name: 'QPageContainer',

  setup (_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QPageContainer needs to be child of QLayout');
      return emptyRenderFn
    }

    provide(pageContainerKey, true);

    const style = computed(() => {
      const css = {};

      if ($layout.header.space === true) {
        css.paddingTop = `${ $layout.header.size }px`;
      }
      if ($layout.right.space === true) {
        css[ `padding${ $q.lang.rtl === true ? 'Left' : 'Right' }` ] = `${ $layout.right.size }px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${ $layout.footer.size }px`;
      }
      if ($layout.left.space === true) {
        css[ `padding${ $q.lang.rtl === true ? 'Right' : 'Left' }` ] = `${ $layout.left.size }px`;
      }

      return css
    });

    return () => h('div', {
      class: 'q-page-container',
      style: style.value
    }, hSlot(slots.default))
  }
});

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

export { _sfc_main as default };
//# sourceMappingURL=default-DSB75y-c.mjs.map
