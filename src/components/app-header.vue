<template>
    <header>
        <slot></slot>
    </header>
    <slot name="showMenu"></slot>
</template>

<style scoped>
header {
    background-color: #000000f5;
    position: absolute;
    width: 100%;
    height: 70px;
}
</style>