<template>
    <div>
        <!-- <headerbar col="help" /> -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"
               href="#">Navbar2</a>
            <button class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse"
                 id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link"
                           href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled"
                           href="#"
                           tabindex="-1"
                           aria-disabled="true">Disabled2</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2"
                           type="search"
                           placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0"
                            type="submit">Search</button>
                </form>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col">
                    columns 1
                </div>
                <div class="col">
                    columns 2
                </div>
                <div class="col">
                    columns 3
                </div>
                <div class="col d-none d-sm-block">
                    columns 4
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerbar from '@/components/headerbar'
export default {
    components: { headerbar },

}
</script>

<style>
</style>