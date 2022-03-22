const storeBlueprint = 
{
    state : {
        contacts : [],
        form : {
            data : '',
            visible : false,
            edit : false,
        },
        alert : {
            msg : '',
            visible : false,
            typeClass : '',
        },
    },
    getters :{

        getContactToBeEdited(state){
            return {...state.form.data}
        }
    },

    mutations : {
        addContact(state, contact){
            state.contacts = [...state.contacts, {...contact}];
        },

        toggleForm(state){
            state.form.visible = !state.form.visible;
        },

        deleteContact(state, contact){
            let contacts = state.contacts.filter((item) =>{
                return item != contact;
            })
            state.contacts = [...contacts];            
        },

        showAlert(state, details){
            state.alert = details;
            setTimeout(()=>{
                state.alert.visible = false;
              }, 3000)
        },

        editContact(state, contact){
            state.form.edit = true;
            state.form.data = contact;
            // let contacts = state.contacts.filter((c)=>{
            //     return c != contact;
            // })
            // state.contacts = [...contacts]
        },

        updateContact(state, contact){
            let contacts = state.contacts.filter((c)=>{
               return c != state.form.data
            })        
            state.contacts = [...contacts, {...contact}];
        }
    },

    actions : {
        addContact(context, payload){
            context.commit('addContact', payload);
            context.commit('toggleForm');
            context.commit('showAlert', {msg: 'You have created a contact!', 
            visible : true, 
            typeClass : 'alert-success'});
        },
        
        deleteContact(context, payload){
            context.commit('deleteContact', payload);
            context.commit('showAlert', {msg : 'Your contact has been deleted!', 
            visible : true,
            typeClass : 'alert-danger'})
        },

        updateContact(context, payload){
            context.commit('updateContact', payload);
            context.commit('toggleForm');
            context.commit('showAlert', {msg : 'Your contact has been updated!', visible : true, typeClass : 'alert-success'});
        }
    }
}

export default storeBlueprint;