<script lang="ts" context="module">
  import { Router, router } from "../.routify/instance.default.js";
  import { PWAStatus, pwaStatusStream } from "$lib/pwa";

  /* Theme variables */
  import "./theme/variables.css";

  export const load = (url) => router.url.replace(url);

  pwaStatusStream.subscribe((status: PWAStatus) => {
    console.log("PWA status",(+new Date()), status);

    if (status.updateFunction) {
      console.log("PWA updating itself in 4 secs......");
      setTimeout(() => {
        status.updateFunction();
      }, 4000);
    }
  });
</script>

<Router {router} />
