import React, { useState } from 'react'
import {Helmet} from "react-helmet";
import Axios from 'axios';

//------------------FAYSAL BANK-------------------------

function Family(){
      const [Family, setFamily]=useState([])
      const [userAge,setuserAge]=useState('')
      const [spouseAge, setspouseAge]=useState('')
      const [Hospitalization, setHospitalization]=useState('')

      const getPlans=()=>{
        alert(userAge+spouseAge+Hospitalization);
        Axios.get('http://localhost:3001/familyInsurance',
        {
          userAge:userAge,
          spouseAge:spouseAge,
          Hospitalization:Hospitalization
        }
        
        ).then(res=>{
          setFamily(res.data)
        });

      }
      
      return (
        <div>
        <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Layout1</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css" />
      <link rel="stylesheet" href="assets/css/Navigation-Clean.css" />
      <link rel="stylesheet" href="assets/css/Simple-Slider.css" />
      <link rel="stylesheet" href="assets/css/styles.css" />
        <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: '#0051ba'}}>
      <div className="container">
          <a className="navbar-brand" href="/" style={{color: '#c4d8e2'}}>SECURUS!</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
              <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation"><a className="nav-link" href="/Bike" style={{color: '#c4d8e2'}}>Bike</a></li>
            <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="/Car" style={{color: '#c4d8e2'}}>Car</a>
              <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="/comprehensiveInsurance">Comprehensive Insurance</a><a className="dropdown-item" role="presentation" href="/hondaInsurance">Honda Insurance</a><a className="dropdown-item" role="presentation" href="/toyotaInsurance">Toyota Insurance</a></div>
            </li>
            <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="/Health" style={{color: '#c4d8e2'}}>Health</a>
              <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="/coronaProtectionInsurance">Corona Protection Insurance</a><a className="dropdown-item" role="presentation" href="/individualInsurance">Individual Insurance</a><a className="dropdown-item" role="presentation" href="/familyInsurance">Family Insurance</a></div>
            </li>
            <li className="nav-item" role="presentation"><a className="nav-link" href="/contact" style={{color: '#c4d8e2'}}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
        </div>  
        <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/186072.jpg")`}}>
          <div className="contact-clean" style={{width: '480px', height: '594px', margin: '0px 600px', padding: '40px'}}>
            <form  onSubmit={getPlans} style={{maxWidth: '480px', width: '90%', margin: '0 auto', backgroundColor: '#ffffff',
             padding: '40px', borderRadius: '4px', color: '#505e6c', boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)'}}>
              <h2 className="text-center">Family Health Insurance</h2>
              <table>
                <tr>
                <td><button style={{width:'140px'}} className="btn btn-primary" type="button">Myself&nbsp;</button></td>
                <td><button style={{width:'140px'}} className="btn btn-primary" type="button">Parents&nbsp;</button></td>
                </tr>
              </table>
              <div>
              <label>&nbsp;</label>
              </div>
              <label>Enter Your Age</label>
              <select className="form-control" onChange={(event)=>{setuserAge(event.target.value)}}><optgroup label="Age" >
              <option value={18}>18</option><option value={19}>19</option><option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
              <option value={32}>32</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
              <option value={36}>36</option>
              <option value={37}>37</option>
              <option value={38}>38</option>
              <option value={39}>39</option>
              <option value={40}>40</option></optgroup></select>
              <label>Enter Your Spouses Age</label>
              <select className="form-control" onChange={(event)=>{setspouseAge(event.target.value)}}>
                <optgroup label="Age">
                <option value={18}>18</option><option value={19}>19</option><option value={20}>20</option>
                <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
              <option value={32}>32</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
                </optgroup>
              </select><label>Select Hospitalization Limit (PKR)</label>
              <select className="form-control" onChange={(event)=>{setHospitalization(event.target.value)}}>
              <optgroup label="PKR"><option value={200000}>200000</option>
              <option value={500000}>500000</option><option value={100000}>100000</option></optgroup></select>
              <div>
              <label>&nbsp;</label>
              </div>
              <button  style= {{width:'285px'}} className="btn btn-primary" type="submit">See Plans</button>
            </form>
            
            <div class="container" stye={{ maxWidth: '1000px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '10px',
                paddingRight: '10px'}}>
              <h2 style={{fontSize: '26px', margin: '20px 0', textAlign: 'center'}}>Free Quotes </h2>
              <ul class="responsive-table">
              <li class="table-header" style={{borderRadius: '3px',
              padding: '25px 30px', display: 'flex', justifyContent: 'space-between', marginBottom: '25px',
              backgroundColor: '#95A5A6',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.03em'}}>
              <div class="col col-1">Company Name</div>
              <div class="col col-2">Room And Board Limit</div>
              <div class="col col-3">Installment Available</div>
              <div class="col col-4">Premium</div>
              <div class="col col-4">Age</div>
              <div class="col col-4">Spouse's Age</div>
              <div class="col col-4">Hospitalization</div>
              <div class="col col-4">&nbsp;</div>
            </li>
    
    {Family.map((val, key)=>{
            return(
              

            <li class="table-row" style={{borderRadius: '3px',
            padding: '25px 30px', display: 'flex', justifyContent: 'space-between', marginBottom: '25px', 
            backgroundColor: '#ffffff',
            boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.1)'}}>
            <div class="col col-1" data-label="Job Id" style={{flexBasis: '10%'}}>{val.companyName}</div>
            <div class="col col-2" data-label="Customer Name" style={{flexBasis: '10%'}}>{val.roomAndBoardLimit}</div>
            <div class="col col-3" data-label="Amount" style={{flexBasis: '10%'}}>{val.installmentAvailable}</div>
            <div class="col col-4" data-label="Payment Status" style={{flexBasis: '10%'}}>{val.premium}</div>
            <div class="col col-4" data-label="Payment Status" style={{flexBasis: '10%'}}>{val.age}</div>
            <div class="col col-4" data-label="Payment Status" style={{flexBasis: '10%'}}>{val.spouseAge}</div>
            <div class="col col-4" data-label="Payment Status" style={{flexBasis: '10%'}}>{val.Hospitalization}</div>
          </li>
    )})}
    </ul>
    </div>
          </div>
          <div className="jumbotron">
            <h1>What is Health Insurance?<br /></h1>
            <p>Health insurance is simply a type of insurance converage that typically pays entirely or part of a risk that requires medical expenses.<br />There are mainly three types of health insurance which are for the client theirself, their family or their
              parents.<br />Purchasing health insurance is important now a days since it protects you and your family from financial losses the same way a car insurance or home insurance does. Even if you are good health, you never know when you might fall
              seriously ill or in an accident. A trip to the hospital can be much more constly than expected which can be convered by the insurance purchased.<br /></p>
          </div>
        </div>
        <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.jquery.min.js"></script>
            <script src="assets/js/Simple-Slider.js"></script>
          </Helmet>
       </div>
      );
    }
  
export default Family;