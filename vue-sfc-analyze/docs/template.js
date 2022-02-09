import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("p", null, "count: " + _toDisplayString($setup.count), 1 /* TEXT */),
    _createElementVNode("p", null, "double count: " + _toDisplayString($setup.doubleCount), 1 /* TEXT */),
    _createElementVNode("button", { onClick: $setup.plus }, "增加"),
    _createElementVNode("button", { onClick: $setup.reduce }, "减少")
  ], 64 /* STABLE_FRAGMENT */))
}