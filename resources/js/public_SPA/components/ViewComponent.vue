<template>

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>

</template>

<script>
export default {

}
</script>

<style scoped>

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.3s;
    }


    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }

</style>