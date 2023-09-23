import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTendencias } from "../redux/tendenciasSlice";

const Favoritos = () => {
    const dispatch = useDispatch();
    const tendencias = useSelector((state) => state.tendencias.data);
    const loading = useSelector((state) => state.tendencias.loading);

    useEffect(() => {
        dispatch(getTendencias('movie')); 
    }, [dispatch]);

    if (loading) {
        return <p>Cargando...</p>;
    }

  return (
    <div>
      hola
    </div>
  )
}

export default Favoritos
