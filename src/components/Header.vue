<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary text-uppercase" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#">Portfolio</a>
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="
                #navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggle-icon"></span>
            </button>
            <ul class="navbar-nav ml-auto">
                <router-link to="/portfolio" tag="li" class="nav-item rounded" active-class="active">
                    <a class="nav-link">Home</a></router-link>
                <router-link to="/about" tag="li" class="nav-item rounded" active-class="active">
                    <a class="nav-link">About</a></router-link>
                <router-link to="/contact" tag="li" class="nav-item rounded" active-class="active">
                    <a class="nav-link">Contacts</a></router-link>

            </ul>
        </div>

    </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
 #mainNav{
     font-weight: 700;
     font-size: 14px;
     font-family: Dubai;
     padding-top: .5em;
     padding-bottom: .5em;
 }
  #mainNav .navbar-brand{
      color: #fff;
  }
  .bg-secondary{
      background-color: #2c3e50!important;
  }
   #mainNav .navbar-nav li.navbar-item a.nav-link {
       color: #fff;
   }
   #mainNav .navbar-nav>li.nav-item.active {
       color:#fff;
       background: #18bc9c;
   }
   .navbar-brand{
       align-items: end;
       font-size: 36px;
       margin-bottom: 0;
       text-decoration: none;
   }

    ul{
        text-decoration: none;
        display: inline-block;
    }
    a{
        color: #fff;
    }
</style>