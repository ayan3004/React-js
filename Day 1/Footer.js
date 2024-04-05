import React from 'react'

function Footer() {
  return (
    <footer>
    <div class="foot">
        <h3>CONTACT</h3>
        <h1>Let’s Work Together</h1>
        <h2>500 Terry Francine St. San Francisco, CA 94158<br/>

            info@mysite.com<br/>
            
            Tel: 123-456-7890</h2><br/>
    </div>
    <div id="foot">
        <form class="form">
            <label>Enter Your Name</label><br/><br/>
        <input type="text" name="" class="inpu"/><br/><br/>
        <label> Enter Your Email</label><br/><br/>
        <input type="email" name="" class="inpu"/><br/><br/>
        <lable>Enter Your Subject</lable><br/><br/>
        <input type="text" class="inpu"/><br/><br/>
        <label>Massage</label><br/><br/>
        <input type="text" class="input"/><br/><br/>
   
         </form>
         <button class="submit">Submit</button>
        </div>
</footer>
  )
}

export default Footer