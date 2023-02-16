import Items from "./Items";

const NavigationItem = () => {

    return (`
            <a href="${Items.href}" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row">
                    <div class="col-2">
                        <i class="${Items.icon}"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> ${Items.title} </span>
                    </div>
                </div>
            </a>
    `);
}
export default NavigationItem;