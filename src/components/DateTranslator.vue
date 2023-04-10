<script setup></script>

<template>
    <div class="seperator">
        <button>
            <img src="../assets/images/icon-arrow.svg" alt="Arrow Icon" />
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
            top: -1.25rem;
            left: calc(50% - 1.5rem);

            height: 3rem;
            aspect-ratio: 1;

            padding: 0.8rem;

            border: 0;
            border-radius: 50%;

            background: var(--purple);
        }
    }
</style>
