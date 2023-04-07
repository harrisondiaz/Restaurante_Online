<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <router-link to="/">
                <img src="@/components/icons/logoMain.ico" alt="Logo" width="50" height="50">
                <a class="navbar-brand name">RestaOnline</a>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <IconMapPin :size="30" color="red"></IconMapPin>
                        </li>
                        <li class="nav-item item">
                            {{address}}
                        </li>
                        <li class="nav-item">
                            <IconChevronDown :size="30"></IconChevronDown>
                        </li>

                    </ul>
                    <div class="input-group mb-3 input-group-lg search">
                                <span class="input-group-text">
                                    <icon-chef-hat :size="15"></icon-chef-hat>
                                </span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <span class="input-group-text">
                                    <icon-search :size="15"></icon-search>
                                </span>
                    </div>
                    <router-link to="login"><div class="login navbar-nav me-auto " type="button">
                            <icon-user  size="20"></icon-user>
                    <p class="login ">Ingresar</p>
                    </div></router-link>
                    <div style="margin-right: 30px;margin-left: 10px"></div>
                    <div class="d-flex" style="height: 40px;">
                        <div class="vr"></div>
                    </div>
                    <div style="margin-right: 30px;margin-left: 10px"></div>
                    <icon-shopping-cart size="35" type="button"></icon-shopping-cart>
                    <div style="margin-right: 30px;margin-left: 10px"></div>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { IconMapPin } from '@tabler/icons-vue';
import { IconChevronDown } from '@tabler/icons-vue';
import { IconChefHat } from '@tabler/icons-vue';
import { IconSearch } from '@tabler/icons-vue';
import { IconUser } from '@tabler/icons-vue';
import { IconShoppingCart } from '@tabler/icons-vue';
export default {
    name: "Navbar",
    components: {
        IconMapPin,
        IconChevronDown,
        IconChefHat,
        IconSearch,
        IconUser,
        IconShoppingCart
    },props: {
        address: String
    }
}
</script>

<style scoped>
nav.navbar {

    display: block;
}

.name {
    font-size: 30px;
    //font-family: Forte;
    font-family: "Ink Free";
}

.item {
    font-size: 15px;
}

.search{
    margin-left: 30px;
    margin-right: 5%;
}
.login{
    font-size: 15px;
    font-family: Arial;
}
.login:hover{
    color: green;
}

</style>