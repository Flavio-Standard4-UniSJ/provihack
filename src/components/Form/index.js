import styles from './Form.module.css';

import { categories } from '../../components/Category';
import { useState } from 'react';

function Form(){
    const [ url, setUrl ] = useState('');
    const [ category, setCategory] = useState();
    const [ videos, setVideos] = useState([]);
    const [ errors, setErrors] = useState('');

    function valideUrl( url ){
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;
        if(!regex.test(url) || url.length < 43){
            setErrors("url inválida");
            return false;
        }else{
            return  url.substring(32,43); // pegar id do video
        }
    }
    function onSave(evento){
        evento.preventDefault();
        console.log(url, category);
          // validar category
          if(!category || category === '-'){
            setErrors("escolha uma categoria");
            return;
        }else{
            setErrors("");
        }
        // validar url 
        const urlVideo = valideUrl( url )

        if( urlVideo && category){
            // guardar a url e category
            const newVideo = { url, category };
            setVideos([...videos, newVideo]);
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));
            setUrl('');
            setCategory('');
        }else {
            setErrors('url inválida');
        }
    }

    return ( 
        <section className={ styles.container }>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={ onSave }>
                <div>
                    <lable>url do vídeo</lable>
                <input
                    type='text'
                    placeholder='digite a url do vídeo'
                    required='required'
                    value={ url }
                    onChange={ event => setUrl( event.target.value ) }
                    maxLength='43'
                    minLength='43'
                />
                </div>
                <div>
                    <label>categoria</label>
                    <select
                        value={ category }
                        onChange={ event => setCategory( event.target.value ) }
                    >
                        <option value='-'>selecione uma categoria</option>
                        { categories.map((item)=>{ return <option value={ item }>{ item }</option> })}
                    </select>
                </div>
                <div>
                    <button>cadastrar</button>
                </div>
                <div>{ errors }</div>
            </form>
        </section>
    );
}

export default Form;
