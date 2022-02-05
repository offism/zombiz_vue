<template>
  <section class="header">
    <div class="container">
      <div class="main-head">
        <div class="header-left">
          <ul class="pull-left">
            <li>
              <a href="#">
                <i class="fa fa-phone" aria-hidden="true"></i> +992 563 542
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-envelope" aria-hidden="true"></i>info@mail.com
              </a>
            </li>
          </ul>
        </div>
        <div class="header-right pull-right">
          <ul>
            <li class="reg">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Register
              </a>
              /
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Log in
              </a>
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" style="width: 220px">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title text-danger"
                        id="exampleModalLabel"
                      >
                        Sign in
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form style="width: 200px; display: contents">
                        <div class="mb-3 text-initial">
                          <label for="exampleInputEmail1" class="form-label"
                            >Email address</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Email"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3 text-initial">
                          <label for="exampleInputPassword1" class="form-label"
                            >Password</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter Password"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div class="mb-3 form-check text-initial">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                          <label class="form-check-label" for="exampleCheck1"
                            >Remember me</label
                          >
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-danger">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title text-danger"
                        id="exampleModalLabel"
                      >
                        Register
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form style="width: 1200px; display: contents">
                        <div class="mb-3 text-initial">
                          <label for="exampleInputName1" class="form-label"
                            >Name</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputName1"
                            placeholder="Enter Name"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3 text-initial">
                          <label for="exampleInputEmail1" class="form-label"
                            >Email address</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter Email"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="mb-3 text-initial">
                          <label for="exampleInputPassword1" class="form-label"
                            >Password</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter Password"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-danger">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="social-icon">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- navbar -->
    <div class="navbar-menu">
      <!-- <header class="sticky"> -->
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="box-btns__header">
            <div class="box-brand__left">
              <a class="navbar-brand" href="#">Zombiz</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Service</a>
                <a class="nav-link" href="#">Project</a>
                <a class="nav-link" href="#">Team</a>
                <a class="nav-link" href="#">Blog</a>
                <a class="nav-link" href="#">Contact</a>
                <a class="nav-link"><i class="lnr lnr-cart"></i></a>
                <a class="nav-link"><i class="lnr lnr-magnifier"></i></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- </header> -->
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar-menu {
  position: fixed;
  z-index: 1000;
  /* top: 20vh; */
  /* left: 0; */
  width: 100%;
}
/* .sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: auto;
} */
nav {
  background-color: rgba(115, 112, 216, 1);
}
.header {
  padding-top: 20px;
}
.main-head {
  display: flex;
  justify-content: space-between;
}
.header li a {
  color: #888;
  outline: 0;
}
.header-left li {
  display: inline-block;
  margin-right: 50px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.header-left li i {
  margin-right: 7px;
  color: #888;
}
.header-left li :hover {
  color: #7370d8;
}
.header-right {
  color: #888;
  font-family: "Poppins", sans-serif;
}
.header-right li {
  display: inline-block;
}
.header-right li a {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  padding-bottom: 7px;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.header-right li a:hover {
  color: #7370d8;
}
.reg a {
  margin-right: 5px;
  margin-left: 5px;
}

/* social-icon */
.social-icon {
  margin-left: 6px;
  top: 0;
  right: 0;
}
.social-icon li a {
  margin-left: 14px;
}
.text-initial {
  text-align: initial;
}
label {
  font-weight: bold;
}

.navbar-menu .navbar a {
  color: #fff;
}
.box-btns__header {
  display: block;
  width: 100%;
}
.box-brand__left {
  display: inline-block;
  float: left;
}
#navbarNavAltMarkup {
  display: inline-block;
  float: right;
}
</style>
