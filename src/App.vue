<script setup>
    import Attribution from "./components/Attribution.vue";
    import { useAppStore } from "./Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <main>
        <Attribution />
    </main>
</template>
