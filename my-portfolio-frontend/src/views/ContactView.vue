<template>
  <!-- <div>
    {{ $t('contactView.all') }}
  </div> -->
  <div class="content">
    <h2>Formularz kontaktowy</h2>
  </div>
  <BaseCard>
    <form @submit.prevent="sendEmail">
      <div>
        <label>{{ $t('contactView.nameLabel') }}</label>
        <input type="text" v-model="name" name="name" :placeholder="$t('contactView.nameInput')" />
      </div>
      <div>
        <label>{{ $t('contactView.emailLabel') }}</label>
        <input
          type="email"
          v-model="email"
          name="email"
          :placeholder="$t('contactView.emailInput')"
        />
      </div>
      <div>
        <label>{{ $t('contactView.messageLabel') }}</label>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          :placeholder="$t('contactView.messageInput')"
        >
        </textarea>
      </div>
      <BaseButton type="submit">{{ $t('button.send') }}</BaseButton>
    </form>
  </BaseCard>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      const apiKey = import.meta.env.VITE_API_KEY
      const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      try {
        emailjs
          .sendForm(emailjsServiceId, emailjsTemplateId, e.target, apiKey, {
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then((response) => {
            console.log('E-mail wysłany:', response)
            // Dodaj kod obsługi pozytywnej odpowiedzi
          })
          .catch((error) => {
            console.error('Błąd podczas wysyłania e-maila:', error)
            // Dodaj kod obsługi błędu
          })
      } catch (error) {
        console.error('Błąd podczas wysyłania e-maila:', error)
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 2rem;
}

label {
  float: left;
  font-size: large;
}

input[type='text'],
[type='email'],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-family: 'Fauna One', serif, 'Verdana', sans-serif;
  font-size: medium;
  opacity: 0.9;
  /* background-color: var(--vanilla);
  opacity: 0.7; */
}


/* input[type='submit'] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
} */

/* * {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}







input[type='submit']:hover {
  background-color: #45a049;
} */
</style>
