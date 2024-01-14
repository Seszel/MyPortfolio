<template>
  <header>
    <nav>
      <h1>
        <RouterLink :to="{ name: 'home' }">Joanna Adamczyk</RouterLink>
      </h1>
      <ul>
        <li>
          <RouterLink :to="{ name: 'about' }">{{ $t('nav.about') }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'projects' }">{{ $t('nav.projects') }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'music' }">{{ $t('nav.music') }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'contact' }">{{ $t('nav.contact') }}</RouterLink>
        </li>
      </ul>
      <div>
        <button @click="changeLang('en')">Switch to English</button>
        <button @click="changeLang('pl')">Zmień na polski</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
