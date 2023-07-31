Vue.component('my_button', {
    props: ['my_button_prop'],
    template: '<button class="btn btn-primary">{{ my_button_prop }}</button>'
});

new Vue({
    el: '#button_component',
    data:{
        propValue: 'TITLE'
    }
});