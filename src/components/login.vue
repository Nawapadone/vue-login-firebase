<template>
    <div>
     <h1>Welcome to My Dizcard-Merchant</h1>   
    <div id="firebaseui-auth-container"></div>
    </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
export default {
  mounted: () => {
    if (ui.isPendingRedirect()) {
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  }
};
</script>
