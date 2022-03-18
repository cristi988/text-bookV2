<template>
    <nav class="navbar">
        <div class="container">
            
            <a class="navbar-brand text-light"> Contact Form</a>
            <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Form</button>
            <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn  my-2 my-sm-0 " type="button">Search</button>
            </form>
            
         </div>
    </nav>
</template>

<script>
export default {
    name : 'NavBar'
}
</script>

<style scoped>
    .form-inline {
        display: flex;
    }
    .btn {
        border-radius: 5px;
        background-color: var(--r-colour);
        color: black;
        font-size: 15px;
    }

    .navbar {
        background-color: var(--navbar);
        font-weight: bold;
    }

</style>