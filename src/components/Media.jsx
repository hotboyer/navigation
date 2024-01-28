import React from "react";
import instagram from "../icons/Instagram-Glyph-Color-Logo.wine.svg"
import facebook from "../icons/Facebook-Icon-9imsd.webp"
import twitter from "../icons/modern+media+social+twit+twitter+icon-1320185631857080135.svg"


function Media(){
    return <div className="FAQS">
    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="bing"><img src={instagram} width="34" height="34" alt="instagram" /></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="bing"><img src={facebook} width="24" height="24" alt="facebook" /></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="bing"><img src={twitter} width="24" height="24" alt="twitter" /></a></li>
      </ul>
    </div>
    </div>
}

export default Media;
