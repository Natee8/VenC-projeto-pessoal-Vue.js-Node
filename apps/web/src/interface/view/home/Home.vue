<template>
    <main>
       <SearchMain />
       <VideoSection />
       <Services/>
       <Collaborator/>
       <SocialHome/>
    </main>
</template>
<script  setup lang="ts">
import Collaborator from './sections/Collaborator.vue';
import SearchMain from './sections/SearchMain.vue';
import Services from './sections/Services.vue';
import SocialHome from './sections/SocialHome.vue';
import VideoSection from './sections/VideoSection.vue';
</script>