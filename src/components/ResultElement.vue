<script setup>
    import { useAppStore } from "../Store/AppStore";
    defineProps(["name"]);

    const store = useAppStore();
</script>

<template>
    <div class="result--element">
        <span class="result--element-number">{{ store.result[name] }}</span>
        <span class="result--element-name">{{ name }}</span>
    </div>
</template>

<style lang="scss">
    .result--element {
        margin-block: -0.5rem;

        @media screen and (min-width: 400px) {
            margin-block: -1.5rem;
        }

        &-number {
            color: var(--purple);
            margin-right: 0.5rem;
        }

        &-name {
            color: var(--off-black);
        }
    }
</style>
