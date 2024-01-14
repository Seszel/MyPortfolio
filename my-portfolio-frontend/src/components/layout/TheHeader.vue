<template>
  <header>
    <nav>
      <h1>
        <RouterLink :to="{ name: 'home' }">Joanna Adamczyk</RouterLink>
      </h1>
      <p>
        <RouterLink :to="{ name: 'about' }">O mnie</RouterLink>
        <RouterLink :to="{ name: 'projects' }">Projekty</RouterLink>
        <RouterLink :to="{ name: 'music' }">Muzyka</RouterLink>
        <RouterLink :to="{ name: 'contact' }">Kontakt</RouterLink>
      </p>
    </nav>
  </header>
</template>
