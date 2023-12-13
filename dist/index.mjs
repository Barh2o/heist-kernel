// src/index.ts
import "winbox";

// src/components/VueWinBox.ts
import {
  Teleport,
  defineComponent,
  h,
  onMounted,
  onScopeDispose,
  ref,
  toRaw
} from "vue";
import { nanoid } from "nanoid";
var VueWinBox = defineComponent({
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
    const selector = `vuewinbox-${nanoid()}`;
    const winbox = ref(null);
    const initialized = ref(false);
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
    onMounted(() => {
      if (!props.openOnMount)
        return;
      initialize();
    });
    onScopeDispose(() => {
      toRaw(winbox.value)?.close();
    });
    return () => initialized.value ? h(
      Teleport,
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
export {
  VueWinBox,
  VueWinBox as default,
  useWinBox
};
