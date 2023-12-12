<template>
  <div class="container">
    <div class="desktop">
      <div class="links-section">

        <div class="links-top">
          <div class="link-icon">
            <a target="self" href="_blank">
              <img class="img__link" src="..\public\assets\icon\network_internet_pcs_installer-2.png" alt="">
              <p>Home</p>
            </a>
          </div>
          <div class="link-icon">
            <a onclick="toggleImage('image1')">
              <img class="img__link" src="../public/assets/icon/contact__msagent.png" alt="">
              <p>Contact</p>
            </a>
          </div>
          <div class="link-icon">
            <a href="_blank">
              <img class="img__link" style="width: 40px;px;" src="../public/assets/icon/utilities-terminal.png" alt="">
              <p>Organization</p>
            </a>
          </div>
          <div class="link-icon">
            <a href="_blank">
              <img class="img__link archive-ico" src="../public/assets/icon/briefcase.png" alt="">
              <p>Archive</p>
            </a>
          </div>
          <p></p>
        </div>

        <div class="links-bottom">
          <div class="link-icon">
            <a target="_blank" href="https://www.twitter.com/heistht">
              <img class="img__link" src="../public/assets/icon/twitter.png" alt="">
              <p>Twitter</p>
            </a>
          </div>
          <div class="link-icon">
            <a target="_blank" href="https://www.instagram.com/heist">
              <img class="img__link" src="../public/assets/icon/instagram.png" alt="">
              <p>Instagram</p>
            </a>
          </div>
          <div class="link-icon">
            <a target="_blank" href="https://www.heist.net/">
              <img class="img__link cart-img" src="../public/assets/icon/shop.png" alt="">
              <p>Shop</p>
            </a>
          </div>
        </div>
      </div>

      <div class="img-section">
        <img class="img__interface" src="../public/assets/img/heist.png" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
</script>

<!--  -->
<!--  -->
<!--  -->


<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, "Open Sans", OpenSans, Roboto, Segoe UI, sans-serif;
}

a {
  text-decoration: none;
  color: #fff;
  text-shadow: chartreuse;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.ascii-art {
  font-family: monospace;
  white-space: pre;
}

.decal {
  position: absolute;
  display: flex;
  height: 300px;
  justify-content: flex-end;
}

.desktop {
  display: flex;
  height: 100%;
}

.cart-img,
.archive-ico {
  width: 45px;
}

.links-section {
  display: flex;
  flex-direction: column;
  width: 25%;
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

.link-icon {
  height: 75px;
  width: 80px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

}

.links-top {
  display: flex;
  flex-direction: column;
}

.links-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.container {
  display: block;
  height: 100vh;
  background-color: black;
}

.img__interface {
  position: relative;
}
</style>
