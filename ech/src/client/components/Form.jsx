import Logo5 from "../../../../logo/ECH_logo5.png";


function Form() {
  return (
    <>
      <div className="form-container">
        {/* progressbar */}
        <ul id="progressbar">
          <li className="active">Ad Content</li>
          <li>Additional Information</li>
          <li>Personal Details</li>
        </ul>

        {/* fieldsets */}
        <form id="msform" className="quote-form">
          {/* Account Setup */}
          <fieldset className="form-fieldset">
            <h2 className="fs-title">Request a Quote</h2>
            <h3 className="fs-subtitle">Step 1: Ad Content</h3>

            {/* <label htmlFor="adText" className="form-label">COPY AND PASTE YOUR AD HERE*</label> */}
            <textarea id="adText" name="adText" className="form-textarea" placeholder="PLACE AD TEXT HERE OR UPLOAD A FILE BELOW"required></textarea>

            <label htmlFor="fileUpload" className="form-label">UPLOAD DOCUMENT OR PDF</label>
            <input type="file" id="fileUpload" name="fileUpload" className="form-file-input" />

            <label className="form-label">AD SELECTIONS</label>
            <label className="form-checkbox-label"><input type="checkbox" name="selections" value="sundayPrint" /> SUNDAY PRINT ADS</label>
            <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> LOCAL OR CULTURAL PRINT AD</label>

            <input type="button" name="next" className="next action-button" value="Next" />
          </fieldset>

          {/* Additional Information */}
          <fieldset className="form-fieldset">
            <h2 className="fs-title">Additional Instructions</h2>
            <h3 className="fs-subtitle">Step 2: Additional Information</h3>

            <label htmlFor="additionalInstructions" className="form-label">ADDITIONAL INSTRUCTIONS OR NOTES</label>
            <textarea id="additionalInstructions" name="additionalInstructions" className="form-textarea"></textarea>

            <label htmlFor="jobLocationZip" className="form-label">JOB LOCATION ZIP CODE</label>
            <input type="text" id="jobLocationZip" name="jobLocationZip" placeholder="ex: 10011" className="form-input" />

            <label htmlFor="caseNumber" className="form-label">CASE OR REFERENCE NUMBER</label>
            <input type="text" id="caseNumber" name="caseNumber" className="form-input" />

            <input type="button" name="previous" className="previous action-button" value="Previous" />
            <input type="button" name="next" className="next action-button" value="Next" />
          </fieldset>

          {/* Personal Details */}
          <fieldset className="form-fieldset">
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">Step 3: Contact Information</h3>

            <div className="name-section">
              <label htmlFor="firstName" className="form-label">FIRST NAME*</label>
              <input type="text" id="firstName" name="firstName" placeholder="First Name" className="form-input" required />
            </div>

            <div className="name-section">
              <label htmlFor="lastName" className="form-label">LAST NAME*</label>
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="form-input" required />
            </div>

            <label htmlFor="email" className="form-label">E-MAIL*</label>
            <input type="email" id="email" name="email" placeholder="ex: myname@example.com" className="form-input" required />

            <label htmlFor="companyName" className="form-label">COMPANY NAME*</label>
            <input type="text" id="companyName" name="companyName" className="form-input" required />

            <label htmlFor="phoneNumber" className="form-label">PHONE NUMBER</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="form-input" />

            <input type="button" name="previous" className="previous action-button" value="Previous" />
            <a href="https://twitter.com/GoktepeAtakan" className="submit action-button" target="_top">Submit</a>
          </fieldset>
        </form>
      </div>
    </>
  );
}




// return (
//   <>
//     <div className="form-container">
//       <img className="logo7" src={Logo5} alt="Logo7" />

//       <h2>REQUEST A QUOTE</h2>
//       <p>PLEASE COMPLETE THE FORM BELOW TO SUBMIT YOUR REQUEST</p>

//       <form action="#" method="post" className="quote-form">
//         <label htmlFor="adText" className="form-label">PLACE AD TEXT HERE OR UPLOAD A FILE BELOW</label>
//         <textarea id="adText" name="adText" className="form-textarea" required></textarea>

//         <label htmlFor="fileUpload" className="form-label">UPLOAD DOCUMENT OR PDF</label>
//         <input type="file" id="fileUpload" name="fileUpload" className="form-file-input" />

//         <label className="form-label">AD SELECTIONS (select all that apply)</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="sundayPrint" /> SUNDAY PRINT ADS</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> LOCAL OR CULTURAL PRINT AD</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> ONLINE JOB POSTING</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> RADIO ADVERTISING</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> TRADE JOURNAL</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> SWA JOB POSTING</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> CAMPUS POSTING</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> EMPLOYER WEBSITE TRACKING</label>
//         <label className="form-checkbox-label"><input type="checkbox" name="selections" value="localCulturalPrint" /> OTHER</label>
//         <input type="text" id="otherSelection" name="otherSelection" className="form-input" required/>

//         <label htmlFor="additionalInstructions" className="form-label">ADDITIONAL NOTES (include invoicing instructions)</label>
//         <textarea id="additionalInstructions" name="additionalInstructions" className="form-textarea"></textarea>


//         <label htmlFor="jobLocationZip" className="form-label">JOB LOCATION ZIP CODE</label>
//         <input type="text" id="jobLocationZip" name="jobLocationZip" placeholder="ex: 10011" className="form-input" />

//         <label htmlFor="caseNumber" className="form-label">CASE OR REFERENCE NUMBER</label>
//         <input type="text" id="caseNumber" name="caseNumber" className="form-input" />

//         <div className="name-section">
//           <label htmlFor="firstName" className="form-label">NAME*</label>
//           <input type="text" id="firstName" name="firstName" placeholder="First Name" className="form-input" required />
//           <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="form-input" required />

//         </div>

       

//         <label htmlFor="email" className="form-label">EMAIL*</label>
//         <input type="email" id="email" name="email" placeholder="name@email.com" className="form-input" required />

//         <label htmlFor="companyName" className="form-label">COMPANY NAME*</label>
//         <input type="text" id="companyName" name="companyName" className="form-input" required />

//         <label htmlFor="phoneNumber" className="form-label">PHONE NUMBER</label>
//         <input type="tel" id="phoneNumber" name="phoneNumber" className="form-input" />

//         <button type="submit" className="form-button">Submit Form</button>
//       </form>
//     </div>
//   </>
// );

export default Form;
