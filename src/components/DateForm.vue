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
        grid-template-columns: 5.8rem 5.8rem 5.8rem;
        gap: 0.5rem;

        @media screen and (min-width: 400px) {
            grid-template-columns: 10rem 10rem 10rem 10rem;
            gap: 2rem;
        }
    }
</style>
