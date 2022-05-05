import { register, init, getLocaleFromNavigator } from "svelte-i18n";

export function initLocale() {
  register("en", () => import("./en"));
  register("tr", () => import("./tr"));

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
}
