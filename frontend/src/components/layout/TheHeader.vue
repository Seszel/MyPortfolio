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
        <li class="dropdown">
          <a>
            <span :class="flagIcon"></span>
          </a>
          <div class="dropdown-content">
            <a v-for="language in availableLanguages" :key="language">
              <span
                :class="language === 'en' ? 'fi fi-gb' : 'fi fi-pl'"
                @click="changeLanguage(language)"
              ></span>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      availableLanguages: ['pl', 'en']
    }
  },
  computed: {
    flagIcon() {
      if (this.$i18n.locale === 'pl') {
        return 'fi fi-pl'
      } else {
        return 'fi fi-gb'
      }
    }
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language
      this.updateAvailableLanguagesOrder(language)
    },
    updateAvailableLanguagesOrder(language) {
      const index = this.availableLanguages.indexOf(language)
      if (index !== -1) {
        this.availableLanguages.splice(index, 1)
        this.availableLanguages.unshift(language)
      }
    }
  }
}
</script>

<style scoped>
header {
  background-color: var(--color-header);
  font-family: 'Cinzel', serif;
}

h1 a {
  font-weight: bold;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  display: flex;
  flex-direction: row;
  float: left;
}

a,
p {
  display: block;
  text-decoration: none;
  color: var(--vanilla);
  transition: 0.4s;
  padding: 6px;
}

a:hover {
  color: var(--gamboge);
}
li a.router-link-active {
  text-decoration: underline;
  color: var(--gamboge);
}
.dropdown-content a:hover {
  background-color: var(--gamboge);
  border-radius: 4px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--vanilla);
  border-radius: 4px;
}
.dropdown-content span {
  cursor: pointer;
}
.dropdown-content span:hover {
  background-color: rgb(193, 180, 174, 0.4);
  color: black;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
