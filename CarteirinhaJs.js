const app = Vue.createApp({
    data() {
        return {
            curso: '',
            dataNascimento: '',
            ra: '',
            cpf: '',
            foto: ''
        };
    },
    methods: {
        atualizarFoto(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                if(this.foto){
                    URL.revokeObjectURL(this.foto);
                }
                this.foto = URL.createObjectURL(file);
            } else {
                alert("Por favor, selecione um arquivo de imagem válido.");
                event.target.value = '';
            }
        }
    }
});
app.mount('#app');