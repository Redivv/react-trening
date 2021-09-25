import { useParams } from 'react-router-dom';

const Param = () => {
    const params = useParams();

    return <h1>{params.dupa}</h1>
}


export default Param;