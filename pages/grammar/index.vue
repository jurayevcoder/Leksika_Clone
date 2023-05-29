<template>
  <div class="container mx-auto px-20 mt-28">
    <div class="wrapper">
      <div
        class="bg-white px-20 py-10 flex flex-col gap-5 rounded-[18px]"
        id="accordion-collapse"
        data-accordion="collapse"
      >
        <h1 class="text-[24px] font-bold text-center mb-6">TABLE OF CONTENTS</h1>
        <h2 id="accordion-collapse-heading-1">
          <button
            @click="toggleModal"
            type="button"
            class="flex items-center justify-between w-full text-left rounded-[32px] bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span
              ><span class="bg-[#01756C] w-[50px] h-[50px] p-3 text-white rounded-full"
                >01</span
              >&nbsp;&nbsp;&nbsp;&nbsp;Introduction</span
            >
            <i
              :class="
                modal
                  ? 'bx bx-minus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
                  : 'bx bx-plus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
              "
            ></i>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          :class="modal ? '' : 'hidden'"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-t-0 rounded-[32px] border-[rgba(213,219,242,0.5)]">
            <p class="mb-2 text-gray-500">
              Chet tilini o’rganishda so’z boyligini doimiy ravishda boyitib borish, ya’ni
              ko’proq yangi so’zlarni yod olish, juda muhimdir.
            </p>
            <p class="text-gray-500">
              Ko'rishni istasangiz
              <NuxtLink to="/grammar/1" class="text-blue-600 hover:underline"
                >boshlash</NuxtLink
              >
              tugmasini bosing va o'rganing!
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            @click="toggleModal2"
            type="button"
            class="flex items-center justify-between w-full text-left rounded-[32px] bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span
              ><span class="bg-[#01756C] w-[50px] h-[50px] p-3 text-white rounded-full"
                >02</span
              >&nbsp;&nbsp;&nbsp;&nbsp;Present Simple</span
            >
            <i
              :class="
                modal2
                  ? 'bx bx-minus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
                  : 'bx bx-plus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
              "
            ></i>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          :class="modal2 ? '' : 'hidden'"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-t-0 rounded-[32px] border-[rgba(213,219,242,0.5)]">
            <p class="mb-2 text-gray-500">
              Chet tilini o’rganishda so’z boyligini doimiy ravishda boyitib borish, ya’ni
              ko’proq yangi so’zlarni yod olish, juda muhimdir.
            </p>
            <p class="text-gray-500">
              Ko'rishni istasangiz
              <NuxtLink to="/grammar/2" class="text-blue-600 hover:underline"
                >boshlash</NuxtLink
              >
              tugmasini bosing va o'rganing!
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            @click="toggleModal3"
            type="button"
            class="flex items-center justify-between w-full text-left rounded-[32px] bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span
              ><span class="bg-[#01756C] w-[50px] h-[50px] p-3 text-white rounded-full"
                >03</span
              >&nbsp;&nbsp;&nbsp;&nbsp;Present Continues</span
            >
            <i
              :class="
                modal3
                  ? 'bx bx-minus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
                  : 'bx bx-plus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
              "
            ></i>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          :class="modal3 ? '' : 'hidden'"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-t-0 rounded-[32px] border-[rgba(213,219,242,0.5)]">
            <p class="mb-2 text-gray-500">
              Chet tilini o’rganishda so’z boyligini doimiy ravishda boyitib borish, ya’ni
              ko’proq yangi so’zlarni yod olish, juda muhimdir.
            </p>
            <p class="text-gray-500">
              Ko'rishni istasangiz
              <NuxtLink to="/grammar/3" class="text-blue-600 hover:underline"
                >boshlash</NuxtLink
              >
              tugmasini bosing va o'rganing!
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-1">
          <button
            @click="toggleModal4"
            type="button"
            class="flex items-center justify-between w-full text-left rounded-[32px] bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span
              ><span class="bg-[#01756C] w-[50px] h-[50px] p-3 text-white rounded-full"
                >04</span
              >&nbsp;&nbsp;&nbsp;&nbsp;Past Simple</span
            >
            <i
              :class="
                modal4
                  ? 'bx bx-minus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
                  : 'bx bx-plus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
              "
            ></i>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          :class="modal4 ? '' : 'hidden'"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-t-0 rounded-[32px] border-[rgba(213,219,242,0.5)]">
            <p class="mb-2 text-gray-500">
              Chet tilini o’rganishda so’z boyligini doimiy ravishda boyitib borish, ya’ni
              ko’proq yangi so’zlarni yod olish, juda muhimdir.
            </p>
            <p class="text-gray-500">
              Ko'rishni istasangiz
              <NuxtLink to="/grammar/4" class="text-blue-600 hover:underline"
                >boshlash</NuxtLink
              >
              tugmasini bosing va o'rganing!
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-1">
          <button
            @click="toggleModal5"
            type="button"
            class="flex items-center justify-between w-full text-left rounded-[32px] bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span
              ><span class="bg-[#01756C] w-[50px] h-[50px] p-3 text-white rounded-full"
                >05</span
              >&nbsp;&nbsp;&nbsp;&nbsp;Infinity, Gerund</span
            >
            <i
              :class="
                modal5
                  ? 'bx bx-minus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
                  : 'bx bx-plus bg-white text-[#01756C] p-2 text-[30px] rounded-full'
              "
            ></i>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          :class="modal5 ? '' : 'hidden'"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-t-0 rounded-[32px] border-[rgba(213,219,242,0.5)]">
            <p class="mb-2 text-gray-500">
              Chet tilini o’rganishda so’z boyligini doimiy ravishda boyitib borish, ya’ni
              ko’proq yangi so’zlarni yod olish, juda muhimdir.
            </p>
            <p class="text-gray-500">
              Ko'rishni istasangiz
              <NuxtLink to="/grammar/5" class="text-blue-600 hover:underline"
                >boshlash</NuxtLink
              >
              tugmasini bosing va o'rganing!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);

const modal2 = ref(false);
const toggleModal2 = () => (modal2.value = !modal2.value);

const modal3 = ref(false);
const toggleModal3 = () => (modal3.value = !modal3.value);

const modal4 = ref(false);
const toggleModal4 = () => (modal4.value = !modal4.value);

const modal5 = ref(false);
const toggleModal5 = () => (modal5.value = !modal5.value);
</script>

<style lang="scss" scoped></style>
