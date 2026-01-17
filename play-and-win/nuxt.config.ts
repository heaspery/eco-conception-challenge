export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: ['~/assets/css/main.css'],
  image: {
    format: ['webp', 'jpeg', 'png'],
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    },
    presets: {
      bigPictures: {
        modifiers: {
          quality: 20,
        }
      },
      middlePictures: {
        modifiers: {
          quality: 10,
        }
      },
      smallPictures: {
        modifiers: {
          quality: 1,
        }
      } 
    }
  }
});