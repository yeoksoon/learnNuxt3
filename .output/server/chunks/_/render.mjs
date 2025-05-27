function hSlot (slot, otherwise) {
  return slot !== void 0
    ? slot() || otherwise
    : otherwise
}

function hUniqueSlot (slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice()
    }
  }

  return otherwise
}

/**
 * Source definitely exists,
 * so it's merged with the possible slot
 */
function hMergeSlot (slot, source) {
  return slot !== void 0
    ? source.concat(slot())
    : source
}

export { hUniqueSlot as a, hMergeSlot as b, hSlot as h };
//# sourceMappingURL=render.mjs.map
