
import Burger from "../burger.jpg";
import Pizza from "../pizza.jpg";
import Noodles from "../s-noodles.jpg";
import Paneer from "../s-paneer.jpg";
function Mainsec()
{
    return(

     <>
        <h2 className='tagline'><span className='eat'>Eat It</span>  <span className='feel' > Feel It</span></h2>
        <div className="imgs">

        <div className="img">
        <img src={Burger} alt='' className='burger'/>
        <h5>Burger with French Fries</h5>
        <h5>Starting @ Rs.299 </h5>
        <button className="order">Order</button>
        </div>
        <div className="img">
        <img src={Pizza} alt="" className='pizza' />
        <h5>Double Cheeze Pizza</h5>
        {/* <i class="fa-solid fa-caret-down"></i> */}
        <h5>Starting @ Rs.599</h5>
        <button className="order">Order</button>
        </div>
        <div className="img">
        <img src={Noodles} alt="" className='noodle' />
        <h5>Schezwan Noodles</h5>
        <h5>Starting @ Rs.350</h5>
        <button className="order">Order</button>
        </div>
        <div className="img">
        <img src={Paneer} alt="" className='paneer' />
        <h5>Schezwan Fried Rice</h5>
        <h5>Starting @ Rs.499</h5>
        <button className="order">Order</button>
        </div>

        </div>
        
     </>

    );
}

export default Mainsec;