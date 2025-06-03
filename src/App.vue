<template>
  <div class="app">
    <div v-if="nombre">
      <h1>
        {{ saludo }} {{ nombre }} 🎉
      </h1>
      <p>Valentina's fifteen party</p>
      <p><strong>Pase personal</strong></p>
    </div>
    <div v-else>
      <h1>Por favor escanea el código QR o proporciona un nombre válido.</h1>
    </div>
  </div>
</template>

<script>
import invitados from './invitados.js'

export default {
  name: 'App',
  data() {
    return {
      nombre: '',
      saludo: '',
      pases: 0
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search)
    const nombreParam = urlParams.get('nombre')

    if (nombreParam) {
      const encontrado = invitados.find(i => i.nombre.toLowerCase() === nombreParam.toLowerCase())

      if (encontrado) {
        this.nombre = encontrado.nombre
        this.saludo = encontrado.genero === 'F' ? 'Bienvenida' : 'Bienvenido'
        this.pases = encontrado.pases || 0
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #D7C8DF;
  color: #0D0D0D;
  font-family: sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #EADDEE;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
</style>
