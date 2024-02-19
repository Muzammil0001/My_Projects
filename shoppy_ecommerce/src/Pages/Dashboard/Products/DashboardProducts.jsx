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
     
     <div   className='products_title mx-md-5 my-2 d-flex flex-md-row flex-column'>
    <div className='pro_img_dev col-md-2 col-12'>
<h5>Image</h5>
    </div>
    <div  className='col-md-5 col-12 d-flex justify-content-center align-items-center'><h5>Tilte</h5></div>
    <div  className='col-md-2 col-12 d-flex flex-column justify-content-center align-items-center'>
    <h5>Qantity</h5>
    </div>

    <div  className=' col-md-3 col-12 d-flex justify-content-evenly align-items-center'>
   <h5>Controls</h5>
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
    <div onClick={()=>ProductViewEvent((product.id))} className="control_icon"><i className='fa fa-eye '></i></div>|
    <div className="control_icon"><i className='fa fa-pen-to-square '></i></div>|
    <div className="control_icon"><i className='fa fa-trash '></i></div>
    </div>
    </div>

    </>})

}
    </div>
  )
}

export default DashboardProducts