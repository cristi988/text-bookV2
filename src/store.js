const storeBlueprint = 
{
    state : {
        contacts : [],
        formVisible : false,
        alert : {
            msg : '',
            visible : false,
            typeClass : '',
        },
        contactEdit : {},
    },

    mutations : {
        addContact(state, contact){
            state.contacts = [...state.contacts, contact];
        },

        toggleForm(state){
            state.formVisible = !state.formVisible;
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
            state.contactEdit = contact;
            console.log(state.contactEdit);
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
    }
}

export default storeBlueprint;