const production = !process.env.ROLLUP_WATCH;

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "2rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
      margin: "auto 0",
      center: true,
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    extend: {
      colors: {
        base: {
          50: withOpacityValue("--color-base-50"),
          100: withOpacityValue("--color-base-100"),
          200: withOpacityValue("--color-base-200"),
          300: withOpacityValue("--color-base-300"),
          400: withOpacityValue("--color-base-400"),
          500: withOpacityValue("--color-base-500"),
          600: withOpacityValue("--color-base-600"),
          700: withOpacityValue("--color-base-700"),
          800: withOpacityValue("--color-base-800"),
          900: withOpacityValue("--color-base-900"),
        },
        primary: {
          50: withOpacityValue("--color-primary-50"),
          100: withOpacityValue("--color-primary-100"),
          200: withOpacityValue("--color-primary-200"),
          300: withOpacityValue("--color-primary-300"),
          400: withOpacityValue("--color-primary-400"),
          500: withOpacityValue("--color-primary-500"),
          600: withOpacityValue("--color-primary-600"),
          700: withOpacityValue("--color-primary-700"),
          800: withOpacityValue("--color-primary-800"),
          900: withOpacityValue("--color-primary-900"),
        },
        secondary: {
          50: withOpacityValue("--color-secondary-50"),
          100: withOpacityValue("--color-secondary-100"),
          200: withOpacityValue("--color-secondary-200"),
          300: withOpacityValue("--color-secondary-300"),
          400: withOpacityValue("--color-secondary-400"),
          500: withOpacityValue("--color-secondary-500"),
          600: withOpacityValue("--color-secondary-600"),
          700: withOpacityValue("--color-secondary-700"),
          800: withOpacityValue("--color-secondary-800"),
          900: withOpacityValue("--color-secondary-900"),
        },
        danger: {
          50: withOpacityValue("--color-danger-50"),
          100: withOpacityValue("--color-danger-100"),
          200: withOpacityValue("--color-danger-200"),
          300: withOpacityValue("--color-danger-300"),
          400: withOpacityValue("--color-danger-400"),
          500: withOpacityValue("--color-danger-500"),
          600: withOpacityValue("--color-danger-600"),
          700: withOpacityValue("--color-danger-700"),
          800: withOpacityValue("--color-danger-800"),
          900: withOpacityValue("--color-danger-900"),
        },
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#a3e635",
          secondary: "#fbbf24",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#fb7185",
          error: "#ef4444",
        },
      },
      "dark",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
