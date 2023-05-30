<template>
  <div class="container mx-auto px-20 mt-28">
    <div class="wrapper flex flex-col gap-20">
      <div class="border-b text-center px-56 pb-20 pt-10">
        <h1>
          Remember the days when you couldn’t find the proper translation of an English
          word to the Uzbek language? I also know those feelings when you run against the
          lack of general use dictionaries - not to mention the specialized ones, a total
          absence of online resources in Uzbek, a pre-requisite of knowing the Russian
          language in order to apply indirect translation (EN RU UZ and vice versa).
        </h1>
      </div>

      <div class="border-b flex flex-col gap-20 pb-20">
        <div class="flex justify-between">
          <h1 class="w-full text-[24px] text-[#01756C] font-bold">Book edition</h1>
          <p class="w-[1500px]">
            To reverse the situation, it was decided to compile a large
            English-Uzbek-English dictionary and the work started back in 2003. 2 years
            later, the <span class="text-[#01756C]">first edition</span> of the bilingual
            dictionary was published in G’afur G’ulom publishing house; it is still
            <span class="text-[#01756C]">available</span> for sale online. Much attention
            was directed to the Uzbek-English part; even now, it is the most comprehensive
            and complete UZ-EN dictionary. <br /><br />
            A <span class="text-[#01756C]">mobile app</span> for Android devices was
            launched based on the dictionary with ma jor update of the lexical database.
          </p>
        </div>
        <div class="flex justify-between">
          <h1 class="w-full text-[24px] text-[#01756C] font-bold">Website dictionary</h1>
          <p class="w-[1500px]">
            However, we still desperately needed a high-quality online dictionary for
            English-Uzbek language pair that could cover both everyday and area-specific
            vocabulary. In September 2022, on the date of 31th anniversary of Independence
            of Uzbekistan, Leksika.uz was successfully launched. Leksika.uz has mainly
            been designed to give English learners of any level the help they need to
            read, speak and write English more effectively. It is also intended to assist
            translators and localizers by providing useful tips and rules of thumb; these
            can be found in Localization section.
          </p>
        </div>
        <div class="flex justify-between">
          <h1 class="w-full text-[24px] text-[#01756C] font-bold">Prospects</h1>
          <ul class="list-disc space-y-1 list-inside w-[1500px]">
            <li>
              Russian-Uzbek-Russian dictionary section with largest database on the web;
            </li>
            <li>
              content for easier learning of English, including grammar, writing tips,
              learning new words;
            </li>
            <li>useful tips and motivational articles for freelancers;</li>
            <li>
              articles for localizers to Uzbek language, including intricacies of Uzbek
              grammar;
            </li>
            <li>and much more.</li>
          </ul>
        </div>
      </div>

      <div class="flex justify-between mb-20">
        <h1 class="w-full text-[24px] text-[#01756C] font-bold">Our team</h1>
        <div class="flex items-center gap-5 w-[1500px] text-center">
          <button @click="toggleModal" class="bg-white shadow-lg rounded-[18px]">
            <img src="../../img/akbar.png" alt="" />
            <h1 class="text-[24px] font-bold mt-5">Akbar Kholmuradov</h1>
            <p class="border-b mx-24 my-2 border-[rgba(1,117,108,1)]"></p>
            <p class="text-[#8C8B8B] text-[18px] mb-5">Founder and content manager</p>
          </button>

          <button @click="toggleModal2" class="bg-white shadow-lg rounded-[18px]">
            <img src="../../img/asqar.png" alt="" />
            <h1 class="text-[24px] font-bold mt-5">Asqar Arslonov</h1>
            <p class="border-b mx-24 my-2 border-[rgba(1,117,108,1)]"></p>
            <p class="text-[#8C8B8B] text-[18px] mb-5">Full-Stack (MERN) Developer</p>
          </button>
        </div>
      </div>

      <!-- Modal toggle -->

      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        :class="
          modal
            ? 'overflow-y-auto flex bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full'
            : 'hidden'
        "
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-start justify-between p-4 border-b rounded-t">
              <h3 class="text-xl font-semibold text-gray-900">Akbar Kholmuradov</h3>
              <button
                @click="toggleModal"
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed">
                Having graduated the International Economic Relations department of the
                University of World Economy and Diplomacy in 2001, Akbar dedicated his
                later years to translation and localization. When working as a translator
                in various huge projects, he faced the difficulty in finding reliable
                sources that can be used in translation to/from Uzbek language, and as a
                result some books for English learners and translators were published
              </p>
              <p class="text-base leading-relaxed font-medium">
                English-Uzbek-English dictionary (<a
                  class="text-[rgba(1,117,108,1)] hover:underline"
                  href="#"
                  >book</a
                >, <a class="text-[rgba(1,117,108,1)] hover:underline" href="#">app</a>)
              </p>
              <p class="text-base leading-relaxed font-medium">
                English Grammar for Uzbek Learners (<a
                  class="text-[rgba(1,117,108,1)] hover:underline"
                  href="#"
                  >book</a
                >, <a class="text-[rgba(1,117,108,1)] hover:underline" href="#">app</a>)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        :class="
          modal2
            ? 'overflow-y-auto flex bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full'
            : 'hidden'
        "
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-start justify-between p-4 border-b rounded-t">
              <h3 class="text-xl font-semibold text-gray-900">Asqar Arslonov</h3>
              <button
                @click="toggleModal2"
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed">
                Having started his IT-education at the age of 12, Asqarjon has reached the
                level of full-stack developer just 2 years later. Taking several online
                courses (Technical Support Fundamentals, Computer Networking) was followed
                by successful completion of Front-End Development and Back-End Development
                courses at the Open Web Academy education center in Qarshi city. Being an
                eighth-grader, he is fully responsible for the technical support of
                Leksika.uz
              </p>
            </div>
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
</script>

<style lang="scss" scoped></style>
