import {useTitle} from "../../hooks/useTitle.ts";
import Card from "../../components/card/Card.tsx";

const DessertsPage = () => {
    useTitle('Десерты')
    return (
        <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default DessertsPage;