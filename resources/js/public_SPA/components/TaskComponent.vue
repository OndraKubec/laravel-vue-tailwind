<template>
    <div class="my-10">
        <h3 class="font-serif text-2xl">{{ taskTitle }}</h3>
        <p>{{ taskDescription }}</p>
    </div>
</template>

<script>
export default {
    props: [
        'taskTitle',
        'taskDescription'
    ]
}
</script>

<style>

</style>