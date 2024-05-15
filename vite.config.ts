import react from "@vitejs/plugin-react";
import { ConfigEnv, UserConfigExport, defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/

export default ({ mode }: ConfigEnv): UserConfigExport => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    server: {
      host: process.env.VITE_HOST || "0.0.0.0",
      port: Number(process.env.VITE_PORT) || 3030,
      watch: {
        ignored: ["**/coverage/**"],
      },
    },
  });
};
