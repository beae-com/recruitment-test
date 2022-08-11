//const colors = require('tailwindcss/colors');
const colorsConfig = require('./tailwind.config.json');
module.exports = {
    // purge: [],
    purge:{
        content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
        safelist: ['bg-green-600', 'bg-blue-600', 'bg-transparent'],
    },
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: ['bg-green-600', 'bg-blue-600', 'bg-transparent'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            cursor: {
                ewresize: 'ew-resize',
                grab: 'grab',
                grabbing: 'grabbing',
                crosshair: 'crosshair'
            },
            colors: colorsConfig,
            // backgroundColor: colorsConfig,
            // borderColor: colorsConfig,
            minWidth: {
                30: '7.5rem',
                40: '10rem'
            },
            maxHeight: {
                '1/3': '33vh',
            },
            maxWidth: {
                16: '4rem'
            },
            placeholderColor: {
                form: {
                    input: '#6B7280'
                }
            },
            padding: {
                23: '5.75rem'
            },
            width: {
                '6/10': '60%'
            },
            transitionDuration: {
                '250': '250ms',
            },
            transitionProperty: {
                left: 'left'
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            ringColor: ['hover'],
            borderRadius: ['hover'],
            maxWidth: ['hover'],
        }
    },
    plugins: [require('@tailwindcss/forms'), ],
};
