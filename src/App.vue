<template>
    <q-layout view="hHh Lpr lff">
        <app-header/>
        <q-page-container style="padding-bottom: 0">
            <q-page>
                <router-view/>
            </q-page>
        </q-page-container>
        <app-footer/>
    </q-layout>
</template>

<script>

    import AppHeader from "./components/app-header";
    import AppFooter from "./components/app-footer";

    export default {
        name: 'LayoutDefault',
        components: {AppFooter, AppHeader},
    }
</script>

<style>
</style>
