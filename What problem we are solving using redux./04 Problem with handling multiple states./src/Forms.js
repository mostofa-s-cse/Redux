import React from "react";

const Forms = () => {
  return (
    <div>
      <div className="card">
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" />
          <br />
          <label htmlFor="Email">Email:</label>
          <br />
          <input type="text" id="Email" name="Email" />
          <br />
          <label htmlFor="Password">Password:</label>
          <br />
          <input type="text" id="Password" name="Password" />
          <br />
          <br />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Forms;
