import * as vue from 'vue';
import { PropType } from 'vue';
import * as winbox from 'winbox';

declare const VueWinBox: vue.DefineComponent<{
    options: {
        type: PropType<winbox.Params>;
        required: true;
    };
    openOnMount: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | null, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("move" | "resize" | "close" | "focus" | "blur")[], "move" | "resize" | "close" | "focus" | "blur", vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    options: {
        type: PropType<winbox.Params>;
        required: true;
    };
    openOnMount: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onMove?: ((...args: any[]) => any) | undefined;
    onResize?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    openOnMount: boolean;
}, {}>;

declare const WinBox: WinBox.WinBoxConstructor;
declare function useWinBox(): (options: WinBox.Params) => winbox;

export { VueWinBox, VueWinBox as default, useWinBox };
