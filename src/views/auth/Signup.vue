<template>
    <form @submit.prevent="handleSubmit">
        <h3>Signup</h3>
        <input type="text" placeholder="Display name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button v-if="!isPending">Sign up</button>
        <button v-if="isPending" disabled>Loading</button>
        <div>
            <p v-if="error">{{ error }}</p>
        </div>
    </form>
</template>

<script>
import useSignup from '@/composables/useSignup';
import { ref } from 'vue';

export default {
    setup() {
        const {error, signup, isPending} = useSignup();

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value);
            if (!error.value) {
                console.log('user signed up');
            }
        }

        const email = ref('');
        const password = ref('');
        const displayName = ref('');

        return { email, password, displayName, isPending, error, handleSubmit }
    }
}
</script>

<style></style>