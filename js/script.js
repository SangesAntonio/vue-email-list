console.log('js ok')
console.log('vue ok', Vue)
console.log('axios ok', axios)

const app = new Vue({
    el:'#root',
    data:{
        total: 10,
        emails: [],
    },
    methods:{
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res =>{
                if(!this.emails.includes(res.data.response)){
                    this.emails.push(res.data.response)
                }
                
            });
        },
        getRandomEmails(){
            for(let i=0; i < this.total; i++){
                this.getRandomEmail()
            }
        },
    },
    created(){
       this.getRandomEmails()
    }


})

