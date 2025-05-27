import { getCurrentInstance, computed, h, ref, onBeforeUnmount, Transition, withDirectives } from 'vue';
import { u as useDarkProps, a as useDark } from './use-dark.mjs';
import { c as createComponent, s as stopAndPrevent, g as listenOpts, p as prevent, b as stop } from '../build/server.mjs';
import { h as hSlot, b as hMergeSlot } from './render.mjs';
import { b as useRouterLinkNonMatchingProps, a as useRouterLink, i as isKeyCode, R as Ripple } from './Ripple.mjs';

const insetMap = {
  true: 'inset',
  item: 'item-inset',
  'item-thumbnail': 'item-thumbnail-inset'
};

const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};

const __nuxt_component_2$1 = createComponent({
  name: 'QSeparator',

  props: {
    ...useDarkProps,

    spaced: [ Boolean, String ],
    inset: [ Boolean, String ],
    vertical: Boolean,
    color: String,
    size: String
  },

  setup (props) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);

    const orientation = computed(() => (
      props.vertical === true
        ? 'vertical'
        : 'horizontal'
    ));

    const orientClass = computed(() => ` q-separator--${ orientation.value }`);

    const insetClass = computed(() => (
      props.inset !== false
        ? `${ orientClass.value }-${ insetMap[ props.inset ] }`
        : ''
    ));

    const classes = computed(() =>
      `q-separator${ orientClass.value }${ insetClass.value }`
      + (props.color !== void 0 ? ` bg-${ props.color }` : '')
      + (isDark.value === true ? ' q-separator--dark' : '')
    );

    const style = computed(() => {
      const acc = {};

      if (props.size !== void 0) {
        acc[ props.vertical === true ? 'width' : 'height' ] = props.size;
      }

      if (props.spaced !== false) {
        const size = props.spaced === true
          ? `${ margins.md }px`
          : props.spaced in margins ? `${ margins[ props.spaced ] }px` : props.spaced;

        const dir = props.vertical === true
          ? [ 'Left', 'Right' ]
          : [ 'Top', 'Bottom' ];

        acc[ `margin${ dir[ 0 ] }` ] = acc[ `margin${ dir[ 1 ] }` ] = size;
      }

      return acc
    });

    return () => h('hr', {
      class: classes.value,
      style: style.value,
      'aria-orientation': orientation.value
    })
  }
});

const alignMap = {
  left: 'start',
  center: 'center',
  right: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  stretch: 'stretch'
};

const alignValues = Object.keys(alignMap);

const useAlignProps = {
  align: {
    type: String,
    validator: v => alignValues.includes(v)
  }
};

function useAlign (props) {
  // return alignClass
  return computed(() => {
    const align = props.align === void 0
      ? props.vertical === true ? 'stretch' : 'left'
      : props.align;

    return `${ props.vertical === true ? 'items' : 'justify' }-${ alignMap[ align ] }`
  })
}

const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};

const useSizeProps = {
  size: String
};

function useSize (props, sizes = useSizeDefaults) {
  // return sizeStyle
  return computed(() => (
    props.size !== void 0
      ? { fontSize: props.size in sizes ? `${ sizes[ props.size ] }px` : props.size }
      : null
  ))
}

const defaultViewBox = '0 0 24 24';

const sameFn = i => i;
const ionFn = i => `ionicons ${ i }`;

const libMap = {
  'mdi-': i => `mdi ${ i }`,
  'icon-': sameFn, // fontawesome equiv
  'bt-': i => `bt ${ i }`,
  'eva-': i => `eva ${ i }`,
  'ion-md': ionFn,
  'ion-ios': ionFn,
  'ion-logo': ionFn,
  'iconfont ': sameFn,
  'ti-': i => `themify-icon ${ i }`,
  'bi-': i => `bootstrap-icons ${ i }`,
  'i-': sameFn // UnoCSS pure icons
};

const matMap = {
  o_: '-outlined',
  r_: '-round',
  s_: '-sharp'
};

const symMap = {
  sym_o_: '-outlined',
  sym_r_: '-rounded',
  sym_s_: '-sharp'
};

