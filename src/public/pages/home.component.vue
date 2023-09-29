<script setup>
</script>

<template>
  <main>
    <!--/.Hero Section-->
    <section id="hero" class="hero">
      <div class="background-image" style="background-image: url(https://i.ibb.co/MRZQYMr/unknown.png)" role="img"
           aria-label="Un hurón representando a las mascotas peculiares"></div>
      <h1>Cuida a tu mejor amigo</h1>
      <h3>Dandole lo mejor</h3>
      <a href="#our-work" class="btn">Conoce como</a>

    </section>

    <!--/.Our-work Section-->
    <section id="our-work" class="our-work">
      <h3 class="title">¿Cónoces la mejor manera de cuidar a tus mascotas?</h3>
      <p >Aprende con VetCare, que te porporcionará información sobre su cuidado para darles una buena calidad de vida.</p>
      <hr>

      <ul class="grid">
        <li class="small" style="background-image: url(https://i.ibb.co/4jkJxMX/huron7.jpg);" role="img"
            aria-label="Hurona siendo alimentada"></li>
        <li class="large" style="background-image: url(https://i.ibb.co/KsSTgbP/erizo.jpg);" role="img"
            aria-label="Erizo jugando"></li>
        <li class="large" style="background-image: url(https://i.ibb.co/NVSkQGy/serpe.jpg);" role="img"
            aria-label="Serpiente jugando"></li>
        <li class="small" style="background-image: url(https://i.ibb.co/pzdRb98/cuy.jpg);" role="img"
            aria-label="Cuy bañandose"></li>
      </ul>
    </section>

    <!--/.Pets Section-->
    <section id="pets" class="services">
      <h3 class="title">La app te ofrece </h3>
      <p > distintos servicios para que le des el mejor cuidado a tu mascota.</p>
      <hr>

      <ul class="grid">
        <li>
          <img src="https://i.ibb.co/3zMVjtd/Nariz.png" width="100"  alt="Icono nariz de perrito">
          <h4>Informate</h4>
          <p>sobre el cuidado adecuado para tu mascota con relación a la alimentación, higiene, ambiente y ciclo sexual.</p>
        </li>
        <li>
          <img src="https://i.ibb.co/1sNfH0w/Calendario.png" width="100" alt="Icono calendario">
          <h4>Registra</h4>
          <p>una cita que realizarás para el chequeo preventivo de tu mascota.</p>
        </li>
        <li>
          <img src="https://i.ibb.co/NL9yPP7/Veterinario.png" width="100" alt="Icono veterinaria">
          <h4>Busca </h4>
          <p>veterinarias especializadas para el cuidado de tu mascota.</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');


/* General Common Styles */



a {
  font: normal 20px sans-serif;
  text-decoration: none;
  color: black;
  cursor: pointer;
  opacity: 0.9;
}

a:hover {
  opacity: 1;
}

a.btn {
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #f55253;
  font-weight: 800;
  text-align: center;
}

hr {
  width: 300px;
  height: 2px;
  background-color: #f55253;
  border: 0;
  margin-bottom: 80px;
}



/* Section Common Styles */




section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125px 100px;
}

@media (max-width: 1000px) {

  section {
    padding: 100px 50px;
  }

}

@media (max-width: 600px) {

  section {
    padding: 80px 30px;
  }

}

section h3.title {
  color: #414a4f;
  font: bold 32px 'Comic Sans MS', sans-serif;
  margin-bottom: 35px;
  text-align: center;
}

section h3.titleUS {
  color: #414a4f;
  font: bold 32px 'Comic Sans MS', sans-serif;
  position: absolute;
  margin-bottom: 35px;
  text-align: center;
}
section h3.titleUS2 {
  color: #414a4f;
  font: bold 32px 'Comic Sans MS', sans-serif;
  position: absolute;
  top: 4000px;
  left: 649px;
}
section h3.titleUS3 {
  color: #414a4f;
  font: bold 32px 'Comic Sans MS', sans-serif;
  position: absolute;
  top: 4230px;
  left: 649px;
}

section p {
  max-width: 800px;
  text-align: center;
  margin-bottom: 35px;
  padding: 0 20px;
  line-height: 2;
}


ul.grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}




.hero {
  position: relative;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  text-align: center;
}

.hero .background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #2196F3;
  z-index: -1;
}

.hero .background-image:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(163, 169, 169, 0.42);
  opacity: 0.75;
}

.hero h1 {
  font: bold 60px 'Open Sans', sans-serif;
  margin-bottom: 10px;
  color: #000000;
}

.hero h3 {
  font: normal 28px 'Open Sans', sans-serif;
  margin-bottom: 40px;
  color: #000000;
}

.hero a.btn {
  padding: 20px 46px;
}

@media (max-width: 800px) {

  .hero {
    min-height: 600px;
  }

  .hero h1 {
    font-size: 48px;
  }

  .hero h3 {
    font-size: 24px;
  }

  .hero a.btn {
    padding: 15px 40px;
  }

}

/* Our Work Section */

.оur-work {
  background-color: #fff;
}

p {
  font: normal 22px 'Comic Sans MS', sans-serif;
}

.our-work .grid li {
  padding: 20px;
  height: 350px;
  border-radius: 3px;

  background-clip: content-box;
  background-size: cover;
  background-position: center;
  background-color: #333;
}

.our-work .grid li.small {
  flex-basis: 40%;
}

.our-work .grid li.large {
  flex-basis: 60%;
}


@media (max-width: 1000px) {

  .our-work .grid li.small,
  .our-work .grid li.large {
    flex-basis: 100%;
  }

}

/* Services Section */

.services {
  background-color: #f7f7f7;
}

.services .grid li {
  padding: 0 30px;
  flex-basis: 33%;
  text-align: center;

}

.services .grid li i {
  font-size: 50px;
  color: #2196F3;
  margin-bottom: 25px;
}

.services .grid li h4 {
  color: #555;
  font: bold 32px 'Comic Sans MS', sans-serif;



}


.services .grid li p {
  margin: 0;

}


@media (max-width: 1000px) {

  .services .grid li {
    flex-basis: 70%;
    margin-bottom: 65px;
  }

  .services .grid li:last-child {
    margin-bottom: 0;
  }

}

@media (max-width: 600px) {

  .services .grid li {
    flex-basis: 100%;
  }

}


</style>
