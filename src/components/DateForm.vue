<script setup>
    import { DateField } from "./";
</script>

<template>
    <form method="post" on-submit="prevent.default">
        <DateField name="day" placeholder="DD" />
        <DateField name="month" placeholder="MM" />
        <DateField name="year" placeholder="YYYY" />
    </form>
</template>

<style lang="scss">
    form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>
