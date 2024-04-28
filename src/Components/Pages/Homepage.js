import { CreateCertificate } from "../Create/createCertificate";
import { Display } from "../Display/display";
import { Verify } from "../Verify/verify";

const Homepage = () => {
    return (
        <div>
            <CreateCertificate />
            <Display />
            <Verify />
        </div>
    )
}

export default Homepage;