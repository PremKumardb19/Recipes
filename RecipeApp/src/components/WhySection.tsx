const WhySection = () => {
   return (
     <div
       className="container-fluid mb-5 py-5"
       style={{
         backgroundColor: "black",
       }}
       id="why"
     >
       <div className="container text-center">
         <h2 className="text-white fs-1 fw-bold mb-4">Why Gusto Meals</h2>
         <div className="row">
           <div className="col-md-4 mb-4">
             <div
               className="d-flex flex-column align-items-center text-center"
               style={{ gap: "10px" }}
             >
               <div
                 className="rounded-circle d-flex justify-content-center align-items-center"
                 style={{
                   height: "70px",
                   width: "70px",
                   backgroundColor: "white",
                   color: "orangered",
                 }}
               >
                 <i className="fa fa-clock fs-4"></i>
               </div>
               <p className="text-white fs-5">Easy & Convenient</p>
             </div>
           </div>
 
           <div className="col-md-4 mb-4">
             <div
               className="d-flex flex-column align-items-center text-center"
               style={{ gap: "10px" }}
             >
               <div
                 className="rounded-circle d-flex justify-content-center align-items-center"
                 style={{
                   height: "70px",
                   width: "70px",
                   backgroundColor: "white",
                   color: "orangered",
                 }}
               >
                 <i className="fa fa-apple-alt fs-4"></i>
               </div>
               <p className="text-white fs-5">Nutritious & Healthy</p>
             </div>
           </div>
 
           <div className="col-md-4 mb-4">
             <div
               className="d-flex flex-column align-items-center text-center"
               style={{ gap: "10px" }}
             >
               <div
                 className="rounded-circle d-flex justify-content-center align-items-center"
                 style={{
                   height: "70px",
                   width: "70px",
                   backgroundColor: "white",
                   color: "orangered",
                 }}
               >
                 <i className="fa fa-dollar-sign fs-4"></i>
               </div>
               <p className="text-white fs-5">Affordable Meals</p>
             </div>
           </div>
         </div>
 
         <div className="row">
           <div className="col-md-4 mb-4">
             <div
               className="d-flex flex-column align-items-center text-center"
               style={{ gap: "10px" }}
             >
               <div
                 className="rounded-circle d-flex justify-content-center align-items-center"
                 style={{
                   height: "70px",
                   width: "70px",
                   backgroundColor: "white",
                   color: "orangered",
                 }}
               >
                 <i className="fa fa-cogs fs-4"></i>
               </div>
               <p className="text-white fs-5">Customizable Plans</p>
             </div>
           </div>
 
           <div className="col-md-4 mb-4">
             <div
               className="d-flex flex-column align-items-center text-center"
               style={{ gap: "10px" }}
             >
               <div
                 className="rounded-circle d-flex justify-content-center align-items-center"
                 style={{
                   height: "70px",
                   width: "70px",
                   backgroundColor: "white",
                   color: "orangered",
                 }}
               >
                 <i className="fa fa-truck fs-4"></i>
               </div>
               <p className="text-white fs-5">Fast Delivery</p>
             </div>
           </div>
 
           <div className="col-md-4 mb-4">
             <div
               className="d-flex flex-column align-items-center text-center"
               style={{ gap: "10px" }}
             >
               <div
                 className="rounded-circle d-flex justify-content-center align-items-center"
                 style={{
                   height: "70px",
                   width: "70px",
                   backgroundColor: "white",
                   color: "orangered",
                 }}
               >
                 <i className="fa fa-smile fs-4"></i>
               </div>
               <p className="text-white fs-5">Great Taste</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default WhySection;
 