
import type { NuxtLink } from '#build/components';
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from 'radix-vue'

const toggleState = ref(false)
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')


</script>

<template>
  <DropdownMenuRoot  v-model:open="toggleState">
    <DropdownMenuTrigger
      class=" rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-grass11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customise options"
    >
      <Icon icon="radix-icons:hamburger-menu" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-[220px] outline-none backdrop-blur-2xl bg-teal-300 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
      <DropdownMenuItem
          value="New Tab"
          class="group text-[15px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-neutral-100"
          
        >
          <NuxtLink href="/">Home</NuxtLink>
          
        </DropdownMenuItem>
        <DropdownMenuItem
          value="New Tab"
          class="group text-[15px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-neutral-100"
          
        >
          <NuxtLink href="/account">Account</NuxtLink>
          
        </DropdownMenuItem>
        <DropdownMenuItem
          value="New Tab"
          class="group text-[15px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-neutral-100"
          
        >
          <NuxtLink href="/members">Members</NuxtLink>
          
        </DropdownMenuItem>
        <DropdownMenuItem
          value="New Tab"
          class="group text-[15px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-neutral-100"
          
        >
          <NuxtLink href="/tutorials">Tutorial</NuxtLink>
          
        </DropdownMenuItem>

        <DropdownMenuItem
          value="New Tab"
          class="group text-[15px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-neutral-100"
          
        >
          <NuxtLink href="/translates">Blog Translation</NuxtLink>
          
        </DropdownMenuItem>
        <DropdownMenuArrow class="fill-white" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>