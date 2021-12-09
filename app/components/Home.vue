<template>
  <Page>
    <ActionBar>
      <Label :text="'Slide to unlocked: ' + slidePercentDisplay" />
    </ActionBar>
    <StackLayout margin="20">
      <UnlockSlider ref="unlockSlider" @change="sliderChange" />
      <Button
        @tap="reset"
        v-if="slidePercent === 1"
        width="100%"
        margin="20 0 0 0"
        borderWidth="1"
        borderColor="black"
        borderRadius="70"
        height="70"
        fontSize="20"
        fontWeight="bold"
        textAlignment="center"
        text="Unlocked, tap to lock"
      />
      <UnlockSlider
        marginTop="20"
        height="50"
        radius="5"
        infoText="Customizable"
        infoTextSize="30"
        infoTextColor="yellow"
        containerBackgroundColor="blue"
        buttonText="➤"
        buttonTextSize="5"
        buttonTextColor="red"
        buttonTextFontWeight="bold"
        buttonBackgroundColor="green"
      />
    </StackLayout>
  </Page>
</template>

<script>
import UnlockSlider from "@/components/UnlockSlider.vue";
export default {
  components: {
    UnlockSlider,
  },
  methods: {
    sliderChange(percent) {
      this.slidePercent = percent;
    },
    reset() {
      this.$refs.unlockSlider.reset();
    },
  },
  computed: {
    slidePercentDisplay() {
      return Math.round(this.slidePercent * 100).toFixed(0) + "%";
    },
  },
  data() {
    return {
      slidePercent: 0,
    };
  },
};
</script>
<style scoped>
.slideButton {
  font-size: 5;
}
</style>