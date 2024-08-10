import './Homepage.css'
import { Image } from 'semantic-ui-react'
import ThreeColumns from "../../layouts/ThreeColumns.tsx";

function Homepage() {
    return (
        <main>
            <Image src='https://gourmet-leon.de/wp-content/uploads/2017/03/start_slidebild.jpg' fluid />

            <div className="container marketing">
                <ThreeColumns/>
            </div>
        </main>
    );
}

export default Homepage;