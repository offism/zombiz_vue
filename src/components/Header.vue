<template>
  <section class="header">
			<div class="container">	
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
							<a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal">
								Register
							</a>
								/
							<a href="#" >
								Log in
							</a>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
						</li>
            
						<li>
							<div class="social-icon">
								<ul>
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
</template>

<script>
export default {
  name: 'Header',
 
}
</script>

<style scoped>
.header {
  padding-top: 20px;
  padding-bottom: 12px;
}
.header li a {
  color: #888;
  outline: 0;
}
/* header-left  */
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
} /* header-left  */

/* header-right */
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
</style>
