<template>
    <header class="app-head">
        <img :alt="app.displayName" class="app-icon" :src="app.avatarUri" v-if="app.avatarUri" />
        <img :alt="app.displayName" class="app-icon" src="https://www.rocklandtrust.com/assets/img/rockland-trust.png" v-else />
        
        <div class="app-info">
            <div class="app-name">{{app.displayName}}</div>
            <div class="app-poweredby"> <a href="https://www.rocklandtrust.com"> iBOT </a>
	</div>
			

        </div>
    </header>
</template>

<style lang="sass" scoped>
.app-head
    z-index: 666
    padding: 16px
    position: fixed
    width: 100%
    background-color: #305376

    .app-icon
        border-radius: 50%
        width: 30px
        height: 30px
        object-fit: cover

    .app-info
        display: inline-block
        margin-left: 10px

        .app-name
            font-size: 18px
            font-weight: 500
            color: white

        .app-poweredby
            font-size: 14px
            opacity: .6

            a[href]
                color: white
                text-decoration: none
</style>

<script>
export default {
    name: 'TopHead',
    props: ['app']
}
</script>
