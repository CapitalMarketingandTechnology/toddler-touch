<template>
  <div>
    <h1>Login</h1>
    <div class="row">
      <div class="col-sm-6">
        <form-login></form-login>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from '@/components/FormLogin'
export default {
  name: 'home',
  components: { FormLogin }
}
</script>
