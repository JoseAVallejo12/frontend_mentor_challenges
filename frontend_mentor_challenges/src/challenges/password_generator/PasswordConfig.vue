<template>
  <form class="config">
    <label class="config__label" for="range">
      <span class="config__label-title">Character length</span>
      <span class="config__label-value">{{ value }}</span>
    </label>
    <input
      class="config__input"
      id="range"
      type="range"
      min="0"
      v-bind:max="maxRangeValue"
      value="0"
      @input="backGroundInput"
      :class="{ 'config__input--thumb-black': range >= 1 }"
    />
    <div class="config__checkboxes">
      <label>
        <input id="abc" class="config__checkbox" type="checkbox" />
        <span class="config__checkbox-title">Include ABC</span>
      </label>
      <label>
        <input class="config__checkbox" type="checkbox" />
        <span class="config__checkbox-title">Include abc</span>
      </label>
      <label>
        <input class="config__checkbox" type="checkbox" />
        <span class="config__checkbox-title">Include 123</span>
      </label>
      <label>
        <input class="config__checkbox" type="checkbox" />
        <span class="config__checkbox-title">Include !@#</span>
      </label>
    </div>
    <div class="config__complexity"></div>
    <div class="config__button"></div>
  </form>
</template>

<script lang="ts">
export default {
  el: "password-config",
  name: "PasswordConfig",
  data() {
    return {
      range: 0,
      value: 0,
      maxRangeValue: 30,
    };
  },
  methods: {
    backGroundInput(e: any) {
      let style = document.getElementById("stylePseudo");
      if (!style) {
        style = document.createElement("style");
        style.id = "stylePseudo";
        document.head.appendChild(style);
      }
      this.range = (e.target.value * 100) / this.maxRangeValue;
      this.value = e.target.value;
      const cssRule = this.getRuleCss(this.range);
      style.innerHTML = cssRule;
    },
    getRuleCss(value: number) {
      return `
        .config__input::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #a3ffaa 0%, #a3ffaa ${value}%, #12121a ${value}%, #12121a 100%) !important; }
        `;
    },
  },
};
</script>

<style scoped lang="scss">
$primary-color: #12121a;
$secondary-color: #24232b;
$third-color: #a3ffaa;
$fifth-color: #24232b;
$sixth-color: #facc66;
$primary-text-color: #e8e4eb;
$secondary-text-color: #e8e4eb;

@mixin track() {
  height: 7px;
  padding: 0;
  cursor: pointer;
  background: $primary-color;
}

@mixin thumb() {
  box-sizing: border-box;
  -webkit-appearance: none;
  width: 30px;
  height: 30px;
  margin-top: -12px;
  border-radius: 50%;
  background: $secondary-text-color;
}

@mixin progress() {
  background: rgb(184, 255, 153);
  height: 7px;
}

.config {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  width: 100%;
  background: $secondary-color;
  padding: 15px;
  &__label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &-title {
      color: $secondary-text-color;
    }
    &-value {
      color: $third-color;
      font-size: 1.5rem;
    }
  }
  &__input {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    outline: none;
    margin-bottom: 10px;
    width: 100%;
    &--thumb-black::-webkit-slider-thumb {
      background: $secondary-color !important;
      border: 1px solid $third-color;
    }
    &::-webkit-slider-runnable-track {
      @include track;
    }
    &::-moz-range-track {
      @include track;
    }
    &::-ms-track {
      @include track;
    }
    &::-webkit-slider-thumb {
      @include thumb;
    }
    &::-moz-range-thumb {
      @include thumb;
    }
    &::-ms-thumb {
      @include thumb;
    }
    &::-moz-range-progress {
      @include progress;
    }
    &::-ms-fill-upper {
      @include progress;
    }
  }
  &__checkboxes {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
  &__checkbox-title {
    color: $secondary-text-color;
    margin-left: 15px;
  }
  &__checkbox {
    background: #a3ffaa;
    width: 15px;
    height: 15px;
    &:checked {
      accent-color: $third-color;
    }
  }
  &__complexity {
    width: 100%;
    height: 80px;
    background: $primary-color;
  }
  &__button {
    width: 100%;
    height: 50px;
    border: 1px solid $third-color;
  }
}
</style>
