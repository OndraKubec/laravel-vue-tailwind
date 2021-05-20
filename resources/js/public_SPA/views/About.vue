<template>
  <section id="about">
    <div class="container">
      <title-component>This is about us page</title-component>
      <paragraph-component>
        Moderní espresso bar s výběrovou kávou od Nord Beans, výběrem italských
        vín a prosecca, cukrovinek a dortů. Otevřeli jsme na podzim 2019 s cílem
        přinést na anděl výběrovou kávu připravenou s precizností a láskou.
        Chceme ukázat lidem že je možné za stejnou cenu mít vyšší kvalitu nápojů
        a zároveň, že svět výběrové kávy je rozmanitý a plný různých chutí a
        tónů. Rádi poradíme s výběrem a přípravou i na doma. K tomu můžete
        ochutnat originální syrskou baklavu a další arabské cukrovinky, dorty
        nebo například croissanty. Nabídku v létě rozšiřujeme o různé koktejly a
        třeba oblíbené Cold Brew. Stavte se - těšíme se na Vás!<br>Na kvalitě naší
        kávy a nápojů spolupracujeme s šéfbaristou AMBIENTE Ondřejem Štoklem.
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