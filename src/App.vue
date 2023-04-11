<script setup>
    import { Attribution, Card, DateForm, Result } from "./components";
    import { useAppStore } from "./Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <Card>
        <DateForm />
        <Result />
    </Card>
    <Attribution />
</template>
