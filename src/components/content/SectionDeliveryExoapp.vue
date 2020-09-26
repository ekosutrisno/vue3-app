<template>
  <div class="flex items-start justify-center bg-gray-100 h-full pt-5 pb-12">
    <div class="flex flex-col items-center justify-center space-y-3">
      <span class="text-base text-pink-600 font-semibold uppercase">
        DELIVERY
      </span>

      <span class="text-3xl text-gray-700 font-semibold">
        Automated Delivery
      </span>

      <span class="text-lg text-gray-700 text-center px-4 lg:px-32">
        Whether it's a file, serial number, service or even dynamically
        generated via an API, we provide instant automated delivery of goods to
        the customer.
      </span>
    </div>
  </div>
  <div
    class="flex flex-col lg:flex-row items-start justify-between bg-gray-200"
  >
    <div class="flex flex-col items-end space-y-4 w-full lg:w-1/2 lg:mt-12 p-4">
      <div v-for="list in lists" :key="list.id" class="flex">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAC8ElEQVRIx7XWQWhdRRTG8d97ZmNVpEQQEUSp3gS7EFcSTdIqKFinUjqiC8VELXGnm27U7Fq04MKttliLuil4a9VbqyiCSTC6UFy4aEfFbRFLNzaVQloXd568pO+9vGfSs7rMnJn/nDtnzvka1rCyqBqYwGN4AHdic54+h9/wHSrMxxQu99qv0QPUxDRewQV8hHmcwtnsNozRfKAncC3ewJGYwqW+gWVR3YGj+AevxRTm1/oTed0E9mfwUzGFP1b7NDss2o45vItt/cIg+27Pa+fKoprsGWFZVI/gA+yKKSz2C+oS7Rg+xlRM4csrgGVRjeTIHo8p/LAeWNue9+FTTMYUTv8HLIvqGizicEzh7Y2AtUFnsAdjMYXl1h1OqRPknY2EZTukzvJpaOR3lvD8IAkyYJTjeA/FECaxtF5YWVSb1Al3Nx6MKZxpzcUUFsqiOo/JIezAsXXCblRXmvE8dCvOrHI7hh1N3K/Ozv8LG8bXGXYZL8UUfuzgOoexIdylLlerNxpSl6kUUzjUBXYLvsJWLGMmpnC4y9lOo2iqC/HZDg73Yi8OlkU12wF2u7q2bsVFPN0DJjM2N3s4/IRP8ve+sqj2tsFG8C22qFN+d0zhaD9X0FS3mOHVEzGFZTyJk3nozbKoXi6L6p4Muw1/I8QUTvTBGsa5Jn5Vt5grLKZwETHfE7yVf+PN+aAPxxS+6ScyjCA11SVtoptXTOECduWoGrgBf+KhmML3fcKo3/tiEydyFF0tprCk7vhf4Bd12/p5ABjsxuftpe25mMLCgJv0ZW2lbaSZNcgB7M/wjYY11CrgQEzhUutZHMF1ePEqBPgCrs+MFQ14VF1+dl6FBrwtpnCKNk2TB6ZwPMuD9cLGcBzTLdiKCNscH8X7mMXBtXRmh/UNzKjv7dmYwsn2+W4ycRQf4jxmB5SJ+9R39kx7ZD2BeXFLCL+KJSuF8F/Z7SYrhfAmvG5QIdwBPI6d6t65xUqp/7ta6n+GhW6glv0LkFYNhm2v+GcAAAAASUVORK5CYII="
          alt="pin"
        />
        <span class="text-base ml-4 text-gray-700">{{ list.text }}</span>
      </div>
      <div class="py-5">
        <button
          class="py-2 px-6 rounded-lg font-medium text-pink-700 bg-transparent hover:bg-pink-700 hover:text-gray-300 border border-pink-700 focus:outline-none transition-colors duration-200 ease-in-out"
        >
          Learn more
        </button>
      </div>
    </div>
    <div class="w-full lg:w-1/2 p-4">
      <img
        src="https://shoppy.gg/assets/img/icon_2.d967f59.svg"
        alt="imgae-ecommerce"
      />
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
export default {
  name: "SectionDeliveryExoapp",
  setup() {
    const state = reactive({
      lists: [
        {
          id: 1,
          text: "Variety of Product Types",
        },
        {
          id: 1,
          text: "Email Delivery",
        },
        {
          id: 1,
          text: "Custom Email Templates",
        },
        {
          id: 1,
          text: "Replacement System",
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