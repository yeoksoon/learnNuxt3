import { getCurrentInstance, inject, computed, h } from 'vue';
import { c as createComponent, l as layoutKey, e as emptyRenderFn, d as pageContainerKey } from '../build/server.mjs';
import { h as hSlot } from './render.mjs';

const __nuxt_component_0 = createComponent({
  name: 'QPage',

  props: {
    padding: Boolean,
    styleFn: Function
  },

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QPage needs to be a deep child of QLayout');
      return emptyRenderFn
    }

    const $pageContainer = inject(pageContainerKey, emptyRenderFn);
    if ($pageContainer === emptyRenderFn) {
      console.error('QPage needs to be child of QPageContainer');
      return emptyRenderFn
    }

    const style = computed(() => {
      const offset
        = ($layout.header.space === true ? $layout.header.size : 0)
        + ($layout.footer.space === true ? $layout.footer.size : 0);

      if (typeof props.styleFn === 'function') {
        const height = $layout.isContainer.value === true
          ? $layout.containerHeight.value
          : $q.screen.height;

        return props.styleFn(offset, height)
      }

      return {
        minHeight: $layout.isContainer.value === true
          ? ($layout.containerHeight.value - offset) + 'px'
          : (
              $q.screen.height === 0
                ? (offset !== 0 ? `calc(100vh - ${ offset }px)` : '100vh')
                : ($q.screen.height - offset) + 'px'
            )
      }
    });

    const classes = computed(() =>
      `q-page${ props.padding === true ? ' q-layout-padding' : '' }`
    );

    return () => h('main', {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default))
  }
});

export { __nuxt_component_0 as _ };
//# sourceMappingURL=QPage.mjs.map
