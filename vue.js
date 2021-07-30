const app = Vue.createApp({
  data() {
    return {
      isOutline1: true,
      isOutline2: false,
      show: true,
      hidden: false,
      des: false,
      spec: true,
      myleft: 0,
      mywidth: 68,
      myleftm: 0,
      menu: false,
      m_menu2: true
    }
  },
  methods: {
    newcolor1(event){
      this.isOutline1 = true,
      this.isOutline2 = false
    },
    newcolor2(event){
      this.isOutline1 = false,
      this.isOutline2 = true
    },
    hidden1(event){
      this.hidden = true
    },
    description1(event){
      this.des = false,
      this.spec = true,
      this.myleft = 0,
      this.mywidth = 68,
      this.myleftm = 0
    },
    specifications1(event){
      this.des = true,
      this.spec = false,
      this.myleft = 100,
      this.mywidth = 118,
      this.myleftm = 80
    }
  }
}).mount('#body')