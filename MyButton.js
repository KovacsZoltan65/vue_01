Vue.component('my_button', {
    props: ['title'],
    template: '<button class="btn btn-primary">{{ title }}</button>',
    methods: {
        click: function(){
            console.log('CLICK');
        }
    },
    mounted: function(){
        console.log('MOUNTED');
    }
});

new Vue({
    el: '#button_component',
    data:{
        propValue: ''
    },
});