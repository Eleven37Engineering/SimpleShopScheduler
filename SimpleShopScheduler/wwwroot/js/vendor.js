﻿@charset "UTF-8";

/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license - http://opensource.org/licenses/MIT

Copyright (c) 2015 Daniel Eden
*/

.animated {
    -webkit - animation - duration: 1s;
    animation - duration: 1s;
    -webkit - animation - fill - mode: both;
    animation - fill - mode: both;
}

.animated.infinite {
    -webkit - animation - iteration - count: infinite;
    animation - iteration - count: infinite;
}

.animated.hinge {
    -webkit - animation - duration: 2s;
    animation - duration: 2s;
}

.animated.bounceIn,
.animated.bounceOut {
    -webkit - animation - duration: .75s;
    animation - duration: .75s;
}

.animated.flipOutX,
.animated.flipOutY {
    -webkit - animation - duration: .75s;
    animation - duration: .75s;
}

@-webkit - keyframes bounce {
    from, 20 %, 53 %, 80 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

40 %, 43 % {
    -webkit - animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
-webkit - transform: translate3d(0, -30px, 0);
transform: translate3d(0, -30px, 0);
  }

70 % {
    -webkit - animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
-webkit - transform: translate3d(0, -15px, 0);
transform: translate3d(0, -15px, 0);
  }

90 % {
    -webkit - transform: translate3d(0, -4px, 0);
transform: translate3d(0, -4px, 0);
  }
}

@keyframes bounce {
    from, 20 %, 53 %, 80 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

40 %, 43 % {
    -webkit - animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
-webkit - transform: translate3d(0, -30px, 0);
transform: translate3d(0, -30px, 0);
  }

70 % {
    -webkit - animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
animation - timing - function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
-webkit - transform: translate3d(0, -15px, 0);
transform: translate3d(0, -15px, 0);
  }

90 % {
    -webkit - transform: translate3d(0, -4px, 0);
transform: translate3d(0, -4px, 0);
  }
}

.bounce {
    -webkit - animation - name: bounce;
    animation - name: bounce;
    -webkit - transform - origin: center bottom;
    transform - origin: center bottom;
}

@-webkit - keyframes flash {
    from, 50 %, 100 % {
        opacity: 1;
    }

    25 %, 75 % {
        opacity: 0;
    }
}

@keyframes flash {
    from, 50 %, 100 % {
        opacity: 1;
    }

    25 %, 75 % {
        opacity: 0;
    }
}

