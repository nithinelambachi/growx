module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          brand: "var(--primary-brand)",
          light: "var(--primary-brand-light)",
          bg: "var(--primary-brand-bg)",
          subtle: "var(--primary-brand-subtle)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          inverse: "var(--text-inverse)",
          brand: "var(--text-brand)"
        },
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          brand: "var(--bg-brand)",
          'brand-light': "var(--bg-brand-light)",
          'brand-subtle': "var(--bg-brand-subtle)"
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          brand: "var(--border-brand)",
          'brand-light': "var(--border-brand-light)"
        },
        button: {
          'bg-primary': "var(--button-bg-primary)",
          'bg-secondary': "var(--button-bg-secondary)",
          'text-primary': "var(--button-text-primary)",
          'text-secondary': "var(--button-text-secondary)"
        },
        header: {
          text: "var(--header-text)",
          'text-active': "var(--header-text-active)"
        },
        star: {
          'bg-active': "var(--star-bg-active)",
          'bg-inactive': "var(--star-bg-inactive)"
        },
        progress: {
          bg: "var(--progress-bg)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)'
      },
      spacing: {
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '10': 'var(--spacing-10)',
        '12': 'var(--spacing-12)',
        '14': 'var(--spacing-14)',
        '16': 'var(--spacing-16)',
        '20': 'var(--spacing-20)'
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'base': 'var(--radius-base)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        'full': 'var(--radius-full)',
        'circle': 'var(--radius-circle)'
      },
      width: {
        'auto': 'var(--width-auto)',
        'full': 'var(--width-full)',
        'flex': 'var(--width-flex)'
      },
      height: {
        'auto': 'var(--height-auto)',
        'flex': 'var(--height-flex)'
      }
    }
  },
  plugins: []
};