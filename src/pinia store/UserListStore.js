import axios from "axios";
import { defineStore } from "pinia";

export const useUserListStore = defineStore("userListStore", {
    state : () => ({
        userList : [],
        loading: false,
        error : null
    }),
    actions: {
        async getUserList(){

            try{
                this.loading = true;
                let dataURL = `https://jsonplaceholder.typicode.com/users`;
                const res = await axios.get(dataURL);
                console.log(res.data);
                this.userList = res.data;
                this.loading = false;
            } catch(err){
                this.error = err.message;
            }
           
        }
    }
})