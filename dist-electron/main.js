import { app as o, BrowserWindow as i } from "electron";
import { fileURLToPath as l } from "node:url";
import e from "node:path";
const t = e.dirname(l(import.meta.url));
process.env.APP_ROOT = e.join(t, "..");
const s = process.env.VITE_DEV_SERVER_URL, _ = e.join(process.env.APP_ROOT, "dist-electron"), r = e.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = s ? e.join(process.env.APP_ROOT, "public") : r;
let n;
o.name = "Kanban";
function c() {
  if (n = new i({
    icon: e.join(process.env.VITE_PUBLIC || "", "build/icon.icns"),
    // Usar VITE_PUBLIC
    webPreferences: {
      preload: e.join(t, "preload.mjs")
    }
  }), n.webContents.on("did-finish-load", () => {
    n == null || n.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), s ? n.loadURL(s) : n.loadFile(e.join(r, "index.html")), process.platform === "darwin") {
    const a = e.join(
      process.env.VITE_PUBLIC || "",
      "kanban-white.png"
    );
    o.dock.setIcon(a);
  }
}
o.on("window-all-closed", () => {
  process.platform !== "darwin" && (o.quit(), n = null);
});
o.on("activate", () => {
  i.getAllWindows().length === 0 && c();
});
o.whenReady().then(c);
export {
  _ as MAIN_DIST,
  r as RENDERER_DIST,
  s as VITE_DEV_SERVER_URL
};
