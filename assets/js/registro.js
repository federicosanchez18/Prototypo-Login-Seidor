new Vue({
    el:".divlogin",
    data:{
        type:0, // 0 == Login / 1 == reg / 2 = Recupera Clave
        form:{  type:0,
                email:"",
                password:"",
                passworddos:""}

    },
    methods:{
        sendForm(){
            if(this.validaType){
                console.log(this.form)
            
            }
            console.log(this.form)
            
        },

        validaType(){
            if( this.form.type == 0 && !this.validaEmail && !this.validaPassword){
                return true;
            }
            else if( this.form.type == 1 && !this.validaEmail && !this.validaPasswordRepeat){
                return true;
            }
            else if( this.form.type == 0 && !this.validaEmail && !this.validaPasswordRepeat){
                return true;
            }
            return false
            
        }
        }
    ,

    computed:{

        validaEmail(){
            var exp =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            }else{
                return true;
            }
        },

        validaPassword(){
            var exp =  /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.form.password)){
                return true;
            }
            else{
                return false;
            }

        },
        validaPasswordRepeat(){
            if(this.form.password == this.form.passworddos){
                return false;
                
            }else{
                return true;
            }

        },
        title(){
            return this.form.type == 0 ? 'Login' : (this.form.type== 1) ? 'Registro' : "Recuperar Contraseña"  
        }

    }

});