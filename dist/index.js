"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  VueWinBox: () => VueWinBox,
  default: () => VueWinBox,
  useWinBox: () => useWinBox
});
module.exports = __toCommonJS(src_exports);
var import_winbox = require("winbox");

// src/components/VueWinBox.ts
var import_vue = require("vue");
var import_nanoid = require("nanoid");
var VueWinBox = (0, import_vue.defineComponent)({
  props: {
    options: {
      type: Object,
      required: true
    },
    openOnMount: {
      type: Boolean,
      default: true
    }
  },
  emits: ["move", "resize", "close", "focus", "blur"],
  setup(props, { slots, emit, expose }) {
    const selector = `vuewinbox-${(0, import_nanoid.nanoid)()}`;
    const winbox = (0, import_vue.ref)(null);
    const initialized = (0, import_vue.ref)(false);
    expose({
      selector,
      winbox,
      initialized,
      initialize
    });
    function initialize() {
      if (initialized.value) {
        console.error("Please close the window first before reinitializing.");
        return;
      }
      winbox.value = new WinBox({
        onresize: (width, height) => {
          emit("resize", {
            id: winbox.value?.id,
            width,
            height
          });
        },
        onclose: () => {
          emit("close", { id: winbox.value?.id });
          initialized.value = false;
          winbox.value = null;
          return false;
        },
        onfocus: () => {
          emit("focus", { id: winbox.value?.id });
        },
        onblur: () => {
          emit("blur", { id: winbox.value?.id });
        },
        onmove: (x, y) => {
          emit("move", {
            id: winbox.value?.id,
            x,
            y
          });
        },
        ...props.options,
        id: selector
      });
      initialized.value = true;
    }
    (0, import_vue.onMounted)(() => {
      if (!props.openOnMount)
        return;
      initialize();
    });
    (0, import_vue.onScopeDispose)(() => {
      (0, import_vue.toRaw)(winbox.value)?.close();
    });
    return () => initialized.value ? (0, import_vue.h)(
      import_vue.Teleport,
      {
        to: `#${selector} .wb-body`
      },
      slots.default?.()
    ) : null;
  }
});

// src/composables/useWinBox.ts
function useWinBox() {
  return (options) => new WinBox(options);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VueWinBox,
  useWinBox
});
