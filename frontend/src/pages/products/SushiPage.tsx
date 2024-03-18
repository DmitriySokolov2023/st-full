import {useTitle} from "../../hooks/useTitle.ts";

const SushiPage = () => {
    useTitle('Суши')
    return (
        <div>
            <h1>Суши</h1>
        </div>
    );
};

export default SushiPage;