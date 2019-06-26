var app = new Vue({
  el: "#app",
  mounted() {
    this.player.muted = true;
  },
  data: {
    gifPath: "assets/img/",
    soundPath: "assets/sounds/1.mp3",
    currentSlide: 1,
    slidesCount: 10,
    menuSlide: 2,
    introSlide: 1,
    menuSlides: [
      { slide: 3, title: "Лисица и виноград" },
      { slide: 4, title: "Дерево" },
      { slide: 6, title: "Стрекоза и муравей" },
      { slide: 8, title: "Ворона и лисица" }
    ],
    sound: false
  },
  computed: {
    updateGif() {
      return this.currentSlide && Math.random();
    },
    player() {
      return document.getElementsByTagName("audio")[0];
    }
  },
  methods: {
    toggleSlide(slide) {
      if (slide < this.slidesCount && slide >= 1) {
        this.currentSlide = slide;
      }
      if (slide > this.slidesCount) {
        this.currentSlide = 1;
      }
    },
    toggleSound() {
      this.player.play();
      this.player.muted = !this.player.muted;
      this.sound = !this.sound;
    }
  }
});
