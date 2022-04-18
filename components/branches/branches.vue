<template>
  <div class="branches-component">
    <div class="container w-100">
      <h2 class="text-center header-section">
        {{ $t("branches.branches") }}
      </h2>
      <div v-if="data.length > 0" class="row details">
        <div v-for="(item, i) in data" :key="i" class="w-100">
          <iframe
            class="col-md-6 d-flex justify-content-center m-1"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6906.838927460915!2d31.1951871!3d30.0535087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584191608c2285%3A0x40efde2c88472e8e!2sMcDonald&#39;s%20Shehab%20-%20Mohandiseen!5e0!3m2!1sen!2seg!4v1641686947153!5m2!1sen!2seg"
            style="border: 0; width: 100%"
            allowfullscreen="true"
            loading="lazy"
          ></iframe>

          <h3 class="col-md-4 m-2 text-left header-section">
            {{ item.name_translate }}
          </h3>

          <div class="d-flex justify-content-center w-50">
            <div class="phone m-1 text-left row-md-6">
              <i class="fas fa-phone-alt m-1"></i>
              {{ item.phone }}
            </div>
            <div class="card row-md-4">
              <div class="col Times">
                <div class="col-md-12">
                  {{ $t("branches.timesofWork") }}
                </div>
                <div class="col-md-12 d-flex justify-content-end">
                  {{ item.time_from }}
                </div>
                <div class="col-md-12">
                  {{ item.time_to }}
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row workdays">
            <div class="col-md-4">
              {{ $t("branches.workdays") }}
            </div>
            <div class="col-md-8">
              {{ item.work_days }}
            </div>
          </div> -->
        </div>
      </div>
      <div v-else>
        <h4>{{ $t("branches.noBranchesYet") }}</h4>
      </div>
    </div>
    <!-- ////////// -->
  </div>
</template>

<script>
import { ServiceFactory } from "../../services/ServiceFactory";
const BranchesService = ServiceFactory.get("Branches");
export default {
  name: "Branches",
  data: () => ({
    data: [],
  }),
  created() {
    this.fetchAllItems();
  },
  methods: {
    async fetchAllItems() {
      debugger;
      this.dataLoading = true;
      const items = await BranchesService.getAllBranchess();

      this.data = items.branches;
      this.dataLoading = false;
    },
  },
};
</script>
