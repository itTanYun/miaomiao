<template>
  <div class="city_body">
    <div class="city_list">
      <Loading v-if="isLoading"></Loading>
      <Scroller ref="city_List" v-else>
        <div>
          <!-- 热门城市 -->
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li @click="handleToHotCity('北京')">北京</li>
              <li @click="handleToHotCity('上海')">上海</li>
              <li @click="handleToHotCity('广州')">广州</li>
              <li @click="handleToHotCity('深圳')">深圳</li>
              <li @click="handleToHotCity('杭州')">杭州</li>
              <li @click="handleToHotCity('南京')">南京</li>
              <li @click="handleToHotCity('成都')">成都</li>
              <li @click="handleToHotCity('天津')">天津</li>
            </ul>
          </div>
          <!-- 城市排序 -->
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.index">
              <h2>{{ item.index }}</h2>
              <ul>
                <li v-for="itemList in item.list" :key="itemList.id" @click="handleToCity(itemList)">
                  {{ itemList.nm }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>

    <!-- 城市首字母分类 -->
    <div class="city_index">
      <ul>
        <li
          v-for="(item, index) in cityList"
          :key="item.id"
          @click="handleToIndex(index)"
        >
          {{ item.index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      cityList: [],
      isLoading: "true"
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;

      var cityList = window.localStorage.getItem("cityList");
      if (cityList) {
        cityList = JSON.parse(cityList);
        this.cityList = cityList;
      } else {
        //获取城市数据
        var cityData = require("../../../public/data/city.json");
        var cities = cityData.cts;
        cityList = this.formatCityList(cities);
        this.cityList = cityList;

        //储存数据到本地
        window.localStorage.setItem("cityList", JSON.stringify(cityList));
      }
    }, 300);
  },
  methods: {
    //处理城市数据
    formatCityList(cities) {
      var cityList = [];
      //循环城市数据
      for (var i = 0; i < cities.length; i++) {
        //以首字母作为分类，添加同类的城市到cityList中去
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }

      //对城市分类列表进行排序
      cityList.sort((n1, n2) => {
        if (n1.index < n2.index) {
          return -1;
        } else if (n1.index > n2.index) {
          return 1;
        } else {
          return 0;
        }
      });

      //判断cityList中是否拥有相同首字母的数据
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      return cityList;
    },
    //处理按首字母跳转事件
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
    },
    //通过vuex来更改城市
    handleToHotCity(city) {
      this.$store.state.city.nm = city;
      this.$router.push('/movie/nowPlaying');
      //把当前城市保存到本地数据中去
      window.localStorage.setItem("nowName", city);
    },
    //通过vuex来更改城市
    handleToCity(itemList) {
      this.$store.state.city.nm = itemList.nm;
      this.$store.state.city.id = itemList.id;
      window.localStorage.setItem("nowName", itemList.nm);
      window.localStorage.setItem("nowId", itemList.id);
      this.$router.push('/movie/nowPlaying');
    }
  }
};
</script>

<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
