<template>
  <div class="ssss" @click="check">点击我</div>
</template>
<script>
export default {
  data() {
    return {
       location: null
    };
  },
  mounted() {
      console.log(this.location)
  },
  methods: {
    check() {
      console.log(1);
       let _this = this
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
        console.log(r);
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          // alert("您的位置：" + r.point.lng + "," + r.point.lat);
          const myGeo = new BMap.Geocoder();
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), data => {
            if (data.addressComponents) {
              console.log(22222)
              const result = data.addressComponents;
              const location = {
                creditLongitude: r.point.lat, // 经度
                creditLatitude: r.point.lng, // 纬度
                creditProvince: result.province || "", // 省
                creditCity: result.city || "", // 市
                creditArea: result.district || "", // 区
                creditStreet:
                  (result.street || "") + (result.streetNumber || "") // 街道
              };
              
              _this.creditLongitude = location.creditLongitude;
              _this.creditLatitude = location.creditLatitude;
              _this.creditCity = location.creditCity;
              _this.location = location;
              this.location=_this.location
              
              alert(this.getStatus());
              console.log(_this.location)
            }
          });
        } else {
          alert("failed" + this.getStatus());
        }
      });
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    }
  }
};
</script>