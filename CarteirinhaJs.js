const app = Vue.createApp({
    data() {
        return {
            curso: '',
            dataNascimento: '',
            ra: '',
            cpf: '',
            foto: '',
            modoEscuro: false
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
        },
        alternarModoEscuro(){
            if(this.modoEscuro){
                document.body.classList.add('dark');
            } else{
                document.body.classList.remove('dark');
            }
        }
    },
    mounted(){
        const darkModeAtivado = localStorage.getItem('modoEscuro') === 'true';
        this.modoEscuro = darkModeAtivado;
        this.alternarModoEscuro;
    },
    watch: {
        modoEscuro(novoValor){
            localStorage.setItem('modoEscuro', novoValor);
            this.alternarModoEscuro();
        }
    }
});
app.mount('#app');