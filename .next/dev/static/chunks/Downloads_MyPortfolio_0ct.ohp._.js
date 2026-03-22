(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/MyPortfolio/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const FLOATING_IMAGES = [
    {
        id: 1,
        left: '-4%',
        top: '8%',
        width: 180,
        height: 230,
        moveX: 55,
        moveY: 35,
        rotate: -4,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        delay: 0.5,
        borderRadius: 6
    },
    {
        id: 2,
        left: '68%',
        top: '4%',
        width: 230,
        height: 160,
        moveX: 70,
        moveY: 50,
        rotate: 3,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        delay: 0.65,
        borderRadius: 6
    },
    {
        id: 3,
        left: '78%',
        top: '52%',
        width: 160,
        height: 210,
        moveX: 45,
        moveY: 60,
        rotate: 5,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        delay: 0.8,
        borderRadius: 6
    },
    {
        id: 4,
        left: '-2%',
        top: '58%',
        width: 150,
        height: 180,
        moveX: 60,
        moveY: 40,
        rotate: -6,
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        delay: 0.7,
        borderRadius: 6
    },
    {
        id: 5,
        left: '42%',
        top: '72%',
        width: 140,
        height: 140,
        moveX: 80,
        moveY: 30,
        rotate: 8,
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        delay: 0.9,
        borderRadius: 999
    },
    {
        id: 6,
        left: '30%',
        top: '-3%',
        width: 120,
        height: 120,
        moveX: 40,
        moveY: 55,
        rotate: -3,
        gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        delay: 0.6,
        borderRadius: 999
    }
];
/* ── Letter variants ── */ const LETTER_VARIANTS = {
    hidden: {
        y: '115%',
        opacity: 0
    },
    visible: (i)=>({
            y: '0%',
            opacity: 1,
            transition: {
                duration: 1.0,
                delay: 0.1 + i * 0.09,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        })
};
const SUBTITLE_VARIANTS = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            delay: 0.75,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const SCROLL_VARIANTS = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 1.4,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
/* ── FloatingImage sub-component ── */ function FloatingImage({ config, springX, springY }) {
    _s();
    const translateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springX, [
        -1,
        1
    ], [
        -config.moveX,
        config.moveX
    ]);
    const translateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springY, [
        -1,
        1
    ], [
        -config.moveY,
        config.moveY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.75,
            rotate: config.rotate
        },
        animate: {
            opacity: 1,
            scale: 1,
            rotate: config.rotate
        },
        transition: {
            duration: 1.1,
            delay: config.delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        style: {
            position: 'absolute',
            left: config.left,
            top: config.top,
            width: config.width,
            height: config.height,
            x: translateX,
            y: translateY,
            background: config.gradient,
            borderRadius: config.borderRadius,
            boxShadow: '0 24px 80px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.3)',
            willChange: 'transform',
            zIndex: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)',
                pointerEvents: 'none'
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(FloatingImage, "oyEI52VLwcTF/v7er6ZQoRa/r18=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = FloatingImage;
/* ── Scroll indicator ── */ function ScrollIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: SCROLL_VARIANTS,
        initial: "hidden",
        animate: "visible",
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: 'rgba(255,255,255,0.3)'
                },
                className: "jsx-f008c7305cd23470" + " " + "font-inter text-[10px] tracking-[0.25em] uppercase",
                children: "Scroll"
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-f008c7305cd23470" + " " + "relative w-px h-12 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '100%',
                        animation: 'scrollLine 1.8s cubic-bezier(0.76, 0, 0.24, 1) infinite'
                    },
                    className: "jsx-f008c7305cd23470" + " " + "absolute inset-x-0 top-0 bg-gradient-to-b from-white/40 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f008c7305cd23470",
                children: "@keyframes scrollLine{0%{opacity:1;transform:translateY(-100%)}50%{opacity:1;transform:translateY(0%)}to{opacity:0;transform:translateY(100%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_c1 = ScrollIndicator;
function HeroSection() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ── Mouse tracking ── */ const rawX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rawY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        damping: 28,
        stiffness: 90,
        mass: 1
    };
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawX, springConfig);
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleMouseMove = {
                "HeroSection.useEffect.handleMouseMove": (e)=>{
                    const { innerWidth, innerHeight } = window;
                    // Normalize to -1 … +1
                    rawX.set((e.clientX - innerWidth / 2) / (innerWidth / 2));
                    rawY.set((e.clientY - innerHeight / 2) / (innerHeight / 2));
                }
            }["HeroSection.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove, {
                passive: true
            });
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        rawX,
        rawY
    ]);
    const NAME = 'MOHIT';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full overflow-hidden flex items-center justify-center",
        style: {
            height: '100svh',
            minHeight: 600,
            background: '#000'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,255,255,0.035) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            FLOATING_IMAGES.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingImage, {
                    config: img,
                    springX: springX,
                    springY: springY
                }, img.id, false, {
                    fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center select-none",
                style: {
                    pointerEvents: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            letterSpacing: '0.2em'
                        },
                        animate: {
                            opacity: 1,
                            letterSpacing: '0.35em'
                        },
                        transition: {
                            duration: 1.1,
                            delay: 0.08,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "mb-5 font-inter font-light",
                        style: {
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.35)',
                            textTransform: 'uppercase'
                        },
                        children: "Portfolio — 2025"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end leading-none",
                        "aria-label": "Mohit",
                        style: {
                            gap: '0.02em'
                        },
                        children: NAME.split('').map((letter, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden',
                                    display: 'inline-block'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    custom: i,
                                    variants: LETTER_VARIANTS,
                                    initial: "hidden",
                                    animate: "visible",
                                    style: {
                                        display: 'inline-block',
                                        fontFamily: 'var(--font-syne)',
                                        fontWeight: 800,
                                        fontSize: 'clamp(4.5rem, 18vw, 18rem)',
                                        lineHeight: 0.88,
                                        color: '#ffffff',
                                        letterSpacing: '-0.02em'
                                    },
                                    children: letter
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: SUBTITLE_VARIANTS,
                        initial: "hidden",
                        animate: "visible",
                        className: "mt-6 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'block',
                                    width: 32,
                                    height: 1,
                                    background: 'rgba(255,255,255,0.25)',
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-inter font-light tracking-widest uppercase",
                                style: {
                                    fontSize: 'clamp(10px, 1.3vw, 14px)',
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.3em'
                                },
                                children: "AI Fullstack Developer"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'block',
                                    width: 32,
                                    height: 1,
                                    background: 'rgba(255,255,255,0.25)',
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 1.05,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "mt-10 flex items-center gap-4",
                        style: {
                            pointerEvents: 'all'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/projects",
                                className: "btn-primary",
                                style: {
                                    fontSize: 13,
                                    padding: '12px 26px'
                                },
                                children: [
                                    "View Work",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about",
                                className: "btn-outline",
                                style: {
                                    fontSize: 13,
                                    padding: '11px 25px'
                                },
                                children: "About Me"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollIndicator, {}, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.6,
                    duration: 0.8
                },
                className: "absolute bottom-8 right-8 font-inter",
                style: {
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.15)',
                    letterSpacing: '0.1em'
                },
                "aria-hidden": "true",
                children: "28.6139° N · 77.2090° E"
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.6,
                    duration: 0.8
                },
                className: "absolute bottom-8 left-8 font-inter",
                style: {
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.15)',
                    letterSpacing: '0.1em'
                },
                "aria-hidden": "true",
                children: "© 2025"
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/MyPortfolio/components/HeroSection.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s1(HeroSection, "qTvKG8B/xxRsLhLkok1cBvTCs3o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c2 = HeroSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FloatingImage");
__turbopack_context__.k.register(_c1, "ScrollIndicator");
__turbopack_context__.k.register(_c2, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/MyPortfolio/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
/* ── Skills data ── */ const SKILLS = [
    {
        label: "Next.js",
        category: "Frontend"
    },
    {
        label: "React",
        category: "Frontend"
    },
    {
        label: "TypeScript",
        category: "Frontend"
    },
    {
        label: "Tailwind CSS",
        category: "Frontend"
    },
    {
        label: "Framer Motion",
        category: "Frontend"
    },
    {
        label: "OpenAI API",
        category: "AI"
    },
    {
        label: "LangChain",
        category: "AI"
    },
    {
        label: "Pinecone",
        category: "AI"
    },
    {
        label: "Whisper",
        category: "AI"
    },
    {
        label: "Hugging Face",
        category: "AI"
    },
    {
        label: "Python",
        category: "Backend"
    },
    {
        label: "FastAPI",
        category: "Backend"
    },
    {
        label: "Node.js",
        category: "Backend"
    },
    {
        label: "PostgreSQL",
        category: "Backend"
    },
    {
        label: "Redis",
        category: "Backend"
    },
    {
        label: "Docker",
        category: "DevOps"
    },
    {
        label: "Vercel",
        category: "DevOps"
    },
    {
        label: "Git",
        category: "DevOps"
    }
];
const STATS = [
    {
        value: "3+",
        label: "Years Building"
    },
    {
        value: "20+",
        label: "Projects Shipped"
    },
    {
        value: "∞",
        label: "Curiosity"
    }
];
/* ── Reusable fade-up wrapper ── */ function FadeUp({ children, delay = 0, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 40
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 40
        },
        transition: {
            duration: 0.9,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(FadeUp, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FadeUp;
/* ── Clip-reveal heading ── */ function RevealHeading({ children, delay = 0, className = "" }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            overflow: "hidden"
        },
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                y: "105%"
            },
            animate: inView ? {
                y: "0%"
            } : {
                y: "105%"
            },
            transition: {
                duration: 1.0,
                delay,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s1(RevealHeading, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = RevealHeading;
/* ── Skill pill ── */ function SkillPill({ label, index, inView }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        initial: {
            opacity: 0,
            scale: 0.85
        },
        animate: inView ? {
            opacity: 1,
            scale: 1
        } : {
            opacity: 0,
            scale: 0.85
        },
        transition: {
            duration: 0.5,
            delay: 0.05 * index,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "tag",
        style: {
            cursor: "none"
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c2 = SkillPill;
function AboutSection() {
    _s2();
    const skillsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skillsInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(skillsRef, {
        once: true,
        margin: "-60px 0px"
    });
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statsInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(statsRef, {
        once: true,
        margin: "-60px 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative w-full bg-black py-32 md:py-44 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-px bg-white/[0.06]"
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                        delay: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-inter text-[10px] tracking-[0.3em] uppercase text-white/25 block mb-12",
                            children: "01 / About"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start mb-24 lg:mb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealHeading, {
                                                delay: 0.1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-syne font-bold leading-[0.92] tracking-tight",
                                                    style: {
                                                        fontSize: "clamp(2.6rem, 7vw, 7.5rem)",
                                                        color: "#ffffff"
                                                    },
                                                    children: "Building at the"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealHeading, {
                                                delay: 0.18,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-syne font-bold leading-[0.92] tracking-tight",
                                                    style: {
                                                        fontSize: "clamp(2.6rem, 7vw, 7.5rem)",
                                                        color: "rgba(255,255,255,0.25)"
                                                    },
                                                    children: "edge of AI."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-5 max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                                delay: 0.28,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-inter leading-relaxed",
                                                    style: {
                                                        fontSize: "clamp(15px, 1.6vw, 18px)",
                                                        color: "rgba(255,255,255,0.6)"
                                                    },
                                                    children: [
                                                        "I'm ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-medium",
                                                            children: "Mohit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 23
                                                        }, this),
                                                        " — an AI Fullstack Developer who lives at the intersection of large language models and production-grade software. I don't just integrate AI features; I architect systems where intelligence is the foundation."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                                delay: 0.36,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-inter leading-relaxed",
                                                    style: {
                                                        fontSize: "clamp(15px, 1.6vw, 18px)",
                                                        color: "rgba(255,255,255,0.45)"
                                                    },
                                                    children: "From real-time LLM streaming interfaces to RAG pipelines, voice AI assistants, and full SaaS platforms — I care about the entire stack. Clean APIs, thoughtful UX, and AI that actually works in production."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                                delay: 0.42,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-inter leading-relaxed",
                                                    style: {
                                                        fontSize: "clamp(15px, 1.6vw, 18px)",
                                                        color: "rgba(255,255,255,0.35)"
                                                    },
                                                    children: "Based in New Delhi, India. Open to remote collaboration worldwide."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                                delay: 0.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 pt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/projects",
                                                            className: "btn-primary",
                                                            style: {
                                                                fontSize: 13
                                                            },
                                                            children: "See My Work →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:mohit@example.com",
                                                            className: "font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-300 link-underline",
                                                            children: "Say hello"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: statsRef,
                                className: "flex flex-row lg:flex-col gap-10 lg:gap-12 pt-2",
                                children: STATS.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 24
                                        },
                                        animate: statsInView ? {
                                            opacity: 1,
                                            x: 0
                                        } : {
                                            opacity: 0,
                                            x: 24
                                        },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.3 + i * 0.12,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1
                                            ]
                                        },
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-syne font-bold leading-none",
                                                style: {
                                                    fontSize: "clamp(2.4rem, 4vw, 4rem)",
                                                    color: "#ffffff"
                                                },
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-inter text-xs tracking-widest uppercase",
                                                style: {
                                                    color: "rgba(255,255,255,0.3)"
                                                },
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, stat.label, true, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                        delay: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider mb-16 md:mb-20"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: skillsRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between mb-10 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                        delay: 0.05,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-syne font-bold",
                                            style: {
                                                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                                                color: "rgba(255,255,255,0.9)"
                                            },
                                            children: "Tools & Technologies"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                        delay: 0.12,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-inter text-xs tracking-widest uppercase shrink-0",
                                            style: {
                                                color: "rgba(255,255,255,0.2)"
                                            },
                                            children: [
                                                SKILLS.length,
                                                " skills"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2.5",
                                children: SKILLS.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillPill, {
                                        label: skill.label,
                                        index: i,
                                        inView: skillsInView
                                    }, skill.label, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                        delay: 0.1,
                        className: "mt-20 md:mt-28",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-white/[0.08] px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
                            style: {
                                background: "rgba(255,255,255,0.03)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex h-2.5 w-2.5 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-inter",
                                            style: {
                                                fontSize: "clamp(14px, 1.5vw, 16px)",
                                                color: "rgba(255,255,255,0.7)"
                                            },
                                            children: [
                                                "Currently open to",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: "freelance projects & full-time roles"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:mohit@example.com",
                                    className: "btn-outline shrink-0",
                                    style: {
                                        fontSize: 13,
                                        padding: "11px 22px",
                                        whiteSpace: "nowrap"
                                    },
                                    children: "Get in Touch →"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]"
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/MyPortfolio/components/AboutSection.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s2(AboutSection, "1MzNgAoAQQOgUIVhVgaqCC/sihw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c3 = AboutSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FadeUp");
__turbopack_context__.k.register(_c1, "RevealHeading");
__turbopack_context__.k.register(_c2, "SkillPill");
__turbopack_context__.k.register(_c3, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/MyPortfolio/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 1,
        title: 'NeuralChat',
        description: 'Real-time AI conversation platform with context memory and streaming responses.',
        longDescription: 'A full-stack conversational AI platform built with Next.js and OpenAI GPT-4. Features include multi-turn context memory, streaming token output, conversation history, user authentication, and a clean minimal UI. Handles thousands of concurrent sessions with edge-deployed serverless functions.',
        tech: [
            'Next.js',
            'OpenAI',
            'TypeScript',
            'PostgreSQL',
            'Tailwind',
            'Vercel AI SDK'
        ],
        category: [
            'AI',
            'Fullstack'
        ],
        year: 2024,
        color: '#6366f1',
        accentColor: '#818cf8',
        link: '#',
        github: '#',
        featured: true
    },
    {
        id: 2,
        title: 'CodeMind',
        description: 'AI-powered code review tool that catches bugs, suggests refactors, and explains complexity.',
        longDescription: 'An intelligent code review assistant integrated with GitHub. Uses GPT-4 to analyze pull requests, identify potential bugs, suggest performance improvements, and explain complex logic in plain English. Features a VS Code extension, CLI tool, and web dashboard with analytics.',
        tech: [
            'Node.js',
            'GPT-4',
            'GitHub API',
            'React',
            'Python',
            'FastAPI'
        ],
        category: [
            'AI',
            'Developer Tools'
        ],
        year: 2024,
        color: '#10b981',
        accentColor: '#34d399',
        link: '#',
        github: '#',
        featured: true
    },
    {
        id: 3,
        title: 'DataSense',
        description: 'Natural language analytics dashboard — ask questions about your data in plain English.',
        longDescription: 'A data analytics platform that lets non-technical users query complex datasets using natural language. Translates questions into SQL, executes them, and renders results as beautiful interactive charts. Built with a Python/FastAPI backend, React frontend, and LangChain for query orchestration.',
        tech: [
            'React',
            'Python',
            'FastAPI',
            'LangChain',
            'PostgreSQL',
            'D3.js'
        ],
        category: [
            'AI',
            'Data',
            'Fullstack'
        ],
        year: 2024,
        color: '#f59e0b',
        accentColor: '#fbbf24',
        link: '#',
        github: '#',
        featured: true
    },
    {
        id: 4,
        title: 'VoiceOS',
        description: 'Voice-first AI operating interface with real-time speech recognition and TTS synthesis.',
        longDescription: 'An experimental voice-controlled AI assistant that integrates speech recognition, LLM processing, and text-to-speech into a seamless conversational interface. Features wake-word detection, multi-language support, custom voice cloning, and smart home integration via webhooks.',
        tech: [
            'Next.js',
            'Whisper API',
            'ElevenLabs',
            'WebRTC',
            'Node.js',
            'Redis'
        ],
        category: [
            'AI',
            'Voice',
            'Realtime'
        ],
        year: 2023,
        color: '#ec4899',
        accentColor: '#f472b6',
        link: '#',
        github: '#',
        featured: false
    },
    {
        id: 5,
        title: 'PromptForge',
        description: 'Collaborative prompt engineering workspace with version control and performance benchmarking.',
        longDescription: 'A developer tool for crafting, testing, and versioning AI prompts. Provides a collaborative workspace for teams, A/B testing different prompt versions, benchmarking against custom evaluation criteria, and exporting prompts as typed constants for use in production codebases.',
        tech: [
            'Next.js',
            'TypeScript',
            'Supabase',
            'OpenAI',
            'Tailwind',
            'Zustand'
        ],
        category: [
            'AI',
            'Developer Tools'
        ],
        year: 2023,
        color: '#8b5cf6',
        accentColor: '#a78bfa',
        link: '#',
        github: '#',
        featured: false
    },
    {
        id: 6,
        title: 'ShipFast AI',
        description: 'Boilerplate SaaS starter with AI features pre-wired — auth, billing, and LLM integrations.',
        longDescription: 'A production-ready Next.js SaaS boilerplate with AI capabilities baked in from day one. Includes Stripe billing, NextAuth, OpenAI chat, image generation, document Q&A, rate limiting, usage tracking, and a beautiful UI component library. Helps developers ship AI products in days.',
        tech: [
            'Next.js',
            'Stripe',
            'Prisma',
            'OpenAI',
            'NextAuth',
            'TypeScript'
        ],
        category: [
            'Fullstack',
            'SaaS',
            'AI'
        ],
        year: 2023,
        color: '#06b6d4',
        accentColor: '#22d3ee',
        link: '#',
        github: '#',
        featured: false
    }
];
const categories = [
    'All',
    'AI',
    'Fullstack',
    'Developer Tools',
    'Data',
    'Realtime',
    'SaaS',
    'Voice'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/MyPortfolio/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ── Animation Variants ── */ const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05
        }
    }
};
const headingVariants = {
    hidden: {
        y: "105%",
        opacity: 0
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const fadeUpVariants = {
    hidden: {
        y: 32,
        opacity: 0
    },
    visible: (delay = 0)=>({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        })
};
const cardVariants = {
    hidden: {
        y: 48,
        opacity: 0
    },
    visible: (i)=>({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.85,
                delay: i * 0.13,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        })
};
const lineVariants = {
    hidden: {
        scaleX: 0,
        originX: 0
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.9,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
/* ── Featured projects only ── */ const featured = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.featured);
/* ── Project Card ── */ function ProjectCard({ project, index, inView }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        custom: index,
        variants: cardVariants,
        initial: "hidden",
        animate: inView ? "visible" : "hidden",
        className: "group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0a0a0a] hover:border-white/20 transition-colors duration-500",
        style: {
            willChange: "transform, opacity"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-px transition-all duration-500",
                style: {
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                    opacity: 0.6
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    aspectRatio: "16 / 9"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-transform duration-700 group-hover:scale-105",
                        style: {
                            background: `linear-gradient(135deg, ${project.color}22 0%, ${project.accentColor}11 100%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.06]",
                        style: {
                            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
                            backgroundSize: "32px 32px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500",
                        style: {
                            background: project.color
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-5 font-inter text-xs tracking-widest",
                        style: {
                            color: "rgba(255,255,255,0.2)"
                        },
                        children: String(index + 1).padStart(2, "0")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-5 font-inter text-xs tracking-widest px-2.5 py-1 rounded-full border",
                        style: {
                            color: "rgba(255,255,255,0.35)",
                            borderColor: "rgba(255,255,255,0.1)",
                            background: "rgba(0,0,0,0.4)"
                        },
                        children: project.year
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-syne font-black opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500",
                            style: {
                                background: `linear-gradient(135deg, ${project.color}44, ${project.accentColor}33)`,
                                border: `1px solid ${project.color}33`,
                                color: project.accentColor,
                                backdropFilter: "blur(8px)"
                            },
                            children: project.title[0]
                        }, void 0, false, {
                            fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        style: {
                            background: `linear-gradient(135deg, ${project.color}18, transparent)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 p-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-syne font-bold text-white text-xl leading-tight group-hover:text-white transition-colors duration-300",
                                style: {
                                    letterSpacing: "-0.01em"
                                },
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": `Visit ${project.title}`,
                                className: "flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:text-white hover:border-white/50 transition-all duration-300 mt-0.5",
                                style: {
                                    fontSize: 14
                                },
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-inter text-sm leading-relaxed flex-1",
                        style: {
                            color: "rgba(255,255,255,0.45)"
                        },
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: project.category.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tag",
                                style: {
                                    fontSize: 10
                                },
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t flex flex-wrap gap-2",
                        style: {
                            borderColor: "rgba(255,255,255,0.07)"
                        },
                        children: project.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-inter text-[11px]",
                                style: {
                                    color: "rgba(255,255,255,0.28)"
                                },
                                children: t
                            }, t, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-500",
                style: {
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c = ProjectCard;
function ProjectsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headingRef, {
        once: true,
        margin: "-80px"
    });
    const gridInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(gridRef, {
        once: true,
        margin: "-60px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative w-full py-28 md:py-36 px-6 md:px-10 overflow-hidden",
        style: {
            background: "#000"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-[0.025]",
                style: {
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
                    backgroundSize: "64px 64px"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headingRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeUpVariants,
                                initial: "hidden",
                                animate: headingInView ? "visible" : "hidden",
                                custom: 0,
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-inter text-xs tracking-[0.3em] uppercase",
                                        style: {
                                            color: "rgba(255,255,255,0.3)"
                                        },
                                        children: "Selected Work"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        variants: lineVariants,
                                        initial: "hidden",
                                        animate: headingInView ? "visible" : "hidden",
                                        className: "flex-1 h-px max-w-[60px]",
                                        style: {
                                            background: "rgba(255,255,255,0.12)",
                                            display: "block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    variants: headingVariants,
                                    initial: "hidden",
                                    animate: headingInView ? "visible" : "hidden",
                                    className: "font-syne font-extrabold text-white leading-none mb-4",
                                    style: {
                                        fontSize: "clamp(2.8rem, 7vw, 7rem)",
                                        letterSpacing: "-0.03em"
                                    },
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: fadeUpVariants,
                                        initial: "hidden",
                                        animate: headingInView ? "visible" : "hidden",
                                        custom: 0.2,
                                        className: "font-inter text-base max-w-md",
                                        style: {
                                            color: "rgba(255,255,255,0.4)",
                                            lineHeight: 1.7
                                        },
                                        children: "A selection of things I've built — intelligent systems, fullstack products, and developer tools where AI does the heavy lifting."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: fadeUpVariants,
                                        initial: "hidden",
                                        animate: headingInView ? "visible" : "hidden",
                                        custom: 0.3,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/projects",
                                            className: "btn-outline group flex items-center gap-2 text-sm whitespace-nowrap",
                                            children: [
                                                "All projects",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "group-hover:translate-x-1 transition-transform duration-300",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: gridRef,
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                        children: featured.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: project,
                                index: i,
                                inView: gridInView
                            }, project.id, false, {
                                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeUpVariants,
                        initial: "hidden",
                        animate: gridInView ? "visible" : "hidden",
                        custom: 0.5,
                        className: "mt-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            className: "inline-flex items-center gap-3 font-inter text-sm group",
                            style: {
                                color: "rgba(255,255,255,0.3)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "group-hover:text-white transition-colors duration-300",
                                    children: [
                                        "View all ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length,
                                        " projects"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-px w-8 group-hover:w-16 transition-all duration-400",
                                    style: {
                                        background: "rgba(255,255,255,0.2)",
                                        display: "inline-block",
                                        verticalAlign: "middle"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/MyPortfolio/components/ProjectsSection.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "fzHIQopl1XsNa/sWM78SHyYEQ+8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$MyPortfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ProjectsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_MyPortfolio_0ct.ohp._.js.map