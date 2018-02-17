<template>
  <div>
    <h1>Register</h1>
    <div class="row">
      <div class="col-sm-6">
        <form-register></form-register>
      </div>
    </div>
  </div>
</template>

<script>
import FormRegister from '@/components/FormRegister'
export default {
  name: 'home',
  components: { FormRegister }
}
</script>
