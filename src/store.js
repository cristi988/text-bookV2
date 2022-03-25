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
        searchTerm : '',
    },
    getters :{
        /**
         * This function is a getter for edit button clining the form attribute 
         * 
         * @param {*} state 
         * @returns 
         */
        getContactToBeEdited(state){
            return {...state.form.data}
        },

        /**
         * This function is a getter for getting the form cloning the form
         * 
         * @param {*} state 
         * @returns 
         */
        getForm(state){
            return {...state.form}
        },
        

        /**
         * This getter function checks the contacts in order to filter the contacts in searchbar
         * 
         * @param {*} state 
         * @returns 
         */
        getContacts(state) {    
            return state.contacts.filter((contact)=>{
                if((contact.fName.toLowerCase().includes(state.searchTerm)) ||
                   (contact.lName.toLowerCase().includes(state.searchTerm)) ||
                   (contact.phone.includes(state.searchTerm)) ||
                   (contact.address.toLowerCase().includes(state.searchTerm)) ||
                   (contact.email.toLowerCase().includes(state.searchTerm))){
                    return contact
                } 
            })
        }
    },

    mutations : {

        /**
         * This function add the contacts from the form into the cards
         * Clones the contacts in the form
         * 
         * @param {*} state 
         * @param {*} contact 
         */
        addContact(state, contact){
            state.contacts = [...state.contacts, {...contact}];
        },

        /**
         * This function shows and hides the form 
         * 
         * @param {*} state 
         */
        toggleForm(state){
            state.form.visible = !state.form.visible;          
        },

        /**
         * This function makes the data from the form empty and makes the edit false
         * 
         * @param {*} state 
         */
        destroyForm(state){
            state.form.data = {};
            state.form.edit = false;
        },

        /**
         * This function deletes the contact cards
         * 
         * @param {*} state 
         * @param {*} contact 
         */
        deleteContact(state, contact){
            let contacts = state.contacts.filter((item) =>{
                return item != contact;
            })
            state.contacts = [...contacts];            
        },

        /**
         * This function set the alert for add, edit and delete contacts
         * 
         * @param {*} state 
         * @param {*} details 
         */
        showAlert(state, details){
            state.alert = details;
            setTimeout(()=>{
                state.alert.visible = false;
              }, 3000)
        },

        /**
         * This function makes the edit true and allows the data from the card to be edited
         * 
         * @param {*} state 
         * @param {*} contact 
         */
        editContact(state, contact){
            state.form.edit = true;
            state.form.data = contact;
        },

        /**
         * This function updates the card after it has been edited
         * 
         * @param {*} state 
         * @param {*} contact 
         */
        updateContact(state, contact){
            let contacts = state.contacts.filter((c)=>{
               return c != state.form.data
            })        
            state.contacts = [...contacts, {...contact}];
        },

        /**
         * This function 
         * 
         * @param {*} state 
         * @param {*} term 
         */
        setSearchTerm(state, term){
            state.searchTerm = term;
        }
    },

    actions : {

        /**
         * This action takes 3 functions when a contact is added eachone of them having its part
         * 
         * @param {*} context 
         * @param {*} payload 
         */
        addContact(context, payload){
            context.commit('addContact', payload);
            context.commit('toggleForm');
            context.commit('showAlert', {msg: 'You have created a contact!', 
            visible : true, 
            typeClass : 'alert-success'});
        },
        
        /**
         * This action takes the delete contact function and show the respective alert for it
         * 
         * @param {*} context 
         * @param {*} payload 
         */
        deleteContact(context, payload){
            context.commit('deleteContact', payload);
            context.commit('showAlert', {msg : 'Your contact has been deleted!', 
            visible : true,
            typeClass : 'alert-danger'})
        },

        /**
         * this action uses the update function, toggles the form and show the adequet alert
         * 
         * @param {*} context 
         * @param {*} payload 
         */
        updateContact(context, payload){
            context.commit('updateContact', payload);
            context.commit('toggleForm');
            context.commit('showAlert', {msg : 'Your contact has been updated!', visible : true, typeClass : 'alert-success'});
        }
    }
}

export default storeBlueprint;