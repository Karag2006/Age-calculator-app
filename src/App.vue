<script setup>
    import {
        Attribution,
        Card,
        DateForm,
        DateTranslator,
        Result,
    } from "./components";
    import { useAppStore } from "./Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <Card>
        <DateForm />
        <DateTranslator />
        <Result />
    </Card>
    <Attribution />
</template>
