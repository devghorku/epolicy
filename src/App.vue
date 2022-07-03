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
        mounted() {
            setTimeout(() => {
                let el = document.getElementById('engt-close-button');
                let el2 = document.getElementById('engt-launcher-button');
                if (el) {
                    el.addEventListener("click", function () {
                        if(el2){
                            el2.classList.add('visited')
                        }
                    })
                }
            }, 1000)

        }
    }
</script>

<style>
</style>
