<template>
  <section class="bg-gray-200">
    <div class="container mx-auto">
      <div class="flex items-start justify-center h-full pt-5 pb-12">
        <div class="flex flex-col items-center justify-center space-y-3">
          <span class="text-base text-orange-600 font-semibold uppercase">
            SUPPORT
          </span>

          <span class="text-3xl text-gray-700 font-semibold">
            Support your Customers
          </span>

          <span class="text-lg text-gray-700 text-center px-4 lg:px-32">
           Communicate and assist your customers in real time with our support integrations.
          </span>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row items-start justify-between bg-gray-200"
      >
        <div class="w-full lg:w-1/2 p-4">
          <img class="object-fill"
            src="https://shoppy.gg/assets/img/icon_3.01af426.svg"
            alt="image-support"
          />
        </div>
        <div
          class="flex flex-col items-start justify-start space-y-4 w-full lg:w-1/2 p-4 lg:mt-12"
        >
          <div v-for="list in lists" :key="list.id" class="inline-flex">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAC8klEQVRIx7XWT2hdRRTH8c97ZmNVpEQQEUSpNsEuHFeXaJJWQcFqpVTRhYOJVuJON92o2bVowYVbbbEWvZuC1PqnVlEEk2CchXIXLtqouC1i6camUkjr4s6Tl/S9lxeTntVl5sx859w5c86vYRUrq6KBMTyOB3E3Nufp8/gNP+ALzMaQrvTar9ED1MQkXsNFfIxZnMa57DaI4Xygp3E93sLRGNLlvoFlVdyFY/gHb8SQZlf7E3ndGA5k8LMxpD9W+jQ7LNqBGbyP7f3CIPvuyGtnyqoY7xlhWRWP4iPsjiHN9wvqEu0IPsFEDOnrq4BlVQzlyJ6MIaX1wNr2LPAZxmNIZ/4DllVxHeZxJIb07kbA2qBTeAkjMaSl1h1OqBPkvY2EZTuszvJJaOR3toAX15Iga4xyFB9g6wDGsbheWFkVm9QJdy8eiiGdbc3FkObKqriA8QHsxPF1wm5WV5rRPHQ7zq5wO46dTTygzs7/CxvEtxl2Ba/EkH7q4DqDkQHcoy5XKzcaUJephRjS4S6w2/ANtmEJUzGkI13OdgZbm+pCfK6Dw/3Yh0NlVUx3gN2prq3bcAnP9YDJjM3NHg4/49P8vb+sin1tsCF8jy3qlN8TQzrWzxU01S1mcOVEDGkJz+BUHnq7rIpXy6q4L8PuwN94IoZ0sg/WIM438au6xVxlMaRLeCrfE7yTf+Ot+aCPxJC+6ycyDGGhqS5pY928YkgXsTtH1cBN+BMPx5B+7BNG/d7nmziZo+hqMaRFdcf/Cr+o21a1BhjswZftpe2FGNLcGjfpy9pK21Aza5CDOJDhGw1rqFXAwRjS5dazOIob8PI1CHAvbsyMZQ14WF1+dl2DBrw9hnSaNk2TByZwIsuD9cJGcAKTLdiyCNscH8OHmMah1XRmh/UNTKnv7fkY0qn2+W4ycRglLmB6jTJxv/rOYntkPYF5cUsIv45Fy4XwX9ntFsuF8Ca8aa1CuAN4FLvUvXOL5VL/d7XU/xxz3UAt+xdFCg0+92fRVQAAAABJRU5ErkJggg=="
              alt="pin"
            />
            <span class="text-base ml-4 text-gray-700">{{ list.text }}</span>
          </div>
          <div class="py-5">
            <button
              class="py-2 px-6 rounded-lg font-medium text-orange-500 bg-transparent hover:bg-orange-500 hover:text-gray-300 border border-orange-500 focus:outline-none transition-colors duration-200 ease-in-out"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { toRefs, reactive } from "vue";
export default {
  name: "SectionSupportExoapp",
  setup() {
    const state = reactive({
      lists: [
        {
          id: 1,
          text: "Buyer Queries",
        },
        {
          id: 2,
          text: "Interactive Feedbacks",
        }
      ],
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>