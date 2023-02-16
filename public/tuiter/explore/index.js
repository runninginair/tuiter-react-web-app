import NavigationSidebar from "../NavigationSidebar/index.js";

function exploreComponent() {
    $('#wd-explore').append(`

        <div class="row mt-2">
        
        <!-- comment out -->
        <!-- comment out 
            <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-warning"> -->
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">    
                <!--<h4>Navigation Sidebar</h4>-->
                ${NavigationSidebar()} 
            </div>


            <div class="col-10 col-lg-7 col-xl-6 bg-primary">
                <h4>ExploreComponent</h4>
            </div>


            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger">
                <h4>WhoToFollowList </h4>

            </div>


        </div>
        `);
}
$(exploreComponent);


// ${NavigationSidebar()} 
// 
// ${WhoToFollowListItem(who)}