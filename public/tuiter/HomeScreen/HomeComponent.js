import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const HomeComponent = () => {
    return (`
    
        <!-- image with overlaid text -->
        <div class="flex-container-0 for_img">
            <a href="https://www.spacex.com/vehicles/starship/">
                <img src="../../images/Starship-Mk1-Day.jpg" class="img-fluid wd-mt-mb">        
            </a>
            <div class="bottom-left">
                <span class="fs-3"><b>SpaceX's Starship</b></span>
            </div>
        </div>

        ${PostSummaryList()}
    `);
}
export default HomeComponent;