<template>
    <div id="help">
        <div class="t-scr-wrap page-header-wrap">
            <headerbar col="developing" />
        </div>
        <div class="developing p-wrap clearfix"></div>
        <!-- footer -->
        <footerbar />
    </div>
</template>

<script>
import footerbar from '@/components/footerbar'
import headerbar from '@/components/headerbar'
export default {
    components: { footerbar, headerbar },
    created () {

    }
}
</script>

<style lang="scss" scoped>
.developing {
    margin: 200px auto;
    width: 1082px;
    height: 259px;
    background: url(~@/assets/images/kaifazhong.png) no-repeat;
    background-size: cover;
}
</style>
