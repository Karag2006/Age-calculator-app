<script setup>
    import { useAppStore } from "../Store/AppStore";
    const store = useAppStore();

    const props = defineProps(["name", "placeholder"]);
</script>

<template>
    <div class="Date--Input">
        <label :for="props.name" :class="store.classes[props.name]">{{
            props.name
        }}</label>
        <input
            :class="store.classes[props.name]"
            :id="props.name"
            :name="props.name"
            v-model="store.date[props.name]"
            :placeholder="props.placeholder"
        />
        <span class="error">{{ "fehler für " + props.name }}</span>
    </div>
</template>

<style lang="scss">
    .Date--Input {
        label {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.2rem;

            &.error {
                color: var(--error-color);
            }
        }
        input {
            width: 5rem;

            padding: 0.5rem;

            font-size: 1.2rem;
            font-weight: 800;

            border: 1px solid var(--light-gray);
            border-radius: 0.5rem;

            &.error {
                border-color: var(--error-color);
            }
        }
        span {
            font-size: 0.7rem;
            font-weight: 400;
            &.error {
                color: var(--error-color);
            }
        }
    }
</style>
