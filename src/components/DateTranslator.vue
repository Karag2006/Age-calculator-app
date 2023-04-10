<script setup></script>

<template>
    <div class="seperator">
        <button></button>
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

            &::before {
                content: url(../assets/images/icon-arrow.svg);
                position: absolute;
                top: 0.5rem;
                left: 0.5rem;

                svg {
                    height: 22px;
                }
            }

            @media screen and (min-width: 400px) {
                left: calc(100% - 4rem);
            }
        }
    }
</style>