const libRE = new RegExp('^(' + Object.keys(libMap).join('|') + ')');
const matRE = new RegExp('^(' + Object.keys(matMap).join('|') + ')');
const symRE = new RegExp('^(' + Object.keys(symMap).join('|') + ')');
const mRE = /^[Mm]\s?[-+]?\.?\d/;
const imgRE = /^img:/;
const svgUseRE = /^svguse:/;
const ionRE = /^ion-/;
const faRE = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;

const __nuxt_component_1$1$1 = createComponent({
  name: 'QIcon',

  props: {
    ...useSizeProps,

    tag: {
      type: String,
      default: 'i'
    },

    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props);

    const classes = computed(() =>
      'q-icon'
      + (props.left === true ? ' on-left' : '') // TODO Qv3: drop this
      + (props.right === true ? ' on-right' : '')
      + (props.color !== void 0 ? ` text-${ props.color }` : '')
    );

    const type = computed(() => {
      let cls;
      let icon = props.name;

      if (icon === 'none' || !icon) {
        return { none: true }
      }

      if ($q.iconMapFn !== null) {
        const res = $q.iconMapFn(icon);
        if (res !== void 0) {
          if (res.icon !== void 0) {
            icon = res.icon;
            if (icon === 'none' || !icon) {
              return { none: true }
            }
          }
          else {
            return {
              cls: res.cls,
              content: res.content !== void 0
                ? res.content
                : ' '
            }
          }
        }
      }

      if (mRE.test(icon) === true) {
        const [ def, viewBox = defaultViewBox ] = icon.split('|');

        return {
          svg: true,
          viewBox,
          nodes: def.split('&&').map(path => {
            const [ d, style, transform ] = path.split('@@');
            return h('path', { style, d, transform })
          })
        }
      }

      if (imgRE.test(icon) === true) {
        return {
          img: true,
          src: icon.substring(4)
        }
      }

      if (svgUseRE.test(icon) === true) {
        const [ def, viewBox = defaultViewBox ] = icon.split('|');

        return {
          svguse: true,
          src: def.substring(7),
          viewBox
        }
      }

      let content = ' ';
      const matches = icon.match(libRE);

      if (matches !== null) {
        cls = libMap[ matches[ 1 ] ](icon);
      }
      else if (faRE.test(icon) === true) {
        cls = icon;
      }
      else if (ionRE.test(icon) === true) {
        cls = `ionicons ion-${ $q.platform.is.ios === true ? 'ios' : 'md' }${ icon.substring(3) }`;
      }
      else if (symRE.test(icon) === true) {
        // "notranslate" class is for Google Translate
        // to avoid tampering with Material Symbols ligature font
        //
        // Caution: To be able to add suffix to the class name,
        // keep the 'material-symbols' at the end of the string.
        cls = 'notranslate material-symbols';

        const matches = icon.match(symRE);
        if (matches !== null) {
          icon = icon.substring(6);
          cls += symMap[ matches[ 1 ] ];
        }

        content = icon;
      }
      else {
        // "notranslate" class is for Google Translate
        // to avoid tampering with Material Icons ligature font
        //
        // Caution: To be able to add suffix to the class name,
        // keep the 'material-icons' at the end of the string.
        cls = 'notranslate material-icons';

        const matches = icon.match(matRE);
        if (matches !== null) {
          icon = icon.substring(2);
          cls += matMap[ matches[ 1 ] ];
        }

        content = icon;
      }

      return {
        cls,
        content
      }
    });

    return () => {
      const data = {
        class: classes.value,
        style: sizeStyle.value,
        'aria-hidden': 'true',
      };

      if (type.value.none === true) {
        return h(props.tag, data, hSlot(slots.default))
      }

      if (type.value.img === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h('img', { src: type.value.src })
        ]))
      }

      if (type.value.svg === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h('svg', {
            viewBox: type.value.viewBox || '0 0 24 24'
          }, type.value.nodes)
        ]))
      }

      if (type.value.svguse === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h('svg', {
            viewBox: type.value.viewBox
          }, [
            h('use', { 'xlink:href': type.value.src })
          ])
        ]))
      }

      if (type.value.cls !== void 0) {
        data.class += ' ' + type.value.cls;
      }

      return h(props.tag, data, hMergeSlot(slots.default, [
        type.value.content
      ]))
    }
  }
});

