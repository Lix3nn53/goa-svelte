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
  darkMode: "class",
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
