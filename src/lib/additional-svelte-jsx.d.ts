declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    // If you want to use on:beforeinstallprompt
    //onbeforeinstallprompt?: (event: any) => any;
    // If you want to use myCustomAttribute={..} (note: all lowercase)
    oncopysuccess?: () => void;
    // You can replace any with something more specific if you like
  }
}