const useSpinnerProps = {
  size: {
    type: [ String, Number ],
    default: '1em'
  },
  color: String
};

function useSpinner (props) {
  return {
    cSize: computed(() => (
      props.size in useSizeDefaults
        ? `${ useSizeDefaults[ props.size ] }px`
        : props.size
    )),

    classes: computed(() =>
      'q-spinner' + (props.color ? ` text-${ props.color }` : '')
    )
  }
}

const QSpinner = createComponent({
  name: 'QSpinner',

  props: {
    ...useSpinnerProps,

    thickness: {
      type: Number,
      default: 5
    }
  },

  setup (props) {
    const { cSize, classes } = useSpinner(props);

    return () => h('svg', {
      class: classes.value + ' q-spinner-mat',
      width: cSize.value,
      height: cSize.value,
      viewBox: '25 25 50 50'
    }, [
      h('circle', {
        class: 'path',
        cx: '50',
        cy: '50',
        r: '20',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': props.thickness,
        'stroke-miterlimit': '10'
      })
    ])
  }
});

const btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};

const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};

const formTypes = [ 'button', 'submit', 'reset' ];
const mediaTypeRE = /[^\s]\/[^\s]/;

const btnDesignOptions = [ 'flat', 'outline', 'push', 'unelevated' ];

function getBtnDesign (props, defaultValue) {
  if (props.flat === true) return 'flat'
  if (props.outline === true) return 'outline'
  if (props.push === true) return 'push'
  if (props.unelevated === true) return 'unelevated'
  return defaultValue
}

