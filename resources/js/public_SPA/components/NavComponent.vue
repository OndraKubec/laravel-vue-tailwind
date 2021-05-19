<template>
    <section id="nav" class="bg-ct-black text-ct-white select-none">
        <div class="container flex justify-between h-20">
            <!-- Logo -->
            <p class="logo font-serif text-4xl md:text-5xl flex items-center">OUTPOST</p>
            <!-- Hamburger for mobile links -->
            <svg @click="navOpen = !navOpen" class="lg:hidden my-auto" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 21">
                <g transform="translate(-411.515 -13)">
                    <line x2="21" transform="translate(413.015 14.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                    <line x2="21" transform="translate(413.015 23.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                    <line x2="21" transform="translate(413.015 32.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                </g>
            </svg>
            <!-- Desktop links -->
            <ul class="hidden lg:block text-2xl font-serif my-auto">
                <li v-for="navRoute in navRoutes" :key="navRoute.path" class="inline leading-loose px-7">
                    <router-link :to="navRoute.path">{{navRoute.name}}</router-link>
                </li>
            </ul>
            <!-- Mobile links -->
            <div :class="navOpen ? 'block' : 'hidden' " class="lg:hidden absolute w-screen h-screen left-0 top-0 z-10">
                <ul class="mobile-ul float-right flex flex-col bg-ct-black h-screen w-3/5 sm:w-1/2 text-2xl md:text-3xl font-serif my-auto">
                    <li class="lg:hidden h-20 flex flex-col justify-center ml-auto">
                        <svg @click="navOpen = !navOpen" class="cross" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 19.243 19.243">
                            <g transform="translate(-352.379 -19.379)">
                                <line y1="15" x2="15" transform="translate(354.5 21.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                                <line x1="15" y1="15" transform="translate(354.5 21.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                            </g>
                        </svg>
                    </li>
                    <li @click="navOpen = !navOpen" v-for="navRoute in navRoutes" :key="navRoute.path" class="inline leading-loose">
                        <router-link :to="navRoute.path">{{navRoute.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import navRoutes from "../router/routes";

export default {
    data(){
        return{
            navOpen: false,
            navRoutes: navRoutes
        }
    },
    mounted(){
        function addNavStyles(){
            $(".mobile-ul").css("paddingRight",$(".container").css("marginRight")).css("paddingLeft",$(".container").css("marginLeft"));
        }
        $(window).on("load resize", () => addNavStyles());
    }
}
</script>

<style>

</style>