import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [react()],
  base: "/CB-Vehicles-Private-Repo/",
  build: {
    outDir: "dist",
  },
});