.flash {
    -webkit - animation - name: flash;
    animation - name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit - keyframes pulse {
    from {
        -webkit - transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    50 % {
    -webkit - transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
}

100 % {
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
    from {
        -webkit - transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    50 % {
    -webkit - transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
}

100 % {
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

.pulse {
    -webkit - animation - name: pulse;
    animation - name: pulse;
}

@-webkit - keyframes rubberBand {
    from {
        -webkit - transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30 % {
    -webkit - transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
}

40 % {
    -webkit - transform: scale3d(0.75, 1.25, 1);
transform: scale3d(0.75, 1.25, 1);
  }

50 % {
    -webkit - transform: scale3d(1.15, 0.85, 1);
transform: scale3d(1.15, 0.85, 1);
  }

65 % {
    -webkit - transform: scale3d(.95, 1.05, 1);
transform: scale3d(.95, 1.05, 1);
  }

75 % {
    -webkit - transform: scale3d(1.05, .95, 1);
transform: scale3d(1.05, .95, 1);
  }

100 % {
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

@keyframes rubberBand {
    from {
        -webkit - transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30 % {
    -webkit - transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
}

40 % {
    -webkit - transform: scale3d(0.75, 1.25, 1);
transform: scale3d(0.75, 1.25, 1);
  }

50 % {
    -webkit - transform: scale3d(1.15, 0.85, 1);
transform: scale3d(1.15, 0.85, 1);
  }

65 % {
    -webkit - transform: scale3d(.95, 1.05, 1);
transform: scale3d(.95, 1.05, 1);
  }

75 % {
    -webkit - transform: scale3d(1.05, .95, 1);
transform: scale3d(1.05, .95, 1);
  }

100 % {
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
    -webkit - animation - name: rubberBand;
    animation - name: rubberBand;
}

@-webkit - keyframes shake {
    from, 100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

10 %, 30 %, 50 %, 70 %, 90 % {
    -webkit - transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
  }

20 %, 40 %, 60 %, 80 % {
    -webkit - transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
    from, 100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

10 %, 30 %, 50 %, 70 %, 90 % {
    -webkit - transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
  }

20 %, 40 %, 60 %, 80 % {
    -webkit - transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
  }
}

.shake {
    -webkit - animation - name: shake;
    animation - name: shake;
}

@-webkit - keyframes swing {
    20 % {
    -webkit - transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
}

40 % {
    -webkit - transform: rotate3d(0, 0, 1, -10deg);
transform: rotate3d(0, 0, 1, -10deg);
  }

60 % {
    -webkit - transform: rotate3d(0, 0, 1, 5deg);
transform: rotate3d(0, 0, 1, 5deg);
  }

80 % {
    -webkit - transform: rotate3d(0, 0, 1, -5deg);
transform: rotate3d(0, 0, 1, -5deg);
  }

100 % {
    -webkit - transform: rotate3d(0, 0, 1, 0deg);
transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
    20 % {
    -webkit - transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
}

40 % {
    -webkit - transform: rotate3d(0, 0, 1, -10deg);
transform: rotate3d(0, 0, 1, -10deg);
  }

60 % {
    -webkit - transform: rotate3d(0, 0, 1, 5deg);
transform: rotate3d(0, 0, 1, 5deg);
  }

80 % {
    -webkit - transform: rotate3d(0, 0, 1, -5deg);
transform: rotate3d(0, 0, 1, -5deg);
  }

100 % {
    -webkit - transform: rotate3d(0, 0, 1, 0deg);
transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
    -webkit - transform - origin: top center;
    transform - origin: top center;
    -webkit - animation - name: swing;
    animation - name: swing;
}

@-webkit - keyframes tada {
    from {
        -webkit - transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    10 %, 20 % {
    -webkit - transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
}

30 %, 50 %, 70 %, 90 % {
    -webkit - transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

40 %, 60 %, 80 % {
    -webkit - transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

100 % {
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
    from {
        -webkit - transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    10 %, 20 % {
    -webkit - transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
}

30 %, 50 %, 70 %, 90 % {
    -webkit - transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

40 %, 60 %, 80 % {
    -webkit - transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

100 % {
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

.tada {
    -webkit - animation - name: tada;
    animation - name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit - keyframes wobble {
    from {
        -webkit - transform: none;
        transform: none;
    }

    15 % {
    -webkit - transform: translate3d(-25 %, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25 %, 0, 0) rotate3d(0, 0, 1, -5deg);
}

30 % {
    -webkit - transform: translate3d(20 %, 0, 0) rotate3d(0, 0, 1, 3deg);
transform: translate3d(20 %, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

45 % {
    -webkit - transform: translate3d(-15 %, 0, 0) rotate3d(0, 0, 1, -3deg);
transform: translate3d(-15 %, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

60 % {
    -webkit - transform: translate3d(10 %, 0, 0) rotate3d(0, 0, 1, 2deg);
transform: translate3d(10 %, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

75 % {
    -webkit - transform: translate3d(-5 %, 0, 0) rotate3d(0, 0, 1, -1deg);
transform: translate3d(-5 %, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

@keyframes wobble {
    from {
        -webkit - transform: none;
        transform: none;
    }

    15 % {
    -webkit - transform: translate3d(-25 %, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25 %, 0, 0) rotate3d(0, 0, 1, -5deg);
}

30 % {
    -webkit - transform: translate3d(20 %, 0, 0) rotate3d(0, 0, 1, 3deg);
transform: translate3d(20 %, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

45 % {
    -webkit - transform: translate3d(-15 %, 0, 0) rotate3d(0, 0, 1, -3deg);
transform: translate3d(-15 %, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

60 % {
    -webkit - transform: translate3d(10 %, 0, 0) rotate3d(0, 0, 1, 2deg);
transform: translate3d(10 %, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

75 % {
    -webkit - transform: translate3d(-5 %, 0, 0) rotate3d(0, 0, 1, -1deg);
transform: translate3d(-5 %, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

.wobble {
    -webkit - animation - name: wobble;
    animation - name: wobble;
}

@-webkit - keyframes jello {
    from, 11.1 %, 100 % {
    -webkit - transform: none;
    transform: none;
}

22.2 % {
    -webkit - transform: skewX(-12.5deg) skewY(-12.5deg);
transform: skewX(-12.5deg) skewY(-12.5deg);
  }

33.3 % {
    -webkit - transform: skewX(6.25deg) skewY(6.25deg);
transform: skewX(6.25deg) skewY(6.25deg);
  }

44.4 % {
    -webkit - transform: skewX(-3.125deg) skewY(-3.125deg);
transform: skewX(-3.125deg) skewY(-3.125deg);
  }

55.5 % {
    -webkit - transform: skewX(1.5625deg) skewY(1.5625deg);
transform: skewX(1.5625deg) skewY(1.5625deg);
  }

66.6 % {
    -webkit - transform: skewX(-0.78125deg) skewY(-0.78125deg);
transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

77.7 % {
    -webkit - transform: skewX(0.390625deg) skewY(0.390625deg);
transform: skewX(0.390625deg) skewY(0.390625deg);
  }

88.8 % {
    -webkit - transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

@keyframes jello {
    from, 11.1 %, 100 % {
    -webkit - transform: none;
    transform: none;
}

22.2 % {
    -webkit - transform: skewX(-12.5deg) skewY(-12.5deg);
transform: skewX(-12.5deg) skewY(-12.5deg);
  }

33.3 % {
    -webkit - transform: skewX(6.25deg) skewY(6.25deg);
transform: skewX(6.25deg) skewY(6.25deg);
  }

44.4 % {
    -webkit - transform: skewX(-3.125deg) skewY(-3.125deg);
transform: skewX(-3.125deg) skewY(-3.125deg);
  }

55.5 % {
    -webkit - transform: skewX(1.5625deg) skewY(1.5625deg);
transform: skewX(1.5625deg) skewY(1.5625deg);
  }

66.6 % {
    -webkit - transform: skewX(-0.78125deg) skewY(-0.78125deg);
transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

77.7 % {
    -webkit - transform: skewX(0.390625deg) skewY(0.390625deg);
transform: skewX(0.390625deg) skewY(0.390625deg);
  }

88.8 % {
    -webkit - transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.jello {
    -webkit - animation - name: jello;
    animation - name: jello;
    -webkit - transform - origin: center;
    transform - origin: center;
}

@-webkit - keyframes bounceIn {
    from, 20 %, 40 %, 60 %, 80 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

0 % {
    opacity: 0;
    -webkit - transform: scale3d(.3, .3, .3);
transform: scale3d(.3, .3, .3);
  }

20 % {
    -webkit - transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
  }

40 % {
    -webkit - transform: scale3d(.9, .9, .9);
transform: scale3d(.9, .9, .9);
  }

60 % {
    opacity: 1;
    -webkit - transform: scale3d(1.03, 1.03, 1.03);
transform: scale3d(1.03, 1.03, 1.03);
  }

80 % {
    -webkit - transform: scale3d(.97, .97, .97);
transform: scale3d(.97, .97, .97);
  }

100 % {
    opacity: 1;
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceIn {
    from, 20 %, 40 %, 60 %, 80 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

0 % {
    opacity: 0;
    -webkit - transform: scale3d(.3, .3, .3);
transform: scale3d(.3, .3, .3);
  }

20 % {
    -webkit - transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
  }

40 % {
    -webkit - transform: scale3d(.9, .9, .9);
transform: scale3d(.9, .9, .9);
  }

60 % {
    opacity: 1;
    -webkit - transform: scale3d(1.03, 1.03, 1.03);
transform: scale3d(1.03, 1.03, 1.03);
  }

80 % {
    -webkit - transform: scale3d(.97, .97, .97);
transform: scale3d(.97, .97, .97);
  }

100 % {
    opacity: 1;
    -webkit - transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
    -webkit - animation - name: bounceIn;
    animation - name: bounceIn;
}

@-webkit - keyframes bounceInDown {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

0 % {
    opacity: 0;
    -webkit - transform: translate3d(0, -3000px, 0);
transform: translate3d(0, -3000px, 0);
  }

60 % {
    opacity: 1;
    -webkit - transform: translate3d(0, 25px, 0);
transform: translate3d(0, 25px, 0);
  }

75 % {
    -webkit - transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
  }

90 % {
    -webkit - transform: translate3d(0, 5px, 0);
transform: translate3d(0, 5px, 0);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

@keyframes bounceInDown {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

0 % {
    opacity: 0;
    -webkit - transform: translate3d(0, -3000px, 0);
transform: translate3d(0, -3000px, 0);
  }

60 % {
    opacity: 1;
    -webkit - transform: translate3d(0, 25px, 0);
transform: translate3d(0, 25px, 0);
  }

75 % {
    -webkit - transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
  }

90 % {
    -webkit - transform: translate3d(0, 5px, 0);
transform: translate3d(0, 5px, 0);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

.bounceInDown {
    -webkit - animation - name: bounceInDown;
    animation - name: bounceInDown;
}

@-webkit - keyframes bounceInLeft {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

0 % {
    opacity: 0;
    -webkit - transform: translate3d(-3000px, 0, 0);
transform: translate3d(-3000px, 0, 0);
  }

60 % {
    opacity: 1;
    -webkit - transform: translate3d(25px, 0, 0);
transform: translate3d(25px, 0, 0);
  }

75 % {
    -webkit - transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
  }

90 % {
    -webkit - transform: translate3d(5px, 0, 0);
transform: translate3d(5px, 0, 0);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

@keyframes bounceInLeft {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

0 % {
    opacity: 0;
    -webkit - transform: translate3d(-3000px, 0, 0);
transform: translate3d(-3000px, 0, 0);
  }

60 % {
    opacity: 1;
    -webkit - transform: translate3d(25px, 0, 0);
transform: translate3d(25px, 0, 0);
  }

75 % {
    -webkit - transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
  }

90 % {
    -webkit - transform: translate3d(5px, 0, 0);
transform: translate3d(5px, 0, 0);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

.bounceInLeft {
    -webkit - animation - name: bounceInLeft;
    animation - name: bounceInLeft;
}

@-webkit - keyframes bounceInRight {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

from {
    opacity: 0;
    -webkit - transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
}

60 % {
    opacity: 1;
    -webkit - transform: translate3d(-25px, 0, 0);
transform: translate3d(-25px, 0, 0);
  }

75 % {
    -webkit - transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
  }

90 % {
    -webkit - transform: translate3d(-5px, 0, 0);
transform: translate3d(-5px, 0, 0);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

@keyframes bounceInRight {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

from {
    opacity: 0;
    -webkit - transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
}

60 % {
    opacity: 1;
    -webkit - transform: translate3d(-25px, 0, 0);
transform: translate3d(-25px, 0, 0);
  }

75 % {
    -webkit - transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
  }

90 % {
    -webkit - transform: translate3d(-5px, 0, 0);
transform: translate3d(-5px, 0, 0);
  }

100 % {
    -webkit - transform: none;
transform: none;
  }
}

.bounceInRight {
    -webkit - animation - name: bounceInRight;
    animation - name: bounceInRight;
}

@-webkit - keyframes bounceInUp {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

from {
    opacity: 0;
    -webkit - transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
}

60 % {
    opacity: 1;
    -webkit - transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
  }

75 % {
    -webkit - transform: translate3d(0, 10px, 0);
transform: translate3d(0, 10px, 0);
  }

90 % {
    -webkit - transform: translate3d(0, -5px, 0);
transform: translate3d(0, -5px, 0);
  }

100 % {
    -webkit - transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
    from, 60 %, 75 %, 90 %, 100 % {
    -webkit - animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation - timing - function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

from {
    opacity: 0;
    -webkit - transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
}

60 % {
    opacity: 1;
    -webkit - transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
  }

75 % {
    -webkit - transform: translate3d(0, 10px, 0);
transform: translate3d(0, 10px, 0);
  }

90 % {
    -webkit - transform: translate3d(0, -5px, 0);
transform: translate3d(0, -5px, 0);
  }

100 % {
    -webkit - transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
    -webkit - animation - name: bounceInUp;
    animation - name: bounceInUp;
}

@-webkit - keyframes bounceOut {
    20 % {
    -webkit - transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
}

50 %, 55 % {
    opacity: 1;
    -webkit - transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
  }

100 % {
    opacity: 0;
    -webkit - transform: scale3d(.3, .3, .3);
transform: scale3d(.3, .3, .3);
  }
}

@keyframes bounceOut {
    20 % {
    -webkit - transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
}

50 %, 55 % {
    opacity: 1;
    -webkit - transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
  }

100 % {
    opacity: 0;
    -webkit - transform: scale3d(.3, .3, .3);
transform: scale3d(.3, .3, .3);
  }
}

.bounceOut {
    -webkit - animation - name: bounceOut;
    animation - name: bounceOut;
}

@-webkit - keyframes bounceOutDown {
    20 % {
    -webkit - transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
}

40 %, 45 % {
    opacity: 1;
    -webkit - transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
  }

100 % {
    opacity: 0;
    -webkit - transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
  }
}

@keyframes bounceOutDown {
    20 % {
    -webkit - transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
}

40 %, 45 % {
    opacity: 1;
    -webkit - transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
  }

100 % {
    opacity: 0;
    -webkit - transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
    -webkit - animation - name: bounceOutDown;
    animation - name: bounceOutDown;
}

@-webkit - keyframes bounceOutLeft {
    20 % {
        opacity: 1;
    -webkit - transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes bounceOutLeft {
    20 % {
        opacity: 1;
    -webkit - transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
    -webkit - animation - name: bounceOutLeft;
    animation - name: bounceOutLeft;
}

@-webkit - keyframes bounceOutRight {
    20 % {
        opacity: 1;
    -webkit - transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
  }
}

@keyframes bounceOutRight {
    20 % {
        opacity: 1;
    -webkit - transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
    -webkit - animation - name: bounceOutRight;
    animation - name: bounceOutRight;
}

@-webkit - keyframes bounceOutUp {
    20 % {
    -webkit - transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
}

40 %, 45 % {
    opacity: 1;
    -webkit - transform: translate3d(0, 20px, 0);
transform: translate3d(0, 20px, 0);
  }

100 % {
    opacity: 0;
    -webkit - transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
  }
}

@keyframes bounceOutUp {
    20 % {
    -webkit - transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
}

40 %, 45 % {
    opacity: 1;
    -webkit - transform: translate3d(0, 20px, 0);
transform: translate3d(0, 20px, 0);
  }

100 % {
    opacity: 0;
    -webkit - transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp {
    -webkit - animation - name: bounceOutUp;
    animation - name: bounceOutUp;
}

@-webkit - keyframes fadeIn {
    from {
        opacity: 0;
    }

    100 % {
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    100 % {
        opacity: 1;
    }
}

.fadeIn {
    -webkit - animation - name: fadeIn;
    animation - name: fadeIn;
}

@-webkit - keyframes fadeInDown {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, -100 %, 0);
        transform: translate3d(0, -100 %, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, -100 %, 0);
        transform: translate3d(0, -100 %, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInDown {
    -webkit - animation - name: fadeInDown;
    animation - name: fadeInDown;
}

@-webkit - keyframes fadeInDownBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInDownBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInDownBig {
    -webkit - animation - name: fadeInDownBig;
    animation - name: fadeInDownBig;
}

@-webkit - keyframes fadeInLeft {
    from {
        opacity: 0;
        -webkit - transform: translate3d(-100 %, 0, 0);
        transform: translate3d(-100 %, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        -webkit - transform: translate3d(-100 %, 0, 0);
        transform: translate3d(-100 %, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInLeft {
    -webkit - animation - name: fadeInLeft;
    animation - name: fadeInLeft;
}

@-webkit - keyframes fadeInLeftBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInLeftBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInLeftBig {
    -webkit - animation - name: fadeInLeftBig;
    animation - name: fadeInLeftBig;
}

@-webkit - keyframes fadeInRight {
    from {
        opacity: 0;
        -webkit - transform: translate3d(100 %, 0, 0);
        transform: translate3d(100 %, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        -webkit - transform: translate3d(100 %, 0, 0);
        transform: translate3d(100 %, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInRight {
    -webkit - animation - name: fadeInRight;
    animation - name: fadeInRight;
}

@-webkit - keyframes fadeInRightBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInRightBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInRightBig {
    -webkit - animation - name: fadeInRightBig;
    animation - name: fadeInRightBig;
}

@-webkit - keyframes fadeInUp {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, 100 %, 0);
        transform: translate3d(0, 100 %, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, 100 %, 0);
        transform: translate3d(0, 100 %, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInUp {
    -webkit - animation - name: fadeInUp;
    animation - name: fadeInUp;
}

@-webkit - keyframes fadeInUpBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes fadeInUpBig {
    from {
        opacity: 0;
        -webkit - transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.fadeInUpBig {
    -webkit - animation - name: fadeInUpBig;
    animation - name: fadeInUpBig;
}

@-webkit - keyframes fadeOut {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    }
}

.fadeOut {
    -webkit - animation - name: fadeOut;
    animation - name: fadeOut;
}

@-webkit - keyframes fadeOutDown {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, 100 %, 0);
    transform: translate3d(0, 100 %, 0);
}
}

@keyframes fadeOutDown {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, 100 %, 0);
    transform: translate3d(0, 100 %, 0);
}
}

.fadeOutDown {
    -webkit - animation - name: fadeOutDown;
    animation - name: fadeOutDown;
}

@-webkit - keyframes fadeOutDownBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
}

@keyframes fadeOutDownBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
}
}

.fadeOutDownBig {
    -webkit - animation - name: fadeOutDownBig;
    animation - name: fadeOutDownBig;
}

@-webkit - keyframes fadeOutLeft {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(-100 %, 0, 0);
    transform: translate3d(-100 %, 0, 0);
}
}

@keyframes fadeOutLeft {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(-100 %, 0, 0);
    transform: translate3d(-100 %, 0, 0);
}
}

.fadeOutLeft {
    -webkit - animation - name: fadeOutLeft;
    animation - name: fadeOutLeft;
}

@-webkit - keyframes fadeOutLeftBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
}

@keyframes fadeOutLeftBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
}
}

.fadeOutLeftBig {
    -webkit - animation - name: fadeOutLeftBig;
    animation - name: fadeOutLeftBig;
}

@-webkit - keyframes fadeOutRight {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(100 %, 0, 0);
    transform: translate3d(100 %, 0, 0);
}
}

@keyframes fadeOutRight {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(100 %, 0, 0);
    transform: translate3d(100 %, 0, 0);
}
}

.fadeOutRight {
    -webkit - animation - name: fadeOutRight;
    animation - name: fadeOutRight;
}

@-webkit - keyframes fadeOutRightBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
}

@keyframes fadeOutRightBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
}
}

.fadeOutRightBig {
    -webkit - animation - name: fadeOutRightBig;
    animation - name: fadeOutRightBig;
}

@-webkit - keyframes fadeOutUp {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, -100 %, 0);
    transform: translate3d(0, -100 %, 0);
}
}

@keyframes fadeOutUp {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, -100 %, 0);
    transform: translate3d(0, -100 %, 0);
}
}

.fadeOutUp {
    -webkit - animation - name: fadeOutUp;
    animation - name: fadeOutUp;
}

@-webkit - keyframes fadeOutUpBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
}

@keyframes fadeOutUpBig {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
}
}

.fadeOutUpBig {
    -webkit - animation - name: fadeOutUpBig;
    animation - name: fadeOutUpBig;
}

@-webkit - keyframes flip {
    from {
        -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        -webkit - animation - timing - function: ease-out;
        animation - timing - function: ease-out;
    }

    40 % {
    -webkit - transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit - animation - timing - function: ease-out;
    animation - timing - function: ease-out;
}

50 % {
    -webkit - transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
-webkit - animation - timing - function: ease-in;
animation - timing - function: ease-in;
  }

80 % {
    -webkit - transform: perspective(400px) scale3d(.95, .95, .95);
transform: perspective(400px) scale3d(.95, .95, .95);
-webkit - animation - timing - function: ease-in;
animation - timing - function: ease-in;
  }

100 % {
    -webkit - transform: perspective(400px);
transform: perspective(400px);
-webkit - animation - timing - function: ease-in;
animation - timing - function: ease-in;
  }
}

@keyframes flip {
    from {
        -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        -webkit - animation - timing - function: ease-out;
        animation - timing - function: ease-out;
    }

    40 % {
    -webkit - transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit - animation - timing - function: ease-out;
    animation - timing - function: ease-out;
}

50 % {
    -webkit - transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
-webkit - animation - timing - function: ease-in;
animation - timing - function: ease-in;
  }

80 % {
    -webkit - transform: perspective(400px) scale3d(.95, .95, .95);
transform: perspective(400px) scale3d(.95, .95, .95);
-webkit - animation - timing - function: ease-in;
animation - timing - function: ease-in;
  }

100 % {
    -webkit - transform: perspective(400px);
transform: perspective(400px);
-webkit - animation - timing - function: ease-in;
animation - timing - function: ease-in;
  }
}

.animated.flip {
    -webkit - backface - visibility: visible;
    backface - visibility: visible;
    -webkit - animation - name: flip;
    animation - name: flip;
}

@-webkit - keyframes flipInX {
    from {
        -webkit - transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit - animation - timing - function: ease-in;
        animation - timing - function: ease-in;
        opacity: 0;
    }

    40 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit - animation - timing - function: ease-in;
    animation - timing - function: ease-in;
}

60 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
opacity: 1;
  }

80 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

100 % {
    -webkit - transform: perspective(400px);
transform: perspective(400px);
  }
}

@keyframes flipInX {
    from {
        -webkit - transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit - animation - timing - function: ease-in;
        animation - timing - function: ease-in;
        opacity: 0;
    }

    40 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit - animation - timing - function: ease-in;
    animation - timing - function: ease-in;
}

60 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
opacity: 1;
  }

80 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

100 % {
    -webkit - transform: perspective(400px);
transform: perspective(400px);
  }
}

.flipInX {
    -webkit - backface - visibility: visible!important;
    backface - visibility: visible!important;
    -webkit - animation - name: flipInX;
    animation - name: flipInX;
}

@-webkit - keyframes flipInY {
    from {
        -webkit - transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit - animation - timing - function: ease-in;
        animation - timing - function: ease-in;
        opacity: 0;
    }

    40 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit - animation - timing - function: ease-in;
    animation - timing - function: ease-in;
}

60 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
opacity: 1;
  }

80 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

100 % {
    -webkit - transform: perspective(400px);
transform: perspective(400px);
  }
}

@keyframes flipInY {
    from {
        -webkit - transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit - animation - timing - function: ease-in;
        animation - timing - function: ease-in;
        opacity: 0;
    }

    40 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit - animation - timing - function: ease-in;
    animation - timing - function: ease-in;
}

60 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
opacity: 1;
  }

80 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

100 % {
    -webkit - transform: perspective(400px);
transform: perspective(400px);
  }
}

.flipInY {
    -webkit - backface - visibility: visible!important;
    backface - visibility: visible!important;
    -webkit - animation - name: flipInY;
    animation - name: flipInY;
}

@-webkit - keyframes flipOutX {
    from {
        -webkit - transform: perspective(400px);
        transform: perspective(400px);
    }

    30 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
}

100 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
opacity: 0;
  }
}

@keyframes flipOutX {
    from {
        -webkit - transform: perspective(400px);
        transform: perspective(400px);
    }

    30 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
}

100 % {
    -webkit - transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
opacity: 0;
  }
}

.flipOutX {
    -webkit - animation - name: flipOutX;
    animation - name: flipOutX;
    -webkit - backface - visibility: visible!important;
    backface - visibility: visible!important;
}

@-webkit - keyframes flipOutY {
    from {
        -webkit - transform: perspective(400px);
        transform: perspective(400px);
    }

    30 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
}

100 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
opacity: 0;
  }
}

@keyframes flipOutY {
    from {
        -webkit - transform: perspective(400px);
        transform: perspective(400px);
    }

    30 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
}

100 % {
    -webkit - transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
opacity: 0;
  }
}

.flipOutY {
    -webkit - backface - visibility: visible!important;
    backface - visibility: visible!important;
    -webkit - animation - name: flipOutY;
    animation - name: flipOutY;
}

@-webkit - keyframes lightSpeedIn {
    from {
        -webkit - transform: translate3d(100 %, 0, 0) skewX(-30deg);
        transform: translate3d(100 %, 0, 0) skewX(-30deg);
        opacity: 0;
    }

    60 % {
    -webkit - transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
}

80 % {
    -webkit - transform: skewX(-5deg);
transform: skewX(-5deg);
opacity: 1;
  }

100 % {
    -webkit - transform: none;
transform: none;
opacity: 1;
  }
}

@keyframes lightSpeedIn {
    from {
        -webkit - transform: translate3d(100 %, 0, 0) skewX(-30deg);
        transform: translate3d(100 %, 0, 0) skewX(-30deg);
        opacity: 0;
    }

    60 % {
    -webkit - transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
}

80 % {
    -webkit - transform: skewX(-5deg);
transform: skewX(-5deg);
opacity: 1;
  }

100 % {
    -webkit - transform: none;
transform: none;
opacity: 1;
  }
}

.lightSpeedIn {
    -webkit - animation - name: lightSpeedIn;
    animation - name: lightSpeedIn;
    -webkit - animation - timing - function: ease-out;
    animation - timing - function: ease-out;
}

@-webkit - keyframes lightSpeedOut {
    from {
        opacity: 1;
    }

    100 % {
    -webkit - transform: translate3d(100 %, 0, 0) skewX(30deg);
    transform: translate3d(100 %, 0, 0) skewX(30deg);
    opacity: 0;
}
}

@keyframes lightSpeedOut {
    from {
        opacity: 1;
    }

    100 % {
    -webkit - transform: translate3d(100 %, 0, 0) skewX(30deg);
    transform: translate3d(100 %, 0, 0) skewX(30deg);
    opacity: 0;
}
}

.lightSpeedOut {
    -webkit - animation - name: lightSpeedOut;
    animation - name: lightSpeedOut;
    -webkit - animation - timing - function: ease-in;
    animation - timing - function: ease-in;
}

@-webkit - keyframes rotateIn {
    from {
        -webkit - transform - origin: center;
        transform - origin: center;
        -webkit - transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: center;
    transform - origin: center;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

@keyframes rotateIn {
    from {
        -webkit - transform - origin: center;
        transform - origin: center;
        -webkit - transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: center;
    transform - origin: center;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

.rotateIn {
    -webkit - animation - name: rotateIn;
    animation - name: rotateIn;
}

@-webkit - keyframes rotateInDownLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        -webkit - transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

@keyframes rotateInDownLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        -webkit - transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

.rotateInDownLeft {
    -webkit - animation - name: rotateInDownLeft;
    animation - name: rotateInDownLeft;
}

@-webkit - keyframes rotateInDownRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        -webkit - transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

@keyframes rotateInDownRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        -webkit - transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

.rotateInDownRight {
    -webkit - animation - name: rotateInDownRight;
    animation - name: rotateInDownRight;
}

@-webkit - keyframes rotateInUpLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        -webkit - transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

@keyframes rotateInUpLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        -webkit - transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

.rotateInUpLeft {
    -webkit - animation - name: rotateInUpLeft;
    animation - name: rotateInUpLeft;
}

@-webkit - keyframes rotateInUpRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        -webkit - transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

@keyframes rotateInUpRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        -webkit - transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: none;
    transform: none;
    opacity: 1;
}
}

.rotateInUpRight {
    -webkit - animation - name: rotateInUpRight;
    animation - name: rotateInUpRight;
}

@-webkit - keyframes rotateOut {
    from {
        -webkit - transform - origin: center;
        transform - origin: center;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: center;
    transform - origin: center;
    -webkit - transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
}
}

@keyframes rotateOut {
    from {
        -webkit - transform - origin: center;
        transform - origin: center;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: center;
    transform - origin: center;
    -webkit - transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
}
}

.rotateOut {
    -webkit - animation - name: rotateOut;
    animation - name: rotateOut;
}

@-webkit - keyframes rotateOutDownLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
}
}

@keyframes rotateOutDownLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
}
}

.rotateOutDownLeft {
    -webkit - animation - name: rotateOutDownLeft;
    animation - name: rotateOutDownLeft;
}

@-webkit - keyframes rotateOutDownRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}

@keyframes rotateOutDownRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}

.rotateOutDownRight {
    -webkit - animation - name: rotateOutDownRight;
    animation - name: rotateOutDownRight;
}

@-webkit - keyframes rotateOutUpLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}

@keyframes rotateOutUpLeft {
    from {
        -webkit - transform - origin: left bottom;
        transform - origin: left bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: left bottom;
    transform - origin: left bottom;
    -webkit - transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
}
}

.rotateOutUpLeft {
    -webkit - animation - name: rotateOutUpLeft;
    animation - name: rotateOutUpLeft;
}

@-webkit - keyframes rotateOutUpRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
}
}

@keyframes rotateOutUpRight {
    from {
        -webkit - transform - origin: right bottom;
        transform - origin: right bottom;
        opacity: 1;
    }

    100 % {
    -webkit - transform - origin: right bottom;
    transform - origin: right bottom;
    -webkit - transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
}
}

.rotateOutUpRight {
    -webkit - animation - name: rotateOutUpRight;
    animation - name: rotateOutUpRight;
}

@-webkit - keyframes hinge {
    0 % {
    -webkit - transform - origin: top left;
    transform - origin: top left;
    -webkit - animation - timing - function: ease-in-out;
    animation - timing - function: ease-in-out;
}

20 %, 60 % {
    -webkit - transform: rotate3d(0, 0, 1, 80deg);
transform: rotate3d(0, 0, 1, 80deg);
-webkit - transform - origin: top left;
transform - origin: top left;
-webkit - animation - timing - function: ease-in-out;
animation - timing - function: ease-in-out;
  }

40 %, 80 % {
    -webkit - transform: rotate3d(0, 0, 1, 60deg);
transform: rotate3d(0, 0, 1, 60deg);
-webkit - transform - origin: top left;
transform - origin: top left;
-webkit - animation - timing - function: ease-in-out;
animation - timing - function: ease-in-out;
opacity: 1;
  }

100 % {
    -webkit - transform: translate3d(0, 700px, 0);
transform: translate3d(0, 700px, 0);
opacity: 0;
  }
}

@keyframes hinge {
    0 % {
    -webkit - transform - origin: top left;
    transform - origin: top left;
    -webkit - animation - timing - function: ease-in-out;
    animation - timing - function: ease-in-out;
}

20 %, 60 % {
    -webkit - transform: rotate3d(0, 0, 1, 80deg);
transform: rotate3d(0, 0, 1, 80deg);
-webkit - transform - origin: top left;
transform - origin: top left;
-webkit - animation - timing - function: ease-in-out;
animation - timing - function: ease-in-out;
  }

40 %, 80 % {
    -webkit - transform: rotate3d(0, 0, 1, 60deg);
transform: rotate3d(0, 0, 1, 60deg);
-webkit - transform - origin: top left;
transform - origin: top left;
-webkit - animation - timing - function: ease-in-out;
animation - timing - function: ease-in-out;
opacity: 1;
  }

100 % {
    -webkit - transform: translate3d(0, 700px, 0);
transform: translate3d(0, 700px, 0);
opacity: 0;
  }
}

.hinge {
    -webkit - animation - name: hinge;
    animation - name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit - keyframes rollIn {
    from {
        opacity: 0;
        -webkit - transform: translate3d(-100 %, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100 %, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

@keyframes rollIn {
    from {
        opacity: 0;
        -webkit - transform: translate3d(-100 %, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100 %, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    100 % {
        opacity: 1;
    -webkit - transform: none;
    transform: none;
}
}

.rollIn {
    -webkit - animation - name: rollIn;
    animation - name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit - keyframes rollOut {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(100 %, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100 %, 0, 0) rotate3d(0, 0, 1, 120deg);
}
}

@keyframes rollOut {
    from {
        opacity: 1;
    }

    100 % {
        opacity: 0;
    -webkit - transform: translate3d(100 %, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100 %, 0, 0) rotate3d(0, 0, 1, 120deg);
}
}

.rollOut {
    -webkit - animation - name: rollOut;
    animation - name: rollOut;
}

@-webkit - keyframes zoomIn {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }

    50 % {
        opacity: 1;
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }

    50 % {
        opacity: 1;
    }
}

.zoomIn {
    -webkit - animation - name: zoomIn;
    animation - name: zoomIn;
}

@-webkit - keyframes zoomInDown {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

@keyframes zoomInDown {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

.zoomInDown {
    -webkit - animation - name: zoomInDown;
    animation - name: zoomInDown;
}

@-webkit - keyframes zoomInLeft {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

@keyframes zoomInLeft {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

.zoomInLeft {
    -webkit - animation - name: zoomInLeft;
    animation - name: zoomInLeft;
}

@-webkit - keyframes zoomInRight {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

@keyframes zoomInRight {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

.zoomInRight {
    -webkit - animation - name: zoomInRight;
    animation - name: zoomInRight;
}

@-webkit - keyframes zoomInUp {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

@keyframes zoomInUp {
    from {
        opacity: 0;
        -webkit - transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}

.zoomInUp {
    -webkit - animation - name: zoomInUp;
    animation - name: zoomInUp;
}

@-webkit - keyframes zoomOut {
    from {
        opacity: 1;
    }

    50 % {
        opacity: 0;
    -webkit - transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
}

100 % {
    opacity: 0;
}
}

@keyframes zoomOut {
    from {
        opacity: 1;
    }

    50 % {
        opacity: 0;
    -webkit - transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
}

100 % {
    opacity: 0;
}
}

.zoomOut {
    -webkit - animation - name: zoomOut;
    animation - name: zoomOut;
}

@-webkit - keyframes zoomOutDown {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
}

100 % {
    opacity: 0;
    -webkit - transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
-webkit - transform - origin: center bottom;
transform - origin: center bottom;
-webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutDown {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
}

100 % {
    opacity: 0;
    -webkit - transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
-webkit - transform - origin: center bottom;
transform - origin: center bottom;
-webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutDown {
    -webkit - animation - name: zoomOutDown;
    animation - name: zoomOutDown;
}

@-webkit - keyframes zoomOutLeft {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: scale(.1) translate3d(-2000px, 0, 0);
transform: scale(.1) translate3d(-2000px, 0, 0);
-webkit - transform - origin: left center;
transform - origin: left center;
  }
}

@keyframes zoomOutLeft {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: scale(.1) translate3d(-2000px, 0, 0);
transform: scale(.1) translate3d(-2000px, 0, 0);
-webkit - transform - origin: left center;
transform - origin: left center;
  }
}

.zoomOutLeft {
    -webkit - animation - name: zoomOutLeft;
    animation - name: zoomOutLeft;
}

@-webkit - keyframes zoomOutRight {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: scale(.1) translate3d(2000px, 0, 0);
transform: scale(.1) translate3d(2000px, 0, 0);
-webkit - transform - origin: right center;
transform - origin: right center;
  }
}

@keyframes zoomOutRight {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
}

100 % {
    opacity: 0;
    -webkit - transform: scale(.1) translate3d(2000px, 0, 0);
transform: scale(.1) translate3d(2000px, 0, 0);
-webkit - transform - origin: right center;
transform - origin: right center;
  }
}

.zoomOutRight {
    -webkit - animation - name: zoomOutRight;
    animation - name: zoomOutRight;
}

@-webkit - keyframes zoomOutUp {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
}

100 % {
    opacity: 0;
    -webkit - transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
-webkit - transform - origin: center bottom;
transform - origin: center bottom;
-webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutUp {
    40 % {
        opacity: 1;
    -webkit - transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit - animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation - timing - function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
}

100 % {
    opacity: 0;
    -webkit - transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
-webkit - transform - origin: center bottom;
transform - origin: center bottom;
-webkit - animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
animation - timing - function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutUp {
    -webkit - animation - name: zoomOutUp;
    animation - name: zoomOutUp;
}

@-webkit - keyframes slideInDown {
    from {
        -webkit - transform: translate3d(0, -100 %, 0);
        transform: translate3d(0, -100 %, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

@keyframes slideInDown {
    from {
        -webkit - transform: translate3d(0, -100 %, 0);
        transform: translate3d(0, -100 %, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

.slideInDown {
    -webkit - animation - name: slideInDown;
    animation - name: slideInDown;
}

@-webkit - keyframes slideInLeft {
    from {
        -webkit - transform: translate3d(-100 %, 0, 0);
        transform: translate3d(-100 %, 0, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

@keyframes slideInLeft {
    from {
        -webkit - transform: translate3d(-100 %, 0, 0);
        transform: translate3d(-100 %, 0, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

.slideInLeft {
    -webkit - animation - name: slideInLeft;
    animation - name: slideInLeft;
}

@-webkit - keyframes slideInRight {
    from {
        -webkit - transform: translate3d(100 %, 0, 0);
        transform: translate3d(100 %, 0, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

@keyframes slideInRight {
    from {
        -webkit - transform: translate3d(100 %, 0, 0);
        transform: translate3d(100 %, 0, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

.slideInRight {
    -webkit - animation - name: slideInRight;
    animation - name: slideInRight;
}

@-webkit - keyframes slideInUp {
    from {
        -webkit - transform: translate3d(0, 100 %, 0);
        transform: translate3d(0, 100 %, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

@keyframes slideInUp {
    from {
        -webkit - transform: translate3d(0, 100 %, 0);
        transform: translate3d(0, 100 %, 0);
        visibility: visible;
    }

    100 % {
    -webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
}

.slideInUp {
    -webkit - animation - name: slideInUp;
    animation - name: slideInUp;
}

@-webkit - keyframes slideOutDown {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(0, 100 %, 0);
    transform: translate3d(0, 100 %, 0);
}
}

@keyframes slideOutDown {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(0, 100 %, 0);
    transform: translate3d(0, 100 %, 0);
}
}

.slideOutDown {
    -webkit - animation - name: slideOutDown;
    animation - name: slideOutDown;
}

@-webkit - keyframes slideOutLeft {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(-100 %, 0, 0);
    transform: translate3d(-100 %, 0, 0);
}
}

@keyframes slideOutLeft {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(-100 %, 0, 0);
    transform: translate3d(-100 %, 0, 0);
}
}

.slideOutLeft {
    -webkit - animation - name: slideOutLeft;
    animation - name: slideOutLeft;
}

@-webkit - keyframes slideOutRight {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(100 %, 0, 0);
    transform: translate3d(100 %, 0, 0);
}
}

@keyframes slideOutRight {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(100 %, 0, 0);
    transform: translate3d(100 %, 0, 0);
}
}

.slideOutRight {
    -webkit - animation - name: slideOutRight;
    animation - name: slideOutRight;
}

@-webkit - keyframes slideOutUp {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(0, -100 %, 0);
    transform: translate3d(0, -100 %, 0);
}
}

@keyframes slideOutUp {
    from {
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100 % {
        visibility: hidden;
    -webkit - transform: translate3d(0, -100 %, 0);
    transform: translate3d(0, -100 %, 0);
}
}

.slideOutUp {
    -webkit - animation - name: slideOutUp;
    animation - name: slideOutUp;
}
/*!
 *  Font Awesome 4.3.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
/* FONT PATH
 * -------------------------- */
@font-face {
    font - family: 'FontAwesome';
    src: url('../fonts/fontawesome-webfont.eot?v=4.3.0');
    src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.3.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.3.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.3.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.3.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular') format('svg');
    font - weight: normal;
    font - style: normal;
}
.fa {
    display: inline - block;
    font: normal normal normal 14px/ 1 FontAwesome;
    font - size: inherit;
    text - rendering: auto;
    -webkit - font - smoothing: antialiased;
    -moz - osx - font - smoothing: grayscale;
    transform: translate(0, 0);
}
/* makes the font 33% larger relative to the icon container */
.fa - lg {
    font - size: 1.33333333em;
    line - height: 0.75em;
    vertical - align: -15 %;
}
.fa - 2x {
    font - size: 2em;
}
.fa - 3x {
    font - size: 3em;
}
.fa - 4x {
    font - size: 4em;
}
.fa - 5x {
    font - size: 5em;
}
.fa - fw {
    width: 1.28571429em;
    text - align: center;
}
.fa - ul {
    padding - left: 0;
    margin - left: 2.14285714em;
    list - style - type: none;
}
.fa - ul > li {
    position: relative;
}
.fa - li {
    position: absolute;
    left: -2.14285714em;
    width: 2.14285714em;
    top: 0.14285714em;
    text - align: center;
}
.fa - li.fa - lg {
    left: -1.85714286em;
}
.fa - border {
    padding: .2em .25em .15em;
    border: solid 0.08em #eeeeee;
    border - radius: .1em;
}
.pull - right {
    float: right;
}
.pull - left {
    float: left;
}
.fa.pull - left {
    margin - right: .3em;
}
.fa.pull - right {
    margin - left: .3em;
}
.fa - spin {
    -webkit - animation: fa - spin 2s infinite linear;
    animation: fa - spin 2s infinite linear;
}
.fa - pulse {
    -webkit - animation: fa - spin 1s infinite steps(8);
    animation: fa - spin 1s infinite steps(8);
}
@-webkit - keyframes fa- spin {
    0 % {
    -webkit - transform: rotate(0deg);
    transform: rotate(0deg);
}
100 % {
    -webkit - transform: rotate(359deg);
transform: rotate(359deg);
  }
}
@keyframes fa - spin {
    0 % {
    -webkit - transform: rotate(0deg);
    transform: rotate(0deg);
}
100 % {
    -webkit - transform: rotate(359deg);
transform: rotate(359deg);
  }
}
.fa - rotate - 90 {
    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation = 1);
    -webkit - transform: rotate(90deg);
    -ms - transform: rotate(90deg);
    transform: rotate(90deg);
}
.fa - rotate - 180 {
    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation = 2);
    -webkit - transform: rotate(180deg);
    -ms - transform: rotate(180deg);
    transform: rotate(180deg);
}
.fa - rotate - 270 {
    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation = 3);
    -webkit - transform: rotate(270deg);
    -ms - transform: rotate(270deg);
    transform: rotate(270deg);
}
.fa - flip - horizontal {
    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation = 0, mirror = 1);
    -webkit - transform: scale(-1, 1);
    -ms - transform: scale(-1, 1);
    transform: scale(-1, 1);
}
.fa - flip - vertical {
    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation = 2, mirror = 1);
    -webkit - transform: scale(1, -1);
    -ms - transform: scale(1, -1);
    transform: scale(1, -1);
}
:root.fa - rotate - 90,
:root.fa - rotate - 180,
:root.fa - rotate - 270,
:root.fa - flip - horizontal,
:root.fa - flip - vertical {
    filter: none;
}
.fa - stack {
    position: relative;
    display: inline - block;
    width: 2em;
    height: 2em;
    line - height: 2em;
    vertical - align: middle;
}
.fa - stack - 1x,
.fa - stack - 2x {
    position: absolute;
    left: 0;
    width: 100 %;
    text - align: center;
}
.fa - stack - 1x {
    line - height: inherit;
}
.fa - stack - 2x {
    font - size: 2em;
}
.fa - inverse {
    color: #ffffff;
}
/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
   readers do not read off random characters that represent icons */
.fa - glass:before {
    content: "\f000";
}
.fa - music:before {
    content: "\f001";
}
.fa - search:before {
    content: "\f002";
}
.fa - envelope - o:before {
    content: "\f003";
}
.fa - heart:before {
    content: "\f004";
}
.fa - star:before {
    content: "\f005";
}
.fa - star - o:before {
    content: "\f006";
}
.fa - user:before {
    content: "\f007";
}
.fa - film:before {
    content: "\f008";
}
.fa - th - large:before {
    content: "\f009";
}
.fa - th:before {
    content: "\f00a";
}
.fa - th - list:before {
    content: "\f00b";
}
.fa - check:before {
    content: "\f00c";
}
.fa - remove:before,
.fa - close:before,
.fa - times:before {
    content: "\f00d";
}
.fa - search - plus:before {
    content: "\f00e";
}
.fa - search - minus:before {
    content: "\f010";
}
.fa - power - off:before {
    content: "\f011";
}
.fa - signal:before {
    content: "\f012";
}
.fa - gear:before,
.fa - cog:before {
    content: "\f013";
}
.fa - trash - o:before {
    content: "\f014";
}
.fa - home:before {
    content: "\f015";
}
.fa - file - o:before {
    content: "\f016";
}
.fa - clock - o:before {
    content: "\f017";
}
.fa - road:before {
    content: "\f018";
}
.fa - download:before {
    content: "\f019";
}
.fa - arrow - circle - o - down:before {
    content: "\f01a";
}
.fa - arrow - circle - o - up:before {
    content: "\f01b";
}
.fa - inbox:before {
    content: "\f01c";
}
.fa - play - circle - o:before {
    content: "\f01d";
}
.fa - rotate - right:before,
.fa - repeat:before {
    content: "\f01e";
}
.fa - refresh:before {
    content: "\f021";
}
.fa - list - alt:before {
    content: "\f022";
}
.fa - lock:before {
    content: "\f023";
}
.fa - flag:before {
    content: "\f024";
}
.fa - headphones:before {
    content: "\f025";
}
.fa - volume - off:before {
    content: "\f026";
}
.fa - volume - down:before {
    content: "\f027";
}
.fa - volume - up:before {
    content: "\f028";
}
.fa - qrcode:before {
    content: "\f029";
}
.fa - barcode:before {
    content: "\f02a";
}
.fa - tag:before {
    content: "\f02b";
}
.fa - tags:before {
    content: "\f02c";
}
.fa - book:before {
    content: "\f02d";
}
.fa - bookmark:before {
    content: "\f02e";
}
.fa - print:before {
    content: "\f02f";
}
.fa - camera:before {
    content: "\f030";
}
.fa - font:before {
    content: "\f031";
}
.fa - bold:before {
    content: "\f032";
}
.fa - italic:before {
    content: "\f033";
}
.fa - text - height:before {
    content: "\f034";
}
.fa - text - width:before {
    content: "\f035";
}
.fa - align - left:before {
    content: "\f036";
}
.fa - align - center:before {
    content: "\f037";
}
.fa - align - right:before {
    content: "\f038";
}
.fa - align - justify:before {
    content: "\f039";
}
.fa - list:before {
    content: "\f03a";
}
.fa - dedent:before,
.fa - outdent:before {
    content: "\f03b";
}
.fa - indent:before {
    content: "\f03c";
}
.fa - video - camera:before {
    content: "\f03d";
}
.fa - photo:before,
.fa - image:before,
.fa - picture - o:before {
    content: "\f03e";
}
.fa - pencil:before {
    content: "\f040";
}
.fa - map - marker:before {
    content: "\f041";
}
.fa - adjust:before {
    content: "\f042";
}
.fa - tint:before {
    content: "\f043";
}
.fa - edit:before,
.fa - pencil - square - o:before {
    content: "\f044";
}
.fa - share - square - o:before {
    content: "\f045";
}
.fa - check - square - o:before {
    content: "\f046";
}
.fa - arrows:before {
    content: "\f047";
}
.fa - step - backward:before {
    content: "\f048";
}
.fa - fast - backward:before {
    content: "\f049";
}
.fa - backward:before {
    content: "\f04a";
}
.fa - play:before {
    content: "\f04b";
}
.fa - pause:before {
    content: "\f04c";
}
.fa - stop:before {
    content: "\f04d";
}
.fa - forward:before {
    content: "\f04e";
}
.fa - fast - forward:before {
    content: "\f050";
}
.fa - step - forward:before {
    content: "\f051";
}
.fa - eject:before {
    content: "\f052";
}
.fa - chevron - left:before {
    content: "\f053";
}
.fa - chevron - right:before {
    content: "\f054";
}
.fa - plus - circle:before {
    content: "\f055";
}
.fa - minus - circle:before {
    content: "\f056";
}
.fa - times - circle:before {
    content: "\f057";
}
.fa - check - circle:before {
    content: "\f058";
}
.fa - question - circle:before {
    content: "\f059";
}
.fa - info - circle:before {
    content: "\f05a";
}
.fa - crosshairs:before {
    content: "\f05b";
}
.fa - times - circle - o:before {
    content: "\f05c";
}
.fa - check - circle - o:before {
    content: "\f05d";
}
.fa - ban:before {
    content: "\f05e";
}
.fa - arrow - left:before {
    content: "\f060";
}
.fa - arrow - right:before {
    content: "\f061";
}
.fa - arrow - up:before {
    content: "\f062";
}
.fa - arrow - down:before {
    content: "\f063";
}
.fa - mail - forward:before,
.fa - share:before {
    content: "\f064";
}
.fa - expand:before {
    content: "\f065";
}
.fa - compress:before {
    content: "\f066";
}
.fa - plus:before {
    content: "\f067";
}
.fa - minus:before {
    content: "\f068";
}
.fa - asterisk:before {
    content: "\f069";
}
.fa - exclamation - circle:before {
    content: "\f06a";
}
.fa - gift:before {
    content: "\f06b";
}
.fa - leaf:before {
    content: "\f06c";
}
.fa - fire:before {
    content: "\f06d";
}
.fa - eye:before {
    content: "\f06e";
}
.fa - eye - slash:before {
    content: "\f070";
}
.fa - warning:before,
.fa - exclamation - triangle:before {
    content: "\f071";
}
.fa - plane:before {
    content: "\f072";
}
.fa - calendar:before {
    content: "\f073";
}
.fa - random:before {
    content: "\f074";
}
.fa - comment:before {
    content: "\f075";
}
.fa - magnet:before {
    content: "\f076";
}
.fa - chevron - up:before {
    content: "\f077";
}
.fa - chevron - down:before {
    content: "\f078";
}
.fa - retweet:before {
    content: "\f079";
}
.fa - shopping - cart:before {
    content: "\f07a";
}
.fa - folder:before {
    content: "\f07b";
}
.fa - folder - open:before {
    content: "\f07c";
}
.fa - arrows - v:before {
    content: "\f07d";
}
.fa - arrows - h:before {
    content: "\f07e";
}
.fa - bar - chart - o:before,
.fa - bar - chart:before {
    content: "\f080";
}
.fa - twitter - square:before {
    content: "\f081";
}
.fa - facebook - square:before {
    content: "\f082";
}
.fa - camera - retro:before {
    content: "\f083";
}
.fa - key:before {
    content: "\f084";
}
.fa - gears:before,
.fa - cogs:before {
    content: "\f085";
}
.fa - comments:before {
    content: "\f086";
}
.fa - thumbs - o - up:before {
    content: "\f087";
}
.fa - thumbs - o - down:before {
    content: "\f088";
}
.fa - star - half:before {
    content: "\f089";
}
.fa - heart - o:before {
    content: "\f08a";
}
.fa - sign - out:before {
    content: "\f08b";
}
.fa - linkedin - square:before {
    content: "\f08c";
}
.fa - thumb - tack:before {
    content: "\f08d";
}
.fa - external - link:before {
    content: "\f08e";
}
.fa - sign -in:before {
    content: "\f090";
}
.fa - trophy:before {
    content: "\f091";
}
.fa - github - square:before {
    content: "\f092";
}
.fa - upload:before {
    content: "\f093";
}
.fa - lemon - o:before {
    content: "\f094";
}
.fa - phone:before {
    content: "\f095";
}
.fa - square - o:before {
    content: "\f096";
}
.fa - bookmark - o:before {
    content: "\f097";
}
.fa - phone - square:before {
    content: "\f098";
}
.fa - twitter:before {
    content: "\f099";
}
.fa - facebook - f:before,
.fa - facebook:before {
    content: "\f09a";
}
.fa - github:before {
    content: "\f09b";
}
.fa - unlock:before {
    content: "\f09c";
}
.fa - credit - card:before {
    content: "\f09d";
}
.fa - rss:before {
    content: "\f09e";
}
.fa - hdd - o:before {
    content: "\f0a0";
}
.fa - bullhorn:before {
    content: "\f0a1";
}
.fa - bell:before {
    content: "\f0f3";
}
.fa - certificate:before {
    content: "\f0a3";
}
.fa - hand - o - right:before {
    content: "\f0a4";
}
.fa - hand - o - left:before {
    content: "\f0a5";
}
.fa - hand - o - up:before {
    content: "\f0a6";
}
.fa - hand - o - down:before {
    content: "\f0a7";
}
.fa - arrow - circle - left:before {
    content: "\f0a8";
}
.fa - arrow - circle - right:before {
    content: "\f0a9";
}
.fa - arrow - circle - up:before {
    content: "\f0aa";
}
.fa - arrow - circle - down:before {
    content: "\f0ab";
}
.fa - globe:before {
    content: "\f0ac";
}
.fa - wrench:before {
    content: "\f0ad";
}
.fa - tasks:before {
    content: "\f0ae";
}
.fa - filter:before {
    content: "\f0b0";
}
.fa - briefcase:before {
    content: "\f0b1";
}
.fa - arrows - alt:before {
    content: "\f0b2";
}
.fa - group:before,
.fa - users:before {
    content: "\f0c0";
}
.fa - chain:before,
.fa - link:before {
    content: "\f0c1";
}
.fa - cloud:before {
    content: "\f0c2";
}
.fa - flask:before {
    content: "\f0c3";
}
.fa - cut:before,
.fa - scissors:before {
    content: "\f0c4";
}
.fa - copy:before,
.fa - files - o:before {
    content: "\f0c5";
}
.fa - paperclip:before {
    content: "\f0c6";
}
.fa - save:before,
.fa - floppy - o:before {
    content: "\f0c7";
}
.fa - square:before {
    content: "\f0c8";
}
.fa - navicon:before,
.fa - reorder:before,
.fa - bars:before {
    content: "\f0c9";
}
.fa - list - ul:before {
    content: "\f0ca";
}
.fa - list - ol:before {
    content: "\f0cb";
}
.fa - strikethrough:before {
    content: "\f0cc";
}
.fa - underline:before {
    content: "\f0cd";
}
.fa - table:before {
    content: "\f0ce";
}
.fa - magic:before {
    content: "\f0d0";
}
.fa - truck:before {
    content: "\f0d1";
}
.fa - pinterest:before {
    content: "\f0d2";
}
.fa - pinterest - square:before {
    content: "\f0d3";
}
.fa - google - plus - square:before {
    content: "\f0d4";
}
.fa - google - plus:before {
    content: "\f0d5";
}
.fa - money:before {
    content: "\f0d6";
}
.fa - caret - down:before {
    content: "\f0d7";
}
.fa - caret - up:before {
    content: "\f0d8";
}
.fa - caret - left:before {
    content: "\f0d9";
}
.fa - caret - right:before {
    content: "\f0da";
}
.fa - columns:before {
    content: "\f0db";
}
.fa - unsorted:before,
.fa - sort:before {
    content: "\f0dc";
}
.fa - sort - down:before,
.fa - sort - desc:before {
    content: "\f0dd";
}
.fa - sort - up:before,
.fa - sort - asc:before {
    content: "\f0de";
}
.fa - envelope:before {
    content: "\f0e0";
}
.fa - linkedin:before {
    content: "\f0e1";
}
.fa - rotate - left:before,
.fa - undo:before {
    content: "\f0e2";
}
.fa - legal:before,
.fa - gavel:before {
    content: "\f0e3";
}
.fa - dashboard:before,
.fa - tachometer:before {
    content: "\f0e4";
}
.fa - comment - o:before {
    content: "\f0e5";
}
.fa - comments - o:before {
    content: "\f0e6";
}
.fa - flash:before,
.fa - bolt:before {
    content: "\f0e7";
}
.fa - sitemap:before {
    content: "\f0e8";
}
.fa - umbrella:before {
    content: "\f0e9";
}
.fa - paste:before,
.fa - clipboard:before {
    content: "\f0ea";
}
.fa - lightbulb - o:before {
    content: "\f0eb";
}
.fa - exchange:before {
    content: "\f0ec";
}
.fa - cloud - download:before {
    content: "\f0ed";
}
.fa - cloud - upload:before {
    content: "\f0ee";
}
.fa - user - md:before {
    content: "\f0f0";
}
.fa - stethoscope:before {
    content: "\f0f1";
}
.fa - suitcase:before {
    content: "\f0f2";
}
.fa - bell - o:before {
    content: "\f0a2";
}
.fa - coffee:before {
    content: "\f0f4";
}
.fa - cutlery:before {
    content: "\f0f5";
}
.fa - file - text - o:before {
    content: "\f0f6";
}
.fa - building - o:before {
    content: "\f0f7";
}
.fa - hospital - o:before {
    content: "\f0f8";
}
.fa - ambulance:before {
    content: "\f0f9";
}
.fa - medkit:before {
    content: "\f0fa";
}
.fa - fighter - jet:before {
    content: "\f0fb";
}
.fa - beer:before {
    content: "\f0fc";
}
.fa - h - square:before {
    content: "\f0fd";
}
.fa - plus - square:before {
    content: "\f0fe";
}
.fa - angle - double - left:before {
    content: "\f100";
}
.fa - angle - double - right:before {
    content: "\f101";
}
.fa - angle - double - up:before {
    content: "\f102";
}
.fa - angle - double - down:before {
    content: "\f103";
}
.fa - angle - left:before {
    content: "\f104";
}
.fa - angle - right:before {
    content: "\f105";
}
.fa - angle - up:before {
    content: "\f106";
}
.fa - angle - down:before {
    content: "\f107";
}
.fa - desktop:before {
    content: "\f108";
}
.fa - laptop:before {
    content: "\f109";
}
.fa - tablet:before {
    content: "\f10a";
}
.fa - mobile - phone:before,
.fa - mobile:before {
    content: "\f10b";
}
.fa - circle - o:before {
    content: "\f10c";
}
.fa - quote - left:before {
    content: "\f10d";
}
.fa - quote - right:before {
    content: "\f10e";
}
.fa - spinner:before {
    content: "\f110";
}
.fa - circle:before {
    content: "\f111";
}
.fa - mail - reply:before,
.fa - reply:before {
    content: "\f112";
}
.fa - github - alt:before {
    content: "\f113";
}
.fa - folder - o:before {
    content: "\f114";
}
.fa - folder - open - o:before {
    content: "\f115";
}
.fa - smile - o:before {
    content: "\f118";
}
.fa - frown - o:before {
    content: "\f119";
}
.fa - meh - o:before {
    content: "\f11a";
}
.fa - gamepad:before {
    content: "\f11b";
}
.fa - keyboard - o:before {
    content: "\f11c";
}
.fa - flag - o:before {
    content: "\f11d";
}
.fa - flag - checkered:before {
    content: "\f11e";
}
.fa - terminal:before {
    content: "\f120";
}
.fa - code:before {
    content: "\f121";
}
.fa - mail - reply - all:before,
.fa - reply - all:before {
    content: "\f122";
}
.fa - star - half - empty:before,
.fa - star - half - full:before,
.fa - star - half - o:before {
    content: "\f123";
}
.fa - location - arrow:before {
    content: "\f124";
}
.fa - crop:before {
    content: "\f125";
}
.fa - code - fork:before {
    content: "\f126";
}
.fa - unlink:before,
.fa - chain - broken:before {
    content: "\f127";
}
.fa - question:before {
    content: "\f128";
}
.fa - info:before {
    content: "\f129";
}
.fa - exclamation:before {
    content: "\f12a";
}
.fa - superscript:before {
    content: "\f12b";
}
.fa - subscript:before {
    content: "\f12c";
}
.fa - eraser:before {
    content: "\f12d";
}
.fa - puzzle - piece:before {
    content: "\f12e";
}
.fa - microphone:before {
    content: "\f130";
}
.fa - microphone - slash:before {
    content: "\f131";
}
.fa - shield:before {
    content: "\f132";
}
.fa - calendar - o:before {
    content: "\f133";
}
.fa - fire - extinguisher:before {
    content: "\f134";
}
.fa - rocket:before {
    content: "\f135";
}
.fa - maxcdn:before {
    content: "\f136";
}
.fa - chevron - circle - left:before {
    content: "\f137";
}
.fa - chevron - circle - right:before {
    content: "\f138";
}
.fa - chevron - circle - up:before {
    content: "\f139";
}
.fa - chevron - circle - down:before {
    content: "\f13a";
}
.fa - html5:before {
    content: "\f13b";
}
.fa - css3:before {
    content: "\f13c";
}
.fa - anchor:before {
    content: "\f13d";
}
.fa - unlock - alt:before {
    content: "\f13e";
}
.fa - bullseye:before {
    content: "\f140";
}
.fa - ellipsis - h:before {
    content: "\f141";
}
.fa - ellipsis - v:before {
    content: "\f142";
}
.fa - rss - square:before {
    content: "\f143";
}
.fa - play - circle:before {
    content: "\f144";
}
.fa - ticket:before {
    content: "\f145";
}
.fa - minus - square:before {
    content: "\f146";
}
.fa - minus - square - o:before {
    content: "\f147";
}
.fa - level - up:before {
    content: "\f148";
}
.fa - level - down:before {
    content: "\f149";
}
.fa - check - square:before {
    content: "\f14a";
}
.fa - pencil - square:before {
    content: "\f14b";
}
.fa - external - link - square:before {
    content: "\f14c";
}
.fa - share - square:before {
    content: "\f14d";
}
.fa - compass:before {
    content: "\f14e";
}
.fa - toggle - down:before,
.fa - caret - square - o - down:before {
    content: "\f150";
}
.fa - toggle - up:before,
.fa - caret - square - o - up:before {
    content: "\f151";
}
.fa - toggle - right:before,
.fa - caret - square - o - right:before {
    content: "\f152";
}
.fa - euro:before,
.fa - eur:before {
    content: "\f153";
}
.fa - gbp:before {
    content: "\f154";
}
.fa - dollar:before,
.fa - usd:before {
    content: "\f155";
}
.fa - rupee:before,
.fa - inr:before {
    content: "\f156";
}
.fa - cny:before,
.fa - rmb:before,
.fa - yen:before,
.fa - jpy:before {
    content: "\f157";
}
.fa - ruble:before,
.fa - rouble:before,
.fa - rub:before {
    content: "\f158";
}
.fa - won:before,
.fa - krw:before {
    content: "\f159";
}
.fa - bitcoin:before,
.fa - btc:before {
    content: "\f15a";
}
.fa - file:before {
    content: "\f15b";
}
.fa - file - text:before {
    content: "\f15c";
}
.fa - sort - alpha - asc:before {
    content: "\f15d";
}
.fa - sort - alpha - desc:before {
    content: "\f15e";
}
.fa - sort - amount - asc:before {
    content: "\f160";
}
.fa - sort - amount - desc:before {
    content: "\f161";
}
.fa - sort - numeric - asc:before {
    content: "\f162";
}
.fa - sort - numeric - desc:before {
    content: "\f163";
}
.fa - thumbs - up:before {
    content: "\f164";
}
.fa - thumbs - down:before {
    content: "\f165";
}
.fa - youtube - square:before {
    content: "\f166";
}
.fa - youtube:before {
    content: "\f167";
}
.fa - xing:before {
    content: "\f168";
}
.fa - xing - square:before {
    content: "\f169";
}
.fa - youtube - play:before {
    content: "\f16a";
}
.fa - dropbox:before {
    content: "\f16b";
}
.fa - stack - overflow:before {
    content: "\f16c";
}
.fa - instagram:before {
    content: "\f16d";
}
.fa - flickr:before {
    content: "\f16e";
}
.fa - adn:before {
    content: "\f170";
}
.fa - bitbucket:before {
    content: "\f171";
}
.fa - bitbucket - square:before {
    content: "\f172";
}
.fa - tumblr:before {
    content: "\f173";
}
.fa - tumblr - square:before {
    content: "\f174";
}
.fa - long - arrow - down:before {
    content: "\f175";
}
.fa - long - arrow - up:before {
    content: "\f176";
}
.fa - long - arrow - left:before {
    content: "\f177";
}
.fa - long - arrow - right:before {
    content: "\f178";
}
.fa - apple:before {
    content: "\f179";
}
.fa - windows:before {
    content: "\f17a";
}
.fa - android:before {
    content: "\f17b";
}
.fa - linux:before {
    content: "\f17c";
}
.fa - dribbble:before {
    content: "\f17d";
}
.fa - skype:before {
    content: "\f17e";
}
.fa - foursquare:before {
    content: "\f180";
}
.fa - trello:before {
    content: "\f181";
}
.fa - female:before {
    content: "\f182";
}
.fa - male:before {
    content: "\f183";
}
.fa - gittip:before,
.fa - gratipay:before {
    content: "\f184";
}
.fa - sun - o:before {
    content: "\f185";
}
.fa - moon - o:before {
    content: "\f186";
}
.fa - archive:before {
    content: "\f187";
}
.fa - bug:before {
    content: "\f188";
}
.fa - vk:before {
    content: "\f189";
}
.fa - weibo:before {
    content: "\f18a";
}
.fa - renren:before {
    content: "\f18b";
}
.fa - pagelines:before {
    content: "\f18c";
}
.fa - stack - exchange:before {
    content: "\f18d";
}
.fa - arrow - circle - o - right:before {
    content: "\f18e";
}
.fa - arrow - circle - o - left:before {
    content: "\f190";
}
.fa - toggle - left:before,
.fa - caret - square - o - left:before {
    content: "\f191";
}
.fa - dot - circle - o:before {
    content: "\f192";
}
.fa - wheelchair:before {
    content: "\f193";
}
.fa - vimeo - square:before {
    content: "\f194";
}
.fa - turkish - lira:before,
.fa -try:before {
    content: "\f195";
}
.fa - plus - square - o:before {
    content: "\f196";
}
.fa - space - shuttle:before {
    content: "\f197";
}
.fa - slack:before {
    content: "\f198";
}
.fa - envelope - square:before {
    content: "\f199";
}
.fa - wordpress:before {
    content: "\f19a";
}
.fa - openid:before {
    content: "\f19b";
}
.fa - institution:before,
.fa - bank:before,
.fa - university:before {
    content: "\f19c";
}
.fa - mortar - board:before,
.fa - graduation - cap:before {
    content: "\f19d";
}
.fa - yahoo:before {
    content: "\f19e";
}
.fa - google:before {
    content: "\f1a0";
}
.fa - reddit:before {
    content: "\f1a1";
}
.fa - reddit - square:before {
    content: "\f1a2";
}
.fa - stumbleupon - circle:before {
    content: "\f1a3";
}
.fa - stumbleupon:before {
    content: "\f1a4";
}
.fa - delicious:before {
    content: "\f1a5";
}
.fa - digg:before {
    content: "\f1a6";
}
.fa - pied - piper:before {
    content: "\f1a7";
}
.fa - pied - piper - alt:before {
    content: "\f1a8";
}
.fa - drupal:before {
    content: "\f1a9";
}
.fa - joomla:before {
    content: "\f1aa";
}
.fa - language:before {
    content: "\f1ab";
}
.fa - fax:before {
    content: "\f1ac";
}
.fa - building:before {
    content: "\f1ad";
}
.fa - child:before {
    content: "\f1ae";
}
.fa - paw:before {
    content: "\f1b0";
}
.fa - spoon:before {
    content: "\f1b1";
}
.fa - cube:before {
    content: "\f1b2";
}
.fa - cubes:before {
    content: "\f1b3";
}
.fa - behance:before {
    content: "\f1b4";
}
.fa - behance - square:before {
    content: "\f1b5";
}
.fa - steam:before {
    content: "\f1b6";
}
.fa - steam - square:before {
    content: "\f1b7";
}
.fa - recycle:before {
    content: "\f1b8";
}
.fa - automobile:before,
.fa - car:before {
    content: "\f1b9";
}
.fa - cab:before,
.fa - taxi:before {
    content: "\f1ba";
}
.fa - tree:before {
    content: "\f1bb";
}
.fa - spotify:before {
    content: "\f1bc";
}
.fa - deviantart:before {
    content: "\f1bd";
}
.fa - soundcloud:before {
    content: "\f1be";
}
.fa - database:before {
    content: "\f1c0";
}
.fa - file - pdf - o:before {
    content: "\f1c1";
}
.fa - file - word - o:before {
    content: "\f1c2";
}
.fa - file - excel - o:before {
    content: "\f1c3";
}
.fa - file - powerpoint - o:before {
    content: "\f1c4";
}
.fa - file - photo - o:before,
.fa - file - picture - o:before,
.fa - file - image - o:before {
    content: "\f1c5";
}
.fa - file - zip - o:before,
.fa - file - archive - o:before {
    content: "\f1c6";
}
.fa - file - sound - o:before,
.fa - file - audio - o:before {
    content: "\f1c7";
}
.fa - file - movie - o:before,
.fa - file - video - o:before {
    content: "\f1c8";
}
.fa - file - code - o:before {
    content: "\f1c9";
}
.fa - vine:before {
    content: "\f1ca";
}
.fa - codepen:before {
    content: "\f1cb";
}
.fa - jsfiddle:before {
    content: "\f1cc";
}
.fa - life - bouy:before,
.fa - life - buoy:before,
.fa - life - saver:before,
.fa - support:before,
.fa - life - ring:before {
    content: "\f1cd";
}
.fa - circle - o - notch:before {
    content: "\f1ce";
}
.fa - ra:before,
.fa - rebel:before {
    content: "\f1d0";
}
.fa - ge:before,
.fa - empire:before {
    content: "\f1d1";
}
.fa - git - square:before {
    content: "\f1d2";
}
.fa - git:before {
    content: "\f1d3";
}
.fa - hacker - news:before {
    content: "\f1d4";
}
.fa - tencent - weibo:before {
    content: "\f1d5";
}
.fa - qq:before {
    content: "\f1d6";
}
.fa - wechat:before,
.fa - weixin:before {
    content: "\f1d7";
}
.fa - send:before,
.fa - paper - plane:before {
    content: "\f1d8";
}
.fa - send - o:before,
.fa - paper - plane - o:before {
    content: "\f1d9";
}
.fa - history:before {
    content: "\f1da";
}
.fa - genderless:before,
.fa - circle - thin:before {
    content: "\f1db";
}
.fa - header:before {
    content: "\f1dc";
}
.fa - paragraph:before {
    content: "\f1dd";
}
.fa - sliders:before {
    content: "\f1de";
}
.fa - share - alt:before {
    content: "\f1e0";
}
.fa - share - alt - square:before {
    content: "\f1e1";
}
.fa - bomb:before {
    content: "\f1e2";
}
.fa - soccer - ball - o:before,
.fa - futbol - o:before {
    content: "\f1e3";
}
.fa - tty:before {
    content: "\f1e4";
}
.fa - binoculars:before {
    content: "\f1e5";
}
.fa - plug:before {
    content: "\f1e6";
}
.fa - slideshare:before {
    content: "\f1e7";
}
.fa - twitch:before {
    content: "\f1e8";
}
.fa - yelp:before {
    content: "\f1e9";
}
.fa - newspaper - o:before {
    content: "\f1ea";
}
.fa - wifi:before {
    content: "\f1eb";
}
.fa - calculator:before {
    content: "\f1ec";
}
.fa - paypal:before {
    content: "\f1ed";
}
.fa - google - wallet:before {
    content: "\f1ee";
}
.fa - cc - visa:before {
    content: "\f1f0";
}
.fa - cc - mastercard:before {
    content: "\f1f1";
}
.fa - cc - discover:before {
    content: "\f1f2";
}
.fa - cc - amex:before {
    content: "\f1f3";
}
.fa - cc - paypal:before {
    content: "\f1f4";
}
.fa - cc - stripe:before {
    content: "\f1f5";
}
.fa - bell - slash:before {
    content: "\f1f6";
}
.fa - bell - slash - o:before {
    content: "\f1f7";
}
.fa - trash:before {
    content: "\f1f8";
}
.fa - copyright:before {
    content: "\f1f9";
}
.fa - at:before {
    content: "\f1fa";
}
.fa - eyedropper:before {
    content: "\f1fb";
}
.fa - paint - brush:before {
    content: "\f1fc";
}
.fa - birthday - cake:before {
    content: "\f1fd";
}
.fa - area - chart:before {
    content: "\f1fe";
}
.fa - pie - chart:before {
    content: "\f200";
}
.fa - line - chart:before {
    content: "\f201";
}
.fa - lastfm:before {
    content: "\f202";
}
.fa - lastfm - square:before {
    content: "\f203";
}
.fa - toggle - off:before {
    content: "\f204";
}
.fa - toggle - on:before {
    content: "\f205";
}
.fa - bicycle:before {
    content: "\f206";
}
.fa - bus:before {
    content: "\f207";
}
.fa - ioxhost:before {
    content: "\f208";
}
.fa - angellist:before {
    content: "\f209";
}
.fa - cc:before {
    content: "\f20a";
}
.fa - shekel:before,
.fa - sheqel:before,
.fa - ils:before {
    content: "\f20b";
}
.fa - meanpath:before {
    content: "\f20c";
}
.fa - buysellads:before {
    content: "\f20d";
}
.fa - connectdevelop:before {
    content: "\f20e";
}
.fa - dashcube:before {
    content: "\f210";
}
.fa - forumbee:before {
    content: "\f211";
}
.fa - leanpub:before {
    content: "\f212";
}
.fa - sellsy:before {
    content: "\f213";
}
.fa - shirtsinbulk:before {
    content: "\f214";
}
.fa - simplybuilt:before {
    content: "\f215";
}
.fa - skyatlas:before {
    content: "\f216";
}
.fa - cart - plus:before {
    content: "\f217";
}
.fa - cart - arrow - down:before {
    content: "\f218";
}
.fa - diamond:before {
    content: "\f219";
}
.fa - ship:before {
    content: "\f21a";
}
.fa - user - secret:before {
    content: "\f21b";
}
.fa - motorcycle:before {
    content: "\f21c";
}
.fa - street - view:before {
    content: "\f21d";
}
.fa - heartbeat:before {
    content: "\f21e";
}
.fa - venus:before {
    content: "\f221";
}
.fa - mars:before {
    content: "\f222";
}
.fa - mercury:before {
    content: "\f223";
}
.fa - transgender:before {
    content: "\f224";
}
.fa - transgender - alt:before {
    content: "\f225";
}
.fa - venus - double:before {
    content: "\f226";
}
.fa - mars - double:before {
    content: "\f227";
}
.fa - venus - mars:before {
    content: "\f228";
}
.fa - mars - stroke:before {
    content: "\f229";
}
.fa - mars - stroke - v:before {
    content: "\f22a";
}
.fa - mars - stroke - h:before {
    content: "\f22b";
}
.fa - neuter:before {
    content: "\f22c";
}
.fa - facebook - official:before {
    content: "\f230";
}
.fa - pinterest - p:before {
    content: "\f231";
}
.fa - whatsapp:before {
    content: "\f232";
}
.fa - server:before {
    content: "\f233";
}
.fa - user - plus:before {
    content: "\f234";
}
.fa - user - times:before {
    content: "\f235";
}
.fa - hotel:before,
.fa - bed:before {
    content: "\f236";
}
.fa - viacoin:before {
    content: "\f237";
}
.fa - train:before {
    content: "\f238";
}
.fa - subway:before {
    content: "\f239";
}
.fa - medium:before {
    content: "\f23a";
}

.jqvmap - label
{
    position: absolute;
    display: none;
    -webkit - border - radius: 3px;
    -moz - border - radius: 3px;
    border - radius: 3px;
    background: #292929;
    color: white;
    font - family: sans - serif, Verdana;
    font - size: smaller;
    padding: 3px;
}
.jqvmap - zoomin, .jqvmap - zoomout
{
    position: absolute;
    left: 10px;
    -webkit - border - radius: 3px;
    -moz - border - radius: 3px;
    border - radius: 3px;
    background: #000000;
    padding: 3px;
    color: white;
    width: 10px;
    height: 10px;
    cursor: pointer;
    line - height: 10px;
    text - align: center;
}
.jqvmap - zoomin
{
    top: 10px;
}
.jqvmap - zoomout
{
    top: 30px;
}
.jqvmap - region
{
    cursor: pointer;
}
.jqvmap - ajax_response
{
    width: 100 %;
    height: 500px;
}

/*
 * metismenu - v2.0.3
 * A jQuery menu plugin
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */

.metismenu.arrow {
    float: right;
    line - height: 1.42857;
}

/*
 * Require Bootstrap
 * https://github.com/twbs/bootstrap
*/

.metismenu.glyphicon.arrow:before {
    content: "\e079";
}
.metismenu.active > a > .glyphicon.arrow:before {
    content: "\e114";
}

/*
 * Require Font-Awesome
 * http://fortawesome.github.io/Font-Awesome/
*/

.metismenu.fa.arrow:before {
    content: "\f104";
}
.metismenu.active > a > .fa.arrow:before {
    content: "\f107";
}

/*
 * Require Ionicons
 * http://ionicons.com/
*/

.metismenu.ion.arrow:before {
    content: "\f3d2"
}
.metismenu.active > a > .ion.arrow:before {
    content: "\f3d0";
}
.metismenu.plus - times {
    float: right;
}
.metismenu.fa.plus - times:before {
    content: "\f067";
}
.metismenu.active > a > .fa.plus - times {
    -webkit - transform: rotate(45deg);
    -ms - transform: rotate(45deg);
    transform: rotate(45deg);
}
.metismenu.plus - minus {
    float: right;
}
.metismenu.fa.plus - minus:before {
    content: "\f067";
}
.metismenu.active > a > .fa.plus - minus:before {
    content: "\f068";
}
.metismenu.collapse {
    display: none;
}
.metismenu.collapse.in {
    display: block;
}
.metismenu.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit - transition - timing - function: ease;
    transition - timing - function: ease;
    -webkit - transition - duration: .35s;
    transition - duration: .35s;
    -webkit - transition - property: height, visibility;
    transition - property: height, visibility;
}

/* Make clicks pass-through */
#nprogress {
    pointer - events: none;
}

#nprogress.bar {
    background: #29d;

    position: fixed;
    z - index: 1031;
    top: 0;
    left: 0;

    width: 100 %;
    height: 2px;
}

/* Fancy blur effect */
#nprogress.peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100 %;
    box - shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1.0;

    -webkit - transform: rotate(3deg) translate(0px, -4px);
    -ms - transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress.spinner {
    display: block;
    position: fixed;
    z - index: 1031;
    top: 15px;
    right: 15px;
}

#nprogress.spinner - icon {
    width: 18px;
    height: 18px;
    box - sizing: border - box;

    border: solid 2px transparent;
    border - top - color: #29d;
    border - left - color: #29d;
    border - radius: 50 %;

    -webkit - animation: nprogress - spinner 400ms linear infinite;
    animation: nprogress - spinner 400ms linear infinite;
}

.nprogress - custom - parent {
    overflow: hidden;
    position: relative;
}

.nprogress - custom - parent #nprogress.spinner,
.nprogress - custom - parent #nprogress.bar {
    position: absolute;
}

@-webkit - keyframes nprogress- spinner {
    0 % { -webkit - transform: rotate(0deg);
}
100 % { -webkit - transform: rotate(360deg); }
}
@keyframes nprogress - spinner {
    0 % { transform: rotate(0deg); }
    100 % { transform: rotate(360deg); }
}


/*! Quill Editor v0.20.1
 *  https://quilljs.com/
 *  Copyright (c) 2014, Jason Chen
 *  Copyright (c) 2013, salesforce.com
 */
.ql - image - tooltip {
    padding: 10px;
    width: 300px;
}
.ql - image - tooltip:after {
    clear: both;
    content: "";
    display: table;
}
.ql - image - tooltip a {
    border: 1px solid #000;
    box - sizing: border - box;
    display: inline - block;
    float: left;
    padding: 5px;
    text - align: center;
    width: 50 %;
}
.ql - image - tooltip img {
    bottom: 0;
    left: 0;
    margin: auto;
    max - height: 100 %;
    max - width: 100 %;
    position: absolute;
    right: 0;
    top: 0;
}
.ql - image - tooltip.input {
    box - sizing: border - box;
    width: 100 %;
}
.ql - image - tooltip.preview {
    margin: 10px 0px;
    position: relative;
    border: 1px dashed #000;
    height: 200px;
}
.ql - image - tooltip.preview span {
    display: inline - block;
    position: absolute;
    text - align: center;
    top: 40 %;
    width: 100 %;
}
.ql - link - tooltip {
    padding: 5px 10px;
}
.ql - link - tooltip input.input {
    width: 170px;
}
.ql - link - tooltip input.input,
.ql - link - tooltip a.done {
    display: none;
}
.ql - link - tooltip a.change {
    margin - right: 4px;
}
.ql - link - tooltip.editing input.input,
.ql - link - tooltip.editing a.done {
    display: inline - block;
}
.ql - link - tooltip.editing a.url,
.ql - link - tooltip.editing a.change,
.ql - link - tooltip.editing a.remove {
    display: none;
}
.ql - multi - cursor {
    position: absolute;
    left: 0;
    top: 0;
    z - index: 1000;
}
.ql - multi - cursor.cursor {
    margin - left: -1px;
    position: absolute;
}
.ql - multi - cursor.cursor - flag {
    bottom: 100 %;
    position: absolute;
    white - space: nowrap;
}
.ql - multi - cursor.cursor - name {
    display: inline - block;
    color: #fff;
    padding: 2px 8px;
}
.ql - multi - cursor.cursor - caret {
    height: 100 %;
    position: absolute;
    width: 2px;
}
.ql - multi - cursor.cursor.hidden.cursor - flag {
    display: none;
}
.ql - multi - cursor.cursor.top.cursor - flag {
    bottom: auto;
    top: 100 %;
}
.ql - multi - cursor.cursor.right.cursor - flag {
    right: -2px;
}
.ql - paste - manager {
    left: -100000px;
    position: absolute;
    top: 50 %;
}
.ql - toolbar {
    box - sizing: border - box;
}
.ql - tooltip {
    background - color: #fff;
    border: 1px solid #000;
    box - sizing: border - box;
    position: absolute;
    top: 0px;
    white - space: nowrap;
    z - index: 2000;
}
.ql - tooltip a {
    cursor: pointer;
    text - decoration: none;
}
.ql - container {
    box - sizing: border - box;
    cursor: text;
    font - family: Helvetica, 'Arial', sans - serif;
    font - size: 13px;
    height: 100 %;
    line - height: 1.42;
    margin: 0px;
    overflow - x: hidden;
    overflow - y: auto;
    padding: 12px 15px;
    position: relative;
}
.ql - editor {
    box - sizing: border - box;
    min - height: 100 %;
    outline: none;
    tab - size: 4;
    white - space: pre - wrap;
}
.ql - editor div {
    margin: 0;
    padding: 0;
}
.ql - editor a {
    text - decoration: underline;
}
.ql - editor b {
    font - weight: bold;
}
.ql - editor i {
    font - style: italic;
}
.ql - editor s {
    text - decoration: line - through;
}
.ql - editor u {
    text - decoration: underline;
}
.ql - editor a,
.ql - editor b,
.ql - editor i,
.ql - editor s,
.ql - editor u,
.ql - editor span {
    background - color: inherit;
}
.ql - editor img {
    max - width: 100 %;
}
.ql - editor blockquote,
.ql - editor ol,
.ql - editor ul {
    margin: 0 0 0 2em;
    padding: 0;
}
.ql - editor ol {
    list - style - type: decimal;
}
.ql - editor ul {
    list - style - type: disc;
}
.ql - editor.ql - ie - 9 br,
.ql - editor.ql - ie - 10 br {
    display: none;
}

/*! Quill Editor v0.20.1
 *  https://quilljs.com/
 *  Copyright (c) 2014, Jason Chen
 *  Copyright (c) 2013, salesforce.com
 */
.ql - image - tooltip {
    padding: 10px;
    width: 300px;
}
.ql - image - tooltip:after {
    clear: both;
    content: "";
    display: table;
}
.ql - image - tooltip a {
    border: 1px solid #000;
    box - sizing: border - box;
    display: inline - block;
    float: left;
    padding: 5px;
    text - align: center;
    width: 50 %;
}
.ql - image - tooltip img {
    bottom: 0;
    left: 0;
    margin: auto;
    max - height: 100 %;
    max - width: 100 %;
    position: absolute;
    right: 0;
    top: 0;
}
.ql - image - tooltip.input {
    box - sizing: border - box;
    width: 100 %;
}
.ql - image - tooltip.preview {
    margin: 10px 0px;
    position: relative;
    border: 1px dashed #000;
    height: 200px;
}
.ql - image - tooltip.preview span {
    display: inline - block;
    position: absolute;
    text - align: center;
    top: 40 %;
    width: 100 %;
}
.ql - link - tooltip {
    padding: 5px 10px;
}
.ql - link - tooltip input.input {
    width: 170px;
}
.ql - link - tooltip input.input,
.ql - link - tooltip a.done {
    display: none;
}
.ql - link - tooltip a.change {
    margin - right: 4px;
}
.ql - link - tooltip.editing input.input,
.ql - link - tooltip.editing a.done {
    display: inline - block;
}
.ql - link - tooltip.editing a.url,
.ql - link - tooltip.editing a.change,
.ql - link - tooltip.editing a.remove {
    display: none;
}
.ql - multi - cursor {
    position: absolute;
    left: 0;
    top: 0;
    z - index: 1000;
}
.ql - multi - cursor.cursor {
    margin - left: -1px;
    position: absolute;
}
.ql - multi - cursor.cursor - flag {
    bottom: 100 %;
    position: absolute;
    white - space: nowrap;
}
.ql - multi - cursor.cursor - name {
    display: inline - block;
    color: #fff;
    padding: 2px 8px;
}
.ql - multi - cursor.cursor - caret {
    height: 100 %;
    position: absolute;
    width: 2px;
}
.ql - multi - cursor.cursor.hidden.cursor - flag {
    display: none;
}
.ql - multi - cursor.cursor.top.cursor - flag {
    bottom: auto;
    top: 100 %;
}
.ql - multi - cursor.cursor.right.cursor - flag {
    right: -2px;
}
.ql - paste - manager {
    left: -100000px;
    position: absolute;
    top: 50 %;
}
.ql - toolbar {
    box - sizing: border - box;
}
.ql - tooltip {
    background - color: #fff;
    border: 1px solid #000;
    box - sizing: border - box;
    position: absolute;
    top: 0px;
    white - space: nowrap;
    z - index: 2000;
}
.ql - tooltip a {
    cursor: pointer;
    text - decoration: none;
}
.ql - container {
    box - sizing: border - box;
    cursor: text;
    font - family: Helvetica, 'Arial', sans - serif;
    font - size: 13px;
    height: 100 %;
    line - height: 1.42;
    margin: 0px;
    overflow - x: hidden;
    overflow - y: auto;
    padding: 12px 15px;
    position: relative;
}
.ql - editor {
    box - sizing: border - box;
    min - height: 100 %;
    outline: none;
    tab - size: 4;
    white - space: pre - wrap;
}
.ql - editor div {
    margin: 0;
    padding: 0;
}
.ql - editor a {
    text - decoration: underline;
}
.ql - editor b {
    font - weight: bold;
}
.ql - editor i {
    font - style: italic;
}
.ql - editor s {
    text - decoration: line - through;
}
.ql - editor u {
    text - decoration: underline;
}
.ql - editor a,
.ql - editor b,
.ql - editor i,
.ql - editor s,
.ql - editor u,
.ql - editor span {
    background - color: inherit;
}
.ql - editor img {
    max - width: 100 %;
}
.ql - editor blockquote,
.ql - editor ol,
.ql - editor ul {
    margin: 0 0 0 2em;
    padding: 0;
}
.ql - editor ol {
    list - style - type: decimal;
}
.ql - editor ul {
    list - style - type: disc;
}
.ql - editor.ql - ie - 9 br,
.ql - editor.ql - ie - 10 br {
    display: none;
}
.ql - snow.ql - image - tooltip a {
    border: 1px solid #06c;
}
.ql - snow.ql - image - tooltip a.insert {
    background - color: #06c;
    color: #fff;
}
.ql - snow.ql - image - tooltip.preview {
    border - color: #ccc;
    color: #ccc;
}
.ql - snow.ql - link - tooltip a,
.ql - snow.ql - link - tooltip span {
    line - height: 25px;
}
.ql - snow.ql - multi - cursor.cursor - name {
    border - radius: 4px;
    font - size: 11px;
    font - family: Arial;
    margin - left: -50 %;
    padding: 4px 10px;
}
.ql - snow.ql - multi - cursor.cursor - triangle {
    border - left: 4px solid transparent;
    border - right: 4px solid transparent;
    height: 0px;
    margin - left: -3px;
    width: 0px;
}
.ql - snow.ql - multi - cursor.cursor.left.cursor - name {
    margin - left: -8px;
}
.ql - snow.ql - multi - cursor.cursor.right.cursor - flag {
    right: auto;
}
.ql - snow.ql - multi - cursor.cursor.right.cursor - name {
    margin - left: -100 %;
    margin - right: -8px;
}
.ql - snow.ql - multi - cursor.cursor - triangle.bottom {
    border - top: 4px solid transparent;
    display: block;
    margin - bottom: -1px;
}
.ql - snow.ql - multi - cursor.cursor - triangle.top {
    border - bottom: 4px solid transparent;
    display: none;
    margin - top: -1px;
}
.ql - snow.ql - multi - cursor.cursor.top.cursor - triangle.bottom {
    display: none;
}
.ql - snow.ql - multi - cursor.cursor.top.cursor - triangle.top {
    display: block;
}
.ql - snow.ql - toolbar {
    box - sizing: border - box;
    padding: 8px;
    user - select: none;
    -webkit - user - select: none;
    -moz - user - select: none;
    -ms - user - select: none;
}
.ql - snow.ql - toolbar.ql - format - group {
    display: inline - block;
    margin - right: 15px;
    vertical - align: middle;
}
.ql - snow.ql - toolbar.ql - format - separator {
    box - sizing: border - box;
    background - color: #ddd;
    display: inline - block;
    height: 14px;
    margin - left: 4px;
    margin - right: 4px;
    vertical - align: middle;
    width: 1px;
}
.ql - snow.ql - toolbar.ql - format - button {
    box - sizing: border - box;
    display: inline - block;
    height: 24px;
    line - height: 24px;
    vertical - align: middle;
    background - position: center center;
    background - repeat: no - repeat;
    background - size: 18px 18px;
    box - sizing: border - box;
    cursor: pointer;
    text - align: center;
    width: 24px;
}
.ql - snow.ql - toolbar.ql - picker {
    box - sizing: border - box;
    color: #444;
    display: inline - block;
    font - family: 'Helvetica Neue', 'Helvetica', 'Arial', sans - serif;
    font - size: 14px;
    font - weight: 500;
    position: relative;
}
.ql - snow.ql - toolbar.ql - picker.ql - picker - label {
    box - sizing: border - box;
    display: inline - block;
    height: 24px;
    line - height: 24px;
    vertical - align: middle;
    background - color: #fff;
    background - position: right center;
    background - repeat: no - repeat;
    background - size: 18px 18px;
    border: 1px solid transparent;
    cursor: pointer;
    position: relative;
    width: 100 %;
}
.ql - snow.ql - toolbar.ql - picker.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label:hover {
    color: #06c;
}
.ql - snow.ql - toolbar.ql - picker.ql - picker - options {
    background - color: #fff;
    border: 1px solid transparent;
    box - sizing: border - box;
    display: none;
    padding: 4px 8px;
    position: absolute;
    width: 100 %;
}
.ql - snow.ql - toolbar.ql - picker.ql - picker - options.ql - picker - item {
    background - position: center center;
    background - repeat: no - repeat;
    background - size: 18px 18px;
    box - sizing: border - box;
    cursor: pointer;
    display: block;
    padding - bottom: 5px;
    padding - top: 5px;
}
.ql - snow.ql - toolbar.ql - picker.ql - picker - options.ql - picker - item.ql - selected,
.ql - snow.ql - toolbar.ql - picker.ql - picker - options.ql - picker - item:hover {
    color: #06c;
}
.ql - snow.ql - toolbar.ql - picker.ql - expanded.ql - picker - label {
    border - color: #ccc;
    color: #ccc;
    z - index: 2;
}
.ql - snow.ql - toolbar.ql - picker.ql - expanded.ql - picker - options {
    border - color: #ccc;
    box - shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    display: block;
    margin - top: -1px;
    z - index: 1;
}
.ql - snow.ql - toolbar.ql - picker.ql - color - picker.ql - picker - label {
    background - position: center center;
    width: 28px;
}
.ql - snow.ql - toolbar.ql - picker.ql - color - picker.ql - picker - options {
    padding: 5px;
    width: 152px;
}
.ql - snow.ql - toolbar.ql - picker.ql - color - picker.ql - picker - options.ql - picker - item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql - snow.ql - toolbar.ql - picker.ql - color - picker.ql - picker - options.ql - picker - item.ql - primary - color {
    margin - bottom: 8px;
}
.ql - snow.ql - toolbar.ql - picker.ql - color - picker.ql - picker - options.ql - picker - item.ql - selected,
.ql - snow.ql - toolbar.ql - picker.ql - color - picker.ql - picker - options.ql - picker - item:hover {
    border - color: #000;
}
.ql - snow.ql - toolbar.ql - picker.ql - font {
    width: 105px;
}
.ql - snow.ql - toolbar.ql - picker.ql - size {
    width: 80px;
}
.ql - snow.ql - toolbar.ql - picker.ql - font.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - size.ql - picker - label {
    padding - left: 8px;
    padding - right: 8px;
}
.ql - snow.ql - toolbar.ql - picker.ql - align.ql - picker - label {
    background - position: center center;
    width: 28px;
}
.ql - snow.ql - toolbar.ql - picker.ql - align.ql - picker - item {
    box - sizing: border - box;
    display: inline - block;
    height: 24px;
    line - height: 24px;
    vertical - align: middle;
    padding: 0px;
    width: 28px;
}
.ql - snow.ql - toolbar.ql - picker.ql - align.ql - picker - options {
    padding: 4px 0px;
}
.ql - snow.ql - toolbar.ql - picker.ql - picker - label {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAKlBMVEUAAABJSUlAQEBERERFRUVERERERERERERERERFRUVEREREREREREREREQJcW6NAAAADXRSTlMAFRzExcbLzM/Q0dLbKbcyLwAAADVJREFUCNdjYCAeMKYJQFnSdzdCWbl3r0NZvnev4tFre/cKlNV79yaUpXP3EJTFtEqBBHcAAHyoDQk0vM/lAAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - picker.ql - expanded.ql - picker - label {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR42mP4//8/VfBINGjVqlUMhw4dEj148OBpEAaxQWKkGgQz5BIQ/4fiSyAxkg2CuuQ/Gj5DjkFHsRh0jJwwwooHzCCQ145g8dpRcgw6j8WgCyQbtH//fhmgxttIhtwGiZETRjDDLoIwiA0UG820FGAA5b25+qRqGXcAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - picker.ql - active:not(.ql - expanded).ql - picker - label,
.ql - snow.ql - toolbar:not(.ios).ql - picker:not(.ql - expanded).ql - picker - label:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAKlBMVEUAAAAAYc4AZMgAZcwAZs0AZs0AZs0AZ8wAZswAZs0AZswAZswAZswAZsx12LPhAAAADXRSTlMAFRzExcbLzM/Q0dLbKbcyLwAAADVJREFUCNdjYCAeMKYJQFnSdzdCWbl3r0NZvnev4tFre/cKlNV79yaUpXP3EJTFtEqBBHcAAHyoDQk0vM/lAAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - bold,
.ql - snow.ql - toolbar.ql - picker.ql - bold.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bold],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bold] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAYFBMVEUAAACAgIBAQEA5OTlAQEBERERAQEBERERERERERERDQ0NERERERERERERDQ0NERERERERFRUVERERERERFRUVERERERERERERERERERERERERERERERERERERERERERESN6WzHAAAAH3RSTlMAAggJDA8cQEtTWHF/i4yTpau+xMXX3O7v8/f6+/z+qN9w2AAAAFZJREFUeNqlzMcSgCAMRVEsYO+9vv//S9FhNIYld5HFmSTCqQ66dazkRzA1lPSQGRZGIsDMKMxRW7+2yCIcyf/QUyUGSnc+dkaqoFumM32pf2BqY+HUBfQaCPgVIBc1AAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - bold.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - bold.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bold].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bold].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - bold:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - bold.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=bold]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=bold]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAYFBMVEUAAAAAgP8AYL8AccYAatUAZswAZMgAZMsAZswAZcsAZcsAZssAZssAZ80AZswAZs0AZswAZ8wAZswAZcwAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsxCU9XcAAAAH3RSTlMAAggJDA8cQEtTWHF/i4yTpau+xMXX3O7v8/f6+/z+qN9w2AAAAFZJREFUeNqlzMcSgCAMRVEsYO+9vv//S9FhNIYld5HFmSTCqQ66dazkRzA1lPSQGRZGIsDMKMxRW7+2yCIcyf/QUyUGSnc+dkaqoFumM32pf2BqY+HUBfQaCPgVIBc1AAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - italic,
.ql - snow.ql - toolbar.ql - picker.ql - italic.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=italic],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=italic] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAi0lEQVR42mMYvoARl4SLi0sNkGoAYmY0qf+MjIztu3fvrkYWZGLADZhB8pS4CN1lQUBqLRDvAQJXHMqIstEISp8BEZQYZAIi/v//f5ZSg0xBBCMj4ymyDQKGjxKQEgLiV8DweUS2QUBXGEOZp0EEJV4zgdJnKDLo379/JsS6iJHSFA0DTDhT9CiAAQBbWyIY/pd4rQAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - italic.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - italic.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=italic].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=italic].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - italic:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - italic.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=italic]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=italic]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAk0lEQVR42u3SsQ3CMBBA0X/2BozACMQswg4EMQMUdOyQVdggdpagZAc4ihjJjYmU66K8xpZsfdnSsVxCzTFdEW6AB0oKcqdrLhQcNaK+PLc79QfapLTDgz8cU9Tv8ibZQqIBgI8OxhexH29KPz90jltgA7zownN+6C0Nowhg+JqEvCZbSDSHNDJBLBNdctWJXv18Ad5dJL0jVfDhAAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - underline,
.ql - snow.ql - toolbar.ql - picker.ql - underline.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=underline],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=underline] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAM1BMVEUAAABLS0tFRUVDQ0NERERDQ0NFRUVFRUVERERDQ0NERERFRUVERERERERERERERERERESvCHKbAAAAEHRSTlMAERpMbW6Bgry9xMXh5PP51ZZfkwAAAEdJREFUeNq9yEEKgDAMRNHERDWq6dz/tFLBQUC6KfRtPnzpsh/sC2AHrcRUo0iuDXONI7gMxVW9wIQWPFb5sMgMk5YTdMmvGw2DA8yS9di7AAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - underline.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - underline.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=underline].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=underline].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - underline:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - underline.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=underline]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=underline]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAM1BMVEUAAAAAadIAYs4AZc0AZcwAZswAZ84AZswAZs0AZ8wAZcwAZs0AZswAZswAZswAZswAZsycBlETAAAAEHRSTlMAERpMbW6Bgry9xMXh5PP51ZZfkwAAAEdJREFUeNq9yEEKgDAMRNHERDWq6dz/tFLBQUC6KfRtPnzpsh/sC2AHrcRUo0iuDXONI7gMxVW9wIQWPFb5sMgMk5YTdMmvGw2DA8yS9di7AAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - strike,
.ql - snow.ql - toolbar.ql - picker.ql - strike.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=strike],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=strike] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAn1BMVEUAAAAAAACAgIBAQEA7OztAQEBLS0tHR0dAQEBJSUlGRkZERERCQkJERERDQ0NERERERERDQ0NFRUVERERERERERERERERERERFRUVERERERERERERFRUVDQ0NFRUVERERFRUVFRUVERERFRUVFRUVFRUVERERFRUVFRUVERERERERERERERERERERERERERERERERERERERERERERERERfrjwTAAAANHRSTlMAAQIMDRAREhQVKCk6PEhLT1xkZWZ4e4CCg4SIiZucoaersLK2wcTFydLX2ODi5err8fX3BKZfrQAAAH5JREFUGBmlwOEWgTAYBuC3isgMxCYAmwRh++7/2qRzttP/HnQTZjdjilkALzhR4wBvQiaLk8WXOJwlHVHjYgxnSmbeR0swGEkpxWZ3vt7fL/w9P4/ist+KdZ7zYYiWiCnScFYiRq1HFo4mxaKIKdJw0ooaVQovkaW1pUzQyQ86Agx4yKmWPAAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - strike.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - strike.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=strike].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=strike].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - strike:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - strike.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=strike]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=strike]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAolBMVEUAAAAAAP8AgP8AatUAYsQAYM8AadIAY8YAZswAYc4AZswAZM0AZcoAZswAZ8oAZswAZMsAZ8oAZswAZcoAZ8sAZswAZssAZssAZs0AZswAZ8wAZs0AZ8wAZs0AZswAZ8wAZ8wAZs0AZ8wAZ8wAZs0AZs0AZs0AZcwAZs0AZcwAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsyiCU+yAAAANXRSTlMAAQIMDRAREhQVKCk6PEhLT1xkZWZ4e4CAgoOEiImbnKGnq7CytsHExcnS19jg4uXq6/H190B1i7AAAAB/SURBVBgZpcDhFoEwGAbgt4pIBmImAJsEYfvu/9ZU52yn/z3oxk/vWuczD453psYRzoR0GkaLHzFYSzqhwvgY1pT0vI8WbzASQvDt/nJ7fN6ovb7P/HrYrTdZxoY+WoJEkoK14iEqPTKwFMkkCBJJClZcUqOM4USiMKYQETr5A2SVDLpJv6ZtAAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - link,
.ql - snow.ql - toolbar.ql - picker.ql - link.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=link],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=link] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAllBMVEUAAAD///9VVVVJSUk5OTlAQEBHR0dFRUVCQkJHR0dBQUFCQkJGRkZDQ0NGRkZFRUVCQkJDQ0NERERDQ0NERERFRUVERERFRUVDQ0NERERFRUVERERERERFRUVERERERERERERERERFRUVERERFRUVFRUVERERERERERERERERERERERERERERERERERERERERERERERETx5KUoAAAAMXRSTlMAAAYHCQwZGiMkJzIzOUJOYGNlfoCJl5ibnaCxtLa8xsfIycrQ1OHi5uvs7e/19vn8NGTYeAAAAJdJREFUeNqN0McOgkAARdGnFJWiKGBhEEFpSn3//3OGjMmQ6MK7PMuLxVe/CXDTPl5DJmk3cOTTmZE7MDQES11RyhBY5vQU9aOB2z3gWVFMsXywYx3t9Q9tXsyDjlOVLQlOyanOL1ibkqB7l5odM01QSJqK6GdXmGwUHVhowImJIr2iMI9sLUWwa5LtFjPCSjSJBUl//HoDlmQPy0DFuCkAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - link.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - link.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=link].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=link].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - link:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - link.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=link]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=link]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAmVBMVEUAAAD///8AVdUAbdsAccYAatUAZswAYs4AZswAY80AacsAZswAZM0AZ8kAZM0AZcsAZcoAZMsAZcoAZcoAZssAZs0AZs0AZ8wAZs0AZswAZs0AZswAZs0AZswAZs0AZs0AZs0AZ8wAZswAZcwAZs0AZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsy/jsjWAAAAMnRSTlMAAAYHCQwZGiMkJzIzOUJOYGNlfoCAiZeYm52gsbS2vMbHyMnK0NTh4ubr7O3v9fb5/BM/koAAAACXSURBVHjajdDbEoFQAIXhpROqiAjaSdGJSq33fzjTbDO7GS78l9/lj9lXvwnw0le8gEzSuufAhzshr2doCpaGopQhoOX0Fb0GE9fbnidFMYV2Z8c62hgfWj6Z7zqOVY4kuCXHuqBgbUmC4Z9rdsx0QSFpLGKQXWCxUbRloQNHJoqMisI6sLUVwalJtitMCHPRJDYk/fHrDdIHECSPJag6AAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - image,
.ql - snow.ql - toolbar.ql - picker.ql - image.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=image],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=image] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAElBMVEUAAABERERERERFRUVEREREREQbmEZBAAAABXRSTlMAeMTFxj7M9NAAAABBSURBVAjXY2DAD1RDQSAYyAqFABALLANmMRnAWMwODIIMUFnGUAEIS1A0NADMYgTqhLBY4SyEKXCTTcGMEAJuAgBa9RKl6Fva+wAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - image.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - image.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=image].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=image].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - image:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - image.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=image]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=image]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAElBMVEUAAAAAZswAZcwAZs0AZs0AZszYB6XUAAAABXRSTlMAeMTFxj7M9NAAAABBSURBVAjXY2DAD1RDQSAYyAqFABALLANmMRnAWMwODIIMUFnGUAEIS1A0NADMYgTqhLBY4SyEKXCTTcGMEAJuAgBa9RKl6Fva+wAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - list,
.ql - snow.ql - toolbar.ql - picker.ql - list.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=list],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=list] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAS1BMVEUAAABCQkJFRUVGRkZFRUVCQkJFRUVDQ0NFRUVFRUVFRUVERERERERERERERERFRUVERERERERERERERERERERERERERERERERERET32eciAAAAGHRSTlMAMjRCQ0lOfYKQlJmaocTFxuHi5OXm9falfyKhAAAATElEQVR42mMgFnCKYIpJMDDwSUABP1yIHyYkABYRlBAmwngucV50IXZGIXTjmQTZ0I0XIcp4DjEedCFWFlF041mZRdCN5xDjZiAdAACXwgbrzvG+ZgAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - list.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - list.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=list].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=list].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - list:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - list.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=list]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=list]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAS1BMVEUAAAAAZswAZ8kAZM0AZ8oAZcsAZcsAZswAZswAZ80AZs0AZs0AZ80AZ8wAZcwAZs0AZs0AZswAZswAZswAZswAZswAZswAZswAZswCB3gJAAAAGHRSTlMAMjRCQ0lOfYKQlJmaocTFxuHi5OXm9falfyKhAAAATElEQVR42mMgFnCKYIpJMDDwSUABP1yIHyYkABYRlBAmwngucV50IXZGIXTjmQTZ0I0XIcp4DjEedCFWFlF041mZRdCN5xDjZiAdAACXwgbrzvG+ZgAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - bullet,
.ql - snow.ql - toolbar.ql - picker.ql - bullet.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bullet],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bullet] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAABERERFRUVERERERETRGyWnAAAABHRSTlMAxMXG4b8ciAAAABxJREFUCNdjYMAPhBhdgMAJyFJmArGcGRgGXAcA/t0ImAOSO9kAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - bullet.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - bullet.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bullet].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bullet].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - bullet:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - bullet.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=bullet]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=bullet]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAAAAZcwAZs0AZs0AZsyEYJIjAAAABHRSTlMAxMXG4b8ciAAAABxJREFUCNdjYMAPhBhdgMAJyFJmArGcGRgGXAcA/t0ImAOSO9kAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - authorship,
.ql - snow.ql - toolbar.ql - picker.ql - authorship.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=authorship],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=authorship] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAARVBMVEUAAABFRUVFRUUAAAAAAABERERDQ0NEREQAAABERERERERERERERERERERFRUVERERERERERERERERERERERERERERERERVeSBUAAAAFnRSTlMAMDtOT1JfYmassMfN09Ta6vD4+fz9w8DTTwAAAExJREFUGBmVwEkSgCAMBMBRQUEU4zb/f6oFF5KbNLp4EQ8rkxnWQ76whBRYkYwwxo08ZijDzWJBs7La0ZysLjSJVUKXKSgOhQuKw08fJOYE1SddZQoAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - authorship.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - authorship.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=authorship].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=authorship].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - authorship:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - authorship.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=authorship]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=authorship]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAARVBMVEUAAAAAZcoAaMsAZc4AZ8sAZ8oAZswAZcsAZ80AZs0AZ8wAZ8wAZswAZswAZswAZs0AZswAZswAZswAZswAZswAZswAZszAoUIuAAAAFnRSTlMAMDtOT1JfYmassMfN09Ta6vD4+fz9w8DTTwAAAExJREFUGBmVwEkSgCAMBMBRQUEU4zb/f6oFF5KbNLp4EQ8rkxnWQ76whBRYkYwwxo08ZijDzWJBs7La0ZysLjSJVUKXKSgOhQuKw08fJOYE1SddZQoAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - color,
.ql - snow.ql - toolbar.ql - picker.ql - color.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=color],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=color] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAgVBMVEUAAAAAAACAgIBAQEBVVVVDQ0NGRkZGRkZFRUVERERDQ0NDQ0NDQ0NCQkIAAABFRUUAAABDQ0NEREREREREREQAAABDQ0NDQ0NERERFRUVERERERERERERDQ0NERERERERFRUVFRUVERERERERERERERERERERERERERERERERERERLPkdWAAAAKnRSTlMAAQIEBhMWISUtLkVMTU5OT1BTVlpmeX6OkJmdvL3GztTj5/Hy8/b3/f5utmv0AAAAX0lEQVR42pXIRQ6AQABDUdzd3bX3PyCWwAwr+Is2ecyvuKriXmQD5otKoKBFQz+sKkU5khQZKdK8yMoyiQTFOIseEbqLWv6mAPW+bAPvJmN0j/N7nfmTFRI5Jzk0fWwD4sYJPnqIyzwAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - color.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - color.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=color].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=color].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - color:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - color.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=color]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=color]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAgVBMVEUAAAAAAP8AgP8AgL8AVdUAa8kAaNEAZMkAZ8gAZswAZM0AZMsAZc0AZ8oAZcsAZc4AZ8sAZswAZcsAZc0AZswAZ80AZcoAZcoAZs0AZ80AZs0AZs0AZs0AZ8wAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsy3JBcuAAAAKnRSTlMAAQIEBhMWISUtLkVMTU5OT1BTVlpmeX6OkJmdvL3GztTj5/Hy8/b3/f5utmv0AAAAX0lEQVR42pXIRQ6AQABDUdzd3bX3PyCWwAwr+Is2ecyvuKriXmQB5otKoKBFQz+sKkU5khQZKdK8yMoyiQTFOIseEbqLWv6mAPW+bAPvJmN0j/N7nfmTHRI5Jzk0fWwD4foJPqgJbeoAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - background,
.ql - snow.ql - toolbar.ql - picker.ql - background.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=background],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=background] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAnFBMVEUAAAAAAACAgIBAQEAAAABVVVUAAAAAAAAAAABDQ0MAAABGRkZGRkYAAABFRUVERERDQ0MAAAAAAAAAAAAAAABDQ0MAAABDQ0MAAABCQkJFRUVDQ0NERERERERERERDQ0NDQ0NERERFRUVERERERERERERDQ0NERERERERFRUVFRUVERERERERERERERERERERERERERERERERERETMTXVbAAAAM3RSTlMAAQIEBgYHCBMTFBYhIyUtLjE2N0JFS0xNTU5QU1ZaeX6OkJmdvL3GztTj5/Hy8/b3/f5Qd6EEAAAAf0lEQVR42o2PRw6DQBRDHVJISCUhvTd69/3vhgT6MLPDmoX15KfRR++c6mdKgVIOTRFoeJ6hE+tCnjXRgUv+oc02jJNyrYk/vj/8jhRxnheLVZHNupn1Yp3nVIgzjhoUDlvxQR/AIOBtKbNjerUB+x7vhZjARPkLyslbYIe+qQDqMQxGJwkBGwAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - background.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - background.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=background].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=background].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - background:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - background.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=background]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=background]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAllBMVEUAAAAAAP8AgP8AgL8AVdUAbbYAYL8Aa8kAZswAaNEAZMkAZswAZ8gAZswAZM0AaMsAaNAAZswAZM0AZMsAZswAZc0AZ8oAZ80AZcsAZswAZcsAZc0AZswAZcoAZcoAZs0AZ80AZs0AZs0AZs0AZ8wAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsy8dW5vAAAAMXRSTlMAAQIEBgcIExQWISMlLS4xNjdCRUtMTU1OUFNWWnl+jpCZnby9xs7U4+fx8vP29/3+dqGBzgAAAH5JREFUeNqNj0cOg0AUQx1CgFQS0nujd9//ckigDzM7rFlYT34afYzOuX2WFCjl0BWBRhAYOnEu5EkTPfjkH9pswzSr15r44/vDr6mI87JarKrCHmbOi22ethDPTDoUT3vxwRDAJOJtKbNjfnUB957uhVjATPkLyslbYIexaQB/ngudkm14XQAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - left,
.ql - snow.ql - toolbar.ql - picker.ql - left.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=left],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=left] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAABERERFRUVERERERETRGyWnAAAABHRSTlMAxMXG4b8ciAAAAClJREFUCNdjYMAPRFxcnCAsFRcXZwYiAFCHC0STCpjlTJwOJwaYDoIaAKIACBBRNsu4AAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - left.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - left.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=left].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=left].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - left:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - left.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=left]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=left]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAAAAZcwAZs0AZs0AZsyEYJIjAAAABHRSTlMAxMXG4b8ciAAAAClJREFUCNdjYMAPRFxcnCAsFRcXZwYiAFCHC0STCpjlTJwOJwaYDoIaAKIACBBRNsu4AAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - right,
.ql - snow.ql - toolbar.ql - picker.ql - right.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=right],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=right] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAABERERFRUVERERERETRGyWnAAAABHRSTlMAxMXG4b8ciAAAAChJREFUCNdjYCAIRFxcnCAsFRcXZ2KUu0B0qIBZzgzEaXFigGkhpAMAmbwIEMJ9k/cAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - right.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - right.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=right].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=right].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - right:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - right.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=right]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=right]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAAAAZcwAZs0AZs0AZsyEYJIjAAAABHRSTlMAxMXG4b8ciAAAAChJREFUCNdjYCAIRFxcnCAsFRcXZ2KUu0B0qIBZzgzEaXFigGkhpAMAmbwIEMJ9k/cAAAAASUVORK5CYII=");
}
.ql - snow.ql - toolbar.ql - format - button.ql - center,
.ql - snow.ql - toolbar.ql - picker.ql - center.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=center],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=center] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAABERERFRUVERERERETRGyWnAAAABHRSTlMAxMXG4b8ciAAAAC1JREFUCNdjYCAAGF1cXBTALCYgy4CBIBBxAQEnIEsFzHJmIMYKiCVMYBYhSwCyqQhMfft6AQAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - center.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - center.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=center].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=center].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - center:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - center.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=center]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=center]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAAAAZcwAZs0AZs0AZsyEYJIjAAAABHRSTlMAxMXG4b8ciAAAAC1JREFUCNdjYCAAGF1cXBTALCYgy4CBIBBxAQEnIEsFzHJmIMYKiCVMYBYhSwCyqQhMfft6AQAAAABJRU5ErkJggg==");
}
.ql - snow.ql - toolbar.ql - format - button.ql - justify,
.ql - snow.ql - toolbar.ql - picker.ql - justify.ql - picker - label,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=justify],
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=justify] {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAD1BMVEUAAABERERFRUVERERERETRGyWnAAAABHRSTlMAxMXG4b8ciAAAABpJREFUCNdjYMAPRFxAwAnIUgGznBkYBlwHAJGzCjB/C3owAAAAAElFTkSuQmCC");
}
.ql - snow.ql - toolbar.ql - format - button.ql - justify.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - justify.ql - picker - label.ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=justify].ql - active,
.ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=justify].ql - selected,
.ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - justify:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - justify.ql - picker - label:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=justify]:hover,
.ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=justify]:hover {
    background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAALklEQVR42mMYvoARzko9cwTIsyZR+zGGWcZgPUwIMUZGShwyGtijgT0a2EMMAADESwwWta/i5QAAAABJRU5ErkJggg==");
}
@media(-webkit - min - device - pixel - ratio: 2) {
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAIVBMVEUAAABCQkJDQ0NDQ0NERERERERERERERERERERERERERERehmmoAAAACnRSTlMATVRbaeXo6fz+NPhZJgAAAF9JREFUKM9jYBjkQC0JXYS5a4UBmpDFqlXN6IpWrUJTprEKCJpQhLJAQsswhZaiCImDhAJp5kMxkPGJZLjLEiQ0GUWIZdaqVSsdUM33XLVqCpqVLLPQFTEwmAcP9qQAAFUgKabkwE6gAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - picker.ql - expanded.ql - picker - label {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAJFBMVEWqqqr////AwMDAwMDAwMDBwcHBwcHBwcHBwcHBwcHBwcHBwcEexLCPAAAAC3RSTlMAAE1UW2nl6On8/tZA57EAAABxSURBVHjazc4hFkBAGMTxL3AAp+AGniYiyaLnBETHoKkknbc7l7OrzW7zhP3HX5mRxCskEsknEaZoU6VDNbAyRRugSqICpoVotnT7dBFllnpefPuHUpjGD78aSztRfAK65cUOOIQpPnXrkFSDEFFB0APtK1HCkKpz1wAAAABJRU5ErkJggg==");
    }
  .ql - snow.ql - toolbar.ql - picker.ql - active:not(.ql - expanded).ql - picker - label,
  .ql - snow.ql - toolbar:not(.ios).ql - picker:not(.ql - expanded).ql - picker - label:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAIVBMVEUAAAAAZ8oAZMsAZc0AZswAZswAZswAZswAZswAZswAZswhMkyGAAAACnRSTlMATVRbaeXo6fz+NPhZJgAAAF9JREFUKM9jYBjkQC0JXYS5a4UBmpDFqlXN6IpWrUJTprEKCJpQhLJAQsswhZaiCImDhAJp5kMxkPGJZLjLEiQ0GUWIZdaqVSsdUM33XLVqCpqVLLPQFTEwmAcP9qQAAFUgKabkwE6gAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - bold,
  .ql - snow.ql - toolbar.ql - picker.ql - bold.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bold],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bold] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAxlBMVEUAAABVVVUzMzNVVVVJSUlGRkZAQEBJSUlAQEBAQEBAQEBHR0dCQkJGRkZAQEBGRkZCQkJERERDQ0NDQ0NGRkZERERDQ0NFRUVCQkJFRUVERERDQ0NDQ0NFRUVDQ0NERERERERERERERERERERERERERERERERERERFRUVDQ0NERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERfjmwgAAAAQXRSTlMAAwUGBwsMDhAUGBkbHSAhIykuOUJERUpNUVZYXGRne3yAi4+SmqWmq67R1tfY2dve5ujp7/Dy8/T19vf4+fv8/mUg1b0AAACrSURBVDjL5dPFDgJBEEXRxt3d3d11gPv/P8WCEAgZuno/b1WLk1TqJaWUI1Jc8852Mqz5bdHHALDK2CF+ckgYIHp/0GtypxpHYKlFSqkycJeQD7hIKADMJFQHulrkSrYs2MflCnZZgzKvo7RJmZeSAWIf1V3nihSGAG19BUq1gKmEQsBZQkHAklATmOuQN5zvP4COQQWnmIxuFfERWOTsXmrztWg8qHqUU/IEzOhNFx6Ncl4AAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - bold.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - bold.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bold].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bold].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - bold:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - bold.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=bold]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=bold]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAxlBMVEUAAAAAVaoAZswAVdUAbdsAXdEAatUAbcgAYM8AZswAasoAZswAaNAAasoAaMcAZMkAZswAZM0AZM0AZ8kAZM0AZcsAZMsAZMsAZ8oAZc0AZc0AZcsAZ8oAZswAZssAZssAZcwAZssAZ80AZs0AZ8wAZ80AZswAZ8wAZ8wAZ8wAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsyeO+aMAAAAQXRSTlMAAwUGBwsMDhAUGBkbHSAhIykuOUJERUpNUVZYXGRne3yAi4+SmqWmq67R1tfY2dve5ujp7/Dy8/T19vf4+fv8/mUg1b0AAACrSURBVDjL5dPFDgJBEEXRxt3d3d11gPv/P8WCEAgZuno/b1WLk1TqJaWUI1Jc8852Mqz5bdHHALDK2CF+ckgYIHp/0GtypxpHYKlFSqkycJeQD7hIKADMJFQHulrkSrYs2MflCnZZgzKvo7RJmZeSAWIf1V3nihSGAG19BUq1gKmEQsBZQkHAklATmOuQN5zvP4COQQWnmIxuFfERWOTsXmrztWg8qHqUU/IEzOhNFx6Ncl4AAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - italic,
  .ql - snow.ql - toolbar.ql - picker.ql - italic.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=italic],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=italic] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAjVBMVEUAAAAAAACAgIBAQEBVVVVAQEBAQEBCQkJCQkJFRUVDQ0NBQUFDQ0NDQ0NDQ0NFRUVERERERERERERDQ0NERERDQ0NERERERERERERFRUVFRUVERERFRUVERERERERDQ0NERERERERERERDQ0NFRUVEREREREREREREREREREREREREREREREREREREREQUqV1+AAAALnRSTlMAAQIEBggMGyMlKisuUFhZXmJmb3R9hIiKjZGTlKWprrG0uL3BxObt8PL19/j9SqrrawAAAIJJREFUOMvl0jUOQgEQRVHc3d1dzv6XRwch+WRq4NYnmVdMKvU35RZXz+7LQiJqe6uXiDrvqJuI8vM7ALd14fOwIabR+i1agUmfUA1QGedMgJrYRZPGGEVoh0ZgMmeUAlTBMbrWwiZCEwwitEc9MNkLigGq4RBda2MVoRn6X/jfv9YDjuYgGnCpSqcAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - italic.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - italic.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=italic].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=italic].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - italic:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - italic.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=italic]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=italic]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAjVBMVEUAAAAAAP8AgP8AgL8AVdUAYL8AatUAaNAAZswAZ8gAZ8gAZcoAZM0AZswAZcsAZMsAZMsAZcsAZ8sAZcoAZcoAZswAZs0AZ8wAZs0AZ8wAZswAZs0AZs0AZswAZ8wAZ8wAZs0AZswAZ8wAZ8wAZs0AZcwAZswAZswAZswAZswAZswAZswAZswAZswAZsyyI9XbAAAALnRSTlMAAQIEBggMGyMlKisuUFhZXmJmb3R9hIiKjZGTlKWprrG0uL3BxObt8PL19/j9SqrrawAAAIJJREFUOMvl0jUOQgEQRVHc3d1dzv6XRwch+WRq4NYnmVdMKvU35RZXz+7LQiJqe6uXiDrvqJuI8vM7ALd14fOwIabR+i1agUmfUA1QGedMgJrYRZPGGEVoh0ZgMmeUAlTBMbrWwiZCEwwitEc9MNkLigGq4RBda2MVoRn6X/jfv9YDjuYgGnCpSqcAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - underline,
  .ql - snow.ql - toolbar.ql - picker.ql - underline.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=underline],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=underline] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAWlBMVEUAAAAAAAAzMzNAQEBGRkZERERERERCQkJERERDQ0NFRUVERERERERFRUVERERERERERERFRUVERERERERERERDQ0NFRUVERERERERERERERERERERERERERET15sOLAAAAHXRSTlMAAQUMLC04TU9UVYePkJKkxMXG2Nrf4+jz9/n6/qlZ0HQAAACUSURBVHja7Y3BDsIgEAW3UCmCFatQxLL//5uuiQ0py1EPxs5tHhMW/oMhxoF5TUSMzGuQqH2PfiO60yiLStIHi260qqKKNLDI0XouOpI6Fh1f/x9W6xOpYZHwNM/9u5lJvACGzvSQRiWlOiUkNDSwuMFCi87mkmTbQRvt18aXWwxhXFiW4IyAr3LBJtMmmtrRFT7ME0B0HEswIOSJAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - underline.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - underline.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=underline].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=underline].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - underline:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - underline.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=underline]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=underline]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAWlBMVEUAAAAAAP8AZswAatUAaMsAZswAZM0AZ8oAZMsAZMsAZswAZswAZs0AZ80AZ8wAZ8wAZcwAZs0AZs0AZswAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZszogqY1AAAAHXRSTlMAAQUMLC04TU9UVYePkJKkxMXG2Nrf4+jz9/n6/qlZ0HQAAACUSURBVHja7Y3BDsIgEAW3UCmCFatQxLL//5uuiQ0py1EPxs5tHhMW/oMhxoF5TUSMzGuQqH2PfiO60yiLStIHi260qqKKNLDI0XouOpI6Fh1f/x9W6xOpYZHwNM/9u5lJvACGzvSQRiWlOiUkNDSwuMFCi87mkmTbQRvt18aXWwxhXFiW4IyAr3LBJtMmmtrRFT7ME0B0HEswIOSJAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - strike,
  .ql - snow.ql - toolbar.ql - picker.ql - strike.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=strike],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=strike] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABLFBMVEUAAACAgIBVVVVAQEAzMzNVVVVAQEA5OTlNTU1JSUlERERHR0dDQ0NGRkZDQ0NAQEBCQkJAQEBGRkZAQEBGRkZERERBQUFERERGRkZCQkJGRkZERERFRUVERERDQ0NFRUVERERDQ0NFRUVCQkJDQ0NFRUVCQkJDQ0NERERDQ0NERERERERDQ0NFRUVERERERERERERERERFRUVERERDQ0NFRUVERERERERFRUVERERERERDQ0NDQ0NFRUVERERERERFRUVERERERERFRUVERERERERDQ0NERERFRUVERERERERERERFRUVERERERERERERERERFRUVERERERERERERFRUVERERERERERERERERERERERERERERERERERERERERERERERERERERERET5TTiyAAAAY3RSTlMAAgMEBQYICQoODxITFhcYGxwdICEtLzEzNjc4P0BFRkdISk1YWWBjaWtsdHZ3f4CHiImKjJGSk5SVl5ufo6Smp625uru8vb/BwsPExcbMzs/Q0dPi4+Tl6+zv8PL19vf4+/z2SQ4sAAABE0lEQVQ4y2NgGDmAV8c5PCkxxFGDE6cSDuOEZCiI0WXGroY/OBkJeHJhU8Pkm4wCXBixKFIHyUTqibJzS5lEgNhqWBT5AMWD+CFsHg8gxxuLoniguCyMIwLkxGFRBPKZDKEw8gMqCuAloEgb7HADMTZ8ijisjHTUlCSFOdgFxeVUNPXM7Z38QmJ9EApQxFFCyxeuxhtFPC7U39nBQl9LVV5CiAMpiFDEOYQlldR0jGwM8DmOVVDRLBpkpDIBr/KBXOBKKNSEgYpiMUQjgaLChBQ5A0W94AHO6wXkumEoUgY5NcpUUYCFRUDBNAqHw22T0YAdNp9bo6qxZMLqI4VAhJIgBZwelzZ0D4uLC3M3lB5B5QgAFQdgZ6NzzvYAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - strike.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - strike.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=strike].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=strike].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - strike:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - strike.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=strike]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=strike]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABLFBMVEUAAAAAgP8AVaoAgL8AZswAVdUAYL8AccYAZswAbcgAZswAY8YAa8kAaNEAZMgAasoAaNAAZMgAasoAaMcAZMkAZswAZ8kAaMsAZM0AaMsAZswAZM0AZcoAZMsAZMsAZswAZc0AZ8oAZMsAZ8oAZcsAZMsAZcoAZMsAZswAZssAZssAZcoAZssAZcwAZssAZs0AZswAZ8wAZs0AZs0AZswAZswAZ8wAZs0AZs0AZ80AZ8wAZswAZ8wAZs0AZ8wAZ8wAZs0AZs0AZswAZ8wAZs0AZs0AZ8wAZcwAZs0AZ8wAZswAZcwAZs0AZs0AZ8wAZswAZswAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswL5dPDAAAAY3RSTlMAAgMEBQYICQoODxITFhcYGxwdICEtLzEzNjc4P0BFRkdISk1YWWBjaWtsdHZ3f4CHiImKjJGSk5SVl5ufo6Smp625uru8vb/BwsPExcbMzs/Q0dPi4+Tl6+zv8PL19vf4+/z2SQ4sAAABE0lEQVQ4y2NgGDmAV8c5PCkxxFGDE6cSDuOEZCiI0WXGroY/OBkJeHJhU8Pkm4wCXBixKFIHyUTqibJzS5lEgNhqWBT5AMWD+CFsHg8gxxuLoniguCyMIwLkxGFRBPKZDKEw8gMqCuAloEgb7HADMTZ8ijisjHTUlCSFOdgFxeVUNPXM7Z38QmJ9EApQxFFCyxeuxhtFPC7U39nBQl9LVV5CiAMpiFDEOYQlldR0jGwM8DmOVVDRLBpkpDIBr/KBXOBKKNSEgYpiMUQjgaLChBQ5A0W94AHO6wXkumEoUgY5NcpUUYCFRUDBNAqHw22T0YAdNp9bo6qxZMLqI4VAhJIgBZwelzZ0D4uLC3M3lB5B5QgAFQdgZ6NzzvYAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - link,
  .ql - snow.ql - toolbar.ql - picker.ql - link.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=link],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=link] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABDlBMVEUAAAD///8AAACAgIBVVVVAQEAzMzNVVVVAQEBNTU1HR0dAQEBJSUlGRkZDQ0NAQEBERERHR0dGRkZDQ0NBQUFGRkZERERCQkJGRkZFRUVCQkJFRUVERERDQ0NDQ0NCQkJFRUVDQ0NERERDQ0NFRUVDQ0NFRUVFRUVFRUVFRUVERERDQ0NFRUVERERFRUVERERERERDQ0NFRUVFRUVERERERERERERERERFRUVERERERERERERFRUVDQ0NERERERERFRUVERERERERERERERERERERERERERERERERERERERERFRUVERERERERERERERERERERERERERERERERERERERERERERERERERERERESFPz0UAAAAWXRSTlMAAAECAwQFBggKEhQVFhccHiQoKissLTIzNDpGR0hMTU5QUlRVW12BgoaHjI2PmJmam5ygpKWosbKztLW6vcDD0NLT2Nna3N7g4eLj5Ofo6err7u/w8vn7/A90CXkAAAFqSURBVDjLzdTHUgJREIXho8yo6JgFc0LFjAkVMZAFJYrCzP/+L+JCtJipS5U7Patbt79Vd1dr6BfRHyBJUiie6dSSiwrEh2aeAPAO7cEoUqWXdHgQirQAOh7A46gZzVQBzsfmSgAnRhR6AjiS5OQAd9aE4t9GmqoCCRPKAGe9zzhQDxlQBzpjknab9c2RD2DBgGrgzUlqQnfrHlg3oGug6Eh1oFsAEtvLVhAteUBuSjseP2lfzQf6dARQjY/s9SncY9uH7DQA7+ky/XkI+8YSfvRVC6k3AO4s34BHT90+1N2yYq8A+/5V0Wyi0ac2NJkD3KgfSaGF9QRQ9oCC5JSAiyCStA2k9jzISooCFQNaBlpWrJBdkTThQsOA7DYQ+3pbKeDWgHQFvDiSNJwEWDWheRfIOZKVBLiRCekYoBiZSAHkx83IfgDABXielhkpfAcAkJ/WICTrwAXgZlyDkRS9rDRu1wJL98/u0yeVYHcP1mwWWgAAAABJRU5ErkJggg==");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - link.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - link.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=link].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=link].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - link:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - link.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=link]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=link]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABDlBMVEUAAAD///8AAP8AgP8AVaoAgL8AZswAVdUAYL8AZswAY8YAZswAYc4AaNEAZMgAZMgAZswAY80AZswAZ8gAZcoAaMsAZswAZswAZM0AZ8kAZcoAZswAZc0AZ8oAZc0AZ8oAZcsAZswAZ8oAZMsAZswAZc0AZcsAZ84AZswAZ84AZswAZswAZ8wAZs0AZs0AZs0AZ80AZswAZ8wAZswAZ8wAZswAZs0AZs0AZs0AZ8wAZswAZ8wAZ8wAZ8wAZs0AZswAZs0AZswAZswAZswAZswAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsxCnEEHAAAAWXRSTlMAAAECAwQFBggKEhQVFhccHiQoKissLTIzNDpGR0hMTU5QUlRVW12BgoaHjI2PmJmam5ygpKWosbKztLW6vcDD0NLT2Nna3N7g4eLj5Ofo6err7u/w8vn7/A90CXkAAAFqSURBVDjLzdTHUgJREIXho8yo6JgFc0LFjAkVMZAFJYrCzP/+L+JCtJipS5U7Patbt79Vd1dr6BfRHyBJUiie6dSSiwrEh2aeAPAO7cEoUqWXdHgQirQAOh7A46gZzVQBzsfmSgAnRhR6AjiS5OQAd9aE4t9GmqoCCRPKAGe9zzhQDxlQBzpjknab9c2RD2DBgGrgzUlqQnfrHlg3oGug6Eh1oFsAEtvLVhAteUBuSjseP2lfzQf6dARQjY/s9SncY9uH7DQA7+ky/XkI+8YSfvRVC6k3AO4s34BHT90+1N2yYq8A+/5V0Wyi0ac2NJkD3KgfSaGF9QRQ9oCC5JSAiyCStA2k9jzISooCFQNaBlpWrJBdkTThQsOA7DYQ+3pbKeDWgHQFvDiSNJwEWDWheRfIOZKVBLiRCekYoBiZSAHkx83IfgDABXielhkpfAcAkJ/WICTrwAXgZlyDkRS9rDRu1wJL98/u0yeVYHcP1mwWWgAAAABJRU5ErkJggg==");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - image,
  .ql - snow.ql - toolbar.ql - picker.ql - image.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=image],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=image] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAFVBMVEUAAABCQkJEREREREREREREREREREQL6X1nAAAABnRSTlMATXjl6OmAFiJpAAAAZklEQVR42sXQsQ3AIAxEUeQZoKdyzwg0DALo9h8hiCYXo4R0/MbSK1ycO5EHlScVpj4Jj97p/vtJPi9U+kptXIlMIY2r1b4XIBpSoDJJFIyYtKohAWBIV8Ke9kv8X7WwtEmBKbkDXfWkWdehkaSCAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - image.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - image.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=image].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=image].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - image:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - image.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=image]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=image]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAFVBMVEUAAAAAZ8oAZswAZswAZswAZswAZsx4QzxlAAAABnRSTlMATXjl6OmAFiJpAAAAZklEQVR42sXQsQ3AIAxEUeQZoKdyzwg0DALo9h8hiCYXo4R0/MbSK1ycO5EHlScVpj4Jj97p/vtJPi9U+kptXIlMIY2r1b4XIBpSoDJJFIyYtKohAWBIV8Ke9kv8X7WwtEmBKbkDXfWkWdehkaSCAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - list,
  .ql - snow.ql - toolbar.ql - picker.ql - list.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=list],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=list] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAw1BMVEUAAAAAAABVVVVAQEBERERAQEBJSUlGRkZHR0dFRUVCQkJERERAQEBGRkZDQ0NFRUVDQ0NCQkJGRkZDQ0NCQkJERERDQ0NFRUVERERFRUVERERDQ0NERERERERDQ0NFRUVERERERERERERERERERERERERERERFRUVERERERERERERFRUVERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERESFbZw4AAAAQHRSTlMAAQYIDxAVFhkaGx4gKCo0NTY3OU10fYKIiYqMj56fo6SmqKmvtLe6vr/ExcbLz9fh4uXm5+jp7O/w8vP3+vv9Z7IwDAAAAK1JREFUOMvV0scOglAQQFGwYO+oiIq9YldEFPX+/1e5cGEii2FFdNY3b/JORlF+dAqNrS1GQyDEW+9Id/gaRw9EgQacMNEhuO4caD7rlgDS/2yAVWTiia53HWeEaMLzwUKIdvt08n4TxLMptc1UEo/38YqCuGZzKknimxDi6jpa8Vjn6I4kcQNgLkSmVSvjizeeb9ITbzxXxxLETatSxRfEWwAzicC4uANN+at5AdptTQ0Ubk4LAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - list.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - list.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=list].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=list].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - list:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - list.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=list]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=list]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAw1BMVEUAAAAAAP8AVdUAYL8AZswAYM8AYc4AaNEAZswAYs4AaNAAZswAaMcAZswAZ8gAZ8kAZcoAaMsAZswAZ8kAZ8oAZcoAZswAZswAZ8wAZs0AZs0AZswAZs0AZs0AZ8wAZs0AZ8wAZ8wAZs0AZ8wAZswAZswAZs0AZ8wAZswAZcwAZcwAZs0AZs0AZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZszno9YmAAAAQHRSTlMAAQYIDxAVFhkaGx4gKCo0NTY3OU10fYKIiYqMj56fo6SmqKmvtLe6vr/ExcbLz9fh4uXm5+jp7O/w8vP3+vv9Z7IwDAAAAK1JREFUOMvV0scOglAQQFGwYO+oiIq9YldEFPX+/1e5cGEii2FFdNY3b/JORlF+dAqNrS1GQyDEW+9Id/gaRw9EgQacMNEhuO4caD7rlgDS/2yAVWTiia53HWeEaMLzwUKIdvt08n4TxLMptc1UEo/38YqCuGZzKknimxDi6jpa8Vjn6I4kcQNgLkSmVSvjizeeb9ITbzxXxxLETatSxRfEWwAzicC4uANN+at5AdptTQ0Ubk4LAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - bullet,
  .ql - snow.ql - toolbar.ql - picker.ql - bullet.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bullet],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bullet] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAABCQkJEREREREREREREREQc4xmxAAAABXRSTlMATeXo6UtNtyIAAAAzSURBVCjPY2AYACBsyCAcCgOGYCHTYAZTuFAwRCgISSgILCSiyCACF1JkGBgw6voBcj0AFsUtDasGrUcAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - bullet.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - bullet.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=bullet].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=bullet].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - bullet:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - bullet.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=bullet]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=bullet]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAAAAZ8oAZswAZswAZswAZsxixJGvAAAABXRSTlMATeXo6UtNtyIAAAAzSURBVCjPY2AYACBsyCAcCgOGYCHTYAZTuFAwRCgISSgILCSiyCACF1JkGBgw6voBcj0AFsUtDasGrUcAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - authorship,
  .ql - snow.ql - toolbar.ql - picker.ql - authorship.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=authorship],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=authorship] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAllBMVEUAAACAgIBAQEBCQkIAAABCQkJAQEBGRkZERERERERCQkJGRkZDQ0NDQ0NDQ0MAAAAAAAAAAABDQ0NFRUVERERFRUVERERFRUVERERFRUVERERERERERERERERERERERERERERFRUVEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQe3JVeAAAAMXRSTlMAAhgbHx8gIS0xMjM5VFdcXWZyd3yChImPkKy4yMrO0tPj5ebq7e7v8PLz9/j6/P3+mEwo9QAAAJxJREFUGBnVwNcOgjAYBeCj4l7FjeAGUZzn/V9O0kikSftf44c/0A+Tc9iFqHll7tKEJKAWQLKjtockpZZC8qL2hiSjlkESUYsgmVNbQtKhNoCgNrwz95w14NTe8Os2gUP9wJ8p7NYsebRg06NhAZsVDRFstjQksMlogs2Rhhg2o5glpxGqz1O+g/JQUL6TQkH5TmMUPOU7jD1U1AdG8S1kERvjygAAAABJRU5ErkJggg==");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - authorship.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - authorship.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=authorship].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=authorship].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - authorship:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - authorship.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=authorship]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=authorship]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAllBMVEUAAAAAgP8AasoAaNAAY84AaMcAZMkAZswAaMsAZswAZM0AZ8kAZMsAZ8oAZ8oAZcsAZc4AZ80AZcwAZcwAZcwAZswAZs0AZs0AZs0AZ80AZs0AZ8wAZswAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsyCDIYeAAAAMXRSTlMAAhgbHyAhLTEyMzlUV1xdXWZyd3yChImPkKy4yMrO0tPj5ebq7e7v8PLz9/j6/P3+PxHOPAAAAJxJREFUGBnVwNcOgjAYBeCj1j0q7oEbRHGe9385SSORJu1/jR/+QGcdn9ctiNSVmYuCZEljCcmOxh6ShEYCyYvGG5KURgpJSCOEZEpjDkmTRheCSu/OzHNSg1djw6/bCB7VA3/GcFux4FGHS5uWGVwWtIRw2dISwyWlDS5HWiK49CMWnPooP6UDD62Q04GXRk4HXgPk1DDwGCiU1AcZWy1RmD8CRQAAAABJRU5ErkJggg==");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - color,
  .ql - snow.ql - toolbar.ql - picker.ql - color.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=color],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=color] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAz1BMVEUAAAAAAACAgIBVVVVAQEBVVVU5OTk7OztLS0tHR0dGRkZCQkIAAABERERDQ0NDQ0NDQ0NDQ0NGRkZERERERERCQkJFRUVERERFRUVEREQAAAAAAABDQ0NFRUVEREQAAABERERFRUVERERDQ0NDQ0NERERERERERERERERERERERERERERERERERERFRUVFRUVERERERERERERERERERERDQ0NERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERbYaT1AAAARHRSTlMAAQIDBAYJDRESFhsfIiYqNUFCREtNVVZZWlxdY2RlZm1zdXZ9hI6Tl6Sws7nExcnS09XY2d/g5ejp6+zt8PP09/n9/idH/qoAAADKSURBVBgZ1cDXUsJAAIXhg2KMGruxsGoUe8cWoij1f/9nYiZDGJjsLrfwaRHEWRZrhuAXWoH8zgBO5VVpADTktU9uVz5P5B7lsdUn19+U2x3w+gbcyilsA0cnwP+qXOpAWl1pAhdyqKZAXboGvpZkdwi0Q2m9CxzI7oUJz7LaYdJgWzYPTLmXxUaPKZ01ld0A7xXllr+BK5VlwLlGLoFPlWXQCjQSduBDZfFPM9bY8V+6p7kXmcTBRCqYxMmoYBKnmgqRSRxqkebUEKsKOlxMa6IbAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - color.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - color.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=color].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=color].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - color:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - color.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=color]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=color]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAA0lBMVEUAAAAAAP8AgP8AVaoAgL8AVdUAccYAYsQAadIAY8YAaNEAaNAAY84AacsAZckAZ8gAZcoAZswAZM0AZcsAZswAZ8oAZswAZc0AZMsAZswAZ8oAZcsAZc4AZMsAZswAZcoAZ80AZcwAZswAZssAZssAZswAZs0AZs0AZs0AZ8wAZ8wAZ8wAZ8wAZswAZcwAZs0AZcwAZswAZswAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswVaivDAAAARXRSTlMAAQIDBAYJDRESFhsfIiYqNUFCREtNVVZZWlxdXWNkZWZtc3V2fYSOk5eksLO5xMXJ0tPV2Nnf4OXo6evs7fDz9Pf5/f6Y2SWXAAAAy0lEQVQYGdXA11LCQACF4YNijBq7sbCWKPaOLURREPjf/5WYyRAGJrvLLXyaB3GWxZoi+IFWIL9TgBN5VRoADXntktuWzyO5B3ls9Mj11uV2C7y8AjdyCtvAwRHwtyyXOpBWl5rAuRyqKVCXroDPBdntA+1QWv0H9mT3zJgnWW0xrr8pm3sm3MlircuEzorKroG3inKLX8ClyjLgTEMXwIfKMmgFGgo78K6y+LsZa+TwN93RzItM4mAiFUziZFQwiVNNheg4cahFmlEDFzs7cwmPHM8AAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - background,
  .ql - snow.ql - toolbar.ql - picker.ql - background.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=background],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=background] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAA4VBMVEUAAAAAAACAgIBVVVVAQEBVVVU5OTk7OztLS0tHR0dGRkZCQkJERERDQ0NDQ0NDQ0NDQ0NERERCQkJEREQAAAADAwMGBgZDQ0NEREQODg5ERERDQ0NFRUVERERERERERERDQ0MiIiJDQ0MmJiZEREQrKytEREREREQyMjIyMjJEREREREREREQ4ODhERERERERFRUVFRUVERERERERERERERERAQEBERERERERBQUFERERERERERERBQUFERERERERERERBQUFERERERERERERDQ0NERERERERDQ0NERERERESZD8GyAAAASnRSTlMAAQIDBAYJDRESFhsiJio1QURJS01QU1RWWVpjZGVtdXZ4fYCEiI6TnZ6ksLO3ucTFydLT193g4OLl5ebn6enq6+7w8vP39/n+/rihcb4AAADbSURBVHjazZPFDsMwEERdZkpTZmbmpszd//+grhpFSaS1e+khc1jbmrG1z7KZdSXLgvo79M9ziKCkKJIeoUPJA8AxKT6H5QGVE3dlmwJqKqaLwVdRIV1fDfVEdKGXGnoFBXQtDIwnWJp8uswd/XQWy8XD7aqD9srp2uJQ5NElVuiWGKvisLFz6Bpo3ryM+R84iXO6GoFBQ5ouAka9wyRdF0waUHSBpzl09xF0dTRmNnXu2OOiTNDtAKCg7W3jYk7QnQGObu0KvVeAJUFXU9aS/h5Sp0VFtui/s6w+XSJAbiVJ3G0AAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - background.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - background.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=background].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=background].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - background:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - background.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=background]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=background]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAA5FBMVEUAAAAAAP8AgP8AVaoAgL8AZswAVdUAYL8AccYAYsQAadIAY8YAaNEAasoAZswAYsQAaNAAacsAZckAadEAZ8gAZcoAZswAZswAZMkAZM0AZcsAZ8sAZswAaM0AZ8oAZ80AZswAZc0AZMsAZswAZMsAZswAZcoAZcwAZswAZssAZssAZswAZs0AZs0AZs0AZ8wAZ8wAZ8wAZ8wAZswAZcwAZs0AZcwAZswAZswAZs0AZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZsxJPDLdAAAAS3RSTlMAAQIDBAUGCAkNERIWGBkaGyImJyo1N0FCQkRFS0xNTVVWWVpjZGVtc3V2fYSOk5eksLO5xMXJ0tPV2Nnf4OXo6evs7fDz9Pf5/f60OfwzAAABG0lEQVR42s2T6VKDQBCEGyUJoqgSjcYg8dZ43/EieCUa5/3fx661qMAu7O98P4bZnq5lZlkwvXS7k1hf1BTdZFEsFpvUMU15IU7TuKiYJu9d5MODZZ8WcCBk39ZVAKcvpG+ZrgNsimIdTtV0TeBGFNewdBWORTFesUx3QcP9A8N59XT+kPWdPYavOQQVXfVYTtz6gI8jvfUsdRNWe8ApHy8z5ftgm8WhDyx8M4nKumoBd5LjVkkaAdYkz+8qpQLqtK+kwKU5XRPLP1JgNF8y3RkLjw4Us69cnMDb0qdLqR9myjEXz2brNPG2NSKQqOGPRJ5gEr8NYoT/9yHE7mfShoarovYptDw7kiWLyZTbNZBa9saK33tDWZlPK39U3ELkzhssBgAAAABJRU5ErkJggg==");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - left,
  .ql - snow.ql - toolbar.ql - picker.ql - left.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=left],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=left] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAABCQkJEREREREREREREREQc4xmxAAAABXRSTlMATeXo6UtNtyIAAABCSURBVCjPY2AYACAcCgaGSEKmEKFgTKEgJCERiJAiw0ACqOuR/WCKLBSMKRSE7PqB9YMwuttRnBqMKRSEGvYD6HYAD8opyeJDvUUAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - left.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - left.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=left].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=left].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - left:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - left.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=left]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=left]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAAAAZ8oAZswAZswAZswAZsxixJGvAAAABXRSTlMATeXo6UtNtyIAAABCSURBVCjPY2AYACAcCgaGSEKmEKFgTKEgJCERiJAiw0ACqOuR/WCKLBSMKRSE7PqB9YMwuttRnBqMKRSEGvYD6HYAD8opyeJDvUUAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - right,
  .ql - snow.ql - toolbar.ql - picker.ql - right.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=right],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=right] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAABCQkJEREREREREREREREQc4xmxAAAABXRSTlMATeXo6UtNtyIAAABCSURBVCjPY2AYMCAcCgaGSEKmEKFgTKEgJCERiJDiwLob2fWmyELBmEJByO4eWNejuN8QNZCRw94U3fUo7h8Q1wMAuRspyVIXC2UAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - right.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - right.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=right].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=right].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - right:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - right.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=right]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=right]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAAAAZ8oAZswAZswAZswAZsxixJGvAAAABXRSTlMATeXo6UtNtyIAAABCSURBVCjPY2AYMCAcCgaGSEKmEKFgTKEgJCERiJDiwLob2fWmyELBmEJByO4eWNejuN8QNZCRw94U3fUo7h8Q1wMAuRspyVIXC2UAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - center,
  .ql - snow.ql - toolbar.ql - picker.ql - center.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=center],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=center] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAABCQkJEREREREREREREREQc4xmxAAAABXRSTlMATeXo6UtNtyIAAABCSURBVCjPY2AYGCAcCgaGSEKmEKFgTKEgJCERiJAiw4ABqNORPWCKLBSMKRSE7PQB9oAwuuNR3BqMKRSEGvID53gA5GspyQ9EElMAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - center.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - center.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=center].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=center].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - center:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - center.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=center]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=center]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAAAAZ8oAZswAZswAZswAZsxixJGvAAAABXRSTlMATeXo6UtNtyIAAABCSURBVCjPY2AYGCAcCgaGSEKmEKFgTKEgJCERiJAiw4ABqNORPWCKLBSMKRSE7PQB9oAwuuNR3BqMKRSEGvID53gA5GspyQ9EElMAAAAASUVORK5CYII=");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - justify,
  .ql - snow.ql - toolbar.ql - picker.ql - justify.ql - picker - label,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=justify],
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=justify] {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAABCQkJEREREREREREREREQc4xmxAAAABXRSTlMATeXo6UtNtyIAAAAoSURBVCjPY2AYACAcigQMwUKmyELBmEJBYCERZCFFhoEBo64fINcDAAcQNGkJNhVcAAAAAElFTkSuQmCC");
    }
  .ql - snow.ql - toolbar.ql - format - button.ql - justify.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - justify.ql - picker - label.ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - label[data - value=justify].ql - active,
  .ql - snow.ql - toolbar.ql - picker.ql - picker - item[data - value=justify].ql - selected,
  .ql - snow.ql - toolbar:not(.ios).ql - format - button.ql - justify:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - justify.ql - picker - label:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - label[data - value=justify]:hover,
  .ql - snow.ql - toolbar:not(.ios).ql - picker.ql - picker - item[data - value=justify]:hover {
        background - image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAElBMVEUAAAAAZ8oAZswAZswAZswAZsxixJGvAAAABXRSTlMATeXo6UtNtyIAAAAoSURBVCjPY2AYACAcigQMwUKmyELBmEJBYCERZCFFhoEBo64fINcDAAcQNGkJNhVcAAAAAElFTkSuQmCC");
    }
}
.ql - snow.ql - tooltip {
    border: 1px solid #ccc;
    box - shadow: 0px 0px 5px #ddd;
    color: #222;
}
.ql - snow.ql - tooltip a {
    color: #06c;
}
.ql - snow.ql - tooltip.input {
    border: 1px solid #ccc;
    margin: 0px;
    padding: 5px;
}
.ql - snow a {
    color: #06c;
}

