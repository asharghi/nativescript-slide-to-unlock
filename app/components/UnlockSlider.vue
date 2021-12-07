<template>
  <GridLayout
    background="#febd11"
    width="100%"
    margin="0"
    padding="2"
    :borderRadius="buttonSize"
    :height="buttonSize"
  >
    <Label
      ref="infoText"
      width="100%"
      textAlignment="center"
      margin="0"
      padding="0"
      fontSize="16"
      :text="infoText"
      verticalAlignment="center"
      :opacity="1 - slidePercent * 1.5"
    />
    <Button
      ref="slideButton"
      @pan="slide"
      z-index="0"
      :borderRadius="buttonSize"
      :width="buttonSize"
      :height="buttonSize"
      margin="0"
      padding="0"
      fontSize="20"
      :text="buttonText"
      horizontalAlignment="left"
    />
  </GridLayout>
</template>

<script>
export default {
  methods: {
    reset() {
      this.$refs.slideButton.nativeView
        .animate({
          translate: { x: 0, y: 0 },
          duration: 100,
        })
        .then(() => {
          this.slidePercent = 0;
        });
    },
    slide(args) {
      const buttonView = this.$refs.slideButton.nativeView;
      const gridViewWidth =
        buttonView.parent.getActualSize().width -
        buttonView.parent.paddingLeft -
        buttonView.parent.paddingRight;
      if (args.state === 1) {
        // Start paning
        this.prevDeltaX = 0;
        this.slidePercent = 0;
      } else if (args.state === 2) {
        // Paning
        buttonView.translateX += args.deltaX - this.prevDeltaX;
        this.prevDeltaX = args.deltaX;
        if (buttonView.translateX < 0) {
          buttonView.translateX = 0;
          this.prevDeltaX = 0;
        } else {
          const buttonPosition = this.buttonSize + buttonView.translateX;
          if (buttonPosition > gridViewWidth) {
            buttonView.translateX = gridViewWidth - this.buttonSize;
            this.prevDeltaX = 0;
          }
        }
        this.slidePercent =
          (this.buttonSize + buttonView.translateX) / gridViewWidth;
      } else if (args.state === 3) {
        // Done paning
        if (gridViewWidth !== this.buttonSize + buttonView.translateX) {
          this.reset();
        }
      }
    },
  },
  data() {
    return {
      prevDeltaX: 0,
      slidePercent: 0,
    };
  },
  watch: {
    slidePercent: function () {
      this.$emit("change", this.slidePercent);
    },
  },
  props: {
    buttonSize: {
      type: Number,
      default: 70,
    },
    buttonText: {
      type: String,
      default: "→",
    },
    infoText: {
      type: String,
      default: "Slide to unlock",
    },
  },
};
</script>