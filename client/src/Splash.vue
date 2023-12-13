<template>
  <div class="container">
    <div class="desktop">
      <div class="links-section">
        <div class="links-top">
          <div class="link-icon">
            <a href="#" @click="changeImage('../assets/img/heist.png')">
              <img class="desktop_icon" src="/assets/icon/network_internet_pcs_installer-2.png" alt="">
              <p>Home</p>
            </a>
          </div>
          <div class="link-icon">
            <a href="#" @click="changeImage('../assets/img/contact.png')">
              <img class="desktop_icon" src="/assets/icon/contact__msagent.png" alt="">
              <p>Contact</p>
            </a>
          </div>
          <div class="link-icon">
            <a a href="#" @click="changeImage('../assets/img/members-splash.png')">
              <img class="desktop_icon" style="width: 40px;" src="/assets/icon/utilities-terminal.png" alt="">
              <p>Organization</p>
            </a>
          </div>
          <div class="link-icon">
            <a href="_blank">
              <img class="desktop_icon archive-ico" src="/assets/icon/briefcase.png" alt="">
              <p>Archive</p>
            </a>
          </div>
          <p></p>
        </div>
      </div>
      <!--  -->
      <!--  -->

      <div class="img-section">


        <!--  -->
        <img class="splash" :src="imgUrl" />
        <!--  -->
      </div>
      <div class="links-section">
        <div class="links-bottom">
          <div class="link-icon">
            <a target="_blank" href="https://www.twitter.com/heistht">
              <img class="desktop_icon" src="/assets/icon/twitter.png" alt="">
              <p>Twitter</p>
            </a>
          </div>
          <div class="link-icon">
            <a target="_blank" href="https://www.instagram.com/heist">
              <img class="desktop_icon" src="/assets/icon/instagram.png" alt="">
              <p>Instagram</p>
            </a>
          </div>
          <div class="link-icon">
            <a target="_blank" href="https://www.heist.net/">
              <img class="desktop_icon cart-img" src="/assets/icon/shop.png" alt="">
              <p>Shop</p>
            </a>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Splash',
  data() {
    return {
      imgUrl: '../assets/img/heist.png',
    };
  },
  methods: {
    changeImage(newUrl) {
      this.imgUrl = newUrl;
    },
  },
};
</script>

<style>
.container {
  display: block;
  height: 100vh;
  background-color: black;
}

.desktop {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.desktop_icon {
  margin-bottom: 10px;
}

.cart-img,
.archive-ico {
  width: 45px;
}

.links-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6em;
}

.img-section {
  display: flex;
  width: 50%;
  height: fit-content;
  align-items: center;
  height: 100%;
}

.links-top {
  display: flex;
  flex-direction: row;
}

.links-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.link-icon {
  height: 75px;
  width: 80px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.img-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
}

.splash {
  position: absolute;
}
</style>
