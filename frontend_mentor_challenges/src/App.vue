<template>
  <div class="wrapper">
    <nav class="navigation-menu">
      <lu class="menu-items">
        <li class="menu-item"><router-link to="/">Home</router-link></li>
        <li class="menu-item">
          <router-link to="/qr_code">qr_code</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/password_generator">password_generator</router-link>
        </li>
      </lu>
      <div id="indicator" class="indicator-bar"></div>
    </nav>
    <main class="main-container">
      <router-view />
    </main>
    <footer class="footer">Hola footer</footer>
  </div>
</template>

<script lang="ts">
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      isOverMenu: false,
      timer: 0,
      indicatorBar: {} as HTMLDivElement,
      mouseState: {
        isMoving: false,
        isStop: true,
      },
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    itemListEdithClass(remove = false) {
      const menuItems = document.querySelectorAll(".menu-item");
      if (menuItems) {
        menuItems.forEach((item) => {
          if (remove) {
            item.classList.remove("stop");
          } else {
            item.classList.add("stop");
          }
        });
      }
    },
    handleRightMovement(clientX: number) {
      // console.log("El mouse se está moviendo hacia la derecha");
      this.itemListEdithClass(true);
      if (this.indicatorBar) {
        this.indicatorBar.classList.add("right_movement");
        this.indicatorBar.classList.remove("left_movement");
        this.indicatorBar.classList.remove("stop");
        this.indicatorBar.style.transform = `translateX(${clientX - 100}px)`;
        this.indicatorBar.style.width = "100px";
      }
    },
    handleLeftMovement(clientX: number) {
      // console.log("El mouse se está moviendo hacia la izquierda");
      this.itemListEdithClass(true);
      if (this.indicatorBar) {
        this.indicatorBar.classList.add("left_movement");
        this.indicatorBar.classList.remove("right_movement");
        this.indicatorBar.classList.remove("stop");
        this.indicatorBar.style.transform = `translateX(${clientX}px)`;
        this.indicatorBar.style.width = "100px";
      }
    },
    handleStopMovement() {
      // console.log("El mouse no se está moviendo");
      this.itemListEdithClass();
      if (this.indicatorBar) {
        this.indicatorBar.classList.add("stop");
        this.indicatorBar.classList.remove("right_movement");
        this.indicatorBar.style.width = "50px";
        this.indicatorBar.classList.remove("left_movement");
      }
    },
    handleMouseMovement(xValue: number, clientX: number) {
      if (xValue > 0) {
        this.handleRightMovement(clientX);
      } else if (xValue < 0) {
        this.handleLeftMovement(clientX);
      } else {
        this.handleStopMovement();
      }
    },
  },

  mounted() {
    this.indicatorBar = document.getElementById("indicator") as HTMLDivElement;
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY, target, movementX } = e;
      const indicatorBar = document.querySelector(
        ".indicator-bar"
      ) as HTMLDivElement;
      let isMouseMoving = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const x = clientX;
        if (x === clientX) {
          this.handleStopMovement();
        }
      }, 200);

      this.handleMouseMovement(movementX, clientX);
    });
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55px auto 50px;
  grid-column-gap: 0px;
  grid-row-gap: 4px;
}
.navigation-menu {
  background-color: RGB(241, 247, 251);
  overflow: hidden;
  position: sticky;
  display: flex;
  flex-direction: column;

  .menu-items {
    height: 50px;
    list-style-type: none;
    .menu-item {
      float: left;
      display: block;
      text-align: center;
      padding: 14px 16px;
      font-size: 17px;
      position: relative;
      a {
        color: rgb(131, 106, 106);
        text-decoration: none;
      }
      &:hover {
        color: rgb(16, 15, 15);
        background-color: rgb(255, 255, 255);
        &.stop::after {
          content: "";
          display: block;
          position: absolute;
          bottom: -3px;
          right: 0;
          height: 3px;
          width: 100%;
          background-color: rgb(160, 160, 183, 1);
          opacity: 1;
          transition: opacity 0.4s ease-in-out;
        }
        &:not(.stop)::after {
          content: "";
          display: block;
          position: absolute;
          bottom: -3px;
          right: 0;
          height: 3px;
          width: 100%;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
        }
      }
    }
  }
  .indicator-bar {
    background-color: rgb(160, 160, 183);
    height: 3px;
    width: 0px;
    transition: width 0.2s linear;
    position: relative;
    border-radius: 9px;
    &.right_movement {
      transform-origin: top right;
      background: linear-gradient(
        90deg,
        rgba(160, 160, 183, 0) 0%,
        rgba(160, 160, 183, 0.5) 80%,
        rgba(160, 160, 183, 1) 100%
      );
      &::after {
        content: "";
        position: absolute;
        right: 0;
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 9px;
        background-color: rgb(97, 97, 103);
      }
    }
    &.left_movement {
      transform-origin: top left;
      background: linear-gradient(
        90deg,
        rgba(160, 160, 183, 1) 0%,
        rgba(160, 160, 183, 0.5) 20%,
        rgba(160, 160, 183, 0.19) 100%
      );
      &::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 9px;
        background-color: rgb(97, 97, 103);
      }
    }
    &.stop {
      opacity: 0;
    }
  }
}
</style>
