<template>
  <div class="flex items-start justify-center bg-gray-200 h-full pt-5 pb-12">
    <div class="flex flex-col items-center justify-center space-y-3">
      <span class="text-base text-blue-600 font-semibold uppercase">
        ECOMMERCE
      </span>

      <span class="text-3xl text-gray-700 font-semibold">
        All-In-One Platform
      </span>

      <span class="text-lg text-gray-700 text-center px-4 lg:px-32">
        Shoppy provides all aspects of an e-commerce solution that you will
        require. Establish your brand online with instant access to solutions
        including coupons, customer feedback, analytics and more. You finally
        have a gorgeous store of your own that reflects the personality of your
        business.
      </span>
    </div>
  </div>
  <div class="flex flex-col lg:flex-row items-start justify-between bg-gray-200">
    <div class="w-full lg:w-1/2 p-4">
      <img
        src="https://shoppy.gg/assets/img/icon_1.0d489d6.svg"
        alt="imgae-ecommerce"
      />
    </div>
    <div class="flex flex-col items-start justify-start space-y-4 w-full lg:w-1/2 p-4 lg:mt-12">
      <div v-for="list in lists" :key="list.id" class="inline-flex">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAC7ElEQVRIx7XWT2hdRRTH8c97ZmNVZIggIohSbSJdiCuJJrdFULBaGaroQjHxD3Gnm27U7Fq04MKttliLuilIvf6pVRTBSTC6UFy4aKPitojlbmwqhbQuZp6+/HnJe6Y9q8udM/OdM3PmnF/LBlbVTQsTeBD34FaEMtzgV3yLTzGbYri43nqtdUBtTOElnMMHmMVJnCluwxgtG3oUV+I1HEkxXOgbWNXNLTiKv/FKimF2o5Mo8yawv4AfTzH8vtKnvcaknUh4Gzv6hUHx3VnmpqpuqnUjrOrmfryHmGKY7xfUI9oxfIjJFMMXq4BV3YyUyB5OMXy/GVjXmnfhY1QphlP/Aqu6uQLzOJxiePNSwLqg03gOYymGpc4dTsoJ8talhBU7JGf5FLTKO1vAM4MkyIBRjuMdbBtChcXNwqq62SIn3O24N8VwujOWYpir6uYsqiHswrFNwq6VK814+XUjTq9wO4ZdbdwtZ+f/hQ3jqwK7iBdSDD+s4ZowNoTb5HK1cqEhuUwtpBgO9YDdgC+xHUuYTjEc7rG3U9jWlgvxmTUc7sReHKzqZmYN2M1ybd2O83hiHZjCCO11HH7ER+V7X1U3e7tgI/gGW+WU35NiONrPFbTlFjO86sBjWMJjOFF+vV7VzYtV3dxRYDfhLzyUYjjeB2sYTRu/yC1mlaUYzuORck/wRjnG68tG70sxfN1PZBjBQlsuaRO9vFIM5xBLVC1cgz/kt/ZdnzDye59v43iJoqelGBbljv85fpbb1k8DwGAPPusubU+nGOYGXKS/0P4rbSPtokEOYH+BX2pYS1YBB1IMFzrP4giuwvOXIcBncXVhLGvAo3L52X0ZGvCOFMNJujRN+TGJusiDzcLGUGOqA1sWYZfjA3gXMzi4kc5cY34L0/K9PZViONE93ksmjuJ9nMXMgDJxn3xnT3ZHti6wTO4I4ZexaLkQ/rO4XWe5EN6CVw0qhNcAj2O33Du3Wi71f5Ol/ieY6wXq2D/f4QzaQKpZcgAAAABJRU5ErkJggg=="
          alt="pin"
        />
        <span class="text-base ml-4 text-gray-700">{{ list.text }}</span>
      </div>
      <div class="py-5">
        <button
          class="py-2 px-6 rounded-lg font-medium text-blue-500 bg-transparent hover:bg-blue-500 hover:text-gray-300 border border-blue-500 focus:outline-none transition-colors duration-200 ease-in-out"
        >
          Learn more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
export default {
  name: "SectionEcommerceExoapp",
  setup() {
    const state = reactive({
      lists: [
        {
          id: 1,
          text: "Customizable Store Templates",
        },
        {
          id: 1,
          text: "Robust Analytics",
        },
        {
          id: 1,
          text: "Financial Reports",
        },
        {
          id: 1,
          text: "Personalized Coupons",
        },
        {
          id: 1,
          text: "Developer Support",
        },
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