/*
 * The MIT License
 * Copyright (c) 2012 Matias Meno <m@tias.me>
 */
@-webkit - keyframes passing- through {
    0 % {
        opacity: 0;
    -webkit - transform: translateY(40px);
    -moz - transform: translateY(40px);
    -ms - transform: translateY(40px);
    -o - transform: translateY(40px);
    transform: translateY(40px);
}
30 %, 70 % {
    opacity: 1;
    -webkit - transform: translateY(0px);
-moz - transform: translateY(0px);
-ms - transform: translateY(0px);
-o - transform: translateY(0px);
transform: translateY(0px); }
100 % {
    opacity: 0;
    -webkit - transform: translateY(-40px);
-moz - transform: translateY(-40px);
-ms - transform: translateY(-40px);
-o - transform: translateY(-40px);
transform: translateY(-40px); } }
@-moz - keyframes passing- through {
    0 % {
        opacity: 0;
    -webkit - transform: translateY(40px);
    -moz - transform: translateY(40px);
    -ms - transform: translateY(40px);
    -o - transform: translateY(40px);
    transform: translateY(40px);
}
30 %, 70 % {
    opacity: 1;
    -webkit - transform: translateY(0px);
-moz - transform: translateY(0px);
-ms - transform: translateY(0px);
-o - transform: translateY(0px);
transform: translateY(0px); }
100 % {
    opacity: 0;
    -webkit - transform: translateY(-40px);
-moz - transform: translateY(-40px);
-ms - transform: translateY(-40px);
-o - transform: translateY(-40px);
transform: translateY(-40px); } }
@keyframes passing - through {
    0 % {
        opacity: 0;
    -webkit - transform: translateY(40px);
    -moz - transform: translateY(40px);
    -ms - transform: translateY(40px);
    -o - transform: translateY(40px);
    transform: translateY(40px);
}
30 %, 70 % {
    opacity: 1;
    -webkit - transform: translateY(0px);
-moz - transform: translateY(0px);
-ms - transform: translateY(0px);
-o - transform: translateY(0px);
transform: translateY(0px); }
100 % {
    opacity: 0;
    -webkit - transform: translateY(-40px);
-moz - transform: translateY(-40px);
-ms - transform: translateY(-40px);
-o - transform: translateY(-40px);
transform: translateY(-40px); } }
@-webkit - keyframes slide-in {
    0% {
        opacity: 0;
    -webkit - transform: translateY(40px);
    -moz - transform: translateY(40px);
-ms - transform: translateY(40px);
-o - transform: translateY(40px);
transform: translateY(40px); }
30 % {
    opacity: 1;
    -webkit - transform: translateY(0px);
-moz - transform: translateY(0px);
-ms - transform: translateY(0px);
-o - transform: translateY(0px);
transform: translateY(0px); } }
@-moz - keyframes slide-in {
    0% {
        opacity: 0;
    -webkit - transform: translateY(40px);
    -moz - transform: translateY(40px);
-ms - transform: translateY(40px);
-o - transform: translateY(40px);
transform: translateY(40px); }
30 % {
    opacity: 1;
    -webkit - transform: translateY(0px);
-moz - transform: translateY(0px);
-ms - transform: translateY(0px);
-o - transform: translateY(0px);
transform: translateY(0px); } }
@keyframes slide -in {
    0% {
        opacity: 0;
    -webkit - transform: translateY(40px);
    -moz - transform: translateY(40px);
-ms - transform: translateY(40px);
-o - transform: translateY(40px);
transform: translateY(40px); }
30 % {
    opacity: 1;
    -webkit - transform: translateY(0px);
-moz - transform: translateY(0px);
-ms - transform: translateY(0px);
-o - transform: translateY(0px);
transform: translateY(0px); } }
@-webkit - keyframes pulse {
    0 % {
    -webkit - transform: scale(1);
    -moz - transform: scale(1);
    -ms - transform: scale(1);
    -o - transform: scale(1);
    transform: scale(1);
}
10 % {
    -webkit - transform: scale(1.1);
-moz - transform: scale(1.1);
-ms - transform: scale(1.1);
-o - transform: scale(1.1);
transform: scale(1.1); }
20 % {
    -webkit - transform: scale(1);
-moz - transform: scale(1);
-ms - transform: scale(1);
-o - transform: scale(1);
transform: scale(1); } }
@-moz - keyframes pulse {
    0 % {
    -webkit - transform: scale(1);
    -moz - transform: scale(1);
    -ms - transform: scale(1);
    -o - transform: scale(1);
    transform: scale(1);
}
10 % {
    -webkit - transform: scale(1.1);
-moz - transform: scale(1.1);
-ms - transform: scale(1.1);
-o - transform: scale(1.1);
transform: scale(1.1); }
20 % {
    -webkit - transform: scale(1);
-moz - transform: scale(1);
-ms - transform: scale(1);
-o - transform: scale(1);
transform: scale(1); } }
@keyframes pulse {
    0 % {
    -webkit - transform: scale(1);
    -moz - transform: scale(1);
    -ms - transform: scale(1);
    -o - transform: scale(1);
    transform: scale(1);
}
10 % {
    -webkit - transform: scale(1.1);
-moz - transform: scale(1.1);
-ms - transform: scale(1.1);
-o - transform: scale(1.1);
transform: scale(1.1); }
20 % {
    -webkit - transform: scale(1);
-moz - transform: scale(1);
-ms - transform: scale(1);
-o - transform: scale(1);
transform: scale(1); } }
.dropzone, .dropzone * {
    box-sizing: border-box; }

    .dropzone {
    min - height: 150px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: white;
    padding: 20px 20px;
}
  .dropzone.dz - clickable {
    cursor: pointer;
}
    .dropzone.dz - clickable * {
    cursor: default; }
    .dropzone.dz - clickable.dz - message, .dropzone.dz - clickable.dz - message * {
        cursor: pointer; }
        .dropzone.dz - started.dz - message {
    display: none;
}
  .dropzone.dz - drag - hover {
    border - style: solid;
}
    .dropzone.dz - drag - hover.dz - message {
    opacity: 0.5;
}
  .dropzone.dz - message {
    text - align: center;
    margin: 2em 0;
}
  .dropzone.dz - preview {
    position: relative;
    display: inline - block;
    vertical - align: top;
    margin: 16px;
    min - height: 100px;
}
    .dropzone.dz - preview:hover {
    z - index: 1000;
}
      .dropzone.dz - preview:hover.dz - details {
    opacity: 1;
}
    .dropzone.dz - preview.dz - file - preview.dz - image {
    border - radius: 20px;
    background: #999;
    background: linear - gradient(to bottom, #eee, #ddd);
}
    .dropzone.dz - preview.dz - file - preview.dz - details {
    opacity: 1;
}
    .dropzone.dz - preview.dz - image - preview {
    background: white;
}
      .dropzone.dz - preview.dz - image - preview.dz - details {
    -webkit - transition: opacity 0.2s linear;
    -moz - transition: opacity 0.2s linear;
    -ms - transition: opacity 0.2s linear;
    -o - transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
}
    .dropzone.dz - preview.dz - remove {
    font - size: 14px;
    text - align: center;
    display: block;
    cursor: pointer;
    border: none;
}
      .dropzone.dz - preview.dz - remove:hover {
    text - decoration: underline;
}
    .dropzone.dz - preview:hover.dz - details {
    opacity: 1;
}
    .dropzone.dz - preview.dz - details {
    z - index: 20;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    font - size: 13px;
    min - width: 100 %;
    max - width: 100 %;
    padding: 2em 1em;
    text - align: center;
    color: rgba(0, 0, 0, 0.9);
    line - height: 150 %; }
      .dropzone.dz - preview.dz - details.dz - size {
    margin - bottom: 1em;
    font - size: 16px;
}
      .dropzone.dz - preview.dz - details.dz - filename {
    white - space: nowrap;
}
        .dropzone.dz - preview.dz - details.dz - filename:hover span {
    border: 1px solid rgba(200, 200, 200, 0.8);
    background - color: rgba(255, 255, 255, 0.8);
}
        .dropzone.dz - preview.dz - details.dz - filename:not(:hover) {
    overflow: hidden;
    text - overflow: ellipsis;
}
          .dropzone.dz - preview.dz - details.dz - filename:not(:hover) span {
    border: 1px solid transparent;
}
      .dropzone.dz - preview.dz - details.dz - filename span, .dropzone.dz - preview.dz - details.dz - size span {
    background - color: rgba(255, 255, 255, 0.4);
    padding: 0 0.4em;
    border - radius: 3px;
}
    .dropzone.dz - preview:hover.dz - image img {
    -webkit - transform: scale(1.05, 1.05);
    -moz - transform: scale(1.05, 1.05);
    -ms - transform: scale(1.05, 1.05);
    -o - transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
    -webkit - filter: blur(8px);
    filter: blur(8px);
}
    .dropzone.dz - preview.dz - image {
    border - radius: 20px;
    overflow: hidden;
    width: 120px;
    height: 120px;
    position: relative;
    display: block;
    z - index: 10;
}
      .dropzone.dz - preview.dz - image img {
    display: block;
}
    .dropzone.dz - preview.dz - success.dz - success - mark {
    -webkit - animation: passing - through 3s cubic- bezier(0.77, 0, 0.175, 1);
    -moz - animation: passing - through 3s cubic- bezier(0.77, 0, 0.175, 1);
    -ms - animation: passing - through 3s cubic- bezier(0.77, 0, 0.175, 1);
    -o - animation: passing - through 3s cubic- bezier(0.77, 0, 0.175, 1);
    animation: passing - through 3s cubic- bezier(0.77, 0, 0.175, 1);
}
    .dropzone.dz - preview.dz - error.dz - error - mark {
    opacity: 1;
    -webkit - animation: slide -in 3s cubic- bezier(0.77, 0, 0.175, 1);
    -moz - animation: slide -in 3s cubic- bezier(0.77, 0, 0.175, 1);
    -ms - animation: slide -in 3s cubic- bezier(0.77, 0, 0.175, 1);
    -o - animation: slide -in 3s cubic- bezier(0.77, 0, 0.175, 1);
    animation: slide -in 3s cubic- bezier(0.77, 0, 0.175, 1);
}
    .dropzone.dz - preview.dz - success - mark, .dropzone.dz - preview.dz - error - mark {
    pointer - events: none;
    opacity: 0;
    z - index: 500;
    position: absolute;
    display: block;
    top: 50 %;
    left: 50 %;
    margin - left: -27px;
    margin - top: -27px;
}
      .dropzone.dz - preview.dz - success - mark svg, .dropzone.dz - preview.dz - error - mark svg {
    display: block;
    width: 54px;
    height: 54px;
}
    .dropzone.dz - preview.dz - processing.dz - progress {
    opacity: 1;
    -webkit - transition: all 0.2s linear;
    -moz - transition: all 0.2s linear;
    -ms - transition: all 0.2s linear;
    -o - transition: all 0.2s linear;
    transition: all 0.2s linear;
}
    .dropzone.dz - preview.dz - complete.dz - progress {
    opacity: 0;
    -webkit - transition: opacity 0.4s ease-in;
    -moz - transition: opacity 0.4s ease-in;
    -ms - transition: opacity 0.4s ease-in;
    -o - transition: opacity 0.4s ease-in;
    transition: opacity 0.4s ease-in; }
    .dropzone.dz - preview:not(.dz - processing).dz - progress {
    -webkit - animation: pulse 6s ease infinite;
    -moz - animation: pulse 6s ease infinite;
    -ms - animation: pulse 6s ease infinite;
    -o - animation: pulse 6s ease infinite;
    animation: pulse 6s ease infinite;
}
    .dropzone.dz - preview.dz - progress {
    opacity: 1;
    z - index: 1000;
    pointer - events: none;
    position: absolute;
    height: 16px;
    left: 50 %;
    top: 50 %;
    margin - top: -8px;
    width: 80px;
    margin - left: -40px;
    background: rgba(255, 255, 255, 0.9);
    -webkit - transform: scale(1);
    border - radius: 8px;
    overflow: hidden;
}
      .dropzone.dz - preview.dz - progress.dz - upload {
    background: #333;
    background: linear - gradient(to bottom, #666, #444);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    -webkit - transition: width 300ms ease-in-out;
    -moz - transition: width 300ms ease-in-out;
    -ms - transition: width 300ms ease-in-out;
    -o - transition: width 300ms ease-in-out;
    transition: width 300ms ease-in-out;
}
    .dropzone.dz - preview.dz - error.dz - error - message {
    display: block;
}
    .dropzone.dz - preview.dz - error:hover.dz - error - message {
    opacity: 1;
    pointer - events: auto;
}
    .dropzone.dz - preview.dz - error - message {
    pointer - events: none;
    z - index: 1000;
    position: absolute;
    display: block;
    display: none;
    opacity: 0;
    -webkit - transition: opacity 0.3s ease;
    -moz - transition: opacity 0.3s ease;
    -ms - transition: opacity 0.3s ease;
    -o - transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    border - radius: 8px;
    font - size: 13px;
    top: 130px;
    left: -10px;
    width: 140px;
    background: #be2626;
    background: linear - gradient(to bottom, #be2626, #a92222);
    padding: 0.5em 1.2em;
    color: white;
}
      .dropzone.dz - preview.dz - error - message:after {
    content: '';
    position: absolute;
    top: -6px;
    left: 64px;
    width: 0;
    height: 0;
    border - left: 6px solid transparent;
    border - right: 6px solid transparent;
    border - bottom: 6px solid #be2626;
}

/*!
 * Bootstrap v4.0.0-alpha.5 (https://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*! normalize.css v4.2.0 | MIT License | github.com/necolas/normalize.css */
html {
    font - family: sans - serif;
    line - height: 1.15;
    -ms - text - size - adjust: 100 %;
    -webkit - text - size - adjust: 100 %;
}

body {
    margin: 0;
}

article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
    display: block;
}

audio,
    canvas,
    progress,
    video {
    display: inline - block;
}

audio: not([controls]) {
    display: none;
    height: 0;
}

progress {
    vertical - align: baseline;
}

template,
    [hidden] {
    display: none;
}

a {
    background - color: transparent;
    -webkit - text - decoration - skip: objects;
}

a: active,
    a:hover {
    outline - width: 0;
}

abbr[title] {
    border - bottom: none;
    text - decoration: underline;
    text - decoration: underline dotted;
}

b,
    strong {
    font - weight: inherit;
}

b,
    strong {
    font - weight: bolder;
}

dfn {
    font - style: italic;
}

h1 {
    font - size: 2em;
    margin: 0.67em 0;
}

mark {
    background - color: #ff0;
    color: #000;
}

small {
    font - size: 80 %;
}

sub,
    sup {
    font - size: 75 %;
    line - height: 0;
    position: relative;
    vertical - align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

img {
    border - style: none;
}

svg: not(:root) {
    overflow: hidden;
}

code,
    kbd,
    pre,
    samp {
    font - family: monospace, monospace;
    font - size: 1em;
}

figure {
    margin: 1em 40px;
}

hr {
    -webkit - box - sizing: content - box;
    box - sizing: content - box;
    height: 0;
    overflow: visible;
}

button,
    input,
    optgroup,
    select,
    textarea {
    font: inherit;
    margin: 0;
}

optgroup {
    font - weight: bold;
}

button,
    input {
    overflow: visible;
}

button,
    select {
    text - transform: none;
}

button,
    html[type = "button"],
    [type = "reset"],
    [type = "submit"] {
    -webkit - appearance: button;
}

button::-moz - focus - inner,
    [type = "button"]::-moz - focus - inner,
        [type = "reset"]::-moz - focus - inner,
            [type = "submit"]::-moz - focus - inner {
    border - style: none;
    padding: 0;
}

button: -moz - focusring,
    [type = "button"]:-moz - focusring,
        [type = "reset"]:-moz - focusring,
            [type = "submit"]:-moz - focusring {
    outline: 1px dotted ButtonText;
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    -webkit - box - sizing: border - box;
    box - sizing: border - box;
    color: inherit;
    display: table;
    max - width: 100 %;
    padding: 0;
    white - space: normal;
}

textarea {
    overflow: auto;
}

[type = "checkbox"],
    [type = "radio"] {
    -webkit - box - sizing: border - box;
    box - sizing: border - box;
    padding: 0;
}

[type = "number"]::-webkit - inner - spin - button,
    [type = "number"]::-webkit - outer - spin - button {
    height: auto;
}

[type = "search"] {
    -webkit - appearance: textfield;
    outline - offset: -2px;
}

[type = "search"]::-webkit - search - cancel - button,
    [type = "search"]::-webkit - search - decoration {
    -webkit - appearance: none;
}

::-webkit - input - placeholder {
    color: inherit;
    opacity: 0.54;
}

::-webkit - file - upload - button {
    -webkit - appearance: button;
    font: inherit;
}

@media print {
  *,
  *::before,
  *::after,
  *::first - letter,
        p::first - line,
            div::first - line,
                blockquote::first - line,
                    li::first - line {
        text - shadow: none!important;
        -webkit - box - shadow: none!important;
        box - shadow: none!important;
    }
    a,
        a:visited {
        text - decoration: underline;
    }
    abbr[title]::after {
        content: " (" attr(title) ")";
    }
    pre {
        white - space: pre - wrap!important;
    }
    pre,
        blockquote {
        border: 1px solid #999;
        page -break-inside: avoid;
    }
    thead {
        display: table - header - group;
    }
    tr,
        img {
        page -break-inside: avoid;
    }
    p,
        h2,
        h3 {
        orphans: 3;
        widows: 3;
    }
    h2,
        h3 {
        page -break-after: avoid;
    }
  .navbar {
        display: none;
    }
  .btn > .caret,
  .dropup > .btn > .caret {
        border - top - color: #000!important;
    }
  .tag {
        border: 1px solid #000;
    }
  .table {
        border - collapse: collapse!important;
    }
  .table td,
  .table th {
        background - color: #fff!important;
    }
  .table - bordered th,
  .table - bordered td {
        border: 1px solid #ddd!important;
    }
}

html {
    -webkit - box - sizing: border - box;
    box - sizing: border - box;
}

*,
*::before,
*::after {
    -webkit - box - sizing: inherit;
    box - sizing: inherit;
}

@-ms - viewport {
    width: device - width;
}

html {
    font - size: 16px;
    -ms - overflow - style: scrollbar;
    -webkit - tap - highlight - color: transparent;
}

body {
    font - family: -apple - system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans - serif;
    font - size: 1rem;
    line - height: 1.5;
    color: #373a3c;
    background - color: #fff;
}

[tabindex = "-1"]:focus {
    outline: none!important;
}

h1, h2, h3, h4, h5, h6 {
    margin - top: 0;
    margin - bottom: .5rem;
}

p {
    margin - top: 0;
    margin - bottom: 1rem;
}

abbr[title],
    abbr[data - original - title] {
    cursor: help;
    border - bottom: 1px dotted #818a91;
}

address {
    margin - bottom: 1rem;
    font - style: normal;
    line - height: inherit;
}

ol,
    ul,
    dl {
    margin - top: 0;
    margin - bottom: 1rem;
}

ol ol,
    ul ul,
        ol ul,
            ul ol {
    margin - bottom: 0;
}

dt {
    font - weight: bold;
}

dd {
    margin - bottom: .5rem;
    margin - left: 0;
}

blockquote {
    margin: 0 0 1rem;
}

a {
    color: #0275d8;
    text - decoration: none;
}

a: focus, a:hover {
    color: #014c8c;
    text - decoration: underline;
}

a: focus {
    outline: 5px auto - webkit - focus - ring - color;
    outline - offset: -2px;
}

a: not([href]):not([tabindex]) {
    color: inherit;
    text - decoration: none;
}

a: not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {
    color: inherit;
    text - decoration: none;
}

a: not([href]):not([tabindex]):focus {
    outline: none;
}

pre {
    margin - top: 0;
    margin - bottom: 1rem;
    overflow: auto;
}

figure {
    margin: 0 0 1rem;
}

img {
    vertical - align: middle;
}

[role = "button"] {
    cursor: pointer;
}

a,
    area,
    button,
    [role = "button"],
    input,
    label,
    select,
    summary,
    textarea {
    -ms - touch - action: manipulation;
    touch - action: manipulation;
}

table {
    border - collapse: collapse;
    background - color: transparent;
}

caption {
    padding - top: 0.75rem;
    padding - bottom: 0.75rem;
    color: #818a91;
    text - align: left;
    caption - side: bottom;
}

th {
    text - align: left;
}

label {
    display: inline - block;
    margin - bottom: .5rem;
}

button: focus {
    outline: 1px dotted;
    outline: 5px auto - webkit - focus - ring - color;
}

input,
    button,
    select,
    textarea {
    line - height: inherit;
}

input[type = "radio"]:disabled,
    input[type = "checkbox"]:disabled {
    cursor: not - allowed;
}

input[type = "date"],
    input[type = "time"],
    input[type = "datetime-local"],
    input[type = "month"] {
    -webkit - appearance: listbox;
}

textarea {
    resize: vertical;
}

fieldset {
    min - width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    display: block;
    width: 100 %;
    padding: 0;
    margin - bottom: .5rem;
    font - size: 1.5rem;
    line - height: inherit;
}

input[type = "search"] {
    -webkit - appearance: none;
}

output {
    display: inline - block;
}

[hidden] {
    display: none!important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
    margin - bottom: 0.5rem;
    font - family: inherit;
    font - weight: 500;
    line - height: 1.1;
    color: inherit;
}

h1, .h1 {
    font - size: 2.5rem;
}

h2, .h2 {
    font - size: 2rem;
}

h3, .h3 {
    font - size: 1.75rem;
}

h4, .h4 {
    font - size: 1.5rem;
}

h5, .h5 {
    font - size: 1.25rem;
}

h6, .h6 {
    font - size: 1rem;
}

.lead {
    font - size: 1.25rem;
    font - weight: 300;
}

.display - 1 {
    font - size: 6rem;
    font - weight: 300;
}

.display - 2 {
    font - size: 5.5rem;
    font - weight: 300;
}

.display - 3 {
    font - size: 4.5rem;
    font - weight: 300;
}

.display - 4 {
    font - size: 3.5rem;
    font - weight: 300;
}

hr {
    margin - top: 1rem;
    margin - bottom: 1rem;
    border: 0;
    border - top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
    font - size: 80 %;
    font - weight: normal;
}

mark,
.mark {
    padding: 0.2em;
    background - color: #fcf8e3;
}

.list - unstyled {
    padding - left: 0;
    list - style: none;
}

.list - inline {
    padding - left: 0;
    list - style: none;
}

.list - inline - item {
    display: inline - block;
}

.list - inline - item:not(:last - child) {
    margin - right: 5px;
}

.initialism {
    font - size: 90 %;
    text - transform: uppercase;
}

.blockquote {
    padding: 0.5rem 1rem;
    margin - bottom: 1rem;
    font - size: 1.25rem;
    border - left: 0.25rem solid #eceeef;
}

.blockquote - footer {
    display: block;
    font - size: 80 %;
    color: #818a91;
}

.blockquote - footer::before {
    content: "\2014 \00A0";
}

.blockquote - reverse {
    padding - right: 1rem;
    padding - left: 0;
    text - align: right;
    border - right: 0.25rem solid #eceeef;
    border - left: 0;
}

.blockquote - reverse.blockquote - footer::before {
    content: "";
}

.blockquote - reverse.blockquote - footer::after {
    content: "\00A0 \2014";
}

dl.row > dd + dt {
    clear: left;
}

.img - fluid, .carousel - inner > .carousel - item > img,
.carousel - inner > .carousel - item > a > img {
    max - width: 100 %;
    height: auto;
}

.img - thumbnail {
    padding: 0.25rem;
    background - color: #fff;
    border: 1px solid #ddd;
    border - radius: 0.25rem;
    -webkit - transition: all .2s ease-in-out;
    -o - transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    max - width: 100 %;
    height: auto;
}

.figure {
    display: inline - block;
}

.figure - img {
    margin - bottom: 0.5rem;
    line - height: 1;
}

.figure - caption {
    font - size: 90 %;
    color: #818a91;
}

code,
    kbd,
    pre,
    samp {
    font - family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

code {
    padding: 0.2rem 0.4rem;
    font - size: 90 %;
    color: #bd4147;
    background - color: #f7f7f9;
    border - radius: 0.25rem;
}

kbd {
    padding: 0.2rem 0.4rem;
    font - size: 90 %;
    color: #fff;
    background - color: #333;
    border - radius: 0.2rem;
}

kbd kbd {
    padding: 0;
    font - size: 100 %;
    font - weight: bold;
}

pre {
    display: block;
    margin - top: 0;
    margin - bottom: 1rem;
    font - size: 90 %;
    color: #373a3c;
}

pre code {
    padding: 0;
    font - size: inherit;
    color: inherit;
    background - color: transparent;
    border - radius: 0;
}

.pre - scrollable {
    max - height: 340px;
    overflow - y: scroll;
}

.container {
    margin - left: auto;
    margin - right: auto;
    padding - left: 15px;
    padding - right: 15px;
}

.container::after {
    content: "";
    display: table;
    clear: both;
}

@media(min - width: 576px) {
  .container {
        width: 540px;
        max - width: 100 %;
    }
}

@media(min - width: 768px) {
  .container {
        width: 720px;
        max - width: 100 %;
    }
}

@media(min - width: 992px) {
  .container {
        width: 960px;
        max - width: 100 %;
    }
}

@media(min - width: 1200px) {
  .container {
        width: 1140px;
        max - width: 100 %;
    }
}

.container - fluid {
    margin - left: auto;
    margin - right: auto;
    padding - left: 15px;
    padding - right: 15px;
}

.container - fluid::after {
    content: "";
    display: table;
    clear: both;
}

.row {
    margin - right: -15px;
    margin - left: -15px;
}

.row::after {
    content: "";
    display: table;
    clear: both;
}

@media(min - width: 576px) {
  .row {
        margin - right: -15px;
        margin - left: -15px;
    }
}

@media(min - width: 768px) {
  .row {
        margin - right: -15px;
        margin - left: -15px;
    }
}

@media(min - width: 992px) {
  .row {
        margin - right: -15px;
        margin - left: -15px;
    }
}

@media(min - width: 1200px) {
  .row {
        margin - right: -15px;
        margin - left: -15px;
    }
}

.col - xs, .col - xs - 1, .col - xs - 2, .col - xs - 3, .col - xs - 4, .col - xs - 5, .col - xs - 6, .col - xs - 7, .col - xs - 8, .col - xs - 9, .col - xs - 10, .col - xs - 11, .col - xs - 12, .col - sm, .col - sm - 1, .col - sm - 2, .col - sm - 3, .col - sm - 4, .col - sm - 5, .col - sm - 6, .col - sm - 7, .col - sm - 8, .col - sm - 9, .col - sm - 10, .col - sm - 11, .col - sm - 12, .col - md, .col - md - 1, .col - md - 2, .col - md - 3, .col - md - 4, .col - md - 5, .col - md - 6, .col - md - 7, .col - md - 8, .col - md - 9, .col - md - 10, .col - md - 11, .col - md - 12, .col - lg, .col - lg - 1, .col - lg - 2, .col - lg - 3, .col - lg - 4, .col - lg - 5, .col - lg - 6, .col - lg - 7, .col - lg - 8, .col - lg - 9, .col - lg - 10, .col - lg - 11, .col - lg - 12, .col - xl, .col - xl - 1, .col - xl - 2, .col - xl - 3, .col - xl - 4, .col - xl - 5, .col - xl - 6, .col - xl - 7, .col - xl - 8, .col - xl - 9, .col - xl - 10, .col - xl - 11, .col - xl - 12 {
    position: relative;
    min - height: 1px;
    padding - right: 15px;
    padding - left: 15px;
}

@media(min - width: 576px) {
  .col - xs, .col - xs - 1, .col - xs - 2, .col - xs - 3, .col - xs - 4, .col - xs - 5, .col - xs - 6, .col - xs - 7, .col - xs - 8, .col - xs - 9, .col - xs - 10, .col - xs - 11, .col - xs - 12, .col - sm, .col - sm - 1, .col - sm - 2, .col - sm - 3, .col - sm - 4, .col - sm - 5, .col - sm - 6, .col - sm - 7, .col - sm - 8, .col - sm - 9, .col - sm - 10, .col - sm - 11, .col - sm - 12, .col - md, .col - md - 1, .col - md - 2, .col - md - 3, .col - md - 4, .col - md - 5, .col - md - 6, .col - md - 7, .col - md - 8, .col - md - 9, .col - md - 10, .col - md - 11, .col - md - 12, .col - lg, .col - lg - 1, .col - lg - 2, .col - lg - 3, .col - lg - 4, .col - lg - 5, .col - lg - 6, .col - lg - 7, .col - lg - 8, .col - lg - 9, .col - lg - 10, .col - lg - 11, .col - lg - 12, .col - xl, .col - xl - 1, .col - xl - 2, .col - xl - 3, .col - xl - 4, .col - xl - 5, .col - xl - 6, .col - xl - 7, .col - xl - 8, .col - xl - 9, .col - xl - 10, .col - xl - 11, .col - xl - 12 {
        padding - right: 15px;
        padding - left: 15px;
    }
}

@media(min - width: 768px) {
  .col - xs, .col - xs - 1, .col - xs - 2, .col - xs - 3, .col - xs - 4, .col - xs - 5, .col - xs - 6, .col - xs - 7, .col - xs - 8, .col - xs - 9, .col - xs - 10, .col - xs - 11, .col - xs - 12, .col - sm, .col - sm - 1, .col - sm - 2, .col - sm - 3, .col - sm - 4, .col - sm - 5, .col - sm - 6, .col - sm - 7, .col - sm - 8, .col - sm - 9, .col - sm - 10, .col - sm - 11, .col - sm - 12, .col - md, .col - md - 1, .col - md - 2, .col - md - 3, .col - md - 4, .col - md - 5, .col - md - 6, .col - md - 7, .col - md - 8, .col - md - 9, .col - md - 10, .col - md - 11, .col - md - 12, .col - lg, .col - lg - 1, .col - lg - 2, .col - lg - 3, .col - lg - 4, .col - lg - 5, .col - lg - 6, .col - lg - 7, .col - lg - 8, .col - lg - 9, .col - lg - 10, .col - lg - 11, .col - lg - 12, .col - xl, .col - xl - 1, .col - xl - 2, .col - xl - 3, .col - xl - 4, .col - xl - 5, .col - xl - 6, .col - xl - 7, .col - xl - 8, .col - xl - 9, .col - xl - 10, .col - xl - 11, .col - xl - 12 {
        padding - right: 15px;
        padding - left: 15px;
    }
}

@media(min - width: 992px) {
  .col - xs, .col - xs - 1, .col - xs - 2, .col - xs - 3, .col - xs - 4, .col - xs - 5, .col - xs - 6, .col - xs - 7, .col - xs - 8, .col - xs - 9, .col - xs - 10, .col - xs - 11, .col - xs - 12, .col - sm, .col - sm - 1, .col - sm - 2, .col - sm - 3, .col - sm - 4, .col - sm - 5, .col - sm - 6, .col - sm - 7, .col - sm - 8, .col - sm - 9, .col - sm - 10, .col - sm - 11, .col - sm - 12, .col - md, .col - md - 1, .col - md - 2, .col - md - 3, .col - md - 4, .col - md - 5, .col - md - 6, .col - md - 7, .col - md - 8, .col - md - 9, .col - md - 10, .col - md - 11, .col - md - 12, .col - lg, .col - lg - 1, .col - lg - 2, .col - lg - 3, .col - lg - 4, .col - lg - 5, .col - lg - 6, .col - lg - 7, .col - lg - 8, .col - lg - 9, .col - lg - 10, .col - lg - 11, .col - lg - 12, .col - xl, .col - xl - 1, .col - xl - 2, .col - xl - 3, .col - xl - 4, .col - xl - 5, .col - xl - 6, .col - xl - 7, .col - xl - 8, .col - xl - 9, .col - xl - 10, .col - xl - 11, .col - xl - 12 {
        padding - right: 15px;
        padding - left: 15px;
    }
}

@media(min - width: 1200px) {
  .col - xs, .col - xs - 1, .col - xs - 2, .col - xs - 3, .col - xs - 4, .col - xs - 5, .col - xs - 6, .col - xs - 7, .col - xs - 8, .col - xs - 9, .col - xs - 10, .col - xs - 11, .col - xs - 12, .col - sm, .col - sm - 1, .col - sm - 2, .col - sm - 3, .col - sm - 4, .col - sm - 5, .col - sm - 6, .col - sm - 7, .col - sm - 8, .col - sm - 9, .col - sm - 10, .col - sm - 11, .col - sm - 12, .col - md, .col - md - 1, .col - md - 2, .col - md - 3, .col - md - 4, .col - md - 5, .col - md - 6, .col - md - 7, .col - md - 8, .col - md - 9, .col - md - 10, .col - md - 11, .col - md - 12, .col - lg, .col - lg - 1, .col - lg - 2, .col - lg - 3, .col - lg - 4, .col - lg - 5, .col - lg - 6, .col - lg - 7, .col - lg - 8, .col - lg - 9, .col - lg - 10, .col - lg - 11, .col - lg - 12, .col - xl, .col - xl - 1, .col - xl - 2, .col - xl - 3, .col - xl - 4, .col - xl - 5, .col - xl - 6, .col - xl - 7, .col - xl - 8, .col - xl - 9, .col - xl - 10, .col - xl - 11, .col - xl - 12 {
        padding - right: 15px;
        padding - left: 15px;
    }
}

.col - xs - 1 {
    float: left;
    width: 8.333333 %;
}

.col - xs - 2 {
    float: left;
    width: 16.666667 %;
}

.col - xs - 3 {
    float: left;
    width: 25 %;
}

.col - xs - 4 {
    float: left;
    width: 33.333333 %;
}

.col - xs - 5 {
    float: left;
    width: 41.666667 %;
}

.col - xs - 6 {
    float: left;
    width: 50 %;
}

.col - xs - 7 {
    float: left;
    width: 58.333333 %;
}

.col - xs - 8 {
    float: left;
    width: 66.666667 %;
}

.col - xs - 9 {
    float: left;
    width: 75 %;
}

.col - xs - 10 {
    float: left;
    width: 83.333333 %;
}

.col - xs - 11 {
    float: left;
    width: 91.666667 %;
}

.col - xs - 12 {
    float: left;
    width: 100 %;
}

.pull - xs - 0 {
    right: auto;
}

.pull - xs - 1 {
    right: 8.333333 %;
}

.pull - xs - 2 {
    right: 16.666667 %;
}

.pull - xs - 3 {
    right: 25 %;
}

.pull - xs - 4 {
    right: 33.333333 %;
}

.pull - xs - 5 {
    right: 41.666667 %;
}

.pull - xs - 6 {
    right: 50 %;
}

.pull - xs - 7 {
    right: 58.333333 %;
}

.pull - xs - 8 {
    right: 66.666667 %;
}

.pull - xs - 9 {
    right: 75 %;
}

.pull - xs - 10 {
    right: 83.333333 %;
}

.pull - xs - 11 {
    right: 91.666667 %;
}

.pull - xs - 12 {
    right: 100 %;
}

.push - xs - 0 {
    left: auto;
}

.push - xs - 1 {
    left: 8.333333 %;
}

.push - xs - 2 {
    left: 16.666667 %;
}

.push - xs - 3 {
    left: 25 %;
}

.push - xs - 4 {
    left: 33.333333 %;
}

.push - xs - 5 {
    left: 41.666667 %;
}

.push - xs - 6 {
    left: 50 %;
}

.push - xs - 7 {
    left: 58.333333 %;
}

.push - xs - 8 {
    left: 66.666667 %;
}

.push - xs - 9 {
    left: 75 %;
}

.push - xs - 10 {
    left: 83.333333 %;
}

.push - xs - 11 {
    left: 91.666667 %;
}

.push - xs - 12 {
    left: 100 %;
}

.offset - xs - 1 {
    margin - left: 8.333333 %;
}

.offset - xs - 2 {
    margin - left: 16.666667 %;
}

.offset - xs - 3 {
    margin - left: 25 %;
}

.offset - xs - 4 {
    margin - left: 33.333333 %;
}

.offset - xs - 5 {
    margin - left: 41.666667 %;
}

.offset - xs - 6 {
    margin - left: 50 %;
}

.offset - xs - 7 {
    margin - left: 58.333333 %;
}

.offset - xs - 8 {
    margin - left: 66.666667 %;
}

.offset - xs - 9 {
    margin - left: 75 %;
}

.offset - xs - 10 {
    margin - left: 83.333333 %;
}

.offset - xs - 11 {
    margin - left: 91.666667 %;
}

@media(min - width: 576px) {
  .col - sm - 1 {
        float: left;
        width: 8.333333 %;
    }
  .col - sm - 2 {
        float: left;
        width: 16.666667 %;
    }
  .col - sm - 3 {
        float: left;
        width: 25 %;
    }
  .col - sm - 4 {
        float: left;
        width: 33.333333 %;
    }
  .col - sm - 5 {
        float: left;
        width: 41.666667 %;
    }
  .col - sm - 6 {
        float: left;
        width: 50 %;
    }
  .col - sm - 7 {
        float: left;
        width: 58.333333 %;
    }
  .col - sm - 8 {
        float: left;
        width: 66.666667 %;
    }
  .col - sm - 9 {
        float: left;
        width: 75 %;
    }
  .col - sm - 10 {
        float: left;
        width: 83.333333 %;
    }
  .col - sm - 11 {
        float: left;
        width: 91.666667 %;
    }
  .col - sm - 12 {
        float: left;
        width: 100 %;
    }
  .pull - sm - 0 {
        right: auto;
    }
  .pull - sm - 1 {
        right: 8.333333 %;
    }
  .pull - sm - 2 {
        right: 16.666667 %;
    }
  .pull - sm - 3 {
        right: 25 %;
    }
  .pull - sm - 4 {
        right: 33.333333 %;
    }
  .pull - sm - 5 {
        right: 41.666667 %;
    }
  .pull - sm - 6 {
        right: 50 %;
    }
  .pull - sm - 7 {
        right: 58.333333 %;
    }
  .pull - sm - 8 {
        right: 66.666667 %;
    }
  .pull - sm - 9 {
        right: 75 %;
    }
  .pull - sm - 10 {
        right: 83.333333 %;
    }
  .pull - sm - 11 {
        right: 91.666667 %;
    }
  .pull - sm - 12 {
        right: 100 %;
    }
  .push - sm - 0 {
        left: auto;
    }
  .push - sm - 1 {
        left: 8.333333 %;
    }
  .push - sm - 2 {
        left: 16.666667 %;
    }
  .push - sm - 3 {
        left: 25 %;
    }
  .push - sm - 4 {
        left: 33.333333 %;
    }
  .push - sm - 5 {
        left: 41.666667 %;
    }
  .push - sm - 6 {
        left: 50 %;
    }
  .push - sm - 7 {
        left: 58.333333 %;
    }
  .push - sm - 8 {
        left: 66.666667 %;
    }
  .push - sm - 9 {
        left: 75 %;
    }
  .push - sm - 10 {
        left: 83.333333 %;
    }
  .push - sm - 11 {
        left: 91.666667 %;
    }
  .push - sm - 12 {
        left: 100 %;
    }
  .offset - sm - 0 {
        margin - left: 0 %;
    }
  .offset - sm - 1 {
        margin - left: 8.333333 %;
    }
  .offset - sm - 2 {
        margin - left: 16.666667 %;
    }
  .offset - sm - 3 {
        margin - left: 25 %;
    }
  .offset - sm - 4 {
        margin - left: 33.333333 %;
    }
  .offset - sm - 5 {
        margin - left: 41.666667 %;
    }
  .offset - sm - 6 {
        margin - left: 50 %;
    }
  .offset - sm - 7 {
        margin - left: 58.333333 %;
    }
  .offset - sm - 8 {
        margin - left: 66.666667 %;
    }
  .offset - sm - 9 {
        margin - left: 75 %;
    }
  .offset - sm - 10 {
        margin - left: 83.333333 %;
    }
  .offset - sm - 11 {
        margin - left: 91.666667 %;
    }
}

@media(min - width: 768px) {
  .col - md - 1 {
        float: left;
        width: 8.333333 %;
    }
  .col - md - 2 {
        float: left;
        width: 16.666667 %;
    }
  .col - md - 3 {
        float: left;
        width: 25 %;
    }
  .col - md - 4 {
        float: left;
        width: 33.333333 %;
    }
  .col - md - 5 {
        float: left;
        width: 41.666667 %;
    }
  .col - md - 6 {
        float: left;
        width: 50 %;
    }
  .col - md - 7 {
        float: left;
        width: 58.333333 %;
    }
  .col - md - 8 {
        float: left;
        width: 66.666667 %;
    }
  .col - md - 9 {
        float: left;
        width: 75 %;
    }
  .col - md - 10 {
        float: left;
        width: 83.333333 %;
    }
  .col - md - 11 {
        float: left;
        width: 91.666667 %;
    }
  .col - md - 12 {
        float: left;
        width: 100 %;
    }
  .pull - md - 0 {
        right: auto;
    }
  .pull - md - 1 {
        right: 8.333333 %;
    }
  .pull - md - 2 {
        right: 16.666667 %;
    }
  .pull - md - 3 {
        right: 25 %;
    }
  .pull - md - 4 {
        right: 33.333333 %;
    }
  .pull - md - 5 {
        right: 41.666667 %;
    }
  .pull - md - 6 {
        right: 50 %;
    }
  .pull - md - 7 {
        right: 58.333333 %;
    }
  .pull - md - 8 {
        right: 66.666667 %;
    }
  .pull - md - 9 {
        right: 75 %;
    }
  .pull - md - 10 {
        right: 83.333333 %;
    }
  .pull - md - 11 {
        right: 91.666667 %;
    }
  .pull - md - 12 {
        right: 100 %;
    }
  .push - md - 0 {
        left: auto;
    }
  .push - md - 1 {
        left: 8.333333 %;
    }
  .push - md - 2 {
        left: 16.666667 %;
    }
  .push - md - 3 {
        left: 25 %;
    }
  .push - md - 4 {
        left: 33.333333 %;
    }
  .push - md - 5 {
        left: 41.666667 %;
    }
  .push - md - 6 {
        left: 50 %;
    }
  .push - md - 7 {
        left: 58.333333 %;
    }
  .push - md - 8 {
        left: 66.666667 %;
    }
  .push - md - 9 {
        left: 75 %;
    }
  .push - md - 10 {
        left: 83.333333 %;
    }
  .push - md - 11 {
        left: 91.666667 %;
    }
  .push - md - 12 {
        left: 100 %;
    }
  .offset - md - 0 {
        margin - left: 0 %;
    }
  .offset - md - 1 {
        margin - left: 8.333333 %;
    }
  .offset - md - 2 {
        margin - left: 16.666667 %;
    }
  .offset - md - 3 {
        margin - left: 25 %;
    }
  .offset - md - 4 {
        margin - left: 33.333333 %;
    }
  .offset - md - 5 {
        margin - left: 41.666667 %;
    }
  .offset - md - 6 {
        margin - left: 50 %;
    }
  .offset - md - 7 {
        margin - left: 58.333333 %;
    }
  .offset - md - 8 {
        margin - left: 66.666667 %;
    }
  .offset - md - 9 {
        margin - left: 75 %;
    }
  .offset - md - 10 {
        margin - left: 83.333333 %;
    }
  .offset - md - 11 {
        margin - left: 91.666667 %;
    }
}

@media(min - width: 992px) {
  .col - lg - 1 {
        float: left;
        width: 8.333333 %;
    }
  .col - lg - 2 {
        float: left;
        width: 16.666667 %;
    }
  .col - lg - 3 {
        float: left;
        width: 25 %;
    }
  .col - lg - 4 {
        float: left;
        width: 33.333333 %;
    }
  .col - lg - 5 {
        float: left;
        width: 41.666667 %;
    }
  .col - lg - 6 {
        float: left;
        width: 50 %;
    }
  .col - lg - 7 {
        float: left;
        width: 58.333333 %;
    }
  .col - lg - 8 {
        float: left;
        width: 66.666667 %;
    }
  .col - lg - 9 {
        float: left;
        width: 75 %;
    }
  .col - lg - 10 {
        float: left;
        width: 83.333333 %;
    }
  .col - lg - 11 {
        float: left;
        width: 91.666667 %;
    }
  .col - lg - 12 {
        float: left;
        width: 100 %;
    }
  .pull - lg - 0 {
        right: auto;
    }
  .pull - lg - 1 {
        right: 8.333333 %;
    }
  .pull - lg - 2 {
        right: 16.666667 %;
    }
  .pull - lg - 3 {
        right: 25 %;
    }
  .pull - lg - 4 {
        right: 33.333333 %;
    }
  .pull - lg - 5 {
        right: 41.666667 %;
    }
  .pull - lg - 6 {
        right: 50 %;
    }
  .pull - lg - 7 {
        right: 58.333333 %;
    }
  .pull - lg - 8 {
        right: 66.666667 %;
    }
  .pull - lg - 9 {
        right: 75 %;
    }
  .pull - lg - 10 {
        right: 83.333333 %;
    }
  .pull - lg - 11 {
        right: 91.666667 %;
    }
  .pull - lg - 12 {
        right: 100 %;
    }
  .push - lg - 0 {
        left: auto;
    }
  .push - lg - 1 {
        left: 8.333333 %;
    }
  .push - lg - 2 {
        left: 16.666667 %;
    }
  .push - lg - 3 {
        left: 25 %;
    }
  .push - lg - 4 {
        left: 33.333333 %;
    }
  .push - lg - 5 {
        left: 41.666667 %;
    }
  .push - lg - 6 {
        left: 50 %;
    }
  .push - lg - 7 {
        left: 58.333333 %;
    }
  .push - lg - 8 {
        left: 66.666667 %;
    }
  .push - lg - 9 {
        left: 75 %;
    }
  .push - lg - 10 {
        left: 83.333333 %;
    }
  .push - lg - 11 {
        left: 91.666667 %;
    }
  .push - lg - 12 {
        left: 100 %;
    }
  .offset - lg - 0 {
        margin - left: 0 %;
    }
  .offset - lg - 1 {
        margin - left: 8.333333 %;
    }
  .offset - lg - 2 {
        margin - left: 16.666667 %;
    }
  .offset - lg - 3 {
        margin - left: 25 %;
    }
  .offset - lg - 4 {
        margin - left: 33.333333 %;
    }
  .offset - lg - 5 {
        margin - left: 41.666667 %;
    }
  .offset - lg - 6 {
        margin - left: 50 %;
    }
  .offset - lg - 7 {
        margin - left: 58.333333 %;
    }
  .offset - lg - 8 {
        margin - left: 66.666667 %;
    }
  .offset - lg - 9 {
        margin - left: 75 %;
    }
  .offset - lg - 10 {
        margin - left: 83.333333 %;
    }
  .offset - lg - 11 {
        margin - left: 91.666667 %;
    }
}

@media(min - width: 1200px) {
  .col - xl - 1 {
        float: left;
        width: 8.333333 %;
    }
  .col - xl - 2 {
        float: left;
        width: 16.666667 %;
    }
  .col - xl - 3 {
        float: left;
        width: 25 %;
    }
  .col - xl - 4 {
        float: left;
        width: 33.333333 %;
    }
  .col - xl - 5 {
        float: left;
        width: 41.666667 %;
    }
  .col - xl - 6 {
        float: left;
        width: 50 %;
    }
  .col - xl - 7 {
        float: left;
        width: 58.333333 %;
    }
  .col - xl - 8 {
        float: left;
        width: 66.666667 %;
    }
  .col - xl - 9 {
        float: left;
        width: 75 %;
    }
  .col - xl - 10 {
        float: left;
        width: 83.333333 %;
    }
  .col - xl - 11 {
        float: left;
        width: 91.666667 %;
    }
  .col - xl - 12 {
        float: left;
        width: 100 %;
    }
  .pull - xl - 0 {
        right: auto;
    }
  .pull - xl - 1 {
        right: 8.333333 %;
    }
  .pull - xl - 2 {
        right: 16.666667 %;
    }
  .pull - xl - 3 {
        right: 25 %;
    }
  .pull - xl - 4 {
        right: 33.333333 %;
    }
  .pull - xl - 5 {
        right: 41.666667 %;
    }
  .pull - xl - 6 {
        right: 50 %;
    }
  .pull - xl - 7 {
        right: 58.333333 %;
    }
  .pull - xl - 8 {
        right: 66.666667 %;
    }
  .pull - xl - 9 {
        right: 75 %;
    }
  .pull - xl - 10 {
        right: 83.333333 %;
    }
  .pull - xl - 11 {
        right: 91.666667 %;
    }
  .pull - xl - 12 {
        right: 100 %;
    }
  .push - xl - 0 {
        left: auto;
    }
  .push - xl - 1 {
        left: 8.333333 %;
    }
  .push - xl - 2 {
        left: 16.666667 %;
    }
  .push - xl - 3 {
        left: 25 %;
    }
  .push - xl - 4 {
        left: 33.333333 %;
    }
  .push - xl - 5 {
        left: 41.666667 %;
    }
  .push - xl - 6 {
        left: 50 %;
    }
  .push - xl - 7 {
        left: 58.333333 %;
    }
  .push - xl - 8 {
        left: 66.666667 %;
    }
  .push - xl - 9 {
        left: 75 %;
    }
  .push - xl - 10 {
        left: 83.333333 %;
    }
  .push - xl - 11 {
        left: 91.666667 %;
    }
  .push - xl - 12 {
        left: 100 %;
    }
  .offset - xl - 0 {
        margin - left: 0 %;
    }
  .offset - xl - 1 {
        margin - left: 8.333333 %;
    }
  .offset - xl - 2 {
        margin - left: 16.666667 %;
    }
  .offset - xl - 3 {
        margin - left: 25 %;
    }
  .offset - xl - 4 {
        margin - left: 33.333333 %;
    }
  .offset - xl - 5 {
        margin - left: 41.666667 %;
    }
  .offset - xl - 6 {
        margin - left: 50 %;
    }
  .offset - xl - 7 {
        margin - left: 58.333333 %;
    }
  .offset - xl - 8 {
        margin - left: 66.666667 %;
    }
  .offset - xl - 9 {
        margin - left: 75 %;
    }
  .offset - xl - 10 {
        margin - left: 83.333333 %;
    }
  .offset - xl - 11 {
        margin - left: 91.666667 %;
    }
}

.table {
    width: 100 %;
    max - width: 100 %;
    margin - bottom: 1rem;
}

.table th,
.table td {
    padding: 0.75rem;
    vertical - align: top;
    border - top: 1px solid #eceeef;
}

.table thead th {
    vertical - align: bottom;
    border - bottom: 2px solid #eceeef;
}

.table tbody + tbody {
    border - top: 2px solid #eceeef;
}

.table.table {
    background - color: #fff;
}

.table - sm th,
.table - sm td {
    padding: 0.3rem;
}

.table - bordered {
    border: 1px solid #eceeef;
}

.table - bordered th,
.table - bordered td {
    border: 1px solid #eceeef;
}

.table - bordered thead th,
.table - bordered thead td {
    border - bottom - width: 2px;
}

.table - striped tbody tr: nth - of - type(odd) {
    background - color: rgba(0, 0, 0, 0.05);
}

.table - hover tbody tr: hover {
    background - color: rgba(0, 0, 0, 0.075);
}

.table - active,
.table - active > th,
.table - active > td {
    background - color: rgba(0, 0, 0, 0.075);
}

.table - hover.table - active:hover {
    background - color: rgba(0, 0, 0, 0.075);
}

.table - hover.table - active:hover > td,
.table - hover.table - active:hover > th {
    background - color: rgba(0, 0, 0, 0.075);
}

.table - success,
.table - success > th,
.table - success > td {
    background - color: #dff0d8;
}

.table - hover.table - success:hover {
    background - color: #d0e9c6;
}

.table - hover.table - success:hover > td,
.table - hover.table - success:hover > th {
    background - color: #d0e9c6;
}

.table - info,
.table - info > th,
.table - info > td {
    background - color: #d9edf7;
}

.table - hover.table - info:hover {
    background - color: #c4e3f3;
}

.table - hover.table - info:hover > td,
.table - hover.table - info:hover > th {
    background - color: #c4e3f3;
}

.table - warning,
.table - warning > th,
.table - warning > td {
    background - color: #fcf8e3;
}

.table - hover.table - warning:hover {
    background - color: #faf2cc;
}

.table - hover.table - warning:hover > td,
.table - hover.table - warning:hover > th {
    background - color: #faf2cc;
}

.table - danger,
.table - danger > th,
.table - danger > td {
    background - color: #f2dede;
}

.table - hover.table - danger:hover {
    background - color: #ebcccc;
}

.table - hover.table - danger:hover > td,
.table - hover.table - danger:hover > th {
    background - color: #ebcccc;
}

.thead - inverse th {
    color: #fff;
    background - color: #373a3c;
}

.thead -default th {
    color: #55595c;
    background - color: #eceeef;
}

.table - inverse {
    color: #eceeef;
    background - color: #373a3c;
}

.table - inverse th,
.table - inverse td,
.table - inverse thead th {
    border - color: #55595c;
}

.table - inverse.table - bordered {
    border: 0;
}

.table - responsive {
    display: block;
    width: 100 %;
    min - height: 0 %;
    overflow - x: auto;
}

.table - reflow thead {
    float: left;
}

.table - reflow tbody {
    display: block;
    white - space: nowrap;
}

.table - reflow th,
.table - reflow td {
    border - top: 1px solid #eceeef;
    border - left: 1px solid #eceeef;
}

.table - reflow th: last - child,
.table - reflow td: last - child {
    border - right: 1px solid #eceeef;
}

.table - reflow thead: last - child tr: last - child th,
.table - reflow thead: last - child tr: last - child td,
.table - reflow tbody: last - child tr: last - child th,
.table - reflow tbody: last - child tr: last - child td,
.table - reflow tfoot: last - child tr: last - child th,
.table - reflow tfoot: last - child tr: last - child td {
    border - bottom: 1px solid #eceeef;
}

.table - reflow tr {
    float: left;
}

.table - reflow tr th,
.table - reflow tr td {
    display: block!important;
    border: 1px solid #eceeef;
}

.form - control {
    display: block;
    width: 100 %;
    padding: 0.5rem 0.75rem;
    font - size: 1rem;
    line - height: 1.25;
    color: #55595c;
    background - color: #fff;
    background - image: none;
    -webkit - background - clip: padding - box;
    background - clip: padding - box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border - radius: 0.25rem;
}

.form - control::-ms - expand {
    background - color: transparent;
    border: 0;
}

.form - control:focus {
    color: #55595c;
    background - color: #fff;
    border - color: #66afe9;
    outline: none;
}

.form - control::-webkit - input - placeholder {
    color: #999;
    opacity: 1;
}

.form - control::-moz - placeholder {
    color: #999;
    opacity: 1;
}

.form - control:-ms - input - placeholder {
    color: #999;
    opacity: 1;
}

.form - control::placeholder {
    color: #999;
    opacity: 1;
}

.form - control:disabled, .form - control[readonly] {
    background - color: #eceeef;
    opacity: 1;
}

.form - control:disabled {
    cursor: not - allowed;
}

select.form - control:not([size]):not([multiple]) {
    height: calc(2.5rem - 2px);
}

select.form - control:focus::-ms - value {
    color: #55595c;
    background - color: #fff;
}

.form - control - file,
.form - control - range {
    display: block;
}

.col - form - label {
    padding - top: 0.5rem;
    padding - bottom: 0.5rem;
    margin - bottom: 0;
}

.col - form - label - lg {
    padding - top: 0.75rem;
    padding - bottom: 0.75rem;
    font - size: 1.25rem;
}

.col - form - label - sm {
    padding - top: 0.25rem;
    padding - bottom: 0.25rem;
    font - size: 0.875rem;
}

.col - form - legend {
    padding - top: 0.5rem;
    padding - bottom: 0.5rem;
    margin - bottom: 0;
    font - size: 1rem;
}

.form - control - static {
    padding - top: 0.5rem;
    padding - bottom: 0.5rem;
    line - height: 1.25;
    border: solid transparent;
    border - width: 1px 0;
}

.form - control - static.form - control - sm, .input - group - sm > .form - control - static.form - control,
.input - group - sm > .form - control - static.input - group - addon,
.input - group - sm > .input - group - btn > .form - control - static.btn, .form - control - static.form - control - lg, .input - group - lg > .form - control - static.form - control,
.input - group - lg > .form - control - static.input - group - addon,
.input - group - lg > .input - group - btn > .form - control - static.btn {
    padding - right: 0;
    padding - left: 0;
}

.form - control - sm, .input - group - sm > .form - control,
.input - group - sm > .input - group - addon,
.input - group - sm > .input - group - btn > .btn {
    padding: 0.25rem 0.5rem;
    font - size: 0.875rem;
    border - radius: 0.2rem;
}

select.form - control - sm:not([size]):not([multiple]), .input - group - sm > select.form - control:not([size]):not([multiple]),
.input - group - sm > select.input - group - addon:not([size]):not([multiple]),
.input - group - sm > .input - group - btn > select.btn:not([size]):not([multiple]) {
    height: 1.8125rem;
}

.form - control - lg, .input - group - lg > .form - control,
.input - group - lg > .input - group - addon,
.input - group - lg > .input - group - btn > .btn {
    padding: 0.75rem 1.5rem;
    font - size: 1.25rem;
    border - radius: 0.3rem;
}

select.form - control - lg:not([size]):not([multiple]), .input - group - lg > select.form - control:not([size]):not([multiple]),
.input - group - lg > select.input - group - addon:not([size]):not([multiple]),
.input - group - lg > .input - group - btn > select.btn:not([size]):not([multiple]) {
    height: 3.166667rem;
}

.form - group {
    margin - bottom: 1rem;
}

.form - text {
    display: block;
    margin - top: 0.25rem;
}

.form - check {
    position: relative;
    display: block;
    margin - bottom: 0.75rem;
}

.form - check + .form - check {
    margin - top: -.25rem;
}

.form - check.disabled.form - check - label {
    color: #818a91;
    cursor: not - allowed;
}

.form - check - label {
    padding - left: 1.25rem;
    margin - bottom: 0;
    cursor: pointer;
}

.form - check - input {
    position: absolute;
    margin - top: .25rem;
    margin - left: -1.25rem;
}

.form - check - input:only - child {
    position: static;
}

.form - check - inline {
    position: relative;
    display: inline - block;
    padding - left: 1.25rem;
    margin - bottom: 0;
    vertical - align: middle;
    cursor: pointer;
}

.form - check - inline + .form - check - inline {
    margin - left: .75rem;
}

.form - check - inline.disabled {
    color: #818a91;
    cursor: not - allowed;
}

.form - control - feedback {
    margin - top: 0.25rem;
}

.form - control - success,
.form - control - warning,
.form - control - danger {
    padding - right: 2.25rem;
    background - repeat: no - repeat;
    background - position: center right 0.625rem;
    -webkit - background - size: 1.25rem 1.25rem;
    background - size: 1.25rem 1.25rem;
}

.has - success.form - control - feedback,
.has - success.form - control - label,
.has - success.form - check - label,
.has - success.form - check - inline,
.has - success.custom - control {
    color: #5cb85c;
}

.has - success.form - control {
    border - color: #5cb85c;
}

.has - success.form - control:focus {
    -webkit - box - shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #a3d7a3;
    box - shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #a3d7a3;
}

.has - success.input - group - addon {
    color: #5cb85c;
    border - color: #5cb85c;
    background - color: #eaf6ea;
}

.has - success.form - control - success {
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#5cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
}

.has - warning.form - control - feedback,
.has - warning.form - control - label,
.has - warning.form - check - label,
.has - warning.form - check - inline,
.has - warning.custom - control {
    color: #f0ad4e;
}

.has - warning.form - control {
    border - color: #f0ad4e;
}

.has - warning.form - control:focus {
    -webkit - box - shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #f8d9ac;
    box - shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #f8d9ac;
}

.has - warning.input - group - addon {
    color: #f0ad4e;
    border - color: #f0ad4e;
    background - color: white;
}

.has - warning.form - control - warning {
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E");
}

.has - danger.form - control - feedback,
.has - danger.form - control - label,
.has - danger.form - check - label,
.has - danger.form - check - inline,
.has - danger.custom - control {
    color: #d9534f;
}

.has - danger.form - control {
    border - color: #d9534f;
}

.has - danger.form - control:focus {
    -webkit - box - shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #eba5a3;
    box - shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #eba5a3;
}

.has - danger.input - group - addon {
    color: #d9534f;
    border - color: #d9534f;
    background - color: #fdf7f7;
}

.has - danger.form - control - danger {
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E");
}

@media(min - width: 576px) {
  .form - inline.form - group {
        display: inline - block;
        margin - bottom: 0;
        vertical - align: middle;
    }
  .form - inline.form - control {
        display: inline - block;
        width: auto;
        vertical - align: middle;
    }
  .form - inline.form - control - static {
        display: inline - block;
    }
  .form - inline.input - group {
        display: inline - table;
        width: auto;
        vertical - align: middle;
    }
  .form - inline.input - group.input - group - addon,
  .form - inline.input - group.input - group - btn,
  .form - inline.input - group.form - control {
        width: auto;
    }
  .form - inline.input - group > .form - control {
        width: 100 %;
    }
  .form - inline.form - control - label {
        margin - bottom: 0;
        vertical - align: middle;
    }
  .form - inline.form - check {
        display: inline - block;
        margin - top: 0;
        margin - bottom: 0;
        vertical - align: middle;
    }
  .form - inline.form - check - label {
        padding - left: 0;
    }
  .form - inline.form - check - input {
        position: relative;
        margin - left: 0;
    }
  .form - inline.has - feedback.form - control - feedback {
        top: 0;
    }
}

.btn {
    display: inline - block;
    font - weight: normal;
    line - height: 1.25;
    text - align: center;
    white - space: nowrap;
    vertical - align: middle;
    cursor: pointer;
    -webkit - user - select: none;
    -moz - user - select: none;
    -ms - user - select: none;
    user - select: none;
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    font - size: 1rem;
    border - radius: 0.25rem;
}

.btn: focus, .btn.focus, .btn:active: focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {
    outline: 5px auto - webkit - focus - ring - color;
    outline - offset: -2px;
}

.btn: focus, .btn:hover {
    text - decoration: none;
}

.btn.focus {
    text - decoration: none;
}

.btn: active, .btn.active {
    background - image: none;
    outline: 0;
}

.btn.disabled, .btn:disabled {
    cursor: not - allowed;
    opacity: .65;
}

a.btn.disabled,
    fieldset[disabled] a.btn {
    pointer - events: none;
}

.btn - primary {
    color: #fff;
    background - color: #0275d8;
    border - color: #0275d8;
}

.btn - primary:hover {
    color: #fff;
    background - color: #025aa5;
    border - color: #01549b;
}

.btn - primary:focus, .btn - primary.focus {
    color: #fff;
    background - color: #025aa5;
    border - color: #01549b;
}

.btn - primary:active, .btn - primary.active,
.open > .btn - primary.dropdown - toggle {
    color: #fff;
    background - color: #025aa5;
    border - color: #01549b;
    background - image: none;
}

.btn - primary:active: hover, .btn - primary:active: focus, .btn - primary:active.focus, .btn - primary.active:hover, .btn - primary.active:focus, .btn - primary.active.focus,
.open > .btn - primary.dropdown - toggle:hover,
.open > .btn - primary.dropdown - toggle:focus,
.open > .btn - primary.dropdown - toggle.focus {
    color: #fff;
    background - color: #014682;
    border - color: #01315a;
}

.btn - primary.disabled:focus, .btn - primary.disabled.focus, .btn - primary:disabled: focus, .btn - primary:disabled.focus {
    background - color: #0275d8;
    border - color: #0275d8;
}

.btn - primary.disabled:hover, .btn - primary:disabled: hover {
    background - color: #0275d8;
    border - color: #0275d8;
}

.btn - secondary {
    color: #373a3c;
    background - color: #fff;
    border - color: #ccc;
}

.btn - secondary:hover {
    color: #373a3c;
    background - color: #e6e6e6;
    border - color: #adadad;
}

.btn - secondary:focus, .btn - secondary.focus {
    color: #373a3c;
    background - color: #e6e6e6;
    border - color: #adadad;
}

.btn - secondary:active, .btn - secondary.active,
.open > .btn - secondary.dropdown - toggle {
    color: #373a3c;
    background - color: #e6e6e6;
    border - color: #adadad;
    background - image: none;
}

.btn - secondary:active: hover, .btn - secondary:active: focus, .btn - secondary:active.focus, .btn - secondary.active:hover, .btn - secondary.active:focus, .btn - secondary.active.focus,
.open > .btn - secondary.dropdown - toggle:hover,
.open > .btn - secondary.dropdown - toggle:focus,
.open > .btn - secondary.dropdown - toggle.focus {
    color: #373a3c;
    background - color: #d4d4d4;
    border - color: #8c8c8c;
}

.btn - secondary.disabled:focus, .btn - secondary.disabled.focus, .btn - secondary:disabled: focus, .btn - secondary:disabled.focus {
    background - color: #fff;
    border - color: #ccc;
}

.btn - secondary.disabled:hover, .btn - secondary:disabled: hover {
    background - color: #fff;
    border - color: #ccc;
}

.btn - info {
    color: #fff;
    background - color: #5bc0de;
    border - color: #5bc0de;
}

.btn - info:hover {
    color: #fff;
    background - color: #31b0d5;
    border - color: #2aabd2;
}

.btn - info:focus, .btn - info.focus {
    color: #fff;
    background - color: #31b0d5;
    border - color: #2aabd2;
}

.btn - info:active, .btn - info.active,
.open > .btn - info.dropdown - toggle {
    color: #fff;
    background - color: #31b0d5;
    border - color: #2aabd2;
    background - image: none;
}

.btn - info:active: hover, .btn - info:active: focus, .btn - info:active.focus, .btn - info.active:hover, .btn - info.active:focus, .btn - info.active.focus,
.open > .btn - info.dropdown - toggle:hover,
.open > .btn - info.dropdown - toggle:focus,
.open > .btn - info.dropdown - toggle.focus {
    color: #fff;
    background - color: #269abc;
    border - color: #1f7e9a;
}

.btn - info.disabled:focus, .btn - info.disabled.focus, .btn - info:disabled: focus, .btn - info:disabled.focus {
    background - color: #5bc0de;
    border - color: #5bc0de;
}

.btn - info.disabled:hover, .btn - info:disabled: hover {
    background - color: #5bc0de;
    border - color: #5bc0de;
}

.btn - success {
    color: #fff;
    background - color: #5cb85c;
    border - color: #5cb85c;
}

.btn - success:hover {
    color: #fff;
    background - color: #449d44;
    border - color: #419641;
}

.btn - success:focus, .btn - success.focus {
    color: #fff;
    background - color: #449d44;
    border - color: #419641;
}

.btn - success:active, .btn - success.active,
.open > .btn - success.dropdown - toggle {
    color: #fff;
    background - color: #449d44;
    border - color: #419641;
    background - image: none;
}

.btn - success:active: hover, .btn - success:active: focus, .btn - success:active.focus, .btn - success.active:hover, .btn - success.active:focus, .btn - success.active.focus,
.open > .btn - success.dropdown - toggle:hover,
.open > .btn - success.dropdown - toggle:focus,
.open > .btn - success.dropdown - toggle.focus {
    color: #fff;
    background - color: #398439;
    border - color: #2d672d;
}

.btn - success.disabled:focus, .btn - success.disabled.focus, .btn - success:disabled: focus, .btn - success:disabled.focus {
    background - color: #5cb85c;
    border - color: #5cb85c;
}

.btn - success.disabled:hover, .btn - success:disabled: hover {
    background - color: #5cb85c;
    border - color: #5cb85c;
}

.btn - warning {
    color: #fff;
    background - color: #f0ad4e;
    border - color: #f0ad4e;
}

.btn - warning:hover {
    color: #fff;
    background - color: #ec971f;
    border - color: #eb9316;
}

.btn - warning:focus, .btn - warning.focus {
    color: #fff;
    background - color: #ec971f;
    border - color: #eb9316;
}

.btn - warning:active, .btn - warning.active,
.open > .btn - warning.dropdown - toggle {
    color: #fff;
    background - color: #ec971f;
    border - color: #eb9316;
    background - image: none;
}

.btn - warning:active: hover, .btn - warning:active: focus, .btn - warning:active.focus, .btn - warning.active:hover, .btn - warning.active:focus, .btn - warning.active.focus,
.open > .btn - warning.dropdown - toggle:hover,
.open > .btn - warning.dropdown - toggle:focus,
.open > .btn - warning.dropdown - toggle.focus {
    color: #fff;
    background - color: #d58512;
    border - color: #b06d0f;
}

.btn - warning.disabled:focus, .btn - warning.disabled.focus, .btn - warning:disabled: focus, .btn - warning:disabled.focus {
    background - color: #f0ad4e;
    border - color: #f0ad4e;
}

.btn - warning.disabled:hover, .btn - warning:disabled: hover {
    background - color: #f0ad4e;
    border - color: #f0ad4e;
}

.btn - danger {
    color: #fff;
    background - color: #d9534f;
    border - color: #d9534f;
}

.btn - danger:hover {
    color: #fff;
    background - color: #c9302c;
    border - color: #c12e2a;
}

.btn - danger:focus, .btn - danger.focus {
    color: #fff;
    background - color: #c9302c;
    border - color: #c12e2a;
}

.btn - danger:active, .btn - danger.active,
.open > .btn - danger.dropdown - toggle {
    color: #fff;
    background - color: #c9302c;
    border - color: #c12e2a;
    background - image: none;
}

.btn - danger:active: hover, .btn - danger:active: focus, .btn - danger:active.focus, .btn - danger.active:hover, .btn - danger.active:focus, .btn - danger.active.focus,
.open > .btn - danger.dropdown - toggle:hover,
.open > .btn - danger.dropdown - toggle:focus,
.open > .btn - danger.dropdown - toggle.focus {
    color: #fff;
    background - color: #ac2925;
    border - color: #8b211e;
}

.btn - danger.disabled:focus, .btn - danger.disabled.focus, .btn - danger:disabled: focus, .btn - danger:disabled.focus {
    background - color: #d9534f;
    border - color: #d9534f;
}

.btn - danger.disabled:hover, .btn - danger:disabled: hover {
    background - color: #d9534f;
    border - color: #d9534f;
}

.btn - outline - primary {
    color: #0275d8;
    background - image: none;
    background - color: transparent;
    border - color: #0275d8;
}

.btn - outline - primary:hover {
    color: #fff;
    background - color: #0275d8;
    border - color: #0275d8;
}

.btn - outline - primary:focus, .btn - outline - primary.focus {
    color: #fff;
    background - color: #0275d8;
    border - color: #0275d8;
}

.btn - outline - primary:active, .btn - outline - primary.active,
.open > .btn - outline - primary.dropdown - toggle {
    color: #fff;
    background - color: #0275d8;
    border - color: #0275d8;
}

.btn - outline - primary:active: hover, .btn - outline - primary:active: focus, .btn - outline - primary:active.focus, .btn - outline - primary.active:hover, .btn - outline - primary.active:focus, .btn - outline - primary.active.focus,
.open > .btn - outline - primary.dropdown - toggle:hover,
.open > .btn - outline - primary.dropdown - toggle:focus,
.open > .btn - outline - primary.dropdown - toggle.focus {
    color: #fff;
    background - color: #014682;
    border - color: #01315a;
}

.btn - outline - primary.disabled:focus, .btn - outline - primary.disabled.focus, .btn - outline - primary:disabled: focus, .btn - outline - primary:disabled.focus {
    border - color: #43a7fd;
}

.btn - outline - primary.disabled:hover, .btn - outline - primary:disabled: hover {
    border - color: #43a7fd;
}

.btn - outline - secondary {
    color: #ccc;
    background - image: none;
    background - color: transparent;
    border - color: #ccc;
}

.btn - outline - secondary:hover {
    color: #fff;
    background - color: #ccc;
    border - color: #ccc;
}

.btn - outline - secondary:focus, .btn - outline - secondary.focus {
    color: #fff;
    background - color: #ccc;
    border - color: #ccc;
}

.btn - outline - secondary:active, .btn - outline - secondary.active,
.open > .btn - outline - secondary.dropdown - toggle {
    color: #fff;
    background - color: #ccc;
    border - color: #ccc;
}

.btn - outline - secondary:active: hover, .btn - outline - secondary:active: focus, .btn - outline - secondary:active.focus, .btn - outline - secondary.active:hover, .btn - outline - secondary.active:focus, .btn - outline - secondary.active.focus,
.open > .btn - outline - secondary.dropdown - toggle:hover,
.open > .btn - outline - secondary.dropdown - toggle:focus,
.open > .btn - outline - secondary.dropdown - toggle.focus {
    color: #fff;
    background - color: #a1a1a1;
    border - color: #8c8c8c;
}

.btn - outline - secondary.disabled:focus, .btn - outline - secondary.disabled.focus, .btn - outline - secondary:disabled: focus, .btn - outline - secondary:disabled.focus {
    border - color: white;
}

.btn - outline - secondary.disabled:hover, .btn - outline - secondary:disabled: hover {
    border - color: white;
}

.btn - outline - info {
    color: #5bc0de;
    background - image: none;
    background - color: transparent;
    border - color: #5bc0de;
}

.btn - outline - info:hover {
    color: #fff;
    background - color: #5bc0de;
    border - color: #5bc0de;
}

.btn - outline - info:focus, .btn - outline - info.focus {
    color: #fff;
    background - color: #5bc0de;
    border - color: #5bc0de;
}

.btn - outline - info:active, .btn - outline - info.active,
.open > .btn - outline - info.dropdown - toggle {
    color: #fff;
    background - color: #5bc0de;
    border - color: #5bc0de;
}

.btn - outline - info:active: hover, .btn - outline - info:active: focus, .btn - outline - info:active.focus, .btn - outline - info.active:hover, .btn - outline - info.active:focus, .btn - outline - info.active.focus,
.open > .btn - outline - info.dropdown - toggle:hover,
.open > .btn - outline - info.dropdown - toggle:focus,
.open > .btn - outline - info.dropdown - toggle.focus {
    color: #fff;
    background - color: #269abc;
    border - color: #1f7e9a;
}

.btn - outline - info.disabled:focus, .btn - outline - info.disabled.focus, .btn - outline - info:disabled: focus, .btn - outline - info:disabled.focus {
    border - color: #b0e1ef;
}

.btn - outline - info.disabled:hover, .btn - outline - info:disabled: hover {
    border - color: #b0e1ef;
}

.btn - outline - success {
    color: #5cb85c;
    background - image: none;
    background - color: transparent;
    border - color: #5cb85c;
}

.btn - outline - success:hover {
    color: #fff;
    background - color: #5cb85c;
    border - color: #5cb85c;
}

.btn - outline - success:focus, .btn - outline - success.focus {
    color: #fff;
    background - color: #5cb85c;
    border - color: #5cb85c;
}

.btn - outline - success:active, .btn - outline - success.active,
.open > .btn - outline - success.dropdown - toggle {
    color: #fff;
    background - color: #5cb85c;
    border - color: #5cb85c;
}

.btn - outline - success:active: hover, .btn - outline - success:active: focus, .btn - outline - success:active.focus, .btn - outline - success.active:hover, .btn - outline - success.active:focus, .btn - outline - success.active.focus,
.open > .btn - outline - success.dropdown - toggle:hover,
.open > .btn - outline - success.dropdown - toggle:focus,
.open > .btn - outline - success.dropdown - toggle.focus {
    color: #fff;
    background - color: #398439;
    border - color: #2d672d;
}

.btn - outline - success.disabled:focus, .btn - outline - success.disabled.focus, .btn - outline - success:disabled: focus, .btn - outline - success:disabled.focus {
    border - color: #a3d7a3;
}

.btn - outline - success.disabled:hover, .btn - outline - success:disabled: hover {
    border - color: #a3d7a3;
}

.btn - outline - warning {
    color: #f0ad4e;
    background - image: none;
    background - color: transparent;
    border - color: #f0ad4e;
}

.btn - outline - warning:hover {
    color: #fff;
    background - color: #f0ad4e;
    border - color: #f0ad4e;
}

.btn - outline - warning:focus, .btn - outline - warning.focus {
    color: #fff;
    background - color: #f0ad4e;
    border - color: #f0ad4e;
}

.btn - outline - warning:active, .btn - outline - warning.active,
.open > .btn - outline - warning.dropdown - toggle {
    color: #fff;
    background - color: #f0ad4e;
    border - color: #f0ad4e;
}

.btn - outline - warning:active: hover, .btn - outline - warning:active: focus, .btn - outline - warning:active.focus, .btn - outline - warning.active:hover, .btn - outline - warning.active:focus, .btn - outline - warning.active.focus,
.open > .btn - outline - warning.dropdown - toggle:hover,
.open > .btn - outline - warning.dropdown - toggle:focus,
.open > .btn - outline - warning.dropdown - toggle.focus {
    color: #fff;
    background - color: #d58512;
    border - color: #b06d0f;
}

.btn - outline - warning.disabled:focus, .btn - outline - warning.disabled.focus, .btn - outline - warning:disabled: focus, .btn - outline - warning:disabled.focus {
    border - color: #f8d9ac;
}

.btn - outline - warning.disabled:hover, .btn - outline - warning:disabled: hover {
    border - color: #f8d9ac;
}

.btn - outline - danger {
    color: #d9534f;
    background - image: none;
    background - color: transparent;
    border - color: #d9534f;
}

.btn - outline - danger:hover {
    color: #fff;
    background - color: #d9534f;
    border - color: #d9534f;
}

.btn - outline - danger:focus, .btn - outline - danger.focus {
    color: #fff;
    background - color: #d9534f;
    border - color: #d9534f;
}

.btn - outline - danger:active, .btn - outline - danger.active,
.open > .btn - outline - danger.dropdown - toggle {
    color: #fff;
    background - color: #d9534f;
    border - color: #d9534f;
}

.btn - outline - danger:active: hover, .btn - outline - danger:active: focus, .btn - outline - danger:active.focus, .btn - outline - danger.active:hover, .btn - outline - danger.active:focus, .btn - outline - danger.active.focus,
.open > .btn - outline - danger.dropdown - toggle:hover,
.open > .btn - outline - danger.dropdown - toggle:focus,
.open > .btn - outline - danger.dropdown - toggle.focus {
    color: #fff;
    background - color: #ac2925;
    border - color: #8b211e;
}

.btn - outline - danger.disabled:focus, .btn - outline - danger.disabled.focus, .btn - outline - danger:disabled: focus, .btn - outline - danger:disabled.focus {
    border - color: #eba5a3;
}

.btn - outline - danger.disabled:hover, .btn - outline - danger:disabled: hover {
    border - color: #eba5a3;
}

.btn - link {
    font - weight: normal;
    color: #0275d8;
    border - radius: 0;
}

.btn - link, .btn - link:active, .btn - link.active, .btn - link:disabled {
    background - color: transparent;
}

.btn - link, .btn - link:focus, .btn - link:active {
    border - color: transparent;
}

.btn - link:hover {
    border - color: transparent;
}

.btn - link:focus, .btn - link:hover {
    color: #014c8c;
    text - decoration: underline;
    background - color: transparent;
}

.btn - link:disabled: focus, .btn - link:disabled: hover {
    color: #818a91;
    text - decoration: none;
}

.btn - lg, .btn - group - lg > .btn {
    padding: 0.75rem 1.5rem;
    font - size: 1.25rem;
    border - radius: 0.3rem;
}

.btn - sm, .btn - group - sm > .btn {
    padding: 0.25rem 0.5rem;
    font - size: 0.875rem;
    border - radius: 0.2rem;
}

.btn - block {
    display: block;
    width: 100 %;
}

.btn - block + .btn - block {
    margin - top: 0.5rem;
}

input[type = "submit"].btn - block,
    input[type = "reset"].btn - block,
    input[type = "button"].btn - block {
    width: 100 %;
}

.fade {
    opacity: 0;
    -webkit - transition: opacity .15s linear;
    -o - transition: opacity .15s linear;
    transition: opacity .15s linear;
}

.fade.in {
    opacity: 1;
}

.collapse {
    display: none;
}

.collapse.in {
    display: block;
}

tr.collapse.in {
    display: table - row;
}

tbody.collapse.in {
    display: table - row - group;
}

.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit - transition - timing - function: ease;
    -o - transition - timing - function: ease;
    transition - timing - function: ease;
    -webkit - transition - duration: .35s;
    -o - transition - duration: .35s;
    transition - duration: .35s;
    -webkit - transition - property: height;
    -o - transition - property: height;
    transition - property: height;
}

.dropup,
.dropdown {
    position: relative;
}

.dropdown - toggle::after {
    display: inline - block;
    width: 0;
    height: 0;
    margin - left: 0.3em;
    vertical - align: middle;
    content: "";
    border - top: 0.3em solid;
    border - right: 0.3em solid transparent;
    border - left: 0.3em solid transparent;
}

.dropdown - toggle:focus {
    outline: 0;
}

.dropup.dropdown - toggle::after {
    border - top: 0;
    border - bottom: 0.3em solid;
}

.dropdown - menu {
    position: absolute;
    top: 100 %;
    left: 0;
    z - index: 1000;
    display: none;
    float: left;
    min - width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font - size: 1rem;
    color: #373a3c;
    text - align: left;
    list - style: none;
    background - color: #fff;
    -webkit - background - clip: padding - box;
    background - clip: padding - box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border - radius: 0.25rem;
}

.dropdown - divider {
    height: 1px;
    margin: 0.5rem 0;
    overflow: hidden;
    background - color: #e5e5e5;
}

.dropdown - item {
    display: block;
    width: 100 %;
    padding: 3px 1.5rem;
    clear: both;
    font - weight: normal;
    color: #373a3c;
    text - align: inherit;
    white - space: nowrap;
    background: none;
    border: 0;
}

.dropdown - item:focus, .dropdown - item:hover {
    color: #2b2d2f;
    text - decoration: none;
    background - color: #f5f5f5;
}

.dropdown - item.active, .dropdown - item.active:focus, .dropdown - item.active:hover {
    color: #fff;
    text - decoration: none;
    background - color: #0275d8;
    outline: 0;
}

.dropdown - item.disabled, .dropdown - item.disabled:focus, .dropdown - item.disabled:hover {
    color: #818a91;
}

.dropdown - item.disabled:focus, .dropdown - item.disabled:hover {
    text - decoration: none;
    cursor: not - allowed;
    background - color: transparent;
    background - image: none;
    filter: "progid:DXImageTransform.Microsoft.gradient(enabled = false)";
}

.open > .dropdown - menu {
    display: block;
}

.open > a {
    outline: 0;
}

.dropdown - menu - right {
    right: 0;
    left: auto;
}

.dropdown - menu - left {
    right: auto;
    left: 0;
}

.dropdown - header {
    display: block;
    padding: 0.5rem 1.5rem;
    margin - bottom: 0;
    font - size: 0.875rem;
    color: #818a91;
    white - space: nowrap;
}

.dropdown - backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z - index: 990;
}

.dropup.caret,
.navbar - fixed - bottom.dropdown.caret {
    content: "";
    border - top: 0;
    border - bottom: 0.3em solid;
}

.dropup.dropdown - menu,
.navbar - fixed - bottom.dropdown.dropdown - menu {
    top: auto;
    bottom: 100 %;
    margin - bottom: 0.125rem;
}

.btn - group,
.btn - group - vertical {
    position: relative;
    display: inline - block;
    vertical - align: middle;
}

.btn - group > .btn,
.btn - group - vertical > .btn {
    position: relative;
    float: left;
    margin - bottom: 0;
}

.btn - group > .btn:focus, .btn - group > .btn:active, .btn - group > .btn.active,
.btn - group - vertical > .btn:focus,
.btn - group - vertical > .btn:active,
.btn - group - vertical > .btn.active {
    z - index: 2;
}

.btn - group > .btn:hover,
.btn - group - vertical > .btn:hover {
    z - index: 2;
}

.btn - group.btn + .btn,
.btn - group.btn + .btn - group,
.btn - group.btn - group + .btn,
.btn - group.btn - group + .btn - group {
    margin - left: -1px;
}

.btn - toolbar {
    margin - left: -0.5rem;
}

.btn - toolbar::after {
    content: "";
    display: table;
    clear: both;
}

.btn - toolbar.btn - group,
.btn - toolbar.input - group {
    float: left;
}

.btn - toolbar > .btn,
.btn - toolbar > .btn - group,
.btn - toolbar > .input - group {
    margin - left: 0.5rem;
}

.btn - group > .btn:not(:first - child):not(:last - child):not(.dropdown - toggle) {
    border - radius: 0;
}

.btn - group > .btn:first - child {
    margin - left: 0;
}

.btn - group > .btn:first - child:not(:last - child):not(.dropdown - toggle) {
    border - bottom - right - radius: 0;
    border - top - right - radius: 0;
}

.btn - group > .btn:last - child:not(:first - child),
.btn - group > .dropdown - toggle:not(:first - child) {
    border - bottom - left - radius: 0;
    border - top - left - radius: 0;
}

.btn - group > .btn - group {
    float: left;
}

.btn - group > .btn - group:not(:first - child):not(:last - child) > .btn {
    border - radius: 0;
}

.btn - group > .btn - group:first - child:not(:last - child) > .btn:last - child,
.btn - group > .btn - group:first - child:not(:last - child) > .dropdown - toggle {
    border - bottom - right - radius: 0;
    border - top - right - radius: 0;
}

.btn - group > .btn - group:last - child:not(:first - child) > .btn:first - child {
    border - bottom - left - radius: 0;
    border - top - left - radius: 0;
}

.btn - group.dropdown - toggle:active,
.btn - group.open.dropdown - toggle {
    outline: 0;
}

.btn + .dropdown - toggle - split {
    padding - right: 0.75rem;
    padding - left: 0.75rem;
}

.btn + .dropdown - toggle - split::after {
    margin - left: 0;
}

.btn - sm + .dropdown - toggle - split, .btn - group - sm > .btn + .dropdown - toggle - split {
    padding - right: 0.375rem;
    padding - left: 0.375rem;
}

.btn - lg + .dropdown - toggle - split, .btn - group - lg > .btn + .dropdown - toggle - split {
    padding - right: 1.125rem;
    padding - left: 1.125rem;
}

.btn.caret {
    margin - left: 0;
}

.btn - lg.caret, .btn - group - lg > .btn.caret {
    border - width: 0.3em 0.3em 0;
    border - bottom - width: 0;
}

.dropup.btn - lg.caret, .dropup.btn - group - lg > .btn.caret {
    border - width: 0 0.3em 0.3em;
}

.btn - group - vertical > .btn,
.btn - group - vertical > .btn - group,
.btn - group - vertical > .btn - group > .btn {
    display: block;
    float: none;
    width: 100 %;
    max - width: 100 %;
}

.btn - group - vertical > .btn - group::after {
    content: "";
    display: table;
    clear: both;
}

.btn - group - vertical > .btn - group > .btn {
    float: none;
}

.btn - group - vertical > .btn + .btn,
.btn - group - vertical > .btn + .btn - group,
.btn - group - vertical > .btn - group + .btn,
.btn - group - vertical > .btn - group + .btn - group {
    margin - top: -1px;
    margin - left: 0;
}

.btn - group - vertical > .btn:not(:first - child):not(:last - child) {
    border - radius: 0;
}

.btn - group - vertical > .btn:first - child:not(:last - child) {
    border - bottom - right - radius: 0;
    border - bottom - left - radius: 0;
}

.btn - group - vertical > .btn:last - child:not(:first - child) {
    border - top - right - radius: 0;
    border - top - left - radius: 0;
}

.btn - group - vertical > .btn - group:not(:first - child):not(:last - child) > .btn {
    border - radius: 0;
}

.btn - group - vertical > .btn - group:first - child:not(:last - child) > .btn:last - child,
.btn - group - vertical > .btn - group:first - child:not(:last - child) > .dropdown - toggle {
    border - bottom - right - radius: 0;
    border - bottom - left - radius: 0;
}

.btn - group - vertical > .btn - group:last - child:not(:first - child) > .btn:first - child {
    border - top - right - radius: 0;
    border - top - left - radius: 0;
}

[data - toggle="buttons"] > .btn input[type = "radio"],
    [data - toggle="buttons"] > .btn input[type = "checkbox"],
        [data - toggle="buttons"] > .btn - group > .btn input[type = "radio"],
            [data - toggle="buttons"] > .btn - group > .btn input[type = "checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer - events: none;
}

.input - group {
    position: relative;
    width: 100 %;
    display: table;
    border - collapse: separate;
}

.input - group.form - control {
    position: relative;
    z - index: 2;
    float: left;
    width: 100 %;
    margin - bottom: 0;
}

.input - group.form - control:focus, .input - group.form - control:active, .input - group.form - control:hover {
    z - index: 3;
}

.input - group - addon,
.input - group - btn,
.input - group.form - control {
    display: table - cell;
}

.input - group - addon:not(:first - child):not(:last - child),
.input - group - btn:not(:first - child):not(:last - child),
.input - group.form - control:not(:first - child):not(:last - child) {
    border - radius: 0;
}

.input - group - addon,
.input - group - btn {
    width: 1 %;
    white - space: nowrap;
    vertical - align: middle;
}

.input - group - addon {
    padding: 0.5rem 0.75rem;
    margin - bottom: 0;
    font - size: 1rem;
    font - weight: normal;
    line - height: 1.25;
    color: #55595c;
    text - align: center;
    background - color: #eceeef;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border - radius: 0.25rem;
}

.input - group - addon.form - control - sm,
.input - group - sm > .input - group - addon,
.input - group - sm > .input - group - btn > .input - group - addon.btn {
    padding: 0.25rem 0.5rem;
    font - size: 0.875rem;
    border - radius: 0.2rem;
}

.input - group - addon.form - control - lg,
.input - group - lg > .input - group - addon,
.input - group - lg > .input - group - btn > .input - group - addon.btn {
    padding: 0.75rem 1.5rem;
    font - size: 1.25rem;
    border - radius: 0.3rem;
}

.input - group - addon input[type = "radio"],
.input - group - addon input[type = "checkbox"] {
    margin - top: 0;
}

.input - group.form - control:not(:last - child),
.input - group - addon:not(:last - child),
.input - group - btn:not(:last - child) > .btn,
.input - group - btn:not(:last - child) > .btn - group > .btn,
.input - group - btn:not(:last - child) > .dropdown - toggle,
.input - group - btn:not(:first - child) > .btn:not(:last - child):not(.dropdown - toggle),
.input - group - btn:not(:first - child) > .btn - group:not(:last - child) > .btn {
    border - bottom - right - radius: 0;
    border - top - right - radius: 0;
}

.input - group - addon:not(:last - child) {
    border - right: 0;
}

.input - group.form - control:not(:first - child),
.input - group - addon:not(:first - child),
.input - group - btn:not(:first - child) > .btn,
.input - group - btn:not(:first - child) > .btn - group > .btn,
.input - group - btn:not(:first - child) > .dropdown - toggle,
.input - group - btn:not(:last - child) > .btn:not(:first - child),
.input - group - btn:not(:last - child) > .btn - group:not(:first - child) > .btn {
    border - bottom - left - radius: 0;
    border - top - left - radius: 0;
}

.form - control + .input - group - addon:not(:first - child) {
    border - left: 0;
}

.input - group - btn {
    position: relative;
    font - size: 0;
    white - space: nowrap;
}

.input - group - btn > .btn {
    position: relative;
}

.input - group - btn > .btn + .btn {
    margin - left: -1px;
}

.input - group - btn > .btn:focus, .input - group - btn > .btn:active, .input - group - btn > .btn:hover {
    z - index: 3;
}

.input - group - btn:not(:last - child) > .btn,
.input - group - btn:not(:last - child) > .btn - group {
    margin - right: -1px;
}

.input - group - btn:not(:first - child) > .btn,
.input - group - btn:not(:first - child) > .btn - group {
    z - index: 2;
    margin - left: -1px;
}

.input - group - btn:not(:first - child) > .btn:focus, .input - group - btn:not(:first - child) > .btn:active, .input - group - btn:not(:first - child) > .btn:hover,
.input - group - btn:not(:first - child) > .btn - group:focus,
.input - group - btn:not(:first - child) > .btn - group:active,
.input - group - btn:not(:first - child) > .btn - group:hover {
    z - index: 3;
}

.custom - control {
    position: relative;
    display: inline - block;
    padding - left: 1.5rem;
    cursor: pointer;
}

.custom - control + .custom - control {
    margin - left: 1rem;
}

.custom - control - input {
    position: absolute;
    z - index: -1;
    opacity: 0;
}

.custom - control - input:checked ~ .custom - control - indicator {
    color: #fff;
    background - color: #0074d9;
}

.custom - control - input:focus ~ .custom - control - indicator {
    -webkit - box - shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
    box - shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
}

.custom - control - input:active ~ .custom - control - indicator {
    color: #fff;
    background - color: #84c6ff;
}

.custom - control - input:disabled ~ .custom - control - indicator {
    cursor: not - allowed;
    background - color: #eee;
}

.custom - control - input:disabled ~ .custom - control - description {
    color: #767676;
    cursor: not - allowed;
}

.custom - control - indicator {
    position: absolute;
    top: .25rem;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer - events: none;
    -webkit - user - select: none;
    -moz - user - select: none;
    -ms - user - select: none;
    user - select: none;
    background - color: #ddd;
    background - repeat: no - repeat;
    background - position: center center;
    -webkit - background - size: 50 % 50 %;
    background - size: 50 % 50 %;
}

.custom - checkbox.custom - control - indicator {
    border - radius: 0.25rem;
}

.custom - checkbox.custom - control - input:checked ~ .custom - control - indicator {
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom - checkbox.custom - control - input:indeterminate ~ .custom - control - indicator {
    background - color: #0074d9;
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#fff' d='M0 2h4'/%3E%3C/svg%3E");
}

.custom - radio.custom - control - indicator {
    border - radius: 50 %;
}

.custom - radio.custom - control - input:checked ~ .custom - control - indicator {
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#fff'/%3E%3C/svg%3E");
}

.custom - controls - stacked.custom - control {
    float: left;
    clear: left;
}

.custom - controls - stacked.custom - control + .custom - control {
    margin - left: 0;
}

.custom - select {
    display: inline - block;
    max - width: 100 %;
    height: calc(2.5rem - 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    padding - right: 0.75rem \9;
    color: #55595c;
    vertical - align: middle;
    background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no- repeat right 0.75rem center;
    background - image: none \9;
    -webkit - background - size: 8px 10px;
    background - size: 8px 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border - radius: 0.25rem;
    -moz - appearance: none;
    -webkit - appearance: none;
}

.custom - select:focus {
    border - color: #51a7e8;
    outline: none;
}

.custom - select:focus::-ms - value {
    color: #55595c;
    background - color: #fff;
}

.custom - select:disabled {
    color: #818a91;
    cursor: not - allowed;
    background - color: #eceeef;
}

.custom - select::-ms - expand {
    opacity: 0;
}

.custom - select - sm {
    padding - top: 0.375rem;
    padding - bottom: 0.375rem;
    font - size: 75 %;
}

.custom - file {
    position: relative;
    display: inline - block;
    max - width: 100 %;
    height: 2.5rem;
    cursor: pointer;
}

.custom - file - input {
    min - width: 14rem;
    max - width: 100 %;
    margin: 0;
    filter: alpha(opacity = 0);
    opacity: 0;
}

.custom - file - control {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z - index: 5;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    line - height: 1.5;
    color: #555;
    -webkit - user - select: none;
    -moz - user - select: none;
    -ms - user - select: none;
    user - select: none;
    background - color: #fff;
    border: 1px solid #ddd;
    border - radius: 0.25rem;
}

.custom - file - control:lang(en)::after {
    content: "Choose file...";
}

.custom - file - control::before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    z - index: 6;
    display: block;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    line - height: 1.5;
    color: #555;
    background - color: #eee;
    border: 1px solid #ddd;
    border - radius: 0 0.25rem 0.25rem 0;
}

.custom - file - control:lang(en)::before {
    content: "Browse";
}

.nav {
    padding - left: 0;
    margin - bottom: 0;
    list - style: none;
}

.nav - link {
    display: inline - block;
}

.nav - link:focus, .nav - link:hover {
    text - decoration: none;
}

.nav - link.disabled {
    color: #818a91;
}

.nav - link.disabled, .nav - link.disabled:focus, .nav - link.disabled:hover {
    color: #818a91;
    cursor: not - allowed;
    background - color: transparent;
}

.nav - inline.nav - item {
    display: inline - block;
}

.nav - inline.nav - item + .nav - item,
.nav - inline.nav - link + .nav - link {
    margin - left: 1rem;
}

.nav - tabs {
    border - bottom: 1px solid #ddd;
}

.nav - tabs::after {
    content: "";
    display: table;
    clear: both;
}

.nav - tabs.nav - item {
    float: left;
    margin - bottom: -1px;
}

.nav - tabs.nav - item + .nav - item {
    margin - left: 0.2rem;
}

.nav - tabs.nav - link {
    display: block;
    padding: 0.5em 1em;
    border: 1px solid transparent;
    border - top - right - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.nav - tabs.nav - link:focus, .nav - tabs.nav - link:hover {
    border - color: #eceeef #eceeef #ddd;
}

.nav - tabs.nav - link.disabled, .nav - tabs.nav - link.disabled:focus, .nav - tabs.nav - link.disabled:hover {
    color: #818a91;
    background - color: transparent;
    border - color: transparent;
}

.nav - tabs.nav - link.active, .nav - tabs.nav - link.active:focus, .nav - tabs.nav - link.active:hover,
.nav - tabs.nav - item.open.nav - link,
.nav - tabs.nav - item.open.nav - link:focus,
.nav - tabs.nav - item.open.nav - link:hover {
    color: #55595c;
    background - color: #fff;
    border - color: #ddd #ddd transparent;
}

.nav - tabs.dropdown - menu {
    margin - top: -1px;
    border - top - right - radius: 0;
    border - top - left - radius: 0;
}

.nav - pills::after {
    content: "";
    display: table;
    clear: both;
}

.nav - pills.nav - item {
    float: left;
}

.nav - pills.nav - item + .nav - item {
    margin - left: 0.2rem;
}

.nav - pills.nav - link {
    display: block;
    padding: 0.5em 1em;
    border - radius: 0.25rem;
}

.nav - pills.nav - link.active, .nav - pills.nav - link.active:focus, .nav - pills.nav - link.active:hover,
.nav - pills.nav - item.open.nav - link,
.nav - pills.nav - item.open.nav - link:focus,
.nav - pills.nav - item.open.nav - link:hover {
    color: #fff;
    cursor: default;
    background - color: #0275d8;
}

.nav - stacked.nav - item {
    display: block;
    float: none;
}

.nav - stacked.nav - item + .nav - item {
    margin - top: 0.2rem;
    margin - left: 0;
}

.tab - content > .tab - pane {
    display: none;
}

.tab - content > .active {
    display: block;
}

.navbar {
    position: relative;
    padding: 0.5rem 1rem;
}

.navbar::after {
    content: "";
    display: table;
    clear: both;
}

@media(min - width: 576px) {
  .navbar {
        border - radius: 0.25rem;
    }
}

.navbar - full {
    z - index: 1000;
}

@media(min - width: 576px) {
  .navbar - full {
        border - radius: 0;
    }
}

.navbar - fixed - top,
.navbar - fixed - bottom {
    position: fixed;
    right: 0;
    left: 0;
    z - index: 1030;
}

@media(min - width: 576px) {
  .navbar - fixed - top,
  .navbar - fixed - bottom {
        border - radius: 0;
    }
}

.navbar - fixed - top {
    top: 0;
}

.navbar - fixed - bottom {
    bottom: 0;
}

.navbar - sticky - top {
    position: -webkit - sticky;
    position: sticky;
    top: 0;
    z - index: 1030;
    width: 100 %;
}

@media(min - width: 576px) {
  .navbar - sticky - top {
        border - radius: 0;
    }
}

.navbar - brand {
    float: left;
    padding - top: 0.25rem;
    padding - bottom: 0.25rem;
    margin - right: 1rem;
    font - size: 1.25rem;
    line - height: inherit;
}

.navbar - brand:focus, .navbar - brand:hover {
    text - decoration: none;
}

.navbar - divider {
    float: left;
    width: 1px;
    padding - top: 0.425rem;
    padding - bottom: 0.425rem;
    margin - right: 1rem;
    margin - left: 1rem;
    overflow: hidden;
}

.navbar - divider::before {
    content: "\00a0";
}

.navbar - text {
    display: inline - block;
    padding - top: .425rem;
    padding - bottom: .425rem;
}

.navbar - toggler {
    width: 2.5em;
    height: 2em;
    padding: 0.5rem 0.75rem;
    font - size: 1.25rem;
    line - height: 1;
    background: transparent no- repeat center center;
    -webkit - background - size: 24px 24px;
    background - size: 24px 24px;
    border: 1px solid transparent;
    border - radius: 0.25rem;
}

.navbar - toggler:focus, .navbar - toggler:hover {
    text - decoration: none;
}

.navbar - toggleable - xs::after {
    content: "";
    display: table;
    clear: both;
}

@media(max - width: 575px) {
  .navbar - toggleable - xs.navbar - brand {
        display: block;
        float: none;
        margin - top: .5rem;
        margin - right: 0;
    }
  .navbar - toggleable - xs.navbar - nav {
        margin - top: .5rem;
        margin - bottom: .5rem;
    }
  .navbar - toggleable - xs.navbar - nav.dropdown - menu {
        position: static;
        float: none;
    }
}

@media(min - width: 576px) {
  .navbar - toggleable - xs {
        display: block;
    }
}

.navbar - toggleable - sm::after {
    content: "";
    display: table;
    clear: both;
}

@media(max - width: 767px) {
  .navbar - toggleable - sm.navbar - brand {
        display: block;
        float: none;
        margin - top: .5rem;
        margin - right: 0;
    }
  .navbar - toggleable - sm.navbar - nav {
        margin - top: .5rem;
        margin - bottom: .5rem;
    }
  .navbar - toggleable - sm.navbar - nav.dropdown - menu {
        position: static;
        float: none;
    }
}

@media(min - width: 768px) {
  .navbar - toggleable - sm {
        display: block;
    }
}

.navbar - toggleable - md::after {
    content: "";
    display: table;
    clear: both;
}

@media(max - width: 991px) {
  .navbar - toggleable - md.navbar - brand {
        display: block;
        float: none;
        margin - top: .5rem;
        margin - right: 0;
    }
  .navbar - toggleable - md.navbar - nav {
        margin - top: .5rem;
        margin - bottom: .5rem;
    }
  .navbar - toggleable - md.navbar - nav.dropdown - menu {
        position: static;
        float: none;
    }
}

@media(min - width: 992px) {
  .navbar - toggleable - md {
        display: block;
    }
}

.navbar - toggleable - lg::after {
    content: "";
    display: table;
    clear: both;
}

@media(max - width: 1199px) {
  .navbar - toggleable - lg.navbar - brand {
        display: block;
        float: none;
        margin - top: .5rem;
        margin - right: 0;
    }
  .navbar - toggleable - lg.navbar - nav {
        margin - top: .5rem;
        margin - bottom: .5rem;
    }
  .navbar - toggleable - lg.navbar - nav.dropdown - menu {
        position: static;
        float: none;
    }
}

@media(min - width: 1200px) {
  .navbar - toggleable - lg {
        display: block;
    }
}

.navbar - toggleable - xl {
    display: block;
}

.navbar - toggleable - xl::after {
    content: "";
    display: table;
    clear: both;
}

.navbar - toggleable - xl.navbar - brand {
    display: block;
    float: none;
    margin - top: .5rem;
    margin - right: 0;
}

.navbar - toggleable - xl.navbar - nav {
    margin - top: .5rem;
    margin - bottom: .5rem;
}

.navbar - toggleable - xl.navbar - nav.dropdown - menu {
    position: static;
    float: none;
}

.navbar - nav.nav - item {
    float: left;
}

.navbar - nav.nav - link {
    display: block;
    padding - top: .425rem;
    padding - bottom: .425rem;
}

.navbar - nav.nav - link + .nav - link {
    margin - left: 1rem;
}

.navbar - nav.nav - item + .nav - item {
    margin - left: 1rem;
}

.navbar - light.navbar - brand,
.navbar - light.navbar - toggler {
    color: rgba(0, 0, 0, 0.9);
}

.navbar - light.navbar - brand:focus, .navbar - light.navbar - brand:hover,
.navbar - light.navbar - toggler:focus,
.navbar - light.navbar - toggler:hover {
    color: rgba(0, 0, 0, 0.9);
}

.navbar - light.navbar - nav.nav - link {
    color: rgba(0, 0, 0, 0.5);
}

.navbar - light.navbar - nav.nav - link:focus, .navbar - light.navbar - nav.nav - link:hover {
    color: rgba(0, 0, 0, 0.7);
}

.navbar - light.navbar - nav.open > .nav - link, .navbar - light.navbar - nav.open > .nav - link:focus, .navbar - light.navbar - nav.open > .nav - link:hover,
.navbar - light.navbar - nav.active > .nav - link,
.navbar - light.navbar - nav.active > .nav - link:focus,
.navbar - light.navbar - nav.active > .nav - link:hover,
.navbar - light.navbar - nav.nav - link.open,
.navbar - light.navbar - nav.nav - link.open:focus,
.navbar - light.navbar - nav.nav - link.open:hover,
.navbar - light.navbar - nav.nav - link.active,
.navbar - light.navbar - nav.nav - link.active:focus,
.navbar - light.navbar - nav.nav - link.active:hover {
    color: rgba(0, 0, 0, 0.9);
}

.navbar - light.navbar - toggler {
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    border - color: rgba(0, 0, 0, 0.1);
}

.navbar - light.navbar - divider {
    background - color: rgba(0, 0, 0, 0.075);
}

.navbar - dark.navbar - brand,
.navbar - dark.navbar - toggler {
    color: white;
}

.navbar - dark.navbar - brand:focus, .navbar - dark.navbar - brand:hover,
.navbar - dark.navbar - toggler:focus,
.navbar - dark.navbar - toggler:hover {
    color: white;
}

.navbar - dark.navbar - nav.nav - link {
    color: rgba(255, 255, 255, 0.5);
}

.navbar - dark.navbar - nav.nav - link:focus, .navbar - dark.navbar - nav.nav - link:hover {
    color: rgba(255, 255, 255, 0.75);
}

.navbar - dark.navbar - nav.open > .nav - link, .navbar - dark.navbar - nav.open > .nav - link:focus, .navbar - dark.navbar - nav.open > .nav - link:hover,
.navbar - dark.navbar - nav.active > .nav - link,
.navbar - dark.navbar - nav.active > .nav - link:focus,
.navbar - dark.navbar - nav.active > .nav - link:hover,
.navbar - dark.navbar - nav.nav - link.open,
.navbar - dark.navbar - nav.nav - link.open:focus,
.navbar - dark.navbar - nav.nav - link.open:hover,
.navbar - dark.navbar - nav.nav - link.active,
.navbar - dark.navbar - nav.nav - link.active:focus,
.navbar - dark.navbar - nav.nav - link.active:hover {
    color: white;
}

.navbar - dark.navbar - toggler {
    background - image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    border - color: rgba(255, 255, 255, 0.1);
}

.navbar - dark.navbar - divider {
    background - color: rgba(255, 255, 255, 0.075);
}

.navbar - toggleable - xs::after {
    content: "";
    display: table;
    clear: both;
}

@media(max - width: 575px) {
  .navbar - toggleable - xs.navbar - nav.nav - item {
        float: none;
        margin - left: 0;
    }
}

@media(min - width: 576px) {
  .navbar - toggleable - xs {
        display: block!important;
    }
}

.navbar - toggleable - sm::after {
    content: "";
    display: table;
    clear: both;
}

@media(max - width: 767px) {
  .navbar - toggleable - sm.navbar - nav.nav - item {
        float: none;
        margin - left: 0;
    }
}

@media(min - width: 768px) {
  .navbar - toggleable - sm {
        display: block!important;
    }
}

.navbar - toggleable - md::after {
    content: "";
    display: table;
    clear: both;
}

@media(max - width: 991px) {
  .navbar - toggleable - md.navbar - nav.nav - item {
        float: none;
        margin - left: 0;
    }
}

@media(min - width: 992px) {
  .navbar - toggleable - md {
        display: block!important;
    }
}

.card {
    position: relative;
    display: block;
    margin - bottom: 0.75rem;
    background - color: #fff;
    border - radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.card - block {
    padding: 1.25rem;
}

.card - block::after {
    content: "";
    display: table;
    clear: both;
}

.card - title {
    margin - bottom: 0.75rem;
}

.card - subtitle {
    margin - top: -0.375rem;
    margin - bottom: 0;
}

.card - text:last - child {
    margin - bottom: 0;
}

.card - link:hover {
    text - decoration: none;
}

.card - link + .card - link {
    margin - left: 1.25rem;
}

.card > .list - group:first - child.list - group - item:first - child {
    border - top - right - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.card > .list - group:last - child.list - group - item:last - child {
    border - bottom - right - radius: 0.25rem;
    border - bottom - left - radius: 0.25rem;
}

.card - header {
    padding: 0.75rem 1.25rem;
    margin - bottom: 0;
    background - color: #f5f5f5;
    border - bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card - header::after {
    content: "";
    display: table;
    clear: both;
}

.card - header:first - child {
    border - radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card - footer {
    padding: 0.75rem 1.25rem;
    background - color: #f5f5f5;
    border - top: 1px solid rgba(0, 0, 0, 0.125);
}

.card - footer::after {
    content: "";
    display: table;
    clear: both;
}

.card - footer:last - child {
    border - radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card - header - tabs {
    margin - right: -0.625rem;
    margin - bottom: -0.75rem;
    margin - left: -0.625rem;
    border - bottom: 0;
}

.card - header - pills {
    margin - right: -0.625rem;
    margin - left: -0.625rem;
}

.card - primary {
    background - color: #0275d8;
    border - color: #0275d8;
}

.card - primary.card - header,
.card - primary.card - footer {
    background - color: transparent;
}

.card - success {
    background - color: #5cb85c;
    border - color: #5cb85c;
}

.card - success.card - header,
.card - success.card - footer {
    background - color: transparent;
}

.card - info {
    background - color: #5bc0de;
    border - color: #5bc0de;
}

.card - info.card - header,
.card - info.card - footer {
    background - color: transparent;
}

.card - warning {
    background - color: #f0ad4e;
    border - color: #f0ad4e;
}

.card - warning.card - header,
.card - warning.card - footer {
    background - color: transparent;
}

.card - danger {
    background - color: #d9534f;
    border - color: #d9534f;
}

.card - danger.card - header,
.card - danger.card - footer {
    background - color: transparent;
}

.card - outline - primary {
    background - color: transparent;
    border - color: #0275d8;
}

.card - outline - secondary {
    background - color: transparent;
    border - color: #ccc;
}

.card - outline - info {
    background - color: transparent;
    border - color: #5bc0de;
}

.card - outline - success {
    background - color: transparent;
    border - color: #5cb85c;
}

.card - outline - warning {
    background - color: transparent;
    border - color: #f0ad4e;
}

.card - outline - danger {
    background - color: transparent;
    border - color: #d9534f;
}

.card - inverse.card - header,
.card - inverse.card - footer {
    border - color: rgba(255, 255, 255, 0.2);
}

.card - inverse.card - header,
.card - inverse.card - footer,
.card - inverse.card - title,
.card - inverse.card - blockquote {
    color: #fff;
}

.card - inverse.card - link,
.card - inverse.card - text,
.card - inverse.card - subtitle,
.card - inverse.card - blockquote.blockquote - footer {
    color: rgba(255, 255, 255, 0.65);
}

.card - inverse.card - link:focus, .card - inverse.card - link:hover {
    color: #fff;
}

.card - blockquote {
    padding: 0;
    margin - bottom: 0;
    border - left: 0;
}

.card - img {
    border - radius: calc(0.25rem - 1px);
}

.card - img - overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
}

.card - img - top {
    border - top - right - radius: calc(0.25rem - 1px);
    border - top - left - radius: calc(0.25rem - 1px);
}

.card - img - bottom {
    border - bottom - right - radius: calc(0.25rem - 1px);
    border - bottom - left - radius: calc(0.25rem - 1px);
}

@media(min - width: 576px) {
  .card - deck {
        display: table;
        width: 100 %;
        margin - bottom: 0.75rem;
        table - layout: fixed;
        border - spacing: 1.25rem 0;
    }
  .card - deck.card {
        display: table - cell;
        margin - bottom: 0;
        vertical - align: top;
    }
  .card - deck - wrapper {
        margin - right: -1.25rem;
        margin - left: -1.25rem;
    }
}

@media(min - width: 576px) {
  .card - group {
        display: table;
        width: 100 %;
        table - layout: fixed;
    }
  .card - group.card {
        display: table - cell;
        vertical - align: top;
    }
  .card - group.card + .card {
        margin - left: 0;
        border - left: 0;
    }
  .card - group.card:first - child {
        border - bottom - right - radius: 0;
        border - top - right - radius: 0;
    }
  .card - group.card:first - child.card - img - top {
        border - top - right - radius: 0;
    }
  .card - group.card:first - child.card - img - bottom {
        border - bottom - right - radius: 0;
    }
  .card - group.card:last - child {
        border - bottom - left - radius: 0;
        border - top - left - radius: 0;
    }
  .card - group.card:last - child.card - img - top {
        border - top - left - radius: 0;
    }
  .card - group.card:last - child.card - img - bottom {
        border - bottom - left - radius: 0;
    }
  .card - group.card:not(:first - child):not(:last - child) {
        border - radius: 0;
    }
  .card - group.card:not(:first - child):not(:last - child).card - img - top,
  .card - group.card:not(:first - child):not(:last - child).card - img - bottom {
        border - radius: 0;
    }
}

@media(min - width: 576px) {
  .card - columns {
        -webkit - column - count: 3;
        -moz - column - count: 3;
        column - count: 3;
        -webkit - column - gap: 1.25rem;
        -moz - column - gap: 1.25rem;
        column - gap: 1.25rem;
    }
  .card - columns.card {
        display: inline - block;
        width: 100 %;
    }
}

.breadcrumb {
    padding: 0.75rem 1rem;
    margin - bottom: 1rem;
    list - style: none;
    background - color: #eceeef;
    border - radius: 0.25rem;
}

.breadcrumb::after {
    content: "";
    display: table;
    clear: both;
}

.breadcrumb - item {
    float: left;
}

.breadcrumb - item + .breadcrumb - item::before {
    display: inline - block;
    padding - right: 0.5rem;
    padding - left: 0.5rem;
    color: #818a91;
    content: "/";
}

.breadcrumb - item + .breadcrumb - item:hover::before {
    text - decoration: underline;
}

.breadcrumb - item + .breadcrumb - item:hover::before {
    text - decoration: none;
}

.breadcrumb - item.active {
    color: #818a91;
}

.pagination {
    display: inline - block;
    padding - left: 0;
    margin - top: 1rem;
    margin - bottom: 1rem;
    border - radius: 0.25rem;
}

.page - item {
    display: inline;
}

.page - item:first - child.page - link {
    margin - left: 0;
    border - bottom - left - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.page - item:last - child.page - link {
    border - bottom - right - radius: 0.25rem;
    border - top - right - radius: 0.25rem;
}

.page - item.active.page - link, .page - item.active.page - link:focus, .page - item.active.page - link:hover {
    z - index: 2;
    color: #fff;
    cursor: default;
    background - color: #0275d8;
    border - color: #0275d8;
}

.page - item.disabled.page - link, .page - item.disabled.page - link:focus, .page - item.disabled.page - link:hover {
    color: #818a91;
    pointer - events: none;
    cursor: not - allowed;
    background - color: #fff;
    border - color: #ddd;
}

.page - link {
    position: relative;
    float: left;
    padding: 0.5rem 0.75rem;
    margin - left: -1px;
    color: #0275d8;
    text - decoration: none;
    background - color: #fff;
    border: 1px solid #ddd;
}

.page - link:focus, .page - link:hover {
    color: #014c8c;
    background - color: #eceeef;
    border - color: #ddd;
}

.pagination - lg.page - link {
    padding: 0.75rem 1.5rem;
    font - size: 1.25rem;
}

.pagination - lg.page - item:first - child.page - link {
    border - bottom - left - radius: 0.3rem;
    border - top - left - radius: 0.3rem;
}

.pagination - lg.page - item:last - child.page - link {
    border - bottom - right - radius: 0.3rem;
    border - top - right - radius: 0.3rem;
}

.pagination - sm.page - link {
    padding: 0.275rem 0.75rem;
    font - size: 0.875rem;
}

.pagination - sm.page - item:first - child.page - link {
    border - bottom - left - radius: 0.2rem;
    border - top - left - radius: 0.2rem;
}

.pagination - sm.page - item:last - child.page - link {
    border - bottom - right - radius: 0.2rem;
    border - top - right - radius: 0.2rem;
}

.tag {
    display: inline - block;
    padding: 0.25em 0.4em;
    font - size: 75 %;
    font - weight: bold;
    line - height: 1;
    color: #fff;
    text - align: center;
    white - space: nowrap;
    vertical - align: baseline;
    border - radius: 0.25rem;
}

.tag: empty {
    display: none;
}

.btn.tag {
    position: relative;
    top: -1px;
}

a.tag:focus, a.tag:hover {
    color: #fff;
    text - decoration: none;
    cursor: pointer;
}

.tag - pill {
    padding - right: 0.6em;
    padding - left: 0.6em;
    border - radius: 10rem;
}

.tag -default {
    background - color: #818a91;
}

.tag -default[href]:focus, .tag -default[href]:hover {
    background - color: #687077;
}

.tag - primary {
    background - color: #0275d8;
}

.tag - primary[href]:focus, .tag - primary[href]:hover {
    background - color: #025aa5;
}

.tag - success {
    background - color: #5cb85c;
}

.tag - success[href]:focus, .tag - success[href]:hover {
    background - color: #449d44;
}

.tag - info {
    background - color: #5bc0de;
}

.tag - info[href]:focus, .tag - info[href]:hover {
    background - color: #31b0d5;
}

.tag - warning {
    background - color: #f0ad4e;
}

.tag - warning[href]:focus, .tag - warning[href]:hover {
    background - color: #ec971f;
}

.tag - danger {
    background - color: #d9534f;
}

.tag - danger[href]:focus, .tag - danger[href]:hover {
    background - color: #c9302c;
}

.jumbotron {
    padding: 2rem 1rem;
    margin - bottom: 2rem;
    background - color: #eceeef;
    border - radius: 0.3rem;
}

@media(min - width: 576px) {
  .jumbotron {
        padding: 4rem 2rem;
    }
}

.jumbotron - hr {
    border - top - color: #d0d5d8;
}

.jumbotron - fluid {
    padding - right: 0;
    padding - left: 0;
    border - radius: 0;
}

.alert {
    padding: 0.75rem 1.25rem;
    margin - bottom: 1rem;
    border: 1px solid transparent;
    border - radius: 0.25rem;
}

.alert - heading {
    color: inherit;
}

.alert - link {
    font - weight: bold;
}

.alert - dismissible {
    padding - right: 2.5rem;
}

.alert - dismissible.close {
    position: relative;
    top: -.125rem;
    right: -1.25rem;
    color: inherit;
}

.alert - success {
    background - color: #dff0d8;
    border - color: #d0e9c6;
    color: #3c763d;
}

.alert - success hr {
    border - top - color: #c1e2b3;
}

.alert - success.alert - link {
    color: #2b542c;
}

.alert - info {
    background - color: #d9edf7;
    border - color: #bcdff1;
    color: #31708f;
}

.alert - info hr {
    border - top - color: #a6d5ec;
}

.alert - info.alert - link {
    color: #245269;
}

.alert - warning {
    background - color: #fcf8e3;
    border - color: #faf2cc;
    color: #8a6d3b;
}

.alert - warning hr {
    border - top - color: #f7ecb5;
}

.alert - warning.alert - link {
    color: #66512c;
}

.alert - danger {
    background - color: #f2dede;
    border - color: #ebcccc;
    color: #a94442;
}

.alert - danger hr {
    border - top - color: #e4b9b9;
}

.alert - danger.alert - link {
    color: #843534;
}

@-webkit - keyframes progress- bar - stripes {
    from {
        background - position: 1rem 0;
    }
    to {
        background - position: 0 0;
    }
}

@-o - keyframes progress- bar - stripes {
    from {
        background - position: 1rem 0;
    }
    to {
        background - position: 0 0;
    }
}

@keyframes progress - bar - stripes {
    from {
        background - position: 1rem 0;
    }
    to {
        background - position: 0 0;
    }
}

.progress {
    display: block;
    width: 100 %;
    height: 1rem;
    margin - bottom: 1rem;
}

.progress[value] {
    background - color: #eee;
    border: 0;
    -webkit - appearance: none;
    -moz - appearance: none;
    appearance: none;
    border - radius: 0.25rem;
}

.progress[value]::-ms - fill {
    background - color: #0074d9;
    border: 0;
}

.progress[value]::-moz - progress - bar {
    background - color: #0074d9;
    border - bottom - left - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.progress[value]::-webkit - progress - value {
    background - color: #0074d9;
    border - bottom - left - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.progress[value = "100"]::-moz - progress - bar {
    border - bottom - right - radius: 0.25rem;
    border - top - right - radius: 0.25rem;
}

.progress[value = "100"]::-webkit - progress - value {
    border - bottom - right - radius: 0.25rem;
    border - top - right - radius: 0.25rem;
}

.progress[value]::-webkit - progress - bar {
    background - color: #eee;
    border - radius: 0.25rem;
}

base::-moz - progress - bar,
.progress[value] {
    background - color: #eee;
    border - radius: 0.25rem;
}

@media screen and (min - width: 0\0) {
  .progress {
        background - color: #eee;
        border - radius: 0.25rem;
    }
  .progress - bar {
        display: inline - block;
        height: 1rem;
        text - indent: -999rem;
        background - color: #0074d9;
        border - bottom - left - radius: 0.25rem;
        border - top - left - radius: 0.25rem;
    }
  .progress[width = "100%"] {
        border - bottom - right - radius: 0.25rem;
        border - top - right - radius: 0.25rem;
    }
}

.progress - striped[value]::-webkit - progress - value {
    background - image: -webkit - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    -webkit - background - size: 1rem 1rem;
    background - size: 1rem 1rem;
}

.progress - striped[value]::-moz - progress - bar {
    background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background - size: 1rem 1rem;
}

.progress - striped[value]::-ms - fill {
    background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background - size: 1rem 1rem;
}

@media screen and (min - width: 0\0) {
  .progress - bar - striped {
        background - image: -webkit - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        background - image: -o - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        -webkit - background - size: 1rem 1rem;
        background - size: 1rem 1rem;
    }
}

.progress - animated[value]::-webkit - progress - value {
    -webkit - animation: progress - bar - stripes 2s linear infinite;
    animation: progress - bar - stripes 2s linear infinite;
}

.progress - animated[value]::-moz - progress - bar {
    animation: progress - bar - stripes 2s linear infinite;
}

@media screen and (min - width: 0\0) {
  .progress - animated.progress - bar - striped {
        -webkit - animation: progress - bar - stripes 2s linear infinite;
        -o - animation: progress - bar - stripes 2s linear infinite;
        animation: progress - bar - stripes 2s linear infinite;
    }
}

.progress - success[value]::-webkit - progress - value {
    background - color: #5cb85c;
}

.progress - success[value]::-moz - progress - bar {
    background - color: #5cb85c;
}

.progress - success[value]::-ms - fill {
    background - color: #5cb85c;
}

@media screen and (min - width: 0\0) {
  .progress - success.progress - bar {
        background - color: #5cb85c;
    }
}

.progress - info[value]::-webkit - progress - value {
    background - color: #5bc0de;
}

.progress - info[value]::-moz - progress - bar {
    background - color: #5bc0de;
}

.progress - info[value]::-ms - fill {
    background - color: #5bc0de;
}

@media screen and (min - width: 0\0) {
  .progress - info.progress - bar {
        background - color: #5bc0de;
    }
}

.progress - warning[value]::-webkit - progress - value {
    background - color: #f0ad4e;
}

.progress - warning[value]::-moz - progress - bar {
    background - color: #f0ad4e;
}

.progress - warning[value]::-ms - fill {
    background - color: #f0ad4e;
}

@media screen and (min - width: 0\0) {
  .progress - warning.progress - bar {
        background - color: #f0ad4e;
    }
}

.progress - danger[value]::-webkit - progress - value {
    background - color: #d9534f;
}

.progress - danger[value]::-moz - progress - bar {
    background - color: #d9534f;
}

.progress - danger[value]::-ms - fill {
    background - color: #d9534f;
}

@media screen and (min - width: 0\0) {
  .progress - danger.progress - bar {
        background - color: #d9534f;
    }
}

.media,
.media - body {
    overflow: hidden;
}

.media - body {
    width: 10000px;
}

.media - left,
.media - right,
.media - body {
    display: table - cell;
    vertical - align: top;
}

.media - middle {
    vertical - align: middle;
}

.media - bottom {
    vertical - align: bottom;
}

.media - object {
    display: block;
}

.media - object.img - thumbnail {
    max - width: none;
}

.media - right {
    padding - left: 10px;
}

.media - left {
    padding - right: 10px;
}

.media - heading {
    margin - top: 0;
    margin - bottom: 5px;
}

.media - list {
    padding - left: 0;
    list - style: none;
}

.list - group {
    padding - left: 0;
    margin - bottom: 0;
}

.list - group - item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin - bottom: -1px;
    background - color: #fff;
    border: 1px solid #ddd;
}

.list - group - item:first - child {
    border - top - right - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.list - group - item:last - child {
    margin - bottom: 0;
    border - bottom - right - radius: 0.25rem;
    border - bottom - left - radius: 0.25rem;
}

.list - group - item.disabled, .list - group - item.disabled:focus, .list - group - item.disabled:hover {
    color: #818a91;
    cursor: not - allowed;
    background - color: #eceeef;
}

.list - group - item.disabled.list - group - item - heading, .list - group - item.disabled:focus.list - group - item - heading, .list - group - item.disabled:hover.list - group - item - heading {
    color: inherit;
}

.list - group - item.disabled.list - group - item - text, .list - group - item.disabled:focus.list - group - item - text, .list - group - item.disabled:hover.list - group - item - text {
    color: #818a91;
}

.list - group - item.active, .list - group - item.active:focus, .list - group - item.active:hover {
    z - index: 2;
    color: #fff;
    text - decoration: none;
    background - color: #0275d8;
    border - color: #0275d8;
}

.list - group - item.active.list - group - item - heading,
.list - group - item.active.list - group - item - heading > small,
.list - group - item.active.list - group - item - heading > .small, .list - group - item.active:focus.list - group - item - heading,
.list - group - item.active:focus.list - group - item - heading > small,
.list - group - item.active:focus.list - group - item - heading > .small, .list - group - item.active:hover.list - group - item - heading,
.list - group - item.active:hover.list - group - item - heading > small,
.list - group - item.active:hover.list - group - item - heading > .small {
    color: inherit;
}

.list - group - item.active.list - group - item - text, .list - group - item.active:focus.list - group - item - text, .list - group - item.active:hover.list - group - item - text {
    color: #a8d6fe;
}

.list - group - flush.list - group - item {
    border - right: 0;
    border - left: 0;
    border - radius: 0;
}

.list - group - item - action {
    width: 100 %;
    color: #555;
    text - align: inherit;
}

.list - group - item - action.list - group - item - heading {
    color: #333;
}

.list - group - item - action:focus, .list - group - item - action:hover {
    color: #555;
    text - decoration: none;
    background - color: #f5f5f5;
}

.list - group - item - success {
    color: #3c763d;
    background - color: #dff0d8;
}

a.list - group - item - success,
    button.list - group - item - success {
    color: #3c763d;
}

a.list - group - item - success.list - group - item - heading,
    button.list - group - item - success.list - group - item - heading {
    color: inherit;
}

a.list - group - item - success:focus, a.list - group - item - success:hover,
    button.list - group - item - success:focus,
        button.list - group - item - success:hover {
    color: #3c763d;
    background - color: #d0e9c6;
}

a.list - group - item - success.active, a.list - group - item - success.active:focus, a.list - group - item - success.active:hover,
    button.list - group - item - success.active,
    button.list - group - item - success.active:focus,
        button.list - group - item - success.active:hover {
    color: #fff;
    background - color: #3c763d;
    border - color: #3c763d;
}

.list - group - item - info {
    color: #31708f;
    background - color: #d9edf7;
}

a.list - group - item - info,
    button.list - group - item - info {
    color: #31708f;
}

a.list - group - item - info.list - group - item - heading,
    button.list - group - item - info.list - group - item - heading {
    color: inherit;
}

a.list - group - item - info:focus, a.list - group - item - info:hover,
    button.list - group - item - info:focus,
        button.list - group - item - info:hover {
    color: #31708f;
    background - color: #c4e3f3;
}

a.list - group - item - info.active, a.list - group - item - info.active:focus, a.list - group - item - info.active:hover,
    button.list - group - item - info.active,
    button.list - group - item - info.active:focus,
        button.list - group - item - info.active:hover {
    color: #fff;
    background - color: #31708f;
    border - color: #31708f;
}

.list - group - item - warning {
    color: #8a6d3b;
    background - color: #fcf8e3;
}

a.list - group - item - warning,
    button.list - group - item - warning {
    color: #8a6d3b;
}

a.list - group - item - warning.list - group - item - heading,
    button.list - group - item - warning.list - group - item - heading {
    color: inherit;
}

a.list - group - item - warning:focus, a.list - group - item - warning:hover,
    button.list - group - item - warning:focus,
        button.list - group - item - warning:hover {
    color: #8a6d3b;
    background - color: #faf2cc;
}

a.list - group - item - warning.active, a.list - group - item - warning.active:focus, a.list - group - item - warning.active:hover,
    button.list - group - item - warning.active,
    button.list - group - item - warning.active:focus,
        button.list - group - item - warning.active:hover {
    color: #fff;
    background - color: #8a6d3b;
    border - color: #8a6d3b;
}

.list - group - item - danger {
    color: #a94442;
    background - color: #f2dede;
}

a.list - group - item - danger,
    button.list - group - item - danger {
    color: #a94442;
}

a.list - group - item - danger.list - group - item - heading,
    button.list - group - item - danger.list - group - item - heading {
    color: inherit;
}

a.list - group - item - danger:focus, a.list - group - item - danger:hover,
    button.list - group - item - danger:focus,
        button.list - group - item - danger:hover {
    color: #a94442;
    background - color: #ebcccc;
}

a.list - group - item - danger.active, a.list - group - item - danger.active:focus, a.list - group - item - danger.active:hover,
    button.list - group - item - danger.active,
    button.list - group - item - danger.active:focus,
        button.list - group - item - danger.active:hover {
    color: #fff;
    background - color: #a94442;
    border - color: #a94442;
}

.list - group - item - heading {
    margin - top: 0;
    margin - bottom: 5px;
}

.list - group - item - text {
    margin - bottom: 0;
    line - height: 1.3;
}

.embed - responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
}

.embed - responsive.embed - responsive - item,
.embed - responsive iframe,
.embed - responsive embed,
.embed - responsive object,
.embed - responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    border: 0;
}

.embed - responsive - 21by9 {
    padding - bottom: 42.857143 %;
}

.embed - responsive - 16by9 {
    padding - bottom: 56.25 %;
}

.embed - responsive - 4by3 {
    padding - bottom: 75 %;
}

.embed - responsive - 1by1 {
    padding - bottom: 100 %;
}

.close {
    float: right;
    font - size: 1.5rem;
    font - weight: bold;
    line - height: 1;
    color: #000;
    text - shadow: 0 1px 0 #fff;
    opacity: .2;
}

.close: focus, .close:hover {
    color: #000;
    text - decoration: none;
    cursor: pointer;
    opacity: .5;
}

button.close {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit - appearance: none;
}

.modal - open {
    overflow: hidden;
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z - index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
}

.modal.fade.modal - dialog {
    -webkit - transition: -webkit - transform .3s ease- out;
    transition: -webkit - transform .3s ease- out;
    -o - transition: -o - transform .3s ease- out;
    transition: transform .3s ease- out;
    transition: transform .3s ease- out, -webkit - transform .3s ease- out, -o - transform .3s ease- out;
    -webkit - transform: translate(0, -25 %);
    -ms - transform: translate(0, -25 %);
    -o - transform: translate(0, -25 %);
    transform: translate(0, -25 %);
}

.modal.in.modal - dialog {
    -webkit - transform: translate(0, 0);
    -ms - transform: translate(0, 0);
    -o - transform: translate(0, 0);
    transform: translate(0, 0);
}

.modal - open.modal {
    overflow - x: hidden;
    overflow - y: auto;
}

.modal - dialog {
    position: relative;
    width: auto;
    margin: 10px;
}

.modal - content {
    position: relative;
    background - color: #fff;
    -webkit - background - clip: padding - box;
    background - clip: padding - box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border - radius: 0.3rem;
    outline: 0;
}

.modal - backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z - index: 1040;
    background - color: #000;
}

.modal - backdrop.fade {
    opacity: 0;
}

.modal - backdrop.in {
    opacity: 0.5;
}

.modal - header {
    padding: 15px;
    border - bottom: 1px solid #e5e5e5;
}

.modal - header::after {
    content: "";
    display: table;
    clear: both;
}

.modal - header.close {
    margin - top: -2px;
}

.modal - title {
    margin: 0;
    line - height: 1.5;
}

.modal - body {
    position: relative;
    padding: 15px;
}

.modal - footer {
    padding: 15px;
    text - align: right;
    border - top: 1px solid #e5e5e5;
}

.modal - footer::after {
    content: "";
    display: table;
    clear: both;
}

.modal - scrollbar - measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
}

@media(min - width: 576px) {
  .modal - dialog {
        max - width: 600px;
        margin: 30px auto;
    }
  .modal - sm {
        max - width: 300px;
    }
}

@media(min - width: 992px) {
  .modal - lg {
        max - width: 900px;
    }
}

.tooltip {
    position: absolute;
    z - index: 1070;
    display: block;
    font - family: -apple - system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans - serif;
    font - style: normal;
    font - weight: normal;
    letter - spacing: normal;
    line -break: auto;
    line - height: 1.5;
    text - align: left;
    text - align: start;
    text - decoration: none;
    text - shadow: none;
    text - transform: none;
    white - space: normal;
    word -break: normal;
    word - spacing: normal;
    font - size: 0.875rem;
    word - wrap: break-word;
    opacity: 0;
}

.tooltip.in {
    opacity: 0.9;
}

.tooltip.tooltip - top, .tooltip.bs - tether - element - attached - bottom {
    padding: 5px 0;
    margin - top: -3px;
}

.tooltip.tooltip - top.tooltip - inner::before, .tooltip.bs - tether - element - attached - bottom.tooltip - inner::before {
    bottom: 0;
    left: 50 %;
    margin - left: -5px;
    content: "";
    border - width: 5px 5px 0;
    border - top - color: #000;
}

.tooltip.tooltip - right, .tooltip.bs - tether - element - attached - left {
    padding: 0 5px;
    margin - left: 3px;
}

.tooltip.tooltip - right.tooltip - inner::before, .tooltip.bs - tether - element - attached - left.tooltip - inner::before {
    top: 50 %;
    left: 0;
    margin - top: -5px;
    content: "";
    border - width: 5px 5px 5px 0;
    border - right - color: #000;
}

.tooltip.tooltip - bottom, .tooltip.bs - tether - element - attached - top {
    padding: 5px 0;
    margin - top: 3px;
}

.tooltip.tooltip - bottom.tooltip - inner::before, .tooltip.bs - tether - element - attached - top.tooltip - inner::before {
    top: 0;
    left: 50 %;
    margin - left: -5px;
    content: "";
    border - width: 0 5px 5px;
    border - bottom - color: #000;
}

.tooltip.tooltip - left, .tooltip.bs - tether - element - attached - right {
    padding: 0 5px;
    margin - left: -3px;
}

.tooltip.tooltip - left.tooltip - inner::before, .tooltip.bs - tether - element - attached - right.tooltip - inner::before {
    top: 50 %;
    right: 0;
    margin - top: -5px;
    content: "";
    border - width: 5px 0 5px 5px;
    border - left - color: #000;
}

.tooltip - inner {
    max - width: 200px;
    padding: 3px 8px;
    color: #fff;
    text - align: center;
    background - color: #000;
    border - radius: 0.25rem;
}

.tooltip - inner::before {
    position: absolute;
    width: 0;
    height: 0;
    border - color: transparent;
    border - style: solid;
}

.popover {
    position: absolute;
    top: 0;
    left: 0;
    z - index: 1060;
    display: block;
    max - width: 276px;
    padding: 1px;
    font - family: -apple - system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans - serif;
    font - style: normal;
    font - weight: normal;
    letter - spacing: normal;
    line -break: auto;
    line - height: 1.5;
    text - align: left;
    text - align: start;
    text - decoration: none;
    text - shadow: none;
    text - transform: none;
    white - space: normal;
    word -break: normal;
    word - spacing: normal;
    font - size: 0.875rem;
    word - wrap: break-word;
    background - color: #fff;
    -webkit - background - clip: padding - box;
    background - clip: padding - box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border - radius: 0.3rem;
}

.popover.popover - top, .popover.bs - tether - element - attached - bottom {
    margin - top: -10px;
}

.popover.popover - top::before, .popover.popover - top::after, .popover.bs - tether - element - attached - bottom::before, .popover.bs - tether - element - attached - bottom::after {
    left: 50 %;
    border - bottom - width: 0;
}

.popover.popover - top::before, .popover.bs - tether - element - attached - bottom::before {
    bottom: -11px;
    margin - left: -11px;
    border - top - color: rgba(0, 0, 0, 0.25);
}

.popover.popover - top::after, .popover.bs - tether - element - attached - bottom::after {
    bottom: -10px;
    margin - left: -10px;
    border - top - color: #fff;
}

.popover.popover - right, .popover.bs - tether - element - attached - left {
    margin - left: 10px;
}

.popover.popover - right::before, .popover.popover - right::after, .popover.bs - tether - element - attached - left::before, .popover.bs - tether - element - attached - left::after {
    top: 50 %;
    border - left - width: 0;
}

.popover.popover - right::before, .popover.bs - tether - element - attached - left::before {
    left: -11px;
    margin - top: -11px;
    border - right - color: rgba(0, 0, 0, 0.25);
}

.popover.popover - right::after, .popover.bs - tether - element - attached - left::after {
    left: -10px;
    margin - top: -10px;
    border - right - color: #fff;
}

.popover.popover - bottom, .popover.bs - tether - element - attached - top {
    margin - top: 10px;
}

.popover.popover - bottom::before, .popover.popover - bottom::after, .popover.bs - tether - element - attached - top::before, .popover.bs - tether - element - attached - top::after {
    left: 50 %;
    border - top - width: 0;
}

.popover.popover - bottom::before, .popover.bs - tether - element - attached - top::before {
    top: -11px;
    margin - left: -11px;
    border - bottom - color: rgba(0, 0, 0, 0.25);
}

.popover.popover - bottom::after, .popover.bs - tether - element - attached - top::after {
    top: -10px;
    margin - left: -10px;
    border - bottom - color: #f7f7f7;
}

.popover.popover - bottom.popover - title::before, .popover.bs - tether - element - attached - top.popover - title::before {
    position: absolute;
    top: 0;
    left: 50 %;
    display: block;
    width: 20px;
    margin - left: -10px;
    content: "";
    border - bottom: 1px solid #f7f7f7;
}

.popover.popover - left, .popover.bs - tether - element - attached - right {
    margin - left: -10px;
}

.popover.popover - left::before, .popover.popover - left::after, .popover.bs - tether - element - attached - right::before, .popover.bs - tether - element - attached - right::after {
    top: 50 %;
    border - right - width: 0;
}

.popover.popover - left::before, .popover.bs - tether - element - attached - right::before {
    right: -11px;
    margin - top: -11px;
    border - left - color: rgba(0, 0, 0, 0.25);
}

.popover.popover - left::after, .popover.bs - tether - element - attached - right::after {
    right: -10px;
    margin - top: -10px;
    border - left - color: #fff;
}

.popover - title {
    padding: 8px 14px;
    margin: 0;
    font - size: 1rem;
    background - color: #f7f7f7;
    border - bottom: 1px solid #ebebeb;
    border - radius: 0.2375rem 0.2375rem 0 0;
}

.popover - title:empty {
    display: none;
}

.popover - content {
    padding: 9px 14px;
}

.popover::before,
.popover::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border - color: transparent;
    border - style: solid;
}

.popover::before {
    content: "";
    border - width: 11px;
}

.popover::after {
    content: "";
    border - width: 10px;
}

.carousel {
    position: relative;
}

.carousel - inner {
    position: relative;
    width: 100 %;
    overflow: hidden;
}

.carousel - inner > .carousel - item {
    position: relative;
    display: none;
    -webkit - transition: .6s ease-in-out left;
    -o - transition: .6s ease-in-out left;
    transition: .6s ease-in-out left;
}

.carousel - inner > .carousel - item > img,
.carousel - inner > .carousel - item > a > img {
    line - height: 1;
}

@media all and (transform - 3d), (-webkit - transform - 3d) {
  .carousel - inner > .carousel - item {
        -webkit - transition: -webkit - transform .6s ease-in-out;
        transition: -webkit - transform .6s ease-in-out;
        -o - transition: -o - transform .6s ease-in-out;
        transition: transform .6s ease-in-out;
        transition: transform .6s ease-in-out, -webkit - transform .6s ease-in-out, -o - transform .6s ease-in-out;
        -webkit - backface - visibility: hidden;
        backface - visibility: hidden;
        -webkit - perspective: 1000px;
        perspective: 1000px;
    }
  .carousel - inner > .carousel - item.next, .carousel - inner > .carousel - item.active.right {
        left: 0;
        -webkit - transform: translate3d(100 %, 0, 0);
        transform: translate3d(100 %, 0, 0);
    }
  .carousel - inner > .carousel - item.prev, .carousel - inner > .carousel - item.active.left {
        left: 0;
        -webkit - transform: translate3d(-100 %, 0, 0);
        transform: translate3d(-100 %, 0, 0);
    }
  .carousel - inner > .carousel - item.next.left, .carousel - inner > .carousel - item.prev.right, .carousel - inner > .carousel - item.active {
        left: 0;
        -webkit - transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

.carousel - inner > .active,
.carousel - inner > .next,
.carousel - inner > .prev {
    display: block;
}

.carousel - inner > .active {
    left: 0;
}

.carousel - inner > .next,
.carousel - inner > .prev {
    position: absolute;
    top: 0;
    width: 100 %;
}

.carousel - inner > .next {
    left: 100 %;
}

.carousel - inner > .prev {
    left: -100 %;
}

.carousel - inner > .next.left,
.carousel - inner > .prev.right {
    left: 0;
}

.carousel - inner > .active.left {
    left: -100 %;
}

.carousel - inner > .active.right {
    left: 100 %;
}

.carousel - control {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15 %;
    font - size: 20px;
    color: #fff;
    text - align: center;
    text - shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    opacity: 0.5;
}

.carousel - control.left {
    background - image: -webkit - gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));
    background - image: -webkit - linear - gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
    background - image: -o - linear - gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
    background - image: linear - gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
    background - repeat: repeat - x;
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#80000000', endColorstr = '#00000000', GradientType = 1);
}

.carousel - control.right {
    right: 0;
    left: auto;
    background - image: -webkit - gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));
    background - image: -webkit - linear - gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
    background - image: -o - linear - gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
    background - image: linear - gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
    background - repeat: repeat - x;
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#00000000', endColorstr = '#80000000', GradientType = 1);
}

.carousel - control:focus, .carousel - control:hover {
    color: #fff;
    text - decoration: none;
    outline: 0;
    opacity: .9;
}

.carousel - control.icon - prev,
.carousel - control.icon - next {
    position: absolute;
    top: 50 %;
    z - index: 5;
    display: inline - block;
    width: 20px;
    height: 20px;
    margin - top: -10px;
    font - family: serif;
    line - height: 1;
}

.carousel - control.icon - prev {
    left: 50 %;
    margin - left: -10px;
}

.carousel - control.icon - next {
    right: 50 %;
    margin - right: -10px;
}

.carousel - control.icon - prev::before {
    content: "\2039";
}

.carousel - control.icon - next::before {
    content: "\203a";
}

.carousel - indicators {
    position: absolute;
    bottom: 10px;
    left: 50 %;
    z - index: 15;
    width: 60 %;
    padding - left: 0;
    margin - left: -30 %;
    text - align: center;
    list - style: none;
}

.carousel - indicators li {
    display: inline - block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text - indent: -999px;
    cursor: pointer;
    background - color: transparent;
    border: 1px solid #fff;
    border - radius: 10px;
}

.carousel - indicators.active {
    width: 12px;
    height: 12px;
    margin: 0;
    background - color: #fff;
}

.carousel - caption {
    position: absolute;
    right: 15 %;
    bottom: 20px;
    left: 15 %;
    z - index: 10;
    padding - top: 20px;
    padding - bottom: 20px;
    color: #fff;
    text - align: center;
    text - shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

.carousel - caption.btn {
    text - shadow: none;
}

@media(min - width: 576px) {
  .carousel - control.icon - prev,
  .carousel - control.icon - next {
        width: 30px;
        height: 30px;
        margin - top: -15px;
        font - size: 30px;
    }
  .carousel - control.icon - prev {
        margin - left: -15px;
    }
  .carousel - control.icon - next {
        margin - right: -15px;
    }
  .carousel - caption {
        right: 20 %;
        left: 20 %;
        padding - bottom: 30px;
    }
  .carousel - indicators {
        bottom: 20px;
    }
}

.align - baseline {
    vertical - align: baseline!important;
}

.align - top {
    vertical - align: top!important;
}

.align - middle {
    vertical - align: middle!important;
}

.align - bottom {
    vertical - align: bottom!important;
}

.align - text - bottom {
    vertical - align: text - bottom!important;
}

.align - text - top {
    vertical - align: text - top!important;
}

.bg - faded {
    background - color: #f7f7f9;
}

.bg - primary {
    background - color: #0275d8 !important;
}

a.bg - primary:focus, a.bg - primary:hover {
    background - color: #025aa5 !important;
}

.bg - success {
    background - color: #5cb85c !important;
}

a.bg - success:focus, a.bg - success:hover {
    background - color: #449d44 !important;
}

.bg - info {
    background - color: #5bc0de !important;
}

a.bg - info:focus, a.bg - info:hover {
    background - color: #31b0d5 !important;
}

.bg - warning {
    background - color: #f0ad4e!important;
}

a.bg - warning:focus, a.bg - warning:hover {
    background - color: #ec971f!important;
}

.bg - danger {
    background - color: #d9534f!important;
}

a.bg - danger:focus, a.bg - danger:hover {
    background - color: #c9302c!important;
}

.bg - inverse {
    background - color: #373a3c !important;
}

a.bg - inverse:focus, a.bg - inverse:hover {
    background - color: #1f2021 !important;
}

.rounded {
    border - radius: 0.25rem;
}

.rounded - top {
    border - top - right - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.rounded - right {
    border - bottom - right - radius: 0.25rem;
    border - top - right - radius: 0.25rem;
}

.rounded - bottom {
    border - bottom - right - radius: 0.25rem;
    border - bottom - left - radius: 0.25rem;
}

.rounded - left {
    border - bottom - left - radius: 0.25rem;
    border - top - left - radius: 0.25rem;
}

.rounded - circle {
    border - radius: 50 %;
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

.d - block {
    display: block!important;
}

.d - inline - block {
    display: inline - block!important;
}

.d - inline {
    display: inline!important;
}

.float - xs - left {
    float: left!important;
}

.float - xs - right {
    float: right!important;
}

.float - xs - none {
    float: none!important;
}

@media(min - width: 576px) {
  .float - sm - left {
        float: left!important;
    }
  .float - sm - right {
        float: right!important;
    }
  .float - sm - none {
        float: none!important;
    }
}

@media(min - width: 768px) {
  .float - md - left {
        float: left!important;
    }
  .float - md - right {
        float: right!important;
    }
  .float - md - none {
        float: none!important;
    }
}

@media(min - width: 992px) {
  .float - lg - left {
        float: left!important;
    }
  .float - lg - right {
        float: right!important;
    }
  .float - lg - none {
        float: none!important;
    }
}

@media(min - width: 1200px) {
  .float - xl - left {
        float: left!important;
    }
  .float - xl - right {
        float: right!important;
    }
  .float - xl - none {
        float: none!important;
    }
}

.sr - only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

.sr - only - focusable:active, .sr - only - focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
}

.w - 100 {
    width: 100 % !important;
}

.h - 100 {
    height: 100 % !important;
}

.mx - auto {
    margin - right: auto!important;
    margin - left: auto!important;
}

.m - 0 {
    margin: 0 0 !important;
}

.mt - 0 {
    margin - top: 0!important;
}

.mr - 0 {
    margin - right: 0!important;
}

.mb - 0 {
    margin - bottom: 0!important;
}

.ml - 0 {
    margin - left: 0!important;
}

.mx - 0 {
    margin - right: 0!important;
    margin - left: 0!important;
}

.my - 0 {
    margin - top: 0!important;
    margin - bottom: 0!important;
}

.m - 1 {
    margin: 1rem 1rem !important;
}

.mt - 1 {
    margin - top: 1rem !important;
}

.mr - 1 {
    margin - right: 1rem !important;
}

.mb - 1 {
    margin - bottom: 1rem !important;
}

.ml - 1 {
    margin - left: 1rem !important;
}

.mx - 1 {
    margin - right: 1rem !important;
    margin - left: 1rem !important;
}

.my - 1 {
    margin - top: 1rem !important;
    margin - bottom: 1rem !important;
}

.m - 2 {
    margin: 1.5rem 1.5rem !important;
}

.mt - 2 {
    margin - top: 1.5rem !important;
}

.mr - 2 {
    margin - right: 1.5rem !important;
}

.mb - 2 {
    margin - bottom: 1.5rem !important;
}

.ml - 2 {
    margin - left: 1.5rem !important;
}

.mx - 2 {
    margin - right: 1.5rem !important;
    margin - left: 1.5rem !important;
}

.my - 2 {
    margin - top: 1.5rem !important;
    margin - bottom: 1.5rem !important;
}

.m - 3 {
    margin: 3rem 3rem !important;
}

.mt - 3 {
    margin - top: 3rem !important;
}

.mr - 3 {
    margin - right: 3rem !important;
}

.mb - 3 {
    margin - bottom: 3rem !important;
}

.ml - 3 {
    margin - left: 3rem !important;
}

.mx - 3 {
    margin - right: 3rem !important;
    margin - left: 3rem !important;
}

.my - 3 {
    margin - top: 3rem !important;
    margin - bottom: 3rem !important;
}

.p - 0 {
    padding: 0 0 !important;
}

.pt - 0 {
    padding - top: 0!important;
}

.pr - 0 {
    padding - right: 0!important;
}

.pb - 0 {
    padding - bottom: 0!important;
}

.pl - 0 {
    padding - left: 0!important;
}

.px - 0 {
    padding - right: 0!important;
    padding - left: 0!important;
}

.py - 0 {
    padding - top: 0!important;
    padding - bottom: 0!important;
}

.p - 1 {
    padding: 1rem 1rem !important;
}

.pt - 1 {
    padding - top: 1rem !important;
}

.pr - 1 {
    padding - right: 1rem !important;
}

.pb - 1 {
    padding - bottom: 1rem !important;
}

.pl - 1 {
    padding - left: 1rem !important;
}

.px - 1 {
    padding - right: 1rem !important;
    padding - left: 1rem !important;
}

.py - 1 {
    padding - top: 1rem !important;
    padding - bottom: 1rem !important;
}

.p - 2 {
    padding: 1.5rem 1.5rem !important;
}

.pt - 2 {
    padding - top: 1.5rem !important;
}

.pr - 2 {
    padding - right: 1.5rem !important;
}

.pb - 2 {
    padding - bottom: 1.5rem !important;
}

.pl - 2 {
    padding - left: 1.5rem !important;
}

.px - 2 {
    padding - right: 1.5rem !important;
    padding - left: 1.5rem !important;
}

.py - 2 {
    padding - top: 1.5rem !important;
    padding - bottom: 1.5rem !important;
}

.p - 3 {
    padding: 3rem 3rem !important;
}

.pt - 3 {
    padding - top: 3rem !important;
}

.pr - 3 {
    padding - right: 3rem !important;
}

.pb - 3 {
    padding - bottom: 3rem !important;
}

.pl - 3 {
    padding - left: 3rem !important;
}

.px - 3 {
    padding - right: 3rem !important;
    padding - left: 3rem !important;
}

.py - 3 {
    padding - top: 3rem !important;
    padding - bottom: 3rem !important;
}

.pos - f - t {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z - index: 1030;
}

.text - justify {
    text - align: justify!important;
}

.text - nowrap {
    white - space: nowrap!important;
}

.text - truncate {
    overflow: hidden;
    text - overflow: ellipsis;
    white - space: nowrap;
}

.text - xs - left {
    text - align: left!important;
}

.text - xs - right {
    text - align: right!important;
}

.text - xs - center {
    text - align: center!important;
}

@media(min - width: 576px) {
  .text - sm - left {
        text - align: left!important;
    }
  .text - sm - right {
        text - align: right!important;
    }
  .text - sm - center {
        text - align: center!important;
    }
}

@media(min - width: 768px) {
  .text - md - left {
        text - align: left!important;
    }
  .text - md - right {
        text - align: right!important;
    }
  .text - md - center {
        text - align: center!important;
    }
}

@media(min - width: 992px) {
  .text - lg - left {
        text - align: left!important;
    }
  .text - lg - right {
        text - align: right!important;
    }
  .text - lg - center {
        text - align: center!important;
    }
}

@media(min - width: 1200px) {
  .text - xl - left {
        text - align: left!important;
    }
  .text - xl - right {
        text - align: right!important;
    }
  .text - xl - center {
        text - align: center!important;
    }
}

.text - lowercase {
    text - transform: lowercase!important;
}

.text - uppercase {
    text - transform: uppercase!important;
}

.text - capitalize {
    text - transform: capitalize!important;
}

.font - weight - normal {
    font - weight: normal;
}

.font - weight - bold {
    font - weight: bold;
}

.font - italic {
    font - style: italic;
}

.text - white {
    color: #fff!important;
}

.text - muted {
    color: #818a91 !important;
}

a.text - muted:focus, a.text - muted:hover {
    color: #687077!important;
}

.text - primary {
    color: #0275d8 !important;
}

a.text - primary:focus, a.text - primary:hover {
    color: #025aa5 !important;
}

.text - success {
    color: #5cb85c !important;
}

a.text - success:focus, a.text - success:hover {
    color: #449d44 !important;
}

.text - info {
    color: #5bc0de !important;
}

a.text - info:focus, a.text - info:hover {
    color: #31b0d5 !important;
}

.text - warning {
    color: #f0ad4e!important;
}

a.text - warning:focus, a.text - warning:hover {
    color: #ec971f!important;
}

.text - danger {
    color: #d9534f!important;
}

a.text - danger:focus, a.text - danger:hover {
    color: #c9302c!important;
}

.text - gray - dark {
    color: #373a3c !important;
}

a.text - gray - dark:focus, a.text - gray - dark:hover {
    color: #1f2021 !important;
}

.text - hide {
    font: 0 / 0 a;
    color: transparent;
    text - shadow: none;
    background - color: transparent;
    border: 0;
}

.invisible {
    visibility: hidden!important;
}

.hidden - xs - up {
    display: none!important;
}

@media(max - width: 575px) {
  .hidden - xs - down {
        display: none!important;
    }
}

@media(min - width: 576px) {
  .hidden - sm - up {
        display: none!important;
    }
}

@media(max - width: 767px) {
  .hidden - sm - down {
        display: none!important;
    }
}

@media(min - width: 768px) {
  .hidden - md - up {
        display: none!important;
    }
}

@media(max - width: 991px) {
  .hidden - md - down {
        display: none!important;
    }
}

@media(min - width: 992px) {
  .hidden - lg - up {
        display: none!important;
    }
}

@media(max - width: 1199px) {
  .hidden - lg - down {
        display: none!important;
    }
}

@media(min - width: 1200px) {
  .hidden - xl - up {
        display: none!important;
    }
}

.hidden - xl - down {
    display: none!important;
}

.visible - print - block {
    display: none!important;
}

@media print {
  .visible - print - block {
        display: block!important;
    }
}

.visible - print - inline {
    display: none!important;
}

@media print {
  .visible - print - inline {
        display: inline!important;
    }
}

.visible - print - inline - block {
    display: none!important;
}

@media print {
  .visible - print - inline - block {
        display: inline - block!important;
    }
}

@media print {
  .hidden - print {
        display: none!important;
    }
}
/*# sourceMappingURL=bootstrap.css.map */
.morris - hover{position: absolute; z - index:1000 }.morris - hover.morris -default-style{border - radius:10px; padding: 6px; color: #666; background: rgba(255, 255, 255, 0.8); border: solid 2px rgba(230, 230, 230, 0.8); font - family:sans - serif; font - size:12px; text - align:center }.morris - hover.morris -default-style.morris - hover - row - label{font - weight:bold; margin: 0.25em 0}
.morris - hover.morris -default-style.morris - hover - point{white - space:nowrap; margin: 0.1em 0}
