import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [dogsList, setDogsList] = useState([]);
  const [imageError, setimageError] = useState(null);

  const listAllDogs = async () => {
    setDogsList([]);

    try {
      const { data: { message: dogsList } } = await axios.get('https://dog.ceo/api/breeds/list/all');

      Object.keys(dogsList).forEach(async (breed) => {
        try {
          const { data: { message: breedImage } } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)

          const breedItem = {
            breed, image: breedImage
          };

          setDogsList((lastListValue) => {
            return [...lastListValue, breedItem]
          });
        }
        catch (error) {
          console.log('Erro!');
          const { config: { url } } = await axios.get(`https://http.dog/${error.response.status}.jpg `);
          setimageError(url);
        }
      });
    }
    catch (error) {
      console.log('Erro!');
      console.error(error);
      const { config: { url } } = await axios.get(`https://http.dog/${error.response.status}.jpg `);
      setimageError(url);
    }

    // axios.get('https://dog.ceo/api/breeds/list/all')
    //   .then(({ data: { message: dogsList } }) => {
    //     Object.keys(dogsList).forEach((breed) => {
    //       axios.get(`https://dog.ceo/api/breed/${breed}/images/random3`)
    //         .then(({ data: { message: breedImage } }) => {
    //           const breedItem = {
    //             breed,
    //             image: breedImage,
    //           };
    //           setDogsList((lastListValue) => {
    //             return [
    //               ...lastListValue,
    //               breedItem,
    //             ]
    //           });
    //         })
    //         .catch((imageError) => {
    //           console.log('Erro na imagem!');
    //           console.error(imageError);
    //         });;
    //     });
    //   })
    //   .catch((listError) => {
    //     console.log('Erro na lista!');
    //     console.error(listError);
    //     alert(listError.message);
    //   });

    // window.fetch('https://dog.ceo/api/breeds/list/all')
    //   .then((data) => {
    //     data.json().then((apiReturn) => {
    //       const breedsList = Object.keys(apiReturn.message);
    //       breedsList.forEach((breed) => {
    //         window.fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then((imageData) => {
    //           imageData.json().then((imageReturn) => {
    //             const breedItem = {
    //               breed,
    //               image: imageReturn.message,
    //             };
    //             setDogsList(
    //               (lastListValue) => {
    //                 return [
    //                   ...lastListValue,
    //                   breedItem,
    //                 ]
    //               }
    //             );
    //           }
    //           );
    //         });
    //       });
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   });
  };

  useEffect(
    () => {
      listAllDogs();
    }, []
  );

  return (
    <div className="App">
      <h1>
        Lista de cachorros
      </h1>

      {
        imageError ? (
          <img src={imageError} alt='Error' className='image-error' />
        ) : (
          <div className='images-container'>
            {
              dogsList.map(
                (dog, index) => (
                  <div key={index}>
                    <p>
                      {dog.breed}
                    </p>
                    {
                      dog.image ? (
                        <img
                          src={dog.image}
                          alt={dog.image}
                        />
                      ) : (
                        <i>Não possui foto.</i>
                      )
                    }
                  </div>
                )
              )
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
