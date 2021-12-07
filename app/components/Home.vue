<template>
  <Page>
    <ActionBar>
      <Label :text="'Slide to unlocked: ' + slidePercentDisplay" />
    </ActionBar>
    <StackLayout margin="20">
      <UnlockSlider
        ref="unlockSlider"
        :buttonSize="70"
        buttonText="→"
        infoText="Slide to unlock"
        @change="sliderChange"
      />
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