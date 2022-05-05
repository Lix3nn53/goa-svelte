import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("./en"));
register("tr", () => import("./tr"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
