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
            @focus="store.formElementFocus(props.name)"
            @blur="store.formElementBlur(props.name)"
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
            letter-spacing: 0.1rem;
            color: var(--smokey-gray);
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
                color: var(--smokey-gray);
            }

            &.error {
                border-color: var(--error-color);
            }

            &:focus,
            &:hover {
                outline: none;
                border-color: var(--purple);

                &::placeholder {
                    color: var(--off-black);
                }
            }
        }
        span {
            display: block;
            margin-top: 0.5rem;
            font-size: 0.5rem;
            font-weight: 700;
            &.error {
                color: var(--error-color);
            }
        }
    }
</style>
