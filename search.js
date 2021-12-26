// Js for Fetching data and searching through users
var app = new Vue({
    el: "#app",
    data: {
      users: [],
      filter: '',

    },
    // Fetch from json
    mounted: function () {
        fetch("/sample_user_data_20k.json")
        .then(response=> response.json())
        .then(userList => {
            this.users = userList.objects;
        },
        )
    },
    // Computed function for filtering through users
    computed: {
        filtered(){
            if(this.filter){
                return this.users.filter((item)=>{
                    return this.filter.toLowerCase().split(' ').every(v=> item.FirstNameLastName.toLowerCase().includes(v))  
                })
            }
        }
    }
  });