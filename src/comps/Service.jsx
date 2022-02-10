import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MotorcycleRoundedIcon from '@material-ui/icons/MotorcycleRounded';
import { orange } from '@material-ui/core/colors';
import '../App.css';

const Service = () => {
    return(
        <section className="services">
            <div>
                <RestaurantMenuIcon 
                    style={{ fontSize: 50, color: orange[500] }} />
                <h3>No minimum order</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <LocationOnIcon 
                    style={{ fontSize: 50, color: orange[500] }} />
                <h3>Live tracking</h3>
                <p>Donec ut mi imperdiet, vulputate enim vel, ornare urna.</p>
            </div>
            <div>
                <MotorcycleRoundedIcon 
                    style={{ fontSize: 50, color: orange[500] }} />
                <h3>Fast delivery</h3>
                <p>Suspendisse neque felis, posuere nec blandit vitae, ultricies pulvinar magna.</p>
            </div>
        </section>
    )
}

export default Service;