import React, { useEffect } from 'react';
import style from './Home.module.css';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { isModalOpenChange, messageChange, resetError } from '../../redux/action';
import NotFound from '../NotFound/NotFound';

const Home = (props) => {

  // Estados y acciones globales
  // ----------------------------------------------------------------
  const isModalOpen = useSelector(state => state.isModalOpen);
  const message = useSelector(state => state.message);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  // Funciones locales
  // ----------------------------------------------------------------
  const openModal = () => { dispatch(isModalOpenChange(true)) };

  const closeModal = () => {
    dispatch(isModalOpenChange(false));
    dispatch(resetError());
    dispatch(messageChange(""));
  };

  // Mostrar al usuario si va algo mal con la aplicación
  useEffect(() => {
    if(error !== "" && error !== "Failed to fetch" && error !== "Network Error"){
      dispatch(messageChange(error));
      dispatch(isModalOpenChange(true));
      openModal();
    }
  }, [error]);

  return (
    <div className={style.home}>
      { error === "Failed to fetch" || error === "Network Error" ? (
        <NotFound />
        )
        : ( <Cards /> )
      }
      {/* Mostrar mensaje en Modal */}
      <div>
        {
          isModalOpen && (
            <div className={style.divModal}>
                <div className={style.divMessage}>
                    <h1>{message}</h1>
                <button onClick={closeModal} className={style.button} >Cerrar</button>
                </div>
            </div>
        )}
      </div>
    </div>
  )
};

export default Home;

