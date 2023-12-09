<template>
  <Head>
    <Title>Sakamichi</Title>
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  <div class="">
    <section class="items-center justify-center flex flex-col ">
    <div class=" text-center ">
      <ContentDoc class="prose font-inter text-sm lg:text-lg " />
    </div>
  </section>
  <section class="">
    <div>
      <HomeGroup :groupName=postNogi.groupName :description=postNogi.description :memberUrl=postNogi.memberUrl
        :groupImg=postNogi.groupImg :color=postNogi.color />
    </div>
  </section>
  </div>
  <section>
    <div>
      <HomeGroup :groupName=postSaku.groupName :description=postSaku.description :memberUrl=postSaku.memberUrl
        :groupImg=postSaku.groupImg :color=postSaku.color />
    </div>
  </section>
  <section>
    <div>
      <HomeGroup :groupName=postHina.groupName :description=postHina.description :memberUrl=postHina.memberUrl
        :groupImg=postHina.groupImg :color=postHina.color />
    </div>
  </section>
  
</template>

<script setup lang="ts">

const postSaku = {
  groupName: "Sakurazaka46 | 櫻坂46",
  description: "They rebranding into Sakurazaka46 in 2020.Their main color in pink and white. Per december 2023 have 7th single with 3rd generation member",
  groupImg: "/home/sakurazaka.jpg",
  memberUrl: "/members",
  color: "shadow-[13px_8px_0px_1px_rgba(255,169,212,1)] hover:shadow-[0px_0px_0px_1px_rgba(255,169,212,1)] bg-pink-500"
}
const postNogi = {
  groupName: "Nogizaka46 | 乃木坂46",
  description: "Biggest Idol group in Japan their debut in 2011. Currently have 5th generation and 34th single released. They have yearly concert Zenkoku Tuor every Summer",
  groupImg: "/home/nogizaka.jpg",
  memberUrl: "/members",
  color: "shadow-[13px_8px_0px_1px_rgba(147,51,234,0.5)] hover:shadow-[0px_0px_0px_1px_rgba(147,51,234,1)] bg-purple-600"
}
const postHina = {
  groupName: "Hinatazaka46 | 日向坂46",
  description: "Formerly known as Hiragana Keyakizaka46 but independence and become Hinatazaka46. Currently have 4th generation member and 10th singles",
  groupImg: "/home/hinatazaka.jpg",
  memberUrl: "/members",
  color: "shadow-[13px_8px_0px_1px_rgba(56,189,248,0.5)] hover:shadow-[0px_0px_0px_1px_rgba(56,189,248,1)] bg-sky-400"
}
</script>