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
        <span class="error" v-if="store.errors[props.name]">{{
            store.errors[props.name]
        }}</span>
    </div>
</template>

<style lang="scss">
    .Date--Input {
        label {
            margin-bottom: 0.3rem;
            display: block;

            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--light-gray);
            &.active {
                color: var(--off-black);
            }

            &.error {
                color: var(--error-color);
            }
        }
        input {
            display: block;
            width: 100%;

            padding: 0.5rem;

            font-size: 1.5rem;
            font-weight: 800;

            border: 2px solid var(--light-gray);
            border-radius: 0.5rem;

            &::placeholder {
                color: var(--light-gray);
            }

            &.error {
                border-color: var(--error-color);
            }

            &:focus {
                outline: none;
                border-color: var(--purple);

                &::placeholder {
                    color: var(--off-black);
                }
            }
        }
        span {
            display: block;
            font-size: 0.7rem;
            font-weight: 400;
            &.error {
                color: var(--error-color);
            }
        }
    }
</style>
