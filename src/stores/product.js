import { defineStore } from 'pinia';

const fakeStoreUrl = 'https://fakestoreapi.com';

export const useProductsStore = defineStore({
  id: 'products',

  state: () => ({
    items: {},
    ids: [],
    appliedFilters:[],
  }),

  getters: {
    list() {
      return this.ids.map((i) => this.items[i]);
    },

    listFiltered() {
      if(this.appliedFilters.length > 0)
        return this.list.filter((items) => this.appliedFilters.includes(items.category))
      else 
        return this.list
    },

    filterLists() {
      return  [...new Set(this.ids.map((i) => this.items[i]).map((item) => 
        item.category))]
    },

    loaded(){
      return this.ids.length > 0;
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded) return;

      const res = await fetch(`${fakeStoreUrl}/products`);
      const data = await res.json();
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    },

    addFilter(filter){
      if(this.appliedFilters.includes(filter))
         this.appliedFilters.pop(filter);
      else
        this.appliedFilters.push(filter);
    },
    
    titleLimit(title){
      return (title.length>37 ? title.slice(0,37)+'..' : title)
    },
  }
});