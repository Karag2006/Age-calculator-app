<script setup>
    import { useAppStore } from "../Store/AppStore";
    const store = useAppStore();
</script>

<template>
    <div class="seperator">
        <button type="submit">
            <img
                src="../assets/images/icon-arrow.svg"
                alt="Arrow Icon pointing at Result"
            />
        </button>
    </div>
</template>

<style lang="scss">
    .seperator {
        position: relative;
        width: 100%;
        height: 1px;

        margin-block: 4rem;

        background: var(--light-gray);

        button {
            position: absolute;
            top: -2rem;
            left: calc(50% - 2rem);

            height: 4rem;
            aspect-ratio: 1;

            padding: 1rem;

            border: 0;
            border-radius: 50%;

            background: var(--purple);

            cursor: pointer;

            &:hover {
                background: var(--off-black);
            }

            @media screen and (min-width: 400px) {
                left: calc(100% - 4rem);
            }
        }
    }
</style>
