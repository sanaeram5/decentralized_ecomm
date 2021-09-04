import React,{Component} from 'react';

class SideProductAdd extends Component{
	render(){
		return(
			<>
				<section className="main">
					<main class="main">
						<div className="container pb-5">
							<h1 className="pb-2 pt-4 text-center">Add Product</h1>
							<form>
								<div class="form-group">
									<div class="mb-3">
									    <label for="blog_title">Title</label>
									    <input type="text" class="form-control" id="blog_title" placeholder="Blog Title" required />
									</div>
								</div>
								<div class="form-group">
								    <div class="mb-3">
									    <label for="validationTextarea">Blog Body</label>
									    <textarea class="form-control" id="blog_body" placeholder="Blog Body" required></textarea>
									</div>
								</div>
								<div class="form-group">
								    <select class="custom-select form-control" required>
								      <option value="">Categories</option>
								      <option value="1">One</option>
								      <option value="2">Two</option>
								      <option value="3">Three</option>
								    </select>
								</div>
								<div class="form-group">
								    <select class="custom-select form-control" required>
								      <option value="">Tags</option>
								      <option value="1">One</option>
								      <option value="2">Two</option>
								      <option value="3">Three</option>
								    </select>
								</div>
								<div class="custom-file mb-5">
								    <input type="file" class="custom-file-input form-control" id="blog_image" required/>
								    <label class="custom-file-label" for="validatedCustomFile">Select blog image...</label>
								</div>
								<button class="btn btn-primary" type="submit">Add Product</button>
							</form>
						</div>
					</main>
				</section>
			</>
		);
	}
}

export default SideProductAdd;