const nonRoundBtnProps = {
  ...useSizeProps,
  ...useRouterLinkNonMatchingProps,

  type: {
    type: String,
    default: 'button'
  },

  label: [ Number, String ],
  icon: String,
  iconRight: String,

  ...btnDesignOptions.reduce(
    (acc, val) => (acc[ val ] = Boolean) && acc,
    {}
  ),

  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,

  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,

  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,

  tabindex: [ Number, String ],

  ripple: {
    type: [ Boolean, Object ],
    default: true
  },

  align: {
    ...useAlignProps.align,
    default: 'center'
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};

const useBtnProps = {
  ...nonRoundBtnProps,
  round: Boolean
};

function useBtn (props) {
  const sizeStyle = useSize(props, defaultSizes);
  const alignClass = useAlign(props);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
    fallbackTag: 'button'
  });

  const style = computed(() => {
    const obj = props.fab === false && props.fabMini === false
      ? sizeStyle.value
      : {};

    return props.padding !== void 0
      ? Object.assign({}, obj, {
        padding: props.padding
          .split(/\s+/)
          .map(v => (v in btnPadding ? btnPadding[ v ] + 'px' : v))
          .join(' '),
        minWidth: '0',
        minHeight: '0'
      })
      : obj
  });

  const isRounded = computed(() =>
    props.rounded === true || props.fab === true || props.fabMini === true
  );

  const isActionable = computed(() =>
    props.disable !== true && props.loading !== true
  );

  const tabIndex = computed(() => (
    isActionable.value === true ? props.tabindex || 0 : -1
  ));

  const design = computed(() => getBtnDesign(props, 'standard'));

  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };

    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    }
    else if (formTypes.includes(props.type) === true) {
      acc.type = props.type;
    }

    if (linkTag.value === 'a') {
      if (props.disable === true) {
        acc[ 'aria-disabled' ] = 'true';
      }
      else if (acc.href === void 0) {
        acc.role = 'button';
      }

      if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
        acc.type = props.type;
      }
    }
    else if (props.disable === true) {
      acc.disabled = '';
      acc[ 'aria-disabled' ] = 'true';
    }

    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': props.percentage
      });
    }

    return acc
  });

  const classes = computed(() => {
    let colors;

    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${ props.textColor || props.color }`;
      }
      else {
        colors = `bg-${ props.color } text-${ props.textColor || 'white' }`;
      }
    }
    else if (props.textColor) {
      colors = `text-${ props.textColor }`;
    }

    const shape = props.round === true
      ? 'round'
      : `rectangle${ isRounded.value === true ? ' q-btn--rounded' : (props.square === true ? ' q-btn--square' : '') }`;

    return `q-btn--${ design.value } q-btn--${ shape }`
      + (colors !== void 0 ? ' ' + colors : '')
      + (isActionable.value === true ? ' q-btn--actionable q-focusable q-hoverable' : (props.disable === true ? ' disabled' : ''))
      + (props.fab === true ? ' q-btn--fab' : (props.fabMini === true ? ' q-btn--fab-mini' : ''))
      + (props.noCaps === true ? ' q-btn--no-uppercase' : '')
      + (props.dense === true ? ' q-btn--dense' : '')
      + (props.stretch === true ? ' no-border-radius self-stretch' : '')
      + (props.glossy === true ? ' glossy' : '')
      + (props.square ? ' q-btn--square' : '')
  });

  const innerClasses = computed(() =>
    alignClass.value + (props.stack === true ? ' column' : ' row')
    + (props.noWrap === true ? ' no-wrap text-no-wrap' : '')
    + (props.loading === true ? ' q-btn__content--hidden' : '')
  );

  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  }
}

const { passiveCapture } = listenOpts;

let
  touchTarget = null,
  keyboardTarget = null,
  mouseTarget = null;

const __nuxt_component_1$1 = createComponent({
  name: 'QBtn',

  props: {
    ...useBtnProps,

    percentage: Number,
    darkPercentage: Boolean,

    onTouchstart: [ Function, Array ]
  },

  emits: [ 'click', 'keydown', 'mousedown', 'keyup' ],

  setup (props, { slots, emit }) {
    const { proxy } = getCurrentInstance();

    const {
      classes, style, innerClasses,
      attributes,
      hasLink, linkTag, navigateOnClick,
      isActionable
    } = useBtn(props);

    const rootRef = ref(null);
    const blurTargetRef = ref(null);

    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;

    const hasLabel = computed(() =>
      props.label !== void 0 && props.label !== null && props.label !== ''
    );

    const ripple = computed(() => (
      props.disable === true || props.ripple === false
        ? false
        : {
            keyCodes: hasLink.value === true ? [ 13, 32 ] : [ 13 ],
            ...(props.ripple === true ? {} : props.ripple)
          }
    ));

    const rippleProps = computed(() => ({ center: props.round }));

    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0
        ? { transition: 'transform 0.6s', transform: `translateX(${ val - 100 }%)` }
        : {}
    });

    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        }
      }

      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown,
          onMousedown
        };

        if (proxy.$q.platform.has.touch === true) {
          const suffix = props.onTouchstart !== void 0
            ? ''
            : 'Passive';

          acc[ `onTouchstart${ suffix }` ] = onTouchstart;
        }

        return acc
      }

      return {
        // needed; especially for disabled <a> tags
        onClick: stopAndPrevent
      }
    });

    const nodeProps = computed(() => ({
      ref: rootRef,
      class: 'q-btn q-btn-item non-selectable no-outline ' + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));

    function onClick (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      if (e !== void 0) {
        if (e.defaultPrevented === true) return

        const el = document.activeElement;
        // focus button if it came from ENTER on form
        // prevent the new submit (already done)
        if (
          props.type === 'submit'
          && el !== document.body
          && rootRef.value.contains(el) === false
          // required for iOS and desktop Safari
          && el.contains(rootRef.value) === false
        ) {
          e.qAvoidFocus !== true && rootRef.value.focus();

          const onClickCleanup = () => {
            document.removeEventListener('keydown', stopAndPrevent, true);
            document.removeEventListener('keyup', onClickCleanup, passiveCapture);
            rootRef.value?.removeEventListener('blur', onClickCleanup, passiveCapture);
          };

          document.addEventListener('keydown', stopAndPrevent, true);
          document.addEventListener('keyup', onClickCleanup, passiveCapture);
          rootRef.value.addEventListener('blur', onClickCleanup, passiveCapture);
        }
      }

      navigateOnClick(e);
    }

    function onKeydown (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      emit('keydown', e);

      if (isKeyCode(e, [ 13, 32 ]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();

        if (e.defaultPrevented !== true) {
          // focus external button if the focus helper was focused before
          e.qAvoidFocus !== true && rootRef.value.focus();

          keyboardTarget = rootRef.value;
          rootRef.value.classList.add('q-btn--active');
          document.addEventListener('keyup', onPressEnd, true);
          rootRef.value.addEventListener('blur', onPressEnd, passiveCapture);
        }

        stopAndPrevent(e);
      }
    }

    function onTouchstart (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      emit('touchstart', e);

      if (e.defaultPrevented === true) return

      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;

        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener('touchcancel', onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener('touchend', onPressEnd, passiveCapture);
      }

      // avoid duplicated mousedown event
      // triggering another early ripple
      avoidMouseRipple = true;
      mouseTimer !== null && clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        mouseTimer = null;
        avoidMouseRipple = false;
      }, 200);
    }

    function onMousedown (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      e.qSkipRipple = avoidMouseRipple === true;
      emit('mousedown', e);

      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add('q-btn--active');
        document.addEventListener('mouseup', onPressEnd, passiveCapture);
      }
    }

    function onPressEnd (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      // needed for IE (because it emits blur when focusing button from focus helper)
      if (
        e?.type === 'blur'
        && document.activeElement === rootRef.value
      ) return

      if (e?.type === 'keyup') {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [ 13, 32 ]) === true) {
          // for click trigger
          const evt = new MouseEvent('click', e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);

          stopAndPrevent(e);

          // for ripple
          e.qKeyEvent = true;
        }

        emit('keyup', e);
      }

      cleanup();
    }

    function cleanup (destroying) {
      const blurTarget = blurTargetRef.value;

      if (
        destroying !== true
        && (touchTarget === rootRef.value || mouseTarget === rootRef.value)
        && blurTarget !== null
        && blurTarget !== document.activeElement
      ) {
        blurTarget.setAttribute('tabindex', -1);
        blurTarget.focus();
      }

      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener('touchcancel', onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener('touchend', onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }

      if (mouseTarget === rootRef.value) {
        document.removeEventListener('mouseup', onPressEnd, passiveCapture);
        mouseTarget = null;
      }

      if (keyboardTarget === rootRef.value) {
        document.removeEventListener('keyup', onPressEnd, true);
        rootRef.value?.removeEventListener('blur', onPressEnd, passiveCapture);
        keyboardTarget = null;
      }

      rootRef.value?.classList.remove('q-btn--active');
    }

    function onLoadingEvt (evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }

    onBeforeUnmount(() => {
      cleanup(true);
    });

    // expose public methods
    Object.assign(proxy, {
      click: e => {
        if (isActionable.value === true) {
          onClick(e);
        }
      }
    });

    return () => {
      let inner = [];

      props.icon !== void 0 && inner.push(
        h(__nuxt_component_1$1$1, {
          name: props.icon,
          left: props.stack !== true && hasLabel.value === true,
          role: 'img'
        })
      );

      hasLabel.value === true && inner.push(
        h('span', { class: 'block' }, [ props.label ])
      );

      inner = hMergeSlot(slots.default, inner);

      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(__nuxt_component_1$1$1, {
            name: props.iconRight,
            right: props.stack !== true && hasLabel.value === true,
            role: 'img'
          })
        );
      }

      const child = [
        h('span', {
          class: 'q-focus-helper',
          ref: blurTargetRef
        })
      ];

      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h('span', {
            class: 'q-btn__progress absolute-full overflow-hidden' + (props.darkPercentage === true ? ' q-btn__progress--dark' : '')
          }, [
            h('span', {
              class: 'q-btn__progress-indicator fit block',
              style: percentageStyle.value
            })
          ])
        );
      }

      child.push(
        h('span', {
          class: 'q-btn__content text-center col items-center q-anchor--skip ' + innerClasses.value
        }, inner)
      );

      props.loading !== null && child.push(
        h(Transition, {
          name: 'q-transition--fade'
        }, () => (
          props.loading === true
            ? [
                h('span', {
                  key: 'loading',
                  class: 'absolute-full flex flex-center'
                }, slots.loading !== void 0 ? slots.loading() : [ h(QSpinner) ])
              ]
            : null
        ))
      );

      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [ [
          Ripple,
          ripple.value,
          void 0,
          rippleProps.value
        ] ]
      )
    }
  }
});

export { QSpinner as Q, __nuxt_component_1$1 as _, __nuxt_component_1$1$1 as a, __nuxt_component_2$1 as b, useAlign as c, useAlignProps as u };
//# sourceMappingURL=QBtn.mjs.map
