<script setup>
    defineProps(["name"]);
</script>

<template>
    <div class="result--element">
        <span class="result--element-number">-- </span>
        <span class="result--element-name">{{ name }}</span>
    </div>
</template>

<style lang="scss">
    .result--element {
        margin-block: -0.5rem;

        &-number {
            color: var(--purple);
        }

        &-name {
            color: var(--off-black);
        }
    }
</style>
