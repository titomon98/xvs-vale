<template>
  <div class="container">
    <h1 v-if="invitado">
      Bienvenid{{ invitado.genero === 'F' ? 'a' : 'o' }} {{ invitado.nombre }}
    </h1>
    <div v-if="invitado">
        <p >Valentina's Fifteen Party</p>
        <p >Pase personal</p>
    </div>

    <div v-else>
      <h2>No se encontró el invitado.</h2>
      <p>Revisa el enlace o el QR escaneado.</p>
    </div>
  </div>
</template>

<script>
import { listaInvitados } from '../invitados.js'

export default {
  name: 'InvitadoView',
  data() {
    return {
      invitado: null
    }
  },
  created() {
    const nombreParam = decodeURIComponent(this.$route.query.nombre || '').toLowerCase().trim()
    this.invitado = listaInvitados.find(inv =>
      inv.nombre.toLowerCase().trim() === nombreParam
    )
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
  background-color: #D7C8DF;
  border-radius: 12px;
  margin: 3rem auto;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(13, 13, 13, 0.2);
}
h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #0D0D0D;
}
p {
  font-size: 1.2rem;
  color: #0D0D0D;
}
</style>
