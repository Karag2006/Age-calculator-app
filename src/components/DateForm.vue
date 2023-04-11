<script setup>
    import { useAppStore } from "../Store/AppStore";
    import { DateField, DateTranslator } from "./";
    const store = useAppStore();
</script>

<template>
    <form method="post" @submit.prevent="store.calculateTimeSince">
        <div class="formElements">
            <DateField name="day" placeholder="DD" />
            <DateField name="month" placeholder="MM" />
            <DateField name="year" placeholder="YYYY" />
        </div>
        <DateTranslator />
    </form>
</template>

<style lang="scss">
    .formElements {
        display: grid;
        grid-template-columns: 5.8rem 5.8rem 5.8rem;
        gap: 0.5rem;

        @media screen and (min-width: 400px) {
            grid-template-columns: 10rem 10rem 10rem 10rem;
            gap: 2rem;
        }
    }
</style>
