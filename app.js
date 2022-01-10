


const app = Vue.createApp({
    data(){
        return {
            contactos:[
                {
                    nombre:"Luis Emmanuel",
                    apellido:"Mendez Barrios",
                    correo:"mendezemmanuel1999@gmail.com",
                    direccion:"Diaz Ordaz",
                    telefono:"8721192557"
                }
            ],
            contactoActual:{
                key:null,
                nombre:"",
                apellido:"",
                correo:"",
                direccion:"",
                telefono:""
            },
            titulo:null,
            modal:null,
            validacion:false,
    
           
        }
    },
    mounted() {
        let  modal = document.getElementById('modalContacto');
        this.modal = new bootstrap.Modal(modal, {
            keyboard: false,
        })
    },
    methods:{
        mostraFormulario(tipo,contacto = null){

            this.validacion = false;
        
            if(tipo=="agregar"){
                this.titulo = "Agregar";
                 //limpiar contacto actual
                 for(let propiedad in this.contactoActual){
                    this.contactoActual[propiedad] = "";
                }
               
               

            }else{
                this.titulo = "Actualizar";
                this.contactoActual = contacto;
            }
            //Mostrar Formulario
            this.modal.show();

        },
        agregarContacto(){
            
                
                if(!this.contactoActual.nombre || !this.contactoActual.apellido || !this.contactoActual.correo){
                
                    this.validacion = true;
                    
                }else{
                    this.contactos.push(this.contactoActual);
                    //limpiar contacto actual
                    for(let propiedad in this.contactoActual){
                        this.contactoActual.propiedad = "";
                    }
                    this.modal.hide();
                }
        },
        eliminarContacto(contacto){
         
             let index = this.contactos.findIndex((objeto)=> objeto.correo == contacto.correo);
       
             if(index!=-1){
                this.contactos.splice(index,1);
             }
        },
        actualizarContacto(){
          
            if(!this.contactoActual.nombre || !this.contactoActual.apellido || !this.contactoActual.correo){
                
                this.validacion = true;
                
            }else{

                let index = this.contactos.findIndex((objeto)=> objeto.email == this.contactoActual.email);
                if(index!=-1){
                    this.contactos[index] = this.contactoActual;
                }


                //limpiar contacto actual
                for(let propiedad in this.contactoActual){
                    this.contactoActual[propiedad] = "";
                }
                this.modal.hide();
            }


        }
    }
})

app.mount("#app");