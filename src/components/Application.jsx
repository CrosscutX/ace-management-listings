import { useState } from "react";

export default function Application() {
  const [felony, setFelony] = useState(false);
  const [pets, setPets] = useState(false);

  function felonySetter() {
    if (felony === true) {
      setFelony(false);
    } else {
      setFelony(true);
    }
  }

  function petSetter() {
    if (pets === true) {
      setPets(false);
    } else {
      setPets(true);
    }
  }

  return (
    <div className="application">
      <h1>Ace Management Property Application</h1>
      <div className="application-container">
        <form
          className="contact-form"
          name="contact"
          action="/contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-header">
            <h2>Personal Information</h2>
          </div>
          <div className="form-item">
            <label htmlFor="form-property">Property Applying For:</label>
            <input
              type="text"
              id="form-property"
              name="form-property"
              readOnly
            />
          </div>

          <div className="form-item">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="fname" required />
          </div>

          <div className="form-item">
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" required />
          </div>

          <div className="form-item">
            <label htmlFor="dob">DOB:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              min="1920-01-01"
              max="2023-12-31"
            />
          </div>

          <div className="form-item">
            <label htmlFor="number">Number:</label>
            <input
              type="tel"
              id="number"
              name="number"
              required
              autoComplete="tel"
            />
          </div>

          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-item">
            <div className="felony-container">
              <label htmlFor="felony">Convincted of a felony?</label>
              <input
                type="checkbox"
                name="felony"
                id="felony"
                className="checkbox"
                onClick={felonySetter}
              />
            </div>
            {felony && (
              <div className="county-container">
                <label htmlFor="county">What County?</label>
                <input type="text" name="county" id="county" />
              </div>
            )}
          </div>

          <div className="form-item form-checkbox">
            <label htmlFor="sex-offender">Sex Offender?</label>
            <input
              type="checkbox"
              name="sex-offender"
              id="sex-offender"
              className="checkbox"
            />
          </div>

          <div className="form-header">
            <h2>Previous Residences</h2>
          </div>

          <div className="form-item">
            <label htmlFor="present-address">Present Address:</label>
            <input type="text" name="present-address" id="present-address" />
          </div>

          <div className="form-item">
            <label htmlFor="present-address-length">Length At Address</label>
            <select name="present-address-length" id="present-address-length">
              <option value="0">Length...</option>
              <option value="Below 6 months">{"<"}6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="1-2 years">1-2 years</option>
              <option value="2-3 years">2-3 years</option>
              <option value="3-4 years">3-4 years</option>
              <option value="4-5 years">4-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>

          <div className="form-item">
            <label htmlFor="present-address-rent">Rent:</label>
            <input
              type="number"
              name="present-address-rent"
              id="present-address-rent"
              step="100"
              className="number-input"
            />
          </div>

          <div className="form-item">
            <label htmlFor="present-landlord">Landlord:</label>
            <input type="text" name="present-landlord" id="present-landlord" />
          </div>

          <div className="form-item">
            <label htmlFor="present-landlord-number">Landlord Number:</label>
            <input
              type="tel"
              name="present-landlord-number"
              id="present-landlord-number"
            />
          </div>

          <div className="form-item">
            <label htmlFor="previous-address">Previous Address:</label>
            <input type="text" name="previous-address" id="previous-address" />
          </div>

          <div className="form-item">
            <label htmlFor="previous-address-length">Length At Address</label>
            <select name="previous-address-length" id="previous-address-length">
              <option value="0">Length...</option>
              <option value="Below 6 months">{"<"}6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="1-2 years">1-2 years</option>
              <option value="2-3 years">2-3 years</option>
              <option value="3-4 years">3-4 years</option>
              <option value="4-5 years">4-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>

          <div className="form-item">
            <label htmlFor="previous-address-rent">Rent:</label>
            <input
              type="number"
              name="previous-address-rent"
              id="previous-address-rent"
              step="100"
            />
          </div>

          <div className="form-item">
            <label htmlFor="previous-landlord">Landlord:</label>
            <input
              type="text"
              name="previous-landlord"
              id="previous-landlord"
            />
          </div>

          <div className="form-item">
            <label htmlFor="previous-landlord-number">Landlord Number:</label>
            <input
              type="tel"
              name="previous-landlord-number"
              id="previous-landlord-number"
            />
          </div>

          <div className="form-header">
            <h2>Employment Info</h2>
          </div>

          <div className="form-item">
            <label htmlFor="employer">Employer</label>
            <input type="text" name="employer" id="employer" />
          </div>

          <div className="form-item">
            <label htmlFor="employer-phone">Employer Phone:</label>
            <input type="tel" name="employer-phone" id="employer-phone" />
          </div>

          <div className="form-item">
            <label htmlFor="employer-length">Length at employer:</label>
            <select name="employer-length" id="employer-length">
              <option value="0">Length...</option>
              <option value="Below 6 months">{"<"}6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="1-2 years">1-2 years</option>
              <option value="2-3 years">2-3 years</option>
              <option value="3-4 years">3-4 years</option>
              <option value="4-5 years">4-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>

          <div className="form-item">
            <label htmlFor="income">Income:</label>
            <input type="number" name="income" id="income" />
          </div>

          <div className="form-item form-checkbox">
            <label htmlFor="proof-of-income">
              Can you provide proof of income?
            </label>
            <input
              type="checkbox"
              name="proof-of-income"
              id="proof-of-income"
              className="checkbox"
            />
          </div>

          <div className="form-header">
            <h2>Occupant Questions</h2>
          </div>

          <div className="form-item">
            <span className="other-occupants-header">
              Other Household Occupants
            </span>
            <div className="other-household-occupants">
              <div className="household-occupants-name-container">
                <label htmlFor="other-household-occupant-name1">Name:</label>
                <input
                  type="text"
                  name="other-household-occupant-name1"
                  id="other-household-occupant-name1"
                  className="other-occupant-name"
                />
                <label htmlFor="other-household-occupant-name2">Name:</label>
                <input
                  type="text"
                  name="other-household-occupant-name2"
                  id="other-household-occupant-name2"
                  className="other-occupant-name"
                />
                <label htmlFor="other-household-occupant-name3">Name:</label>
                <input
                  type="text"
                  name="other-household-occupant-name3"
                  id="other-household-occupant-name3"
                  className="other-occupant-name"
                />
                <label htmlFor="other-household-occupant-name4">Name:</label>
                <input
                  type="text"
                  name="other-household-occupant-name4"
                  id="other-household-occupant-name4"
                  className="other-occupant-name"
                />
                <label htmlFor="other-household-occupant-name5">Name:</label>
                <input
                  type="text"
                  name="other-household-occupant-name5"
                  id="other-household-occupant-name5"
                  className="other-occupant-name"
                />
              </div>
              <div className="household-occupants-dob-container">
                <label htmlFor="other-household-occupant-dob1">Date:</label>
                <input
                  type="date"
                  name="other-household-occupant-dob1"
                  id="other-household-occupant-dob1"
                  className="other-occupant-dob"
                />
                <label htmlFor="other-household-occupant-dob2">Date:</label>
                <input
                  type="date"
                  name="other-household-occupant-dob2"
                  id="other-household-occupant-dob2"
                  className="other-occupant-dob"
                />
                <label htmlFor="other-household-occupant-dob3">Date:</label>
                <input
                  type="date"
                  name="other-household-occupant-dob3"
                  id="other-household-occupant-dob3"
                  className="other-occupant-dob"
                />
                <label htmlFor="other-household-occupant-dob4">Date:</label>
                <input
                  type="date"
                  name="other-household-occupant-dob4"
                  id="other-household-occupant-dob4"
                  className="other-occupant-dob"
                />
                <label htmlFor="other-household-occupant-dob5">Date:</label>
                <input
                  type="date"
                  name="other-household-occupant-dob5"
                  id="other-household-occupant-dob5"
                  className="other-occupant-dob"
                />
              </div>
            </div>
          </div>

          <div className="form-item">
            <div className="pet-container">
              <label htmlFor="pets">Do you have pets?</label>
              <input
                type="checkbox"
                name="pets"
                id="pets"
                className="checkbox"
                onClick={petSetter}
              />
            </div>
            {pets && (
              <div className="pet-type-container">
                <label htmlFor="pet-type">What Kind?</label>
                <input type="text" name="pet-type" id="pet-type" />
              </div>
            )}
            {pets && (
              <div className="pet-amount-container">
                <label htmlFor="pet-amount">How Many?</label>
                <input type="number" id="pet-amount" name="pet-amount" />
              </div>
            )}
          </div>

          <div className="form-item form-checkbox">
            <label htmlFor="amount-needed-to-move-in">
              Do you have the full amount needed to move in?
            </label>
            <input
              type="checkbox"
              name="amount-needed-to-move-in"
              id="amount-needed-to-move-in"
              className="checkbox"
            />
          </div>

          <div className="form-item">
            <label htmlFor="car-payment">Car Payment:</label>
            <input type="number" name="car-payment" id="car-payment" />
          </div>

          <div className="form-item">
            <label htmlFor="card-payment">Credit Card Payment:</label>
            <input type="number" name="card-payment" id="card-payment" />
          </div>

          <div className="form-item">
            <label htmlFor="other-payment">Other Payments:</label>
            <input type="number" name="other-payment" id="other-payment" />
          </div>

          <div className="authorization-container">
            <p>
              I declare that the statements above are true and correct. I hereby
              give authorization to landlord or landlord's agent(s) to verify
              all information provided in this application. Permission is
              granted to interview current and previous landlords, employers,
              references, to check criminal record, court records, income, bank
              account, and credit information. I understand that providing
              false, misleading, or incomplete information will result in my
              application being denied.
            </p>

            <div className="final-checkbox-container">
              <input
                type="checkbox"
                className="final-checkbox"
                name="authorization"
                id="authorization"
                required
              />
            </div>
          </div>

          <div className="form-button">
            <input type="submit" value={"Submit"} className="submit-button" />
          </div>
        </form>
      </div>
    </div>
  );
}
