declare module "react-native-display" {
    
    import {StyleProp, ViewStyle} from "react-native";
    import {Component} from "react";
    
    export type Animation =
        'bounce' |
        'flash' |
        'jello' |
        'pulse' |
        'rotate' |
        'rubberBand' |
        'shake' |
        'swing' |
        'tada' |
        'wobble' |
        'bounceIn' |
        'bounceInDown' |
        'bounceInUp' |
        'bounceInLeft' |
        'bounceInRight' |
        'bounceOut' |
        'bounceOutDown' |
        'bounceOutUp' |
        'bounceOutLeft' |
        'bounceOutRight' |
        'fadeIn' |
        'fadeInDown' |
        'fadeInDownBig' |
        'fadeInUp' |
        'fadeInUpBig' |
        'fadeInLeft' |
        'fadeInLeftBig' |
        'fadeInRight' |
        'fadeInRightBig' |
        'fadeOut' |
        'fadeOutDown' |
        'fadeOutDownBig' |
        'fadeOutUp' |
        'fadeOutUpBig' |
        'fadeOutLeft' |
        'fadeOutLeftBig' |
        'fadeOutRight' |
        'fadeOutRightBig' |
        'flipInX' |
        'flipInY' |
        'flipOutX' |
        'flipOutY' |
        'lightSpeedIn' |
        'lightSpeedOut' |
        'slideInDown' |
        'slideInUp' |
        'slideInLeft' |
        'slideInRight' |
        'slideOutDown' |
        'slideOutUp' |
        'slideOutLeft' |
        'slideOutRight' |
        'zoomIn' |
        'zoomInDown' |
        'zoomInUp' |
        'zoomInLeft' |
        'zoomInRight' |
        'zoomOut' |
        'zoomOutDown' |
        'zoomOutUp' |
        'zoomOutLeft' |
        'zoomOutRight';

    export interface DisplayProps {
        /**
         * true to render. false to not render.
         * Default: true.
         */
        enable?: boolean;
        /**
         * Default duration for enter and exit animations.
         * Default: 250.
         */
        defaultDuration?: number;
        /**
         * Duration for enter animation.
         * Default: 250.
         */
        enterDuration?: number;
        /**
         * Duration for exit animation.
         * Default: 250.
         */
        exitDuration?: number;
        /**
         * Animation name to run when render (enable=true). Example: enter='fadeIn'.
         * Default: None
         */
        enter?: Animation;
        /**
         * Animation name to run when not render (enable=false). Example: exit='fadeOut'.
         * Default: None
         */
        exit?: Animation;
        /**
         * Same react-native style for View.
         * Default: None
         */
        style?: StyleProp<ViewStyle>;
        /**
         * When enable=false. 
         * If true components will hide only (componentWillUnmount() will not fire). 
         * If false components will not render at all. Use it on complex components or on modules that required init on everytime that they are mount (for example: react-native-camera).
         * Default: false;
         */
        keepAlive?: boolean;
    }

    export default class Display extends Component<DisplayProps> {
    }
}
