<template>
  <section id="404">
    <div class="container">
      <title-component>ERROR 404!</title-component>
      <paragraph-component>
        Requested URL not found on server! Please check you are on the right domain and try again.
      </paragraph-component>
    </div>
  </section>
</template>

<script>
import TitleComponent from "../components/TitleComponent";
import ParagraphComponent from "../components/ParagraphComponent";

export default {
  components: {
    TitleComponent,
    ParagraphComponent,
  },
};
</script>

<style>
</style>