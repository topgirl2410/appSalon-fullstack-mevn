<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
    <div>
        <nav class="my-5 flex gap-3">
            <RouterLink :to="{ name: 'new-appointment' }"
                class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-pink-600 hover:text-white"
                :class="route.name === 'new-appointment' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'">
                Servicios
            </RouterLink>

            <RouterLink :to="{ name: 'appointment-details' }"
                class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-pink-600 hover:text-white "
                :class="route.name === 'appointment-details' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'">
                Cita y Resumen
            </RouterLink>
        </nav>
    </div>
</template>



