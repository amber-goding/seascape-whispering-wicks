import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: "/seascape-whispering-wicks/",
    server: {
      port: env.PORT || 3000
    }
  }
})

