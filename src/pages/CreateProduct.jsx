

const CreateProduct = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value
        const stock = form.stock.value
        const price = form.price.value
        const discount = form.discount.value
        const formData = {
            email: "anisurrahman01815001904@gmail.com",
            title,
            stock: Number(stock),
            price:parseFloat(price),
            discount:parseFloat(discount),
        }
        console.log(formData)
        fetch(`https://react-interview.1putym.easypanel.host/api/product`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res=> res.json())
        .then(data=>console.log(data))

    }
    return (
        <div className="flex justify-center items-center py-5 bg-gray-200">
         <div className="p-4">
         <h2 className="text-2xl font-semibold text-center">Create Product</h2>
          <form onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs">
     <div className="label">
    <span className="label-text">title</span>
  </div>
     <input type="text" name="title" placeholder="Type here" className="input input-bordered w-[400px] " />
     <div className="label">
    <span className="label-text">stock</span>
  </div>
     <input type="number" name="stock" placeholder="Type here" className="input input-bordered w-[400px] " />
     <div className="label">
    <span className="label-text">price</span>
  </div>
     <input type="text" name="price" placeholder="Type here" className="input input-bordered w-[400px]" />
     <div className="label">
    <span className="label-text">discount</span>
  </div>
     <input type="text" name="discount" placeholder="Type here" className="input input-bordered w-[400px]" />
</label>
<button type="submit" className="btn btn-active btn-primary mt-4">Primary</button>
          </form>
         </div>
  
        </div>
    );
};

export default CreateProduct;