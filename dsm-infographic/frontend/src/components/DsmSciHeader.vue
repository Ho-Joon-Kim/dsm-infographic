<template>
    <!-- DSMHS 로고 -->
    <div class="dsmsci-logo">
        <h1><a href="/">{{ title }}</a></h1>
    </div>
</template>

<script>
export default {
    name: 'dsmsci-header',
    props: {
        title: String,
    },
}
</script>

<style lang="scss">
    @import '@/styles/dsm-infographic/header.scss';
</style>
