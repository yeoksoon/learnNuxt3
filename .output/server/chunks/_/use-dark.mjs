import { computed } from 'vue';

const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};

function useDark (props, $q) {
  // return isDark
  return computed(() => (
    props.dark === null
      ? $q.dark.isActive
      : props.dark
  ))
}

export { useDark as a, useDarkProps as u };
//# sourceMappingURL=use-dark.mjs.map
