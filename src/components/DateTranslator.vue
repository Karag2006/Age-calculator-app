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

            background-color: var(--purple);
            transition-property: background;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;

            cursor: pointer;

            &:hover,
            &:focus {
                outline: 0;
                background-color: var(--off-black);
            }

            @media screen and (min-width: 840px) {
                top: -3rem;
                height: 6rem;
                left: calc(100% - 6rem);
                padding: 1.5rem;

                img {
                    height: 100%;
                    aspect-ratio: 1;
                }
            }
        }
    }
</style>
