import React,{useState, useEffect} from 'react'
import "./dashboardProducts.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const DashboardProducts = () => {
const navigate=useNavigate()

    const [data, setData] = useState([]);

    const ProductViewEvent = (id) => {
        const fetchedProduct = data?.find((item) => item.id === id);
       if(fetchedProduct){
        navigate(`/product/${fetchedProduct.id}`, {
            state: { productData: fetchedProduct }
          });
       }
        console.log(fetchedProduct);
      };
// Item Update Event

// Item delete handle
const ProductDeleteEvent =async(id)=>{
  try {
    
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
        const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
        console.log('Item Deletion response:', response.data);
       if(response){alert('Item Deleted Successfully!')} 
    } else {
        console.log('Deletion cancelled by user.' );
    }
} catch (error) {
    console.error('Item Deletion Error:', error.message);
}
}
// Produuct Update Event 
const ProductUpdateEvent =(id)=>{
  const fetchedProduct = data?.find((item) => item.id === id);
  if(fetchedProduct){
   navigate(`/product/update/${fetchedProduct.id}`, {
       state: { productUpdata: fetchedProduct }
     });
  }
  console.log("Updatable Item:",fetchedProduct);
}


  useEffect(() => {

    // Fetching Product API data 
    const fetchAPI = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?sort=desc");
        setData(response.data);
        console.log('API data: ', response.data);
      } catch (error) {
        console.log("API ERROR", error);
      }
    };
 fetchAPI()

  }, []);



  return (
    <div className='container'>
     
     <div   className='products_title mx-md-5 my-2 d-flex flex-md-row flex-column align-items-center bg-dark'>
    <div className='pro_img_dev col-md-2 col-12'>
<h5>Image</h5>
    </div>
    <div  className='col-md-5 col-12 d-flex justify-content-center align-items-center'><h5>Title</h5></div>
    <div  className='col-md-2 col-12 d-flex flex-column justify-content-center align-items-center'>
    <h5>Qantity</h5>
    </div>

    <div  className=' col-md-3 col-12 d-flex justify-content-evenly align-items-center'>
   <h5>Control</h5>
    </div>
    </div>
    <div className='add_product_sec d-flex justify-content-end'>
    <Link to="/product/create"><div className="control_icon_plus "><i className='fa fa-plus '></i></div></Link>

    </div>
{    
 data?.map((product, index)=>{
    
    return <>
    
    <div key={index}  className='products mx-md-5 my-2 d-flex flex-md-row flex-column'>
    <div className='pro_img_dev col-md-2 col-12'>
<img className="pro_img" src={product.image} alt={product.title} />
    </div>
    <div  className='col-md-5 col-12 px-3 py-1'><p  className='fw-bold'>{product.title}</p></div>
    <div  className='col-md-2 col-12 d-flex justify-content-center align-items-center'>
    <h6>{product.rating.count} </h6>
    </div>

    <div  className=' col-md-3 col-12 d-flex justify-content-evenly align-items-center'>
    <div onClick={()=>ProductViewEvent((product.id))} className="control_icon"><i className='fa fa-eye '></i></div>
    <spn>|</spn>
    <div  onClick={()=>ProductUpdateEvent((product.id))} className="control_icon"><i className='fa fa-pen-to-square '></i></div>
    <spn>|</spn>
    <div className="control_icon" onClick={()=>ProductDeleteEvent(product.id)}><i className='fa fa-trash '></i></div>
    
   
    </div>
    </div>

    </>})

}
    </div>
  )
}

export default DashboardProducts