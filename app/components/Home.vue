<template>
  <Page>
    <ActionBar>
      <Label :text="'Slide to unlocked: ' + slidePercentDisplay" />
    </ActionBar>
    <ScrollView height="100%">
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
        <Label
          marginTop="80"
          fontSize="20"
          fontWeight="bold"
          text="Styling demos:"
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
          buttonTextSize="40"
          buttonTextColor="red"
          buttonTextFontWeight="bold"
          buttonBackgroundColor="green"
        />
        <UnlockSlider
          marginTop="20"
          height="80"
          radius="10"
          infoText="Slide"
          infoTextSize="30"
          infoTextColor="white"
          containerBackgroundColor="black"
          buttonText="⮕"
          buttonTextSize="50"
          buttonTextColor="black"
          buttonBackgroundColor="white"
          buttonTextFontWeight="bold"
        />
        <UnlockSlider
          marginTop="20"
          height="80"
          radius="80"
          infoText="slide it"
          infoTextSize="20"
          infoTextColor="white"
          containerBackgroundColor="green"
          buttonText="➤"
          buttonTextSize="70"
          buttonTextColor="lightgreen"
          buttonBackgroundColor="white"
          buttonTextFontWeight="bold"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
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