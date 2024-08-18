<template>
    <header>
        <slot></slot>
    </header>
    <slot name="showMenu"></slot>
</template>

<style scoped>
header {
    position: absolute;
    background-color: #000000;
    width: 100%;
    height: 70px;
}
</style>