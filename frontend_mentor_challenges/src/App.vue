<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/qr_code">qr_code</router-link> |
    <router-link to="/password_generator">password_generator</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>
