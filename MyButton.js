Vue.component('my_button', {
    props: ['title'],
    template: '<button class="btn btn-primary">{{ title }}</button>'
});

new Vue({
    el: '#button_component',
    data:{
        propValue: ''
    }
});