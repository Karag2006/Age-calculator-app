<script setup>
    import { ResultElement } from "./";
</script>

<template>
    <div class="result">
        <ResultElement name="years" />
        <ResultElement name="months" />
        <ResultElement name="days" />
    </div>
</template>

<style lang="scss">
    .result {
        font-size: 3rem;
        font-weight: 800;
    }
</style>
