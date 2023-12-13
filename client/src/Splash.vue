<template>

<div class="container">
    <div class="desktop">
      <div class="links-section">
        <div class="links-top">

          <div class="link-icon">
            <a href="#" @click="changeImage('../assets/img/heist.png')">
              <img class="desktop_icon" src="/assets/icon/icon_home.png" alt="">
              <p>Home</p>
            </a>
          </div>

          <div class="link-icon">
            <a href="#" @click="changeImage('../assets/img/window_contact.png')">
              <img class="desktop_icon" src="/assets/icon/icon_contact.png" alt="">
              <p>Contact</p>
            </a>
          </div>
          <div class="link-icon">
            <a a href="#" @click="changeImage('../assets/img/window_members.png')">
              <img class="desktop_icon" src="/assets/icon/icon_organization.png" alt="">
              <p>Organization</p>
            </a>
          </div>
          <div class="link-icon">
            <a href="#" @click="changeImage('../assets/img/window_archive.png')">
              <img class="desktop_icon" src="/assets/icon/icon_archive.png" alt="">
              <p>Archive</p>
            </a>
          </div>
          <p></p>
        </div>
      </div>

      <div class="img-section">
        <img class="splash" :src="imgUrl" />
      </div>
      
      <div class="links-section">
        <div class="links-bottom">
          <div class="link-icon">
            <a target="_blank" href="https://discord.gg/yjZSXWcXte">
              <img class="desktop_icon" src="/assets/icon/icon_discord.png" alt="">
              <p>Discord</p>
            </a>
          </div>
          <div class="link-icon">
            <a target="_blank" href="https://www.twitter.com/heistht">
              <img class="desktop_icon" src="/assets/icon/icon_twitter.png" alt="">
              <p>Twitter</p>
            </a>
          </div>
          <div class="link-icon">
            <a target="_blank" href="https://www.instagram.com/heist">
              <img class="desktop_icon" src="/assets/icon/icon_instagram.png" alt="">
              <p>Instagram</p>
            </a>
          </div>
          <div class="link-icon">
            <a target="_blank" href="https://www.heist.net/">
              <img class="desktop_icon" src="/assets/icon/icon_shop.png" alt="">
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
  background-color: rgb(32, 33, 36);
}

.desktop {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.desktop_icon {
  margin-bottom: 10px;
}


.links-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2em;
  z-index:10px;
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
  height: 100px;
  width: 70px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  letter-spacing: 0px;
}

.splash {
  position: absolute;
}

.img-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
}
</style>
