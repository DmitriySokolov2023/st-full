import {useTitle} from "../../hooks/useTitle.ts";

const ErrorPage = () => {
    useTitle('Ошибка')
    return (
        <div>
            <h1>Такой страницы не сущ....</h1>
        </div>
    );
};

export default ErrorPage;