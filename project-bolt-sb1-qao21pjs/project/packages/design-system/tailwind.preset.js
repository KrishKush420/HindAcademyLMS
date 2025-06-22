import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        role: {
          student: '#14b8a6',
          faculty: '#c084fc',
          admin: '#f97316'
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d'
        },
        warning: {
          50: '#fefce8',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207'
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant, addUtilities }) => {
      // Role-based variants
      addVariant('role-student', '&[data-role="student"]');
      addVariant('role-faculty', '&[data-role="faculty"]');
      addVariant('role-admin', '&[data-role="admin"]');
      
      // Custom utilities
      addUtilities({
        '.role-accent': {
          '&[data-role="student"]': { 
            '@apply border-teal-500 bg-teal-50 text-teal-900': {} 
          },
          '&[data-role="faculty"]': { 
            '@apply border-purple-500 bg-purple-50 text-purple-900': {} 
          },
          '&[data-role="admin"]': { 
            '@apply border-orange-500 bg-orange-50 text-orange-900': {} 
          },
        }
      });
    })
  ],